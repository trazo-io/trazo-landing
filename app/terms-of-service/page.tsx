import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Trazo - Agricultural Transparency Platform",
  description:
    "Terms of Service for the Trazo agricultural transparency platform.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Terms and conditions governing use of the Trazo platform.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: March 2, 2026
            </p>
          </header>

          <div className="prose-custom space-y-10 text-foreground/80">
            {/* 1 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                1. Acceptance of Terms
              </h3>
              <p className="mt-3 leading-[1.8]">
                By accessing or using the Trazo agricultural transparency
                platform (&quot;Platform&quot;), you agree to be bound by these
                Terms of Service (&quot;Terms&quot;). If you do not agree, you
                may not access or use the Platform.
              </p>
              <p className="mt-3 leading-[1.8]">
                These Terms apply to all visitors, users, and others who access
                or use the Platform, including producer accounts, consumer
                viewers, and administrative users.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                2. Description of Service
              </h3>
              <p className="mt-3 leading-[1.8]">
                Trazo provides an agricultural transparency platform that enables
                farmers and producers to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Document farming practices and agricultural events
                </li>
                <li>
                  Generate transparency scores based on documented practices
                </li>
                <li>
                  Create QR codes for consumer-facing transparency profiles
                </li>
                <li>
                  Optionally verify records on the Polygon blockchain
                </li>
                <li>
                  Calculate carbon footprint estimates using EPA/USDA emission
                  factors
                </li>
                <li>
                  Track consumer engagement through QR code analytics
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                3. Account Registration and Security
              </h3>
              <p className="mt-3 leading-[1.8]">
                To use the Platform, you must create an account and provide
                accurate, complete information. You are responsible for
                maintaining the confidentiality of your account credentials and
                for all activities that occur under your account.
              </p>
              <p className="mt-3 leading-[1.8]">
                You must be at least 18 years old to create an account. You agree
                to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                4. Subscription Plans and Billing
              </h3>
              <p className="mt-3 leading-[1.8]">
                Trazo offers subscription plans as described on our Pricing page.
                Key billing terms:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Free Trial:</strong> New accounts receive a 14-day free
                  trial. No credit card required.
                </li>
                <li>
                  <strong>Billing Cycle:</strong> Subscriptions are billed
                  monthly or annually as selected.
                </li>
                <li>
                  <strong>Price Changes:</strong> We may update pricing with 30
                  days&apos; notice. Existing subscriptions are honored through
                  the current billing cycle.
                </li>
                <li>
                  <strong>Cancellation:</strong> Cancel anytime from your
                  dashboard. Access continues through the end of the current
                  billing period.
                </li>
                <li>
                  <strong>Refunds:</strong> We do not provide refunds for partial
                  billing periods unless required by law.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                5. User Content and Data Ownership
              </h3>
              <p className="mt-3 leading-[1.8]">
                You retain ownership of all content you upload to the Platform,
                including farm data, photos, voice recordings, and production
                records (&quot;User Content&quot;). By using the Platform, you
                grant Trazo a limited license to process, store, and display your
                User Content as necessary to provide the service.
              </p>
              <p className="mt-3 leading-[1.8]">
                You are responsible for the accuracy and legality of all User
                Content. You represent that you have the rights to share any
                content you upload.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                6. Blockchain Verification
              </h3>
              <p className="mt-3 leading-[1.8]">
                Blockchain verification is available as an optional add-on
                ($15/month). When activated:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Cryptographic hashes of your production records are stored on
                  the Polygon blockchain
                </li>
                <li>
                  Blockchain records are permanent and cannot be deleted or
                  modified
                </li>
                <li>
                  Only verification hashes are stored on-chain, not personal
                  information
                </li>
                <li>
                  You are responsible for reviewing data before verification is
                  triggered
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                7. Carbon Calculations Disclaimer
              </h3>
              <p className="mt-3 leading-[1.8]">
                Trazo provides carbon footprint estimates using published
                emission factors from the EPA (40 CFR Part 98) and USDA sources.
                These calculations are provided for informational and
                transparency purposes only and should not be used as the sole
                basis for regulatory compliance, carbon credit trading, or
                official emissions reporting without independent verification.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                8. Acceptable Use
              </h3>
              <p className="mt-3 leading-[1.8]">
                You agree not to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Upload false or misleading farming data or documentation
                </li>
                <li>
                  Attempt to manipulate transparency scores or carbon
                  calculations
                </li>
                <li>
                  Use the Platform to deceive consumers about farming practices
                </li>
                <li>
                  Access other users&apos; accounts or data without authorization
                </li>
                <li>
                  Use automated tools to scrape or access the Platform without
                  permission
                </li>
                <li>
                  Violate any applicable laws or regulations
                </li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                9. QR Codes and Consumer-Facing Pages
              </h3>
              <p className="mt-3 leading-[1.8]">
                QR codes generated by the Platform link to publicly accessible
                transparency profiles. By generating a QR code, you authorize
                Trazo to display the associated production data, transparency
                scores, and farming events to anyone who scans the code.
                Productions are not published until you explicitly finalize them.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                10. Intellectual Property
              </h3>
              <p className="mt-3 leading-[1.8]">
                The Platform, including its design, code, features, and content
                (excluding User Content), is owned by Trazo and protected by
                intellectual property laws. You may not copy, modify, or
                distribute any part of the Platform without written permission.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                11. Limitation of Liability
              </h3>
              <p className="mt-3 leading-[1.8]">
                To the maximum extent permitted by law, Trazo shall not be liable
                for any indirect, incidental, special, consequential, or punitive
                damages, including but not limited to loss of profits, data,
                use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>Your use or inability to use the Platform</li>
                <li>
                  Any unauthorized access to or alteration of your data
                </li>
                <li>
                  Errors in carbon calculations or transparency scores
                </li>
                <li>
                  Blockchain network failures or delays
                </li>
                <li>Any third-party conduct on the Platform</li>
              </ul>
            </section>

            {/* 12 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                12. Termination
              </h3>
              <p className="mt-3 leading-[1.8]">
                We may suspend or terminate your account if you violate these
                Terms. You may terminate your account at any time from your
                dashboard. Upon termination, your right to use the Platform
                ceases, but your data will be retained per our Privacy Policy
                data retention schedule.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                13. Changes to Terms
              </h3>
              <p className="mt-3 leading-[1.8]">
                We may modify these Terms at any time. We will provide notice of
                material changes via email or through the Platform. Continued use
                after changes become effective constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                14. Governing Law
              </h3>
              <p className="mt-3 leading-[1.8]">
                These Terms are governed by the laws of the State of California,
                United States, without regard to conflict of law principles. Any
                disputes shall be resolved in the courts of Ventura County,
                California.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                15. Contact Us
              </h3>
              <p className="mt-3 leading-[1.8]">
                For questions about these Terms, contact us at:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-6">
                <p className="font-semibold text-foreground">Legal Inquiries</p>
                <p className="mt-1 leading-[1.8]">
                  Email:{" "}
                  <a
                    href="mailto:hello@trazo.io"
                    className="text-primary hover:underline"
                  >
                    hello@trazo.io
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
