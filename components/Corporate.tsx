import React from 'react';

const Corporate: React.FC = () => {
  return (
    <section id="corporate" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Integridad Operativa & Compliance</h2>
        
        <div className="glass p-8 rounded-2xl text-left space-y-6">
          <div className="flex items-start gap-4">
             <div className="p-2 bg-yellow-500/10 rounded text-yellow-500 mt-1">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
             </div>
             <div>
               <h3 className="text-xl font-bold text-slate-200">Aviso Legal Importante</h3>
               <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                 IATECH (IA TECHFACTORY S.R.L.) actúa exclusivamente como un <span className="text-white font-semibold">Integrador Tecnológico</span>. 
                 No somos una Entidad de Intermediación Financiera (Banco) ni una Entidad de Certificación Digital. 
                 Nuestra tecnología funciona como puente (Middleware) seguro entre la operación física de su empresa y las instituciones reguladas correspondientes.
               </p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-700">
            <div>
              <h4 className="text-white font-bold mb-2">Para Gerentes de IT</h4>
              <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
                <li>APIs RESTful/GraphQL documentadas.</li>
                <li>SLA de 99.9% en servicios nube.</li>
                <li>Encriptación End-to-End.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Para Operaciones</h4>
              <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
                <li>Dashboard de monitoreo en tiempo real.</li>
                <li>Soporte técnico on-site en Santa Cruz.</li>
                <li>Reportes automatizados de conciliación.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;
