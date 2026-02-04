import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { createBlob, decode, decodeAudioData } from '../services/audioUtils';
import { SYSTEM_INSTRUCTION_TEXT } from '../constants';
import { VoiceState } from '../types';

const VoiceAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<VoiceState>(VoiceState.IDLE);
  const [volume, setVolume] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Audio Context Refs
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionRef = useRef<any>(null);

  // VAD Refs
  const lastSpeechTimeRef = useRef<number>(0);
  const isSpeechDetectedRef = useRef<boolean>(false);

  // Animation frame for volume visualizer
  const visualizerRef = useRef<number>(0);

  const cleanup = () => {
    // Stop all sources
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch(e) {}
    });
    sourcesRef.current.clear();

    // Close session
    if (sessionRef.current) {
      try { sessionRef.current.close(); } catch(e) {}
      sessionRef.current = null;
    }

    // Close contexts
    try { inputAudioContextRef.current?.close(); } catch(e) {}
    try { outputAudioContextRef.current?.close(); } catch(e) {}
    inputAudioContextRef.current = null;
    outputAudioContextRef.current = null;
    
    setState(VoiceState.IDLE);
    setIsProcessing(false);
    if(visualizerRef.current) cancelAnimationFrame(visualizerRef.current);
    setVolume(0);
  };

  const startSession = async () => {
    setState(VoiceState.CONNECTING);
    setIsProcessing(false);
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API Key missing");

      const ai = new GoogleGenAI({ apiKey });
      
      // Setup Audio Contexts
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      inputAudioContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      outputAudioContextRef.current = new AudioContextClass({ sampleRate: 24000 });
      
      const outputNode = outputAudioContextRef.current.createGain();
      outputNode.connect(outputAudioContextRef.current.destination);
      nextStartTimeRef.current = 0;

      // Microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = inputAudioContextRef.current.createMediaStreamSource(stream);
      const processor = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
      
      // Volume Visualizer logic (simplified)
      const analyzer = inputAudioContextRef.current.createAnalyser();
      source.connect(analyzer);
      const dataArray = new Uint8Array(analyzer.frequencyBinCount);
      
      const updateVolume = () => {
        if (!isOpen) return;
        analyzer.getByteFrequencyData(dataArray);
        let sum = 0;
        for(let i=0; i<dataArray.length; i++) sum += dataArray[i];
        const avg = sum / dataArray.length;
        setVolume(avg);

        // Simple VAD Logic for "Thinking" State
        const now = Date.now();
        if (avg > 10) { // Threshold for speech
            lastSpeechTimeRef.current = now;
            isSpeechDetectedRef.current = true;
            setIsProcessing(false);
        } else {
            // Silence detected
            if (isSpeechDetectedRef.current && 
                (now - lastSpeechTimeRef.current > 1000) && // 1s silence
                state === VoiceState.LISTENING) {
                setIsProcessing(true);
            }
        }

        visualizerRef.current = requestAnimationFrame(updateVolume);
      };
      updateVolume();

      // Connect to Gemini Live
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          // Optimized instruction for natural voice interaction
          systemInstruction: SYSTEM_INSTRUCTION_TEXT + " MODO VOZ: Eres un Consultor Senior Ejecutivo en una llamada breve. Enfócate exclusivamente en ROI, estrategia y resultados de negocio. Sé implacablemente conciso (máximo 2 oraciones). Elimina saludos, muletillas y cortesías vacías.",
        },
        callbacks: {
          onopen: () => {
             // Protect against race condition where cleanup happened before onopen
             if (!inputAudioContextRef.current) return;

             setState(VoiceState.LISTENING);
             
             processor.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);
                const pcmBlob = createBlob(inputData);
                // Race condition protection: ensure session is ready
                sessionPromise.then(session => session.sendRealtimeInput({ media: pcmBlob }));
             };
             
             source.connect(processor);
             processor.connect(inputAudioContextRef.current.destination);
          },
          onmessage: async (msg: LiveServerMessage) => {
            const audioStr = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioStr && outputAudioContextRef.current) {
              setState(VoiceState.SPEAKING);
              setIsProcessing(false); // Clear processing state when audio arrives
              isSpeechDetectedRef.current = false; // Reset VAD for next turn
              
              // Ensure consistent playback timing
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContextRef.current.currentTime);
              
              const audioBuffer = await decodeAudioData(
                decode(audioStr),
                outputAudioContextRef.current,
                24000,
                1
              );
              
              const src = outputAudioContextRef.current.createBufferSource();
              src.buffer = audioBuffer;
              src.connect(outputNode);
              src.onended = () => {
                sourcesRef.current.delete(src);
                if (sourcesRef.current.size === 0) {
                    setState(VoiceState.LISTENING);
                    lastSpeechTimeRef.current = Date.now(); // Reset silence timer
                }
              };
              
              src.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(src);
            }
          },
          onclose: () => {
            console.log("Session closed");
            cleanup();
          },
          onerror: (err) => {
             console.error(err);
             setState(VoiceState.ERROR);
             cleanup();
          }
        }
      });
      
      sessionRef.current = await sessionPromise;

    } catch (e) {
      console.error(e);
      setState(VoiceState.ERROR);
      // Don't fully cleanup here, let user see error state
    }
  };

  useEffect(() => {
    return () => cleanup();
  }, []);

  if (!isOpen) {
    return (
      <button 
        onClick={() => { setIsOpen(true); startSession(); }}
        className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-500 transition-all hover:scale-110 flex items-center justify-center group scale-90 md:scale-100"
        title="Consultor IA"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
        </span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 w-[90%] md:w-72 glass-high rounded-2xl overflow-hidden shadow-2xl border border-indigo-500/50 flex flex-col items-center p-6 animate-fade-in">
       <div className="w-full flex justify-between items-center mb-6">
         <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Consultor IA</span>
         <button onClick={() => { setIsOpen(false); cleanup(); }} className="text-slate-500 hover:text-white">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
         </button>
       </div>

       {/* Visualizer Circle */}
       <div className="relative w-32 h-32 flex items-center justify-center mb-6">
          <div 
             className={`absolute inset-0 rounded-full bg-indigo-500/20 transition-all duration-100 ease-out`}
             style={{ transform: `scale(${1 + volume/50})` }}
          ></div>
          <div 
             className={`absolute inset-2 rounded-full border-2 ${isProcessing ? 'border-cyan-400 animate-pulse' : 'border-indigo-400'} transition-all duration-75`}
             style={{ 
               transform: `scale(${1 + volume/100})`, 
               opacity: state === VoiceState.SPEAKING ? 1 : 0.5,
               borderColor: isProcessing ? '#22D3EE' : '#818CF8'
             }}
          ></div>
          <div className="z-10 text-white">
            {state === VoiceState.CONNECTING && <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full"></div>}
            
            {state === VoiceState.LISTENING && !isProcessing && (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            )}
            
            {state === VoiceState.LISTENING && isProcessing && (
                <div className="flex space-x-1 items-center h-8">
                     <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                     <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                     <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            )}

            {state === VoiceState.SPEAKING && <svg className="w-8 h-8 animate-pulse text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>}
            
            {state === VoiceState.ERROR && <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
          </div>
       </div>

       <div className="text-center">
         <p className={`font-medium mb-1 ${isProcessing ? 'text-cyan-400 animate-pulse' : 'text-white'}`}>
            {state === VoiceState.CONNECTING ? 'Conectando...' : 
             state === VoiceState.SPEAKING ? 'IATECH hablando...' : 
             state === VoiceState.ERROR ? 'Error de conexión' : 
             isProcessing ? 'Analizando...' : 'Escuchando...'}
         </p>
         <p className="text-xs text-slate-400">
             {state === VoiceState.ERROR ? 'Verifica micrófono/API Key' : 
              isProcessing ? 'Procesando estrategia...' :
              state === VoiceState.SPEAKING ? 'Escucha la recomendación' :
              'Consulta sobre IA o Soundbox.'}
         </p>
       </div>
    </div>
  );
};

export default VoiceAgent;