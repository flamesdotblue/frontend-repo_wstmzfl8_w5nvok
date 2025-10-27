import React from 'react';
import { Users } from 'lucide-react';

const people = [
  {
    name: 'Nova Reyes',
    role: 'Creative Director',
    bio: 'Leads concept to camera with a minimalist, modern aesthetic.',
    initials: 'NR',
  },
  {
    name: 'Kai Morgan',
    role: 'Lead Photographer',
    bio: 'Studio lighting expert crafting cinematic portraits and product shots.',
    initials: 'KM',
  },
  {
    name: 'Ari Chen',
    role: 'Video Editor',
    bio: 'Cuts, grades, and delivers reels in minutes with buttery smooth pacing.',
    initials: 'AC',
  },
];

const Team = () => {
  return (
    <section id="team" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <Users className="h-4 w-4" />
            <span className="text-xs text-white/80">The Crew</span>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">Meet the team</h2>
          <p className="mt-3 text-white/70">
            A tight, senior crew that moves fast without compromising on craft.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-lg font-bold">
                  {p.initials}
                </div>
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-white/70">{p.role}</p>
                </div>
              </div>
              <p className="text-sm text-white/80">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
