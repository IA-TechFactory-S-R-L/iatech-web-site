import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          
          {/* Tag - Made subtler per request */}
          <div className="inline-block px-3 py-1 rounded border border-cyan-500/20 bg-cyan-900/5 text-cyan-500/80 text-[10px] tracking-[0.2em] font-mono mb-2 uppercase backdrop-blur-sm">
            Infraestructura Operativa V3.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Infraestructura <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Operativa Total
            </span>
          </h1>
          
          {/* Description - Highlighted keywords for scanning */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Fusionamos el <span className="text-slate-200 font-semibold">mundo físico</span> (Hardware y Logística) con el <span className="text-slate-200 font-semibold">digital</span> (Software e Inteligencia Artificial) para automatizar el flujo operativo de tu empresa.
          </p>
          
          {/* Buttons - Clear hierarchy (Solid vs Outline) */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-bold transition-all shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.6)] flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-1"
            >
              Hablar con un Experto
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a 
              href="#soundbox" 
              onClick={(e) => scrollToSection(e, 'soundbox')}
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-medium transition-all flex items-center justify-center cursor-pointer hover:-translate-y-1 backdrop-blur-sm"
            >
              Ver Soundbox
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
            
            {/* Orbital Rings */}
            <div className="absolute inset-[-60px] border border-indigo-500/5 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-[-40px] border border-indigo-500/10 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}></div>
            <div className="absolute inset-[-20px] border border-cyan-500/20 rounded-full animate-spin-reverse-slow"></div>

            {/* Floating Particles */}
            <div className="absolute -top-12 right-0 w-3 h-3 bg-cyan-400 rounded-full animate-float-delayed blur-[1px] opacity-80"></div>
            <div className="absolute top-1/2 -left-16 w-2 h-2 bg-indigo-400 rounded-full animate-float blur-[1px] opacity-60" style={{ animationDuration: '4s' }}></div>
            <div className="absolute -bottom-10 left-10 w-4 h-4 bg-purple-500 rounded-full animate-float-reverse blur-[2px] opacity-50"></div>
            <div className="absolute bottom-20 -right-12 w-2 h-2 bg-white rounded-full animate-pulse-slow opacity-80"></div>

            {/* Abstract Soundbox Representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.15)] flex items-center justify-center z-10 group overflow-hidden">
               {/* Inner Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-cyan-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
               
               <div className="absolute inset-2 border border-white/5 rounded-2xl"></div>
               
               {/* Center Grid */}
               <div className="grid grid-cols-3 gap-3 p-6 z-20">
                 {[...Array(9)].map((_, i) => (
                   <div key={i} className={`w-3 h-3 rounded-full transition-all duration-500 ${i === 4 ? 'bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'bg-slate-600 group-hover:bg-slate-500'}`}></div>
                 ))}
               </div>
               
               {/* Sound Waves */}
               <div className="absolute -right-12 top-1/2 w-24 h-24 border-r-2 border-indigo-500/30 rounded-full"></div>
               <div className="absolute -right-8 top-1/2 w-16 h-16 border-r-2 border-indigo-500/60 rounded-full"></div>
               
               {/* Scanning Line Effect */}
               <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/30 blur-[1px] animate-[float_4s_ease-in-out_infinite] opacity-30"></div>
            </div>

            {/* Connecting Lines */}
            <div className="absolute -bottom-10 -left-10 w-40 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="absolute -top-5 right-20 w-[1px] h-20 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;