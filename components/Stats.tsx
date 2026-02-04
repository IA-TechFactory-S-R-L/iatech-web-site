import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Tiempo de Actividad', value: '99.9%', desc: 'SLA Garantizado' },
            { label: 'Transacciones/Mes', value: '+5M', desc: 'Procesamiento Seguro' },
            { label: 'Dispositivos Activos', value: '12k', desc: 'IoT Soundboxes' },
            { label: 'Empresas Integradas', value: '+85', desc: 'Corp & Retail' }
          ].map((stat, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div className="text-center p-6 border border-slate-800/50 rounded-2xl bg-slate-800/20 hover:bg-slate-800/40 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.desc}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;