import React, { useState } from "react";

const WhatsAppButton: React.FC = () => {
  const [text, setText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "59175274039";

  const handleSend = () => {
    // Si no hay texto, abre WhatsApp normal, sino lo codifica.
    const url = text.trim()
      ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text.trim())}`
      : `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      className="fixed bottom-24 right-4 md:bottom-24 md:right-8 z-50 flex items-center gap-2 group mb-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Target input container */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden flex items-center bg-slate-800 border-slate-700 rounded-lg shadow-lg ${
          isHovered || text.length > 0
            ? "w-64 opacity-100 border p-2"
            : "w-0 opacity-0 border-0 p-0"
        }`}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu mensaje..."
          className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-slate-400"
        />
        <button
          onClick={handleSend}
          className="ml-2 text-green-500 hover:text-green-400 transition-colors"
          disabled={!text}
        >
          <svg
            className="w-5 h-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

      {/* Button */}
      <button
        onClick={handleSend}
        className="p-4 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg transition-all hover:scale-110 flex-shrink-0"
        aria-label="Abrir WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
