import React from 'react';

const LOGOS = [
  { name: 'TechBank', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
  { name: 'RetailNet', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
  { name: 'SecurePay', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { name: 'CloudOps', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { name: 'GlobalLogistics', icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
  { name: 'SmartCity', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
];

const LogoTicker: React.FC = () => {
  return (
    <div className="w-full bg-slate-900/50 border-y border-slate-800 py-10 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-midnight to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-midnight to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
         <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Confianza Operativa en Industrias Clave</p>
      </div>

      <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
          <div key={idx} className="flex-1 min-w-[200px] flex items-center justify-center group cursor-default">
            <div className="flex items-center space-x-3 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-indigo-500/20 group-hover:text-indigo-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={logo.icon} />
                  </svg>
               </div>
               <span className="font-bold text-lg text-slate-300">{logo.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;