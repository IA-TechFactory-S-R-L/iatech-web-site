import React, { useState } from 'react';
import { USE_CASES_DATA } from '../constants';

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(USE_CASES_DATA[0].id);

  const activeData = USE_CASES_DATA.find(d => d.id === activeTab);

  return (
    <section id="use-cases" className="py-24 bg-midnight">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Soluciones por Industria</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:w-1/4 pb-4 md:pb-0">
            {USE_CASES_DATA.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-4 rounded-lg text-left transition-all whitespace-nowrap ${
                  activeTab === item.id 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="flex-1 glass p-8 md:p-12 rounded-2xl min-h-[300px] flex flex-col justify-center animate-fade-in">
            {activeData && (
              <>
                <h3 className="text-3xl font-bold text-white mb-4">{activeData.title}</h3>
                <p className="text-xl text-slate-300 mb-8">{activeData.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeData.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded border border-slate-700">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
