import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION_TEXT } from "../constants";

// Initialize Gemini Client
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) throw new Error("API Key not found");
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<string> => {
  try {
    const ai = getClient();
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview', // High reasoning for corporate strategy
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_TEXT,
        temperature: 0.3, // Low temperature for precise, business-oriented responses
        topK: 40,
        topP: 0.95,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: newMessage
    });
    
    return result.text || "Disculpa, hubo una interrupción en el análisis. ¿Podrías reformular?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Estamos experimentando una alta demanda en nuestros servidores de inferencia. Por favor intenta en unos segundos.";
  }
};

export const getLocationFromGemini = async (
  userQuery: string,
  userLocation?: { latitude: number; longitude: number }
): Promise<{ text: string; chunks?: any }> => {
  try {
    const ai = getClient();
    // Maps grounding is only supported in Gemini 2.5 series
    const model = 'gemini-2.5-flash'; 
    
    const config: any = {
      tools: [{ googleMaps: {} }],
      systemInstruction: "Eres un asistente logístico. Proporciona ubicaciones precisas y tiempos estimados."
    };

    if (userLocation) {
        config.toolConfig = {
            retrievalConfig: {
                latLng: userLocation
            }
        };
    }

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: config
    });

    return {
      text: response.text || "No pude localizar la información solicitada en el mapa.",
      chunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks
    };
  } catch (error) {
    console.error("Maps Grounding Error:", error);
    return { text: "Error de conexión con el servicio de geolocalización." };
  }
};