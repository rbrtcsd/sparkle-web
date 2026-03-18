import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fiberglass Pools',
  description: 'Latham fiberglass pools installed in days. Advanced Composite construction, Crystite Gel Coat finish, and dozens of shapes and colors.',
};

const checkIcon = (
  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  </div>
);

const shellCategories = [
  {
    title: 'Rectangular / Classic',
    models: [
      { name: 'Apollo 14', image: '/images/shells/apollo-14.jpg' },
      { name: 'Ariel 16', image: '/images/shells/ariel-16.jpg' },
      { name: 'Astoria', image: '/images/shells/astoria.jpg' },
      { name: 'Cape Cod', image: '/images/shells/cape-cod.jpg' },
      { name: 'Corinthian', image: '/images/shells/corinthian.jpg' },
      { name: 'Monaco', image: '/images/shells/monaco.jpg' },
      { name: 'Olympia', image: '/images/shells/olympia.jpg' },
      { name: 'Coral 16', image: '/images/shells/coral-16.jpg' },
    ],
  },
  {
    title: 'Freeform / Curved',
    models: [
      { name: 'Aruba', image: '/images/shells/aruba.jpg' },
      { name: 'Barcelona', image: '/images/shells/barcelona.jpg' },
      { name: 'Bermuda', image: '/images/shells/bermuda.jpg' },
      { name: 'Jamaica', image: '/images/shells/jamaica.jpg' },
      { name: 'Key West', image: '/images/shells/key-west.jpg' },
      { name: 'Synergy', image: '/images/shells/synergy.jpg' },
      { name: 'Vista Isle', image: '/images/shells/vista-isle.jpg' },
    ],
  },
  {
    title: 'Geometric',
    models: [
      { name: 'Athens', image: '/images/shells/athens.jpg' },
      { name: 'Axiom', image: '/images/shells/axiom-14.jpg' },
      { name: 'Tuscan', image: '/images/shells/tuscan.jpg' },
    ],
  },
  {
    title: 'Plunge Pools',
    models: [
      { name: 'Milan', image: '/images/shells/milan.jpg' },
      { name: 'Enchantment', image: '/images/shells/enchantment.jpg' },
    ],
  },
];

const crystalColors = [
  { name: 'Sapphire Blue', image: '/images/shells/color-crystal-sapphire.jpg' },
  { name: 'Ocean Blue', image: '/images/shells/color-crystal-ocean.jpg' },
  { name: 'Night Sky', image: '/images/shells/color-crystal-nightsky.jpg' },
  { name: 'Shale Gray', image: '/images/shells/color-crystal-shale.jpg' },
  { name: 'Coastal Bronze', image: '/images/shells/color-crystal-bronze.jpg' },
  { name: 'Pearl White', image: '/images/shells/color-crystal-pearl.jpg' },
];

const classicColors = [
  { name: 'Sapphire Blue', image: '/images/shells/color-classic-sapphire.jpg' },
  { name: 'Ocean Blue', image: '/images/shells/color-classic-ocean.jpg' },
  { name: 'Night Sky', image: '/images/shells/color-classic-nightsky.jpg' },
  { name: 'Shale Gray', image: '/images/shells/color-classic-shale.jpg' },
  { name: 'Coastal Bronze', image: '/images/shells/color-classic-bronze.jpg' },
  { name: 'Whisper White', image: '/images/shells/color-classic-whisper.jpg' },
];

export default function FiberglassPoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Fiberglass Pools</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Fiberglass Pools
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Latham Fiberglass &mdash; Installed in Days, Not Months
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Fiberglass? */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Why Fiberglass?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Why Fiberglass?
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Latham fiberglass pools combine speed, strength, and beauty into the lowest-maintenance pool you can own. Factory-built and delivered ready to install.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Installed in as little as 2&ndash;3 days</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Advanced Composite construction &mdash; strongest shell in the industry</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Crystite Gel Coat finish &mdash; smooth, stain-resistant, beautiful</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Lowest lifetime maintenance cost of any pool type</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Backed by Latham&apos;s industry-leading warranty</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0L48 5C96 10 192 20 288 28C384 36 480 42 576 42C672 42 768 36 864 30C960 24 1056 18 1152 18C1248 18 1344 24 1392 27L1440 30V60H0V0Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* Shell Shapes */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Shell Shapes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Choose Your Shape
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Dozens of shapes and sizes to fit any backyard, organized by style.
            </p>
          </div>

          <div className="space-y-16">
            {shellCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{cat.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {cat.models.map((model) => (
                    <div
                      key={model.name}
                      className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
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
                      <p className="text-sm font-medium text-slate-700 text-center py-3">{model.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-slate-400 text-center">
            Most models come in multiple sizes (12, 14, 16 ft and more). Ask us which sizes are available for your favorite shape.
          </p>
        </div>
      </section>

      {/* Colors & Finishes */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Colors &amp; Finishes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Colors &amp; Finishes
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Two premium finish lines to match your style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Crystite Crystal */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Crystite Crystal</h3>
              <p className="text-slate-500 text-sm mb-6">Shimmer finish</p>
              <div className="grid grid-cols-3 gap-4">
                {crystalColors.map((c) => (
                  <div key={c.name} className="text-center">
                    <div className="relative w-full aspect-square rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 30vw, 15vw"
                      />
                    </div>
                    <p className="mt-2 text-xs font-medium text-slate-600">{c.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Crystite Classic */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Crystite Classic</h3>
              <p className="text-slate-500 text-sm mb-6">Smooth finish</p>
              <div className="grid grid-cols-3 gap-4">
                {classicColors.map((c) => (
                  <div key={c.name} className="text-center">
                    <div className="relative w-full aspect-square rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 30vw, 15vw"
                      />
                    </div>
                    <p className="mt-2 text-xs font-medium text-slate-600">{c.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0L48 5C96 10 192 20 288 28C384 36 480 42 576 42C672 42 768 36 864 30C960 24 1056 18 1152 18C1248 18 1344 24 1392 27L1440 30V60H0V0Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* Waterline Tile Options */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Waterline Tiles</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Waterline Tile Options
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Choose from designer waterline tile patterns including Italian Slate, Glacier, Monet, Night Life, and Abyss series.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Tell us about your backyard and we will help you choose the perfect fiberglass pool for your family.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request"
              className="btn-pill bg-white text-primary px-10 py-4 text-lg hover:bg-blue-50 shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:8122321292"
              className="btn-pill btn-pill-outline px-10 py-4 text-lg"
            >
              (812) 232-1292
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
