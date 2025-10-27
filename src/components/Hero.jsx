import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-xs/relaxed text-white/80">Futuristic studio, real-time edits</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          FlashShoot
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          A next‑gen photography studio where creativity meets speed. Walk in, shoot, and get a cinematic reel in just 10 minutes — fully edited.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            Book a Session
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore Features
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-4">
          {[
            ['10m Reels', 'Edited & delivered'],
            ['4K Stills', 'Studio-grade'],
            ['Pro Lighting', 'Cinematic look'],
            ['AI Touch-ups', 'Natural & clean'],
          ].map(([title, subtitle]) => (
            <div key={title} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left backdrop-blur">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-white/70">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
