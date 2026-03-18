import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Sparkle Pools in Terre Haute, IN. Two locations — North on 25th Street and South on US 41. Call (812) 232-1292.',
};

const locations = [
  {
    name: 'Sparkle Pools North',
    address: '2225 N 25th Street',
    city: 'Terre Haute, IN 47804',
    phone: '(812) 232-1292',
    hours: [
      { day: 'Monday \u2013 Friday', time: '9:00 AM \u2013 5:00 PM' },
      { day: 'Saturday', time: 'Closed' },
      { day: 'Sunday', time: 'Closed' },
    ],
  },
  {
    name: 'Sparkle Pools South',
    address: '5171 S US Highway 41',
    city: 'Terre Haute, IN 47802',
    phone: '(812) 232-1292',
    hours: [
      { day: 'Monday', time: '11:00 AM \u2013 6:00 PM' },
      { day: 'Tuesday', time: 'Closed' },
      { day: 'Wednesday', time: 'Closed' },
      { day: 'Thursday', time: '11:00 AM \u2013 6:00 PM' },
      { day: 'Friday', time: '11:00 AM \u2013 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM \u2013 3:00 PM' },
      { day: 'Sunday', time: '10:00 AM \u2013 2:00 PM' },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Have a question or need service? We are here to help. Reach out by phone or submit a service request online.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Two Locations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Visit Us</h2>
            <p className="mt-4 text-lg text-slate-500">Serving the Wabash Valley from two convenient locations in Terre Haute.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {locations.map((loc) => (
              <div key={loc.name} className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 overflow-hidden">
                <div className="bg-primary p-6">
                  <h3 className="text-xl font-bold text-white">{loc.name}</h3>
                  <p className="text-blue-100/80 text-sm mt-1">{loc.address}, {loc.city}</p>
                </div>
                <div className="p-6">
                  {/* Phone */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <a href="tel:8122321292" className="text-lg font-semibold text-primary hover:text-primary-dark transition-colors">
                      {loc.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Hours</h4>
                  <div className="space-y-2">
                    {loc.hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 font-medium">{h.day}</span>
                        <span className={`font-semibold ${h.time === 'Closed' ? 'text-slate-400' : 'text-slate-900'}`}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Area + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Service Area</h3>
                  <p className="text-slate-500 mt-1">Terre Haute, Vigo County, and the greater Wabash Valley. We service pools throughout west-central Indiana.</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mt-4">Emergency service available for existing maintenance customers.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Prefer to Request Service Online?
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Submit a request online and we&apos;ll get back to you within one business day.
              </p>
              <Link
                href="/request"
                className="btn-pill btn-pill-primary w-full text-lg shadow-lg shadow-primary/20"
              >
                Get a Free Quote
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
