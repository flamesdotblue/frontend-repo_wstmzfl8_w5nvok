import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <Pricing />
      <Team />

      <footer className="border-t border-white/10 bg-black py-10 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} FlashShoot — Futuristic Photography Studio</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#team" className="hover:text-white">Team</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
