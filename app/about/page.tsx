import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sparkle Pools, our story, mission, and the experienced team behind our professional pool services.',
};

const values = [
  {
    title: 'Quality Workmanship',
    description: 'We take pride in every job, no matter how big or small. Our technicians follow industry best practices and never cut corners.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Integrity & Trust',
    description: 'We believe in honest communication, transparent pricing, and standing behind our work. Your trust is our most valuable asset.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Customer First',
    description: 'Every decision we make starts with the customer in mind. We are responsive, reliable, and committed to your complete satisfaction.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Improvement',
    description: 'We stay current with the latest pool technologies, techniques, and industry certifications to bring you the best service possible.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const team = [
  { name: 'Owner', role: 'Founder & Lead Technician' },
  { name: 'Service Manager', role: 'Operations & Scheduling' },
  { name: 'Lead Technician', role: 'Equipment Specialist' },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Our Story
            </h1>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Built on a passion for clean pools and happy customers.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              From Backyard Pools to a Trusted Business
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Sparkle Pools was founded with a simple mission: to provide reliable, high-quality pool
                services that homeowners can trust. What started as a small operation has grown into
                a full-service pool company serving our local community.
              </p>
              <p>
                We understand that your pool is more than just a backyard feature &mdash; it is where
                families gather, memories are made, and relaxation happens. That is why we treat every
                pool as if it were our own, with the same attention to detail and care.
              </p>
              <p>
                Over the years, we have built our reputation one satisfied customer at a time. We are
                proud to be a trusted name in pool services, and we look forward to earning your trust too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
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

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Meet the Team
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Our experienced professionals are dedicated to keeping your pool in top condition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to work with us?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            We would love to hear from you. Reach out today and discover why our customers trust us with their pools.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Request Service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
