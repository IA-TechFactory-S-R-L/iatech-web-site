import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">IATECH</h3>
            <p className="text-slate-400 max-w-sm">
              IA TECHFACTORY S.R.L.<br/>
              Infraestructura Operativa Total. Fusionando el futuro digital con la realidad física.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-indigo-400">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-indigo-400">Compliance Bancario</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Social</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-400 flex items-center gap-2">LinkedIn <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
              <li><a href="#" className="hover:text-indigo-400">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} IA TECHFACTORY S.R.L. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="text-slate-700 text-xs">Santa Cruz de la Sierra, Bolivia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;