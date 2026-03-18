import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sparkle Pools — the Wabash Valley\'s trusted pool experts for over a decade. Authorized dealer for Latham, Merlin, Coverstar, Raypak, Pentair, Hayward, and more.',
};

const values = [
  {
    title: 'Quality Craftsmanship',
    description: 'We use industry-leading products and proven techniques on every project. No shortcuts, no compromises — just quality work you can count on.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Honest Pricing',
    description: 'We believe in transparent, upfront pricing with no hidden fees. You will always know exactly what you are paying for before we start any work.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Customer First',
    description: 'Every decision we make starts with you. We are responsive, reliable, and committed to making pool ownership easy and enjoyable.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Community Roots',
    description: "We are not just contractors \u2014 we are your neighbors. We live and work in the Wabash Valley, and we take pride in serving the community we call home.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

const partners = [
  { name: 'Latham Pools', description: 'Steel & polymer wall systems, fiberglass pools' },
  { name: 'Merlin Industries', description: 'Premium vinyl liners & safety covers' },
  { name: 'Coverstar', description: 'Automatic safety covers' },
  { name: 'Raypak', description: 'Gas heaters & heat pumps' },
  { name: 'Pentair', description: 'Pumps, filters, automation & water care' },
  { name: 'Hayward', description: 'Pool equipment, cleaners & lighting' },
  { name: 'Maytronics', description: 'Dolphin robotic pool cleaners' },
  { name: 'Aiper', description: 'Cordless robotic pool cleaners' },
  { name: 'Jonas', description: 'Pool construction products & accessories' },
  { name: 'Waterway', description: 'Pumps, fittings & plumbing components' },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Our Story
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              The Wabash Valley&apos;s trusted pool experts for over a decade.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Building Pools, Building Trust
            </h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Sparkle Pools has been the Wabash Valley&apos;s trusted pool experts for over a decade. What started as a small service operation has grown into a full-service pool company &mdash; designing, building, and maintaining pools for families across Terre Haute and the surrounding communities.
              </p>
              <p>
                We&apos;re not just contractors &mdash; we&apos;re your neighbors, and we take pride in every pool we touch.
              </p>
            </div>

            <div className="mt-14 p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Our Mission</p>
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                Our mission is simple: make pool ownership easy and enjoyable. From your first consultation to years of crystal-clear water, we&apos;re with you every step of the way.
              </p>
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

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Our Values</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-hover p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Our Partners</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Industry-Leading Brands
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              We&apos;re proud to be an authorized dealer for the best names in the pool industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="card-hover p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center"
              >
                <h3 className="text-lg font-bold text-slate-900">{partner.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to work with us?
          </h2>
          <p className="mt-6 text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out today and discover why families across the Wabash Valley trust us with their pools.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request"
              className="btn-pill bg-white text-primary px-10 py-4 text-lg hover:bg-blue-50 shadow-lg"
            >
              Request Service
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
