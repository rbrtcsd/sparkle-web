import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Inground Vinyl Liner Pools',
    description: 'Custom-designed pools with premium Merlin vinyl liners and Latham steel walls. Endless shapes, sizes, and liner patterns to match your vision.',
    image: '/images/steel-walls.jpg',
    href: '/pools/inground',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Fiberglass Pools',
    description: 'Factory-built Latham fiberglass pools installed in days, not months. Durable, low-maintenance, and beautiful.',
    image: '/images/fiberglass-pool-1.jpg',
    href: '/pools/fiberglass',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Above Ground Pools',
    description: 'Quality above ground options including the Nova STR steel and Revelle hybrid models. Perfect for any budget.',
    image: '/images/nova-str.jpg',
    href: '/pools/above-ground',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Pool Service & Repair',
    description: 'Equipment repair, liner replacement, plumbing, and more. We service all makes and models to keep your pool running perfectly.',
    image: '/images/fiberglass-pool-2.jpg',
    href: '/services/maintenance',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.067A.75.75 0 005.25 12.6v6.8a.75.75 0 00.786.5l5.384-.652m0-4.08l5.384 3.067a.75.75 0 00.786-.5v-6.8a.75.75 0 00-.786-.5l-5.384.652m0 4.08V9.927m0 0a.75.75 0 00-.786-.5L5.25 10.079a.75.75 0 00-.786.5M11.42 9.927a.75.75 0 01.786-.5l5.384.652a.75.75 0 01.786.5" />
      </svg>
    ),
  },
  {
    title: 'Automatic Safety Covers',
    description: 'Coverstar automatic pool covers for safety, energy savings, and convenience. Protect your family and reduce maintenance.',
    image: '/images/coverstar-safety.jpg',
    href: '/pools/safety-covers',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Heating & Equipment',
    description: 'Raypak gas heaters and CrosswindV heat pumps for season-extending comfort. Professional installation and service.',
    image: '/images/raypak-gas-heater.png',
    href: '/pools/heating',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 11.25a3 3 0 10 6 0c0-1.39-.45-2.672-1.21-3.713.885-.544 1.834-.946 2.842-1.185.39-.093.756-.21 1.094-.348z" />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: 'Authorized Dealer',
    description: "We're proud partners with Latham, Merlin, Coverstar, Raypak, Pentair, Hayward, Maytronics, and more — bringing you the best products in the industry.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Expert Installation',
    description: 'Our experienced crew handles everything from excavation to your first swim. We build pools the right way.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Full-Service Support',
    description: "From weekly maintenance to emergency repairs, we're here for the life of your pool. One call does it all.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const partners = ['Latham Pools', 'Merlin Industries', 'Coverstar', 'Raypak', 'Pentair', 'Hayward', 'Maytronics', 'Aiper', 'Jonas', 'Waterway'];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-pool-day.jpg"
          alt="Custom inground pool with stone patio, water features, and LED lighting"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/50 to-primary/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-5">Terre Haute&apos;s Pool Experts</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Your Backyard{' '}
              <span className="text-teal-300">Paradise</span>{' '}
              Starts Here
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-blue-100/90 leading-relaxed max-w-2xl">
              Sparkle Pools has been building and servicing pools across the Wabash Valley for over 60 years. From dream pool installations to crystal-clear maintenance &mdash; we do it all.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/request"
                className="btn-pill btn-pill-primary px-10 py-4 text-lg shadow-lg shadow-primary-dark/30"
              >
                Get a Free Quote
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-pill btn-pill-outline px-10 py-4 text-lg"
              >
                Explore Our Pools
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Everything Your Pool Needs
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              From new pool construction to weekly maintenance, we offer a full range of services to keep your backyard oasis in perfect condition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-hover group bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 overflow-hidden"
              >
                <div className="relative h-48 sm:h-56">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors">
                    Learn More &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0L48 5C96 10 192 20 288 28C384 36 480 42 576 42C672 42 768 36 864 30C960 24 1056 18 1152 18C1248 18 1344 24 1392 27L1440 30V60H0V0Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Why Sparkle Pools</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Why Choose Us
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              We bring industry-leading products, expert craftsmanship, and full-service support to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  {reason.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] text-center mb-10">
            Authorized Dealer &amp; Partner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {partners.map((partner) => (
              <div
                key={partner}
                className="px-8 py-4 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm tracking-wide"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
            Whether you need a new pool, a repair, or ongoing maintenance &mdash; we&apos;re here to help.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request"
              className="btn-pill bg-white text-primary px-10 py-4 text-lg hover:bg-blue-50 shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="btn-pill btn-pill-outline px-10 py-4 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
