import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Sparkle Pools terms and conditions — service terms, SMS messaging program details, and opt-out instructions.',
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-4 text-lg text-white/70">Effective March 19, 2026</p>
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
              <h2 className="text-xl font-bold text-slate-800 mb-3">Agreement to Terms</h2>
              <p>
                By using our website, requesting services, or receiving communications from Sparkle Pools
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to these Terms &amp; Conditions.
                If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Services</h2>
              <p>
                Sparkle Pools provides pool construction, installation, service, repair, and retail sales
                in Terre Haute, Indiana and the surrounding Wabash Valley area. Service quotes, scheduling,
                and pricing are subject to availability and may change without notice. All quotes are valid
                for the period stated on the quote.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Service Requests &amp; Quotes</h2>
              <p>
                When you submit a service request or receive a quote through our website or via text message,
                it does not constitute a binding contract until both parties agree to the scope and terms of
                work. We reserve the right to decline any service request.
              </p>
            </div>

            {/* SMS Terms — the section Twilio specifically requires */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Sparkle Pools SMS Messaging Program</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-800">Program Name</h3>
                  <p>Sparkle Pools Quote &amp; Service Notifications</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">Program Description</h3>
                  <p>
                    When you provide your phone number and request a quote or service from Sparkle Pools,
                    you consent to receive transactional text messages related to your request. These messages
                    may include quote details with a link to view and approve your quote online, appointment
                    confirmations, service updates, and other communications directly related to services you
                    have requested. This program is not used for marketing or promotional messages.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">Message Frequency</h3>
                  <p>
                    Message frequency varies based on your service activity. You will typically receive
                    1–5 messages per service request or quote. You will not receive recurring or
                    automated marketing messages.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">Message &amp; Data Rates</h3>
                  <p>
                    Message and data rates may apply. Your carrier&apos;s standard messaging rates apply to
                    all messages sent and received. Sparkle Pools does not charge for text messages, but
                    your mobile carrier may.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">Opt-Out Instructions</h3>
                  <p>
                    You can opt out of text messages at any time. Text{' '}
                    <strong className="text-slate-900">STOP</strong> to any message from Sparkle Pools to
                    unsubscribe. You will receive a one-time confirmation message and no further texts will
                    be sent. Opting out of texts does not affect your ability to use our other services.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">Help &amp; Support</h3>
                  <p>
                    For help with text messages, text{' '}
                    <strong className="text-slate-900">HELP</strong> to any message from Sparkle Pools, or
                    contact us directly:
                  </p>
                  <div className="mt-2 text-sm">
                    <p>Phone: <a href="tel:8122321292" className="text-primary hover:underline">(812) 232-1292</a></p>
                    <p>Address: 2225 N 25th Street, Terre Haute, IN 47804</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">Supported Carriers</h3>
                  <p className="text-sm">
                    Compatible with most major US carriers including AT&amp;T, T-Mobile, Verizon, Sprint,
                    and others. Carriers are not liable for delayed or undelivered messages.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">Data Sharing</h3>
                  <p className="text-sm">
                    Mobile opt-in data and consent will not be shared with any third party or affiliate
                    for marketing or promotional purposes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Website Use</h2>
              <p>
                You may use our website for lawful purposes only. You agree not to misuse the site,
                submit false information, or attempt to interfere with its operation. We reserve the
                right to restrict access to any user who violates these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Intellectual Property</h2>
              <p>
                All content on this website — including text, images, logos, and design — is the property
                of Sparkle Pools and is protected by applicable intellectual property laws. You may not
                reproduce, distribute, or use our content without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Limitation of Liability</h2>
              <p>
                Sparkle Pools provides this website and its content on an &quot;as is&quot; basis. We make
                no warranties regarding the accuracy or completeness of information on our website. To the
                fullest extent permitted by law, Sparkle Pools is not liable for any indirect, incidental,
                or consequential damages arising from your use of our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Indiana. Any disputes arising from
                these terms or your use of our services will be resolved in the courts of Vigo County, Indiana.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. Changes will be posted on this page with an
                updated effective date. Your continued use of our services after changes are posted
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Contact Us</h2>
              <p>
                If you have questions about these terms, contact us at:
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
