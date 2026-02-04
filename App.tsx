import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import About from './components/About';
import Ecosystem from './components/Ecosystem';
import Soundbox from './components/Soundbox';
import Stats from './components/Stats';
import Corporate from './components/Corporate';
import UseCases from './components/UseCases';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import VoiceAgent from './components/VoiceAgent';

const App: React.FC = () => {
  return (
    <div className="bg-midnight min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <About />
        <Ecosystem />
        <Stats />
        <Soundbox />
        <Corporate />
        <UseCases />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating Action Buttons / AI Tools */}
      <ChatBot />
      <VoiceAgent />
    </div>
  );
};

export default App;