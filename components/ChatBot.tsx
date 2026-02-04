import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../types";

const N8N_WEBHOOK =
  "https://rolanrdcv85.app.n8n.cloud/webhook/33c53624-ef35-4d7f-b9f9-6d678b64c166/chat";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hola, soy el asistente virtual de IATECH. ¿En qué puedo ayudarte?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const sendMessageToN8n = async (message: string) => {
    const res = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        history: messages.map((m) => ({
          role: m.role,
          text: m.text,
        })),
      }),
    });

    if (!res.ok) {
      throw new Error("Error en webhook n8n");
    }

    return res.json();
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const data = await sendMessageToN8n(userMsg);

      const botReply =
        data.reply ||
        data.message ||
        data.output ||
        "No se recibió respuesta del servidor";

      setMessages((prev) => [...prev, { role: "model", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Lo siento, hubo un problema de conexión con el asistente.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 p-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full shadow-lg transition-all hover:scale-110 group"
          aria-label="Abrir chat de soporte"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[90%] md:w-full max-w-sm h-[500px] glass-high rounded-2xl flex flex-col shadow-2xl border border-slate-700 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-900/50 p-4 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-bold">IATECH Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 text-sm ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex gap-2 items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="text-xs text-cyan-200">Analizando...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-900/50 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu consulta..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-indigo-500 placeholder-slate-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-lg disabled:opacity-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
           
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;