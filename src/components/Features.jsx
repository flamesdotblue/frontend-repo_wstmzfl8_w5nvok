import React from 'react';
import { Camera, Video, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '10‑Minute Reels',
    desc: 'Record, edit, and deliver in a single visit with our accelerated post‑production pipeline.',
  },
  {
    icon: Camera,
    title: 'Studio‑Grade Stills',
    desc: 'Crisp, color‑accurate photography with pro light shaping and calibrated cameras.',
  },
  {
    icon: Video,
    title: 'Cinematic Lighting',
    desc: 'Dynamic lighting setups tuned for short‑form video and portrait perfection.',
  },
  {
    icon: Sparkles,
    title: 'AI Touch‑ups',
    desc: 'Subtle skin retouching and tone matching that keeps everything natural and real.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Designed for speed and style</h2>
          <p className="mt-3 text-white/70">
            Every detail of FlashShoot is optimized to get you in front of the lens and out the door with stunning results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur transition hover:from-white/10 hover:to-white/5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
