import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Soundbox: React.FC = () => {
  return (
    <section id="soundbox" className="py-24 bg-gradient-to-b from-slate-900 to-midnight relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-indigo-900/10 skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Content */}
        <div className="lg:w-1/2 space-y-8 z-10">
          <RevealOnScroll>
            <div className="inline-block px-3 py-1 rounded border border-indigo-500 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">
              Hardware Propietario
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              IATECH Soundbox
            </h2>
            <p className="text-xl text-slate-300 font-light mt-4">
              Evita fraudes QR y agiliza tu caja con confirmación auditiva instantánea.
            </p>
          </RevealOnScroll>
          
          <ul className="space-y-4 mt-8">
            {[
              "Conciliación automática con tu ERP.",
              "Conectividad 4G/LTE autónoma.",
              "Batería de larga duración para retail.",
              "Anti-fraude: Solo suena si el dinero ingresó."
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100 + 300}>
                <li className="flex items-start gap-3 text-slate-400">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              </RevealOnScroll>
            ))}
          </ul>

          <RevealOnScroll delay={600}>
            <div className="pt-6">
              <button className="px-8 py-3 bg-white text-midnight font-bold rounded hover:bg-slate-200 transition-colors">
                Solicitar Demo Física
              </button>
              <p className="mt-4 text-xs text-slate-500">
                *IATECH es un proveedor tecnológico. El procesamiento de pagos depende de la entidad financiera integrada.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Mockup */}
        <div className="lg:w-1/2 flex justify-center z-10">
          <RevealOnScroll delay={200}>
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] bg-slate-800 rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(99,102,241,0.15)]">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-midnight rounded-3xl border border-slate-700 relative flex flex-col items-center justify-between p-8 shadow-2xl">
                {/* Speaker Grille */}
                <div className="w-full h-32 bg-slate-800 rounded-xl grid grid-cols-12 gap-1 p-2">
                  {[...Array(48)].map((_,i) => <div key={i} className="bg-slate-900 rounded-full w-full h-full"></div>)}
                </div>
                {/* Screen */}
                <div className="w-full h-24 bg-black rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                  <div className="text-cyan-400 font-mono text-2xl font-bold relative z-10">
                    Bs. 150.00
                  </div>
                   <div className="absolute inset-0 bg-cyan-500/10 animate-pulse"></div>
                </div>
                {/* Branding */}
                <div className="text-slate-600 font-bold tracking-widest text-xs">IATECH SERIES X</div>
              </div>
              
              {/* Abstract Sound Waves */}
              <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Soundbox;