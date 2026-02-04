import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Philosophy */}
        <RevealOnScroll>
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Arquitectura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Inteligencia Operativa</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              IATECH nace para cerrar la brecha entre el átomo y el bit. No vemos la Inteligencia Artificial como un accesorio, 
              sino como el <span className="text-white font-semibold">sistema nervioso central</span> que orquesta hardware, 
              logística y software en una sinfonía de eficiencia.
            </p>
          </div>
        </RevealOnScroll>

        {/* Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <RevealOnScroll delay={100}>
            <div className="h-full glass p-8 rounded-2xl border-t border-indigo-500/50 hover:bg-slate-800/50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Visión y Estrategia</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enfoque obsesivo en el <span className="text-indigo-300">Retorno de Inversión (ROI)</span> y la escalabilidad. 
                No implementamos tecnología por moda, sino para impactar directamente en el estado de resultados.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="h-full glass p-8 rounded-2xl border-t border-cyan-500/50 hover:bg-slate-800/50 transition-colors group">
              <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excelencia Operativa</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dominamos el mundo físico. Integramos hardware IoT y procesos logísticos complejos con una precisión quirúrgica, 
                eliminando la fricción humana en tareas repetitivas.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="h-full glass p-8 rounded-2xl border-t border-purple-500/50 hover:bg-slate-800/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovación Aplicada</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Desarrollo de productos basados en <span className="text-purple-300">Modelos de Lenguaje (LLMs)</span> que resuelven 
                problemas reales de comunicación y análisis, no ejercicios teóricos.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Differentiator */}
        <RevealOnScroll delay={400}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700 text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">El Diferencial IATECH</h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              No somos una agencia de software tradicional ni un vendedor de hardware. Somos especialistas en crear 
              <span className="text-cyan-400 font-bold"> ecosistemas tecnológicos unificados</span> donde la IA 
              optimiza cada eslabón de la cadena de valor, desde el almacén hasta la atención al cliente.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;