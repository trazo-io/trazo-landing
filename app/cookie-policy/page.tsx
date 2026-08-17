import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Trazo",
  description:
    "How Trazo uses cookies and similar technologies on our platform.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Cookie Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              How Trazo uses cookies and similar technologies.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: March 21, 2026
            </p>
          </header>

          <div className="prose-custom space-y-10 text-foreground/80">
            {/* 1 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                1. What Are Cookies
              </h3>
              <p className="mt-3 leading-[1.8]">
                Cookies are small text files stored on your device when you visit
                a website. They help the site remember your preferences, analyze
                usage patterns, and provide a better experience. Some cookies are
                set by the site you visit (first-party), while others are set by
                third-party services integrated into the site.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                2. Cookies We Use
              </h3>
              <p className="mt-3 leading-[1.8]">
                We categorize cookies into three types. You can manage your
                preferences at any time using the cookie banner or by contacting
                us.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.1 Essential Cookies (Always Active)
              </h4>
              <p className="mt-2 leading-[1.8]">
                These cookies are strictly necessary for the Platform to
                function. They cannot be disabled without breaking core
                functionality.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-2 pr-4 font-semibold text-foreground">
                        Cookie
                      </th>
                      <th className="pb-2 pr-4 font-semibold text-foreground">
                        Purpose
                      </th>
                      <th className="pb-2 font-semibold text-foreground">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">
                        access_token
                      </td>
                      <td className="py-2 pr-4">
                        JWT authentication (httpOnly)
                      </td>
                      <td className="py-2">15 minutes</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">
                        refresh_token
                      </td>
                      <td className="py-2 pr-4">
                        Session renewal (httpOnly)
                      </td>
                      <td className="py-2">7-30 days</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">
                        logged_in
                      </td>
                      <td className="py-2 pr-4">
                        Session status indicator for frontend
                      </td>
                      <td className="py-2">Session / 30 days</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">
                        csrftoken
                      </td>
                      <td className="py-2 pr-4">
                        Cross-site request forgery protection
                      </td>
                      <td className="py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">
                        trazo-cookie-consent
                      </td>
                      <td className="py-2 pr-4">
                        Stores your cookie preferences (localStorage, not a
                        cookie). Deleting this will re-display the consent
                        banner.
                      </td>
                      <td className="py-2">Persistent until cleared</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.2 Analytics Cookies (Opt-In)
              </h4>
              <p className="mt-2 leading-[1.8]">
                These cookies help us understand how visitors interact with the
                Platform so we can improve it. They collect aggregated,
                anonymized data.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-2 pr-4 font-semibold text-foreground">
                        Service
                      </th>
                      <th className="pb-2 pr-4 font-semibold text-foreground">
                        Purpose
                      </th>
                      <th className="pb-2 font-semibold text-foreground">
                        Privacy Info
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4">Vercel Analytics</td>
                      <td className="py-2 pr-4">
                        Page views, performance metrics, visitor counts
                        (privacy-focused, no PII collected)
                      </td>
                      <td className="py-2">
                        <a
                          href="https://vercel.com/docs/analytics/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Vercel Privacy
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.3 Functional Cookies (Opt-In)
              </h4>
              <p className="mt-2 leading-[1.8]">
                These cookies remember your preferences to provide a more
                personalized experience.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-2 pr-4 font-semibold text-foreground">
                        Cookie
                      </th>
                      <th className="pb-2 pr-4 font-semibold text-foreground">
                        Purpose
                      </th>
                      <th className="pb-2 font-semibold text-foreground">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">
                        language
                      </td>
                      <td className="py-2 pr-4">
                        Preferred language (EN/ES)
                      </td>
                      <td className="py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">
                        theme
                      </td>
                      <td className="py-2 pr-4">
                        Light/dark mode preference
                      </td>
                      <td className="py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                3. How to Manage Cookies
              </h3>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                3.1 Cookie Consent Banner
              </h4>
              <p className="mt-2 leading-[1.8]">
                When you first visit our Platform, a cookie banner lets you
                choose which non-essential cookies to accept. You can change
                your preferences at any time by clicking the &quot;Cookie
                Preferences&quot; link in the footer of any page, which will
                re-display the consent banner.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                3.2 Browser Settings
              </h4>
              <p className="mt-2 leading-[1.8]">
                Most browsers allow you to control cookies through their settings.
                You can typically find these options under
                &quot;Privacy&quot; or &quot;Security&quot; in your browser
                preferences. Note that blocking essential cookies may prevent the
                Platform from functioning correctly.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                3.3 Do Not Track
              </h4>
              <p className="mt-2 leading-[1.8]">
                We aim to honor Do Not Track (DNT) browser signals where
                technically feasible. When a DNT signal is detected, we
                disable non-essential analytics where supported by our
                third-party analytics providers.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                4. Third-Party Cookies
              </h3>
              <p className="mt-3 leading-[1.8]">
                We do not use advertising or marketing cookies. We do not sell
                personal information or share it with advertisers. Third-party
                services that may set cookies include:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Vercel Analytics:</strong> Privacy-focused page view
                  analytics. Does not track users across sites. See{" "}
                  <a
                    href="https://vercel.com/docs/analytics/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Vercel&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Stripe:</strong> When payment features are active, our
                  payment processor may set cookies for fraud prevention and
                  payment processing. See{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Stripe&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Google OAuth:</strong> When you use Google Sign-In,
                  Google may set cookies as part of the authentication process.
                  See{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                5. Updates to This Policy
              </h3>
              <p className="mt-3 leading-[1.8]">
                We may update this Cookie Policy to reflect changes in our
                practices or applicable laws. Material changes will be
                communicated through the cookie consent banner and the
                &quot;Last updated&quot; date above.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                6. Contact Us
              </h3>
              <p className="mt-3 leading-[1.8]">
                If you have questions about our use of cookies, contact us at:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-6">
                <p className="font-semibold text-foreground">
                  Privacy Inquiries
                </p>
                <p className="mt-1 leading-[1.8]">
                  Email:{" "}
                  <a
                    href="mailto:privacy@trazo.io"
                    className="text-primary hover:underline"
                  >
                    privacy@trazo.io
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
