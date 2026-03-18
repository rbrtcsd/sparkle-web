'use client';

import { useState } from 'react';
import Image from 'next/image';

type Model = {
  name: string;
  image: string;
  sizes?: string;
  features?: string[];
  slug?: string;
};

type Category = {
  title: string;
  models: Model[];
};

const shellCategories: Category[] = [
  {
    title: 'Rectangular / Classic',
    models: [
      { name: 'Apollo 14', image: '/images/shells/apollo-14.jpg', sizes: '14\' x 30\'', features: ['Tanning ledge', 'Swim-up seating', 'Auto cover ready'], slug: 'apollo-14' },
      { name: 'Ariel 16', image: '/images/shells/ariel-16.jpg', sizes: '16\' x 40\'', features: ['Tanning ledge', 'Swim-up seating', 'Auto cover ready'], slug: 'ariel-16' },
      { name: 'Astoria', image: '/images/shells/astoria.jpg', sizes: 'Available in 12\', 14\', 16\'', features: ['Built-in spa option', 'Tanning ledge', 'Swim-up seating'], slug: 'astoria-14' },
      { name: 'Cape Cod', image: '/images/shells/cape-cod.jpg', sizes: 'Available in 12\', 14\', 16\'', features: ['Swim-up seating', 'Auto cover ready'], slug: 'cape-cod-14' },
      { name: 'Corinthian', image: '/images/shells/corinthian.jpg', sizes: 'Available in 12\', 14\', 16\'', features: ['Tanning ledge', 'Swim-up seating', 'Auto cover ready'], slug: 'corinthian-14' },
      { name: 'Monaco', image: '/images/shells/monaco.jpg', sizes: '14\' x 32\'', features: ['Swim-up seating', 'Full-length bench'], slug: 'monaco' },
      { name: 'Olympia', image: '/images/shells/olympia.jpg', sizes: 'Available in 12\', 14\', 16\'', features: ['Swim-up seating', 'Auto cover ready'], slug: 'olympia-14' },
      { name: 'Coral 16', image: '/images/shells/coral-16.jpg', sizes: '16\' x 36\'', features: ['Tanning ledge', 'Auto cover ready', 'Modern geometric'], slug: 'coral-16' },
    ],
  },
  {
    title: 'Freeform / Curved',
    models: [
      { name: 'Aruba', image: '/images/shells/aruba.jpg', sizes: '16\' x 35\'', features: ['Natural look', 'Multiple entry points'], slug: 'aruba' },
      { name: 'Barcelona', image: '/images/shells/barcelona.jpg', sizes: '16\' x 36\'', features: ['Swim-up seating', 'Wading area'], slug: 'barcelona' },
      { name: 'Bermuda', image: '/images/shells/bermuda.jpg', sizes: 'Available in 12\', 14\', 16\'', features: ['Swim-up seating', 'Deluxe models with spa'], slug: 'bermuda-14' },
      { name: 'Jamaica', image: '/images/shells/jamaica.jpg', sizes: 'Available in 10\', 12\', 14\'', features: ['Swim-up seating', 'Wading area', 'Multiple entry points'], slug: 'jamaica-14' },
      { name: 'Key West', image: '/images/shells/key-west.jpg', sizes: '16\' x 35\'', features: ['Beach entry', 'Swim-up seating'], slug: 'key-west' },
      { name: 'Synergy', image: '/images/shells/synergy.jpg', sizes: 'Standard & Grand', features: ['Multiple entry/exit points', 'Swim-up seating'], slug: 'synergy' },
      { name: 'Vista Isle', image: '/images/shells/vista-isle.jpg', sizes: '16\' x 38\'', features: ['Swim-up seating', 'Full-depth area'], slug: 'vista-isle' },
    ],
  },
  {
    title: 'Geometric',
    models: [
      { name: 'Athens', image: '/images/shells/athens.jpg', sizes: 'Available in 13x23\', 13x37\'', features: ['Auto cover ready', 'Swim-up seating', 'Multiple entry points'], slug: 'athens-13-23' },
      { name: 'Axiom', image: '/images/shells/axiom-14.jpg', sizes: 'Available in 12\', 14\', 16\'', features: ['Swim-up seating', 'Deluxe models with spa', 'Modern lines'], slug: 'axiom-14' },
      { name: 'Tuscan', image: '/images/shells/tuscan.jpg', sizes: '11x20\' to 14x40\'', features: ['Tanning ledge', 'Auto cover ready', '5 size options'], slug: 'tuscan-14-30' },
    ],
  },
  {
    title: 'Plunge Pools',
    models: [
      { name: 'Milan', image: '/images/shells/milan.jpg', sizes: '8x14\', 10x16\', 10x20\'', features: ['Auto cover ready', 'Swim-up seating', 'Compact footprint'], slug: 'milan-10-20' },
      { name: 'Enchantment', image: '/images/shells/enchantment.jpg', sizes: '9x17\', 9x21\', 9x24\'', features: ['Auto cover ready', 'Multiple entry points', 'Perfect for small yards'], slug: 'enchantment-9-21' },
    ],
  },
];

export default function ShellGrid() {
  const [selected, setSelected] = useState<Model | null>(null);

  return (
    <>
      <div className="space-y-16">
        {shellCategories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-xl font-bold text-slate-900 mb-6">{cat.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {cat.models.map((model) => (
                <button
                  key={model.name}
                  onClick={() => setSelected(model)}
                  className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-left group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{model.name}</p>
                    <p className="text-xs text-primary font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">View details &rarr;</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
        <p className="text-sm text-slate-400 text-center">
          Most models are available in multiple sizes. Click any model for details.
        </p>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 640px) 100vw, 500px"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              >
                &times;
              </button>
            </div>

            {/* Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900">{selected.name}</h3>

              {selected.sizes && (
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Sizes</p>
                  <p className="text-base text-slate-700 font-medium">{selected.sizes}</p>
                </div>
              )}

              {selected.features && selected.features.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Features</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <a
                  href={`https://www.lathampool.com/fiberglass-pools/${selected.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  Full Specs on Latham.com &rarr;
                </a>
                <a
                  href="/request"
                  className="flex-1 text-center px-4 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
