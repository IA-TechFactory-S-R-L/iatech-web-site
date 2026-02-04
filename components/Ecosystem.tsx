import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">El Ecosistema IATECH</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nuestra propuesta de valor se divide en dos pilares fundamentales: Productos de alta tecnología y Servicios de consultoría estratégica.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FACTORY Pillar */}
          <div className="space-y-8">
            <RevealOnScroll delay={100}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">FACTORY <span className="text-xs font-normal text-slate-500 ml-2">PRODUCTOS</span></h3>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="glass p-6 rounded-xl hover:bg-white/10 transition-colors border-l-4 border-indigo-500">
                <h4 className="text-xl font-bold text-indigo-300 mb-2">Soundbox IoT</h4>
                <p className="text-slate-400 text-sm">Hardware propietario para validación de pagos en tiempo real. Confirmación auditiva y visual instantánea.</p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <div className="glass p-6 rounded-xl hover:bg-white/10 transition-colors border-l-4 border-indigo-500">
                <h4 className="text-xl font-bold text-indigo-300 mb-2">AI Agents</h4>
                <p className="text-slate-400 text-sm">Agentes conversacionales que se integran a tu CRM para automatizar ventas y soporte L1.</p>
              </div>
            </RevealOnScroll>
          </div>

          {/* CONSULTING Pillar */}
          <div className="space-y-8">
             <RevealOnScroll delay={100}>
               <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">CONSULTING <span className="text-xs font-normal text-slate-500 ml-2">SERVICIOS</span></h3>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="glass p-6 rounded-xl hover:bg-white/10 transition-colors border-l-4 border-cyan-500">
                <h4 className="text-xl font-bold text-cyan-300 mb-2">Integración de Sistemas</h4>
                <p className="text-slate-400 text-sm">Conectamos tus sistemas legados (ERP, Core Bancario) con nuevas tecnologías vía APIs seguras.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="glass p-6 rounded-xl hover:bg-white/10 transition-colors border-l-4 border-cyan-500">
                <h4 className="text-xl font-bold text-cyan-300 mb-2">Logística Operativa</h4>
                <p className="text-slate-400 text-sm">Consultoría para optimización de cadenas de suministro y despliegue de hardware en campo.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;