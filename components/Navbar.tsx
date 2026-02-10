import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, APP_NAME } from '../constants';

const IatechLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-1 select-none ${className}`}>
    
    
    {/* Texto Principal: IATECH unido */}
    <div className="relative flex items-center">
      <span className="text-3xl font-extrabold tracking-tighter text-white leading-none">
        IA<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">TECH</span>
      </span>
    </div>

    {/* Texto Secundario: S.R.L. pequeño y alineado abajo */}
    <span className="self-end mb-[2px] text-[0.65rem] font-bold tracking-widest text-slate-500 border-l border-slate-700 pl-2 ml-1">
      S.R.L.
    </span>
  </div>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
      
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-high py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer group" onClick={(e) => handleNavClick(e as any, '#hero')}>
           <IatechLogo className="h-10 w-auto group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide uppercase cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold transition-all shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 cursor-pointer"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-high absolute w-full top-full left-0 border-t border-slate-700">
          <div className="flex flex-col p-4 space-y-4">
             {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-300 hover:text-cyan-400 font-medium block cursor-pointer"
              >
                {item.label}
              </a>
            ))}
             <a 
               href="#contact" 
               onClick={(e) => handleNavClick(e, '#contact')}
               className="text-indigo-400 font-bold block cursor-pointer"
             >
              Hablar con Ventas
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;