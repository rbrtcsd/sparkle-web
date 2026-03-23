import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Sparkle Pools privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-lg text-white/70">Effective March 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
            <path d="M0 60V20C240 0 480 0 720 20C960 40 1200 40 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Who We Are</h2>
              <p>
                Sparkle Pools (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates pool construction, service, and retail
                locations in Terre Haute, Indiana. This policy explains how we collect, use, and protect your
                personal information when you interact with our website, request services, or receive
                communications from us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Information We Collect</h2>
              <p className="mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information</strong> — name, phone number, email address, and mailing address</li>
                <li><strong>Property information</strong> — service address, pool type, and details about your pool or property</li>
                <li><strong>Service requests</strong> — descriptions of work you are requesting, quotes, and service history</li>
                <li><strong>Employment applications</strong> — resume, work history, and related information submitted through our careers page</li>
                <li><strong>Communications</strong> — messages you send us through our website, email, phone, or text</li>
              </ul>
              <p className="mt-3">
                We do not collect information through cookies, tracking pixels, or third-party analytics on our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your requests, questions, and service inquiries</li>
                <li>Send you quotes, invoices, appointment reminders, and service updates</li>
                <li>Send transactional text messages when you request a quote or service update via SMS</li>
                <li>Process job applications</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Text Messages (SMS)</h2>
              <p>
                When you provide your phone number and request a quote or service, we may send you text messages
                containing quote details, approval links, or service updates. These messages are transactional —
                they are sent only in response to a specific request or interaction, not for marketing purposes.
              </p>
              <p className="mt-3">
                We will never share, sell, rent, or transfer your mobile phone number or SMS opt-in data to
                any third party, affiliate, or lead generator for marketing or promotional purposes.
              </p>
              <p className="mt-3">
                Message frequency varies based on your service activity. Message and data rates may apply.
                You can opt out of text messages at any time by replying STOP to any message or by contacting
                us directly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">How We Share Your Information</h2>
              <p className="mb-3">
                We do not sell, rent, or trade your personal information. We may share your information only in
                the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service providers</strong> — we use trusted third-party services to help us operate our business (e.g., email delivery, text messaging, payment processing). These providers only access your information as needed to perform services on our behalf.</li>
                <li><strong>Legal requirements</strong> — we may disclose information if required by law, regulation, or legal process.</li>
                <li><strong>Business transfers</strong> — if our business is acquired or merged, your information may be transferred as part of that transaction.</li>
                <li><strong>SMS opt-in data</strong> — Your mobile number and SMS consent are never shared with third parties for marketing purposes. Our SMS provider (Twilio) receives only what is necessary to deliver messages on our behalf.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Data Security</h2>
              <p>
                We take reasonable measures to protect your personal information from unauthorized access,
                alteration, or destruction. Our systems use encryption in transit and at rest. However, no
                method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill
                the purposes described in this policy. Service and property records may be retained for the
                useful life of your pool to support warranty and service history.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information, subject to legal retention requirements</li>
                <li>Opt out of text messages by replying STOP</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a child,
                please contact us so we can delete it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. If we make material changes, we will
                update the effective date at the top of this page. Your continued use of our services after
                changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Contact Us</h2>
              <p>
                If you have questions about this privacy policy or your personal information, contact us at:
              </p>
              <div className="mt-3 bg-slate-50 rounded-xl p-6 not-prose">
                <p className="font-bold text-slate-800">Sparkle Pools</p>
                <p className="text-slate-600 mt-1">2225 N 25th Street</p>
                <p className="text-slate-600">Terre Haute, IN 47804</p>
                <p className="text-slate-600 mt-2">
                  <a href="tel:8122321292" className="text-primary hover:underline">(812) 232-1292</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
