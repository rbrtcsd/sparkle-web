import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Sparkle Pools. Find our phone number, email, address, and hours of operation.',
};

const contactInfo = [
  {
    title: 'Phone',
    value: '(555) 123-4567',
    description: 'Mon-Fri 8am-5pm, Sat 9am-1pm',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'info@sparklepools.com',
    description: 'We typically respond within 24 hours',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Address',
    value: '123 Pool Lane',
    description: 'Anytown, USA 12345',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const hours = [
  { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-wider mb-3">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Have a question or need service? We are here to help. Reach out by phone, email,
              or submit a service request online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-lg font-semibold text-slate-900 mt-0.5">
                        {item.value}
                      </p>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Hours of Operation
                </h2>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center">
                        <span className="text-slate-600 font-medium">{h.day}</span>
                        <span className={`font-semibold ${h.time === 'Closed' ? 'text-slate-400' : 'text-slate-900'}`}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-500">
                    Emergency service available for existing maintenance customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick action / Service request CTA */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Need Pool Service?
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  The fastest way to get started is to submit a service request online.
                  We will review your request and get back to you within one business day
                  with next steps and scheduling options.
                </p>
                <Link
                  href="/request"
                  className="inline-flex items-center justify-center w-full px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/20"
                >
                  Submit a Service Request
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Prefer to call?
                  </h3>
                  <p className="text-slate-500 mb-4">
                    Our team is available during business hours to answer your questions and
                    schedule service appointments.
                  </p>
                  <a
                    href="tel:5551234567"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
