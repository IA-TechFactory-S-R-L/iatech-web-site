import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">Inicia la Transformación Operativa</h2>
              <p className="text-slate-400 text-lg">
                ¿Listo para integrar hardware y software en una sola infraestructura? 
                Nuestros ingenieros de soluciones están listos para diseñar tu arquitectura.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-center space-x-4 p-4 glass rounded-xl">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Ventas Corporativas</h4>
                    <p className="text-slate-400">ventas@iatech.bo</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 glass rounded-xl">
                  <div className="w-12 h-12 bg-cyan-600/20 rounded-full flex items-center justify-center text-cyan-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Asistente de Voz IA</h4>
                    <p className="text-slate-400">Disponible 24/7 en esta web</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="glass-high p-8 rounded-2xl border border-slate-700 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Nombre</label>
                    <input required type="text" className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Empresa</label>
                    <input required type="text" className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tech S.R.L." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Corporativo</label>
                  <input required type="email" className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="juan@empresa.com" />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Interés Principal</label>
                   <select className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors">
                     <option>Soundbox IoT</option>
                     <option>Integración de Sistemas</option>
                     <option>Consultoría Logística</option>
                     <option>Otros</option>
                   </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Mensaje</label>
                  <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Detalles del proyecto..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status !== 'idle'}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 ${
                    status === 'success' ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-500 shadow-[0_4px_20px_rgba(99,102,241,0.4)]'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      Enviar Solicitud
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Mensaje Enviado
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ContactSection;