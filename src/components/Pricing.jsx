import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Quick Reel',
    price: '$99',
    period: 'per session',
    highlight: '10‑minute edited reel',
    features: [
      '15–30s vertical reel',
      '1 lighting setup',
      'Basic color grade',
      'Delivery in 10 minutes',
    ],
    cta: 'Book Quick Reel',
    popular: true,
  },
  {
    name: 'Studio Shoot',
    price: '$249',
    period: 'per hour',
    highlight: 'Portraits + reel combo',
    features: [
      '30 edited stills',
      '2 lighting looks',
      '60s vertical reel',
      'Same‑day delivery',
    ],
    cta: 'Book Studio Shoot',
    popular: false,
  },
  {
    name: 'Brand Pack',
    price: '$699',
    period: 'half‑day',
    highlight: 'Team content day',
    features: [
      '100 edited stills',
      '3 reels (15–60s)',
      'Creative direction',
      'Priority turnaround',
    ],
    cta: 'Book Brand Pack',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Transparent pricing</h2>
          <p className="mt-3 text-white/70">Pick a package and we’ll handle the rest. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border border-white/10 p-6 backdrop-blur ${
                tier.popular ? 'bg-white/10 ring-1 ring-white/20' : 'bg-white/[0.06]'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-1 text-sm text-white/70">{tier.highlight}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-sm text-white/70">{tier.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-emerald-400" />
                    <span className="text-white/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-medium text-black transition hover:bg-white/90"
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
