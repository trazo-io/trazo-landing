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
              Last updated: August 6, 2026
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
                You must be at least 18 years old to create an account. If you
                are creating an account on behalf of a business entity, you
                represent that you are authorized to bind that entity to these
                Terms. You agree to notify us immediately of any unauthorized
                use of your account.
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
                  <strong>Starter Plan:</strong> The Starter plan is free of charge
                  and does not expire. No credit card is required to create an
                  account.
                </li>
                <li>
                  <strong>Billing Cycle:</strong> Subscriptions are billed
                  monthly or annually as selected.
                </li>
                <li>
                  <strong>Price Changes:</strong> We may update pricing with 30
                  days&apos; notice. Existing subscriptions are honored through
                  the end of your then-current subscription term.
                </li>
                <li>
                  <strong>Add-Ons:</strong> Optional add-ons (additional farms,
                  parcels, productions, or storage) are billed monthly at the
                  rates listed on the Pricing page.
                </li>
                <li>
                  <strong>Failed Payments:</strong> If a payment fails, we will
                  attempt to retry for up to 7 days and notify you by email.
                  After 7 days of failed payments, your account may be
                  suspended until the balance is resolved.
                </li>
                <li>
                  <strong>Cancellation:</strong> Cancel anytime from your
                  dashboard. Access continues through the end of the current
                  billing period.
                </li>
                <li>
                  <strong>Refunds:</strong> We do not provide refunds for partial
                  billing periods unless required by law. EU consumers retain
                  their 14-day right of withdrawal under Directive 2011/83/EU.
                </li>
                <li>
                  <strong>Early Access Pricing:</strong> Subscribers who create
                  a paid account during the Early Access period (before general
                  availability launch) retain their subscription rate for as
                  long as their subscription remains active and in good
                  standing, regardless of future price changes.
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
                grant Trazo a limited, worldwide, non-exclusive license to
                process, store, and display your User Content as necessary to
                provide the service, including the right to sub-license to
                third-party service providers solely to operate the Platform.
              </p>
              <p className="mt-3 leading-[1.8]">
                This license survives termination of your account with respect
                to content already publicly distributed via QR codes, for a
                period of 90 days after termination, to allow consumers who
                have previously scanned such codes to continue accessing
                associated transparency data.
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
                6. Compliance Documentation Disclaimers
              </h3>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.1 Carbon Calculations
              </h4>
              <p className="mt-3 leading-[1.8]">
                Trazo provides carbon footprint estimates using published
                emission factors from the EPA (40 CFR Part 98) and USDA sources.
                These calculations use Direct Operational Emissions methodology
                (Scope 1 only) and do not constitute a full lifecycle assessment
                under ISO 14067 or any other recognized standard.
              </p>
              <p className="mt-3 leading-[1.8]">
                These estimates are provided for informational and transparency
                purposes only and may not be used, in whole or in part, as a
                basis for regulatory compliance filings, carbon credit
                applications, official emissions reporting, or any purpose
                requiring independently verified methodology.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.2 NOP Audit PDF
              </h4>
              <p className="mt-3 leading-[1.8]">
                The NOP Audit PDF (also called the &quot;Compliance Report&quot;)
                is generated from the production data, photos, and event logs you
                submit to the Platform. It includes a Compliance Snapshot,
                citations to 7 CFR 205.x, drift detection against OMRI and
                National List databases, photo galleries with EXIF/GPS captions,
                Statement of Equivalence (SOE) attestations, and a 5-year change
                history.
              </p>
              <p className="mt-3 leading-[1.8]">
                Trazo is a documentation platform and is not a USDA-accredited
                organic certifier. Only USDA-accredited certifying agents
                (CCOF, Oregon Tilth, MOFGA, OEFFA, PCO, and others) can grant,
                renew, suspend, or revoke organic certification. The NOP Audit
                PDF is reference material for your certifier&apos;s review; it
                does not constitute certification, regulatory approval, or any
                determination of compliance with 7 CFR Part 205.
              </p>
              <p className="mt-3 leading-[1.8]">
                Trazo does not independently verify your farming practices.
                We do not visit your farm, sample your soil, audit your supplier
                invoices, or confirm that practices on the ground match what
                you have documented. The Platform&apos;s automated checks
                (including the drift detector&apos;s comparison of your inputs
                against the OMRI Listed Products database and the USDA National
                List) operate on the text and metadata you submit; matches and
                mismatches are advisory and may include false positives or
                false negatives. The Compliance Snapshot, drift findings, and
                attestation rows in the PDF reflect the data you have entered
                and the automated checks the Platform applied to that data, nothing more.
              </p>
              <p className="mt-3 leading-[1.8]">
                You are solely responsible for the accuracy, completeness, and
                truthfulness of all production data and uploaded documents. If
                your certifier requests revisions, declines to accept the PDF,
                or finds non-compliance based on data you provided, Trazo has
                no liability for the outcome. Submit only truthful, complete
                records, and review every page of the PDF before sharing it
                with a certifier.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                7. Acceptable Use
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

            {/* 8 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                8. QR Codes and Consumer-Facing Pages
              </h3>
              <p className="mt-3 leading-[1.8]">
                QR codes generated by the Platform link to publicly accessible
                transparency profiles. By generating a QR code, you authorize
                Trazo to display the associated production data and farming
                events to anyone who scans the code. Productions are not
                published until you explicitly finalize them. The transparency
                score is a producer-dashboard metric and is deliberately withheld
                from consumer-facing pages, along with any grade, tier or badge
                derived from it.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                9. Intellectual Property
              </h3>
              <p className="mt-3 leading-[1.8]">
                The Platform, including its design, code, features, and content
                (excluding User Content), is owned by Trazo and protected by
                intellectual property laws. You may not copy, modify, or
                distribute any part of the Platform without written permission.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                10. Disclaimer of Warranties
              </h3>
              <p className="mt-3 font-semibold uppercase leading-[1.8]">
                The Platform is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, whether express,
                implied, or statutory, including but not limited to implied
                warranties of merchantability, fitness for a particular purpose,
                and non-infringement. Trazo does not warrant that the Platform
                will be uninterrupted, error-free, or free of harmful
                components.
              </p>
              <p className="mt-3 leading-[1.8]">
                Without limiting the foregoing, Trazo makes no warranty that
                transparency scores, carbon calculations, or any data derived
                from the Platform will be accurate, complete, or suitable for
                any particular regulatory, commercial, or compliance purpose.
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
                <li>Any third-party conduct on the Platform</li>
              </ul>
              <p className="mt-3 font-semibold leading-[1.8]">
                In no event will Trazo&apos;s total aggregate liability to you
                for all claims arising out of or relating to these Terms or the
                Platform exceed the greater of (a) the total fees paid by you to
                Trazo in the twelve (12) months immediately preceding the claim
                giving rise to liability, or (b) one hundred US dollars (USD
                $100).
              </p>
            </section>

            {/* 12 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                12. Indemnification
              </h3>
              <p className="mt-3 leading-[1.8]">
                You agree to indemnify, defend, and hold harmless Trazo and its
                officers, directors, employees, and agents from and against any
                claims, liabilities, damages, losses, and expenses (including
                reasonable legal fees) arising out of or in any way connected
                with:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>Your access to or use of the Platform</li>
                <li>
                  Your User Content, including any inaccurate farming data or
                  misleading sustainability claims
                </li>
                <li>Your violation of these Terms</li>
                <li>
                  Your violation of any applicable law or third-party rights
                </li>
              </ul>
            </section>

            {/* 13 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                13. Termination
              </h3>
              <p className="mt-3 leading-[1.8]">
                We may suspend or terminate your account if you violate these
                Terms. For non-payment issues, we will provide at least 30
                days&apos; notice before termination. For acceptable use
                violations (Section 7), we may suspend your account immediately
                with notice.
              </p>
              <p className="mt-3 leading-[1.8]">
                You may terminate your account at any time from your dashboard.
                Upon termination, your right to use the Platform ceases, but
                your data will be retained per our{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                data retention schedule.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                14. Changes to Terms
              </h3>
              <p className="mt-3 leading-[1.8]">
                We may modify these Terms at any time. We will provide at least
                30 days&apos; notice of material changes via email or through
                the Platform. For users in the European Union, material changes
                will require your affirmative acceptance before the changes
                take effect. For all other users, continued use after the notice
                period constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                15. Dispute Resolution and Arbitration
              </h3>
              <p className="mt-3 leading-[1.8]">
                <strong>Informal Resolution:</strong> Before filing a formal
                dispute, you agree to contact us at{" "}
                <a
                  href="mailto:legal@trazo.io"
                  className="text-primary hover:underline"
                >
                  legal@trazo.io
                </a>{" "}
                and attempt to resolve the dispute informally for at least 30
                days.
              </p>
              <p className="mt-3 leading-[1.8]">
                <strong>Binding Arbitration:</strong> If informal resolution
                fails, any dispute arising from these Terms or your use of the
                Platform shall be resolved by binding arbitration administered by
                the American Arbitration Association (AAA). For claims under
                $75,000 by individual consumers, the AAA Consumer Arbitration
                Rules apply; for all other claims, the AAA Commercial
                Arbitration Rules apply. The arbitration shall be conducted in
                English by a single arbitrator, online or at a location
                mutually agreed upon. The arbitrator&apos;s decision shall be
                final and binding.
              </p>
              <p className="mt-3 leading-[1.8]">
                <strong>Costs:</strong> For claims under $10,000, Trazo will pay
                all AAA filing and arbitration fees. For claims above $10,000,
                fees are allocated per the applicable AAA rules.
              </p>
              <p className="mt-3 leading-[1.8]">
                <strong>Opt-Out:</strong> You may opt out of this arbitration
                provision by sending written notice to{" "}
                <a
                  href="mailto:legal@trazo.io"
                  className="text-primary hover:underline"
                >
                  legal@trazo.io
                </a>{" "}
                within 30 days of first accepting these Terms. If you opt out,
                disputes will be resolved in court per Section 16.
              </p>
              <p className="mt-3 leading-[1.8]">
                <strong>Class Action Waiver:</strong> You agree that any dispute
                resolution proceedings will be conducted on an individual basis
                only, and not as a class, consolidated, or representative
                action. If this waiver is found unenforceable, the entire
                arbitration provision shall be null and void for that dispute.
              </p>
              <p className="mt-3 leading-[1.8]">
                <strong>Exceptions:</strong> Either party may (a) bring claims
                in small claims court if eligible, (b) seek injunctive or
                equitable relief for intellectual property infringement, or (c)
                if you are located in the European Union, exercise any rights
                available under EU consumer protection laws, including filing
                claims in your country of residence.
              </p>
              <p className="mt-3 leading-[1.8]">
                <strong>International Users:</strong> For users located outside
                the United States, disputes may alternatively be resolved
                through the International Centre for Dispute Resolution (ICDR),
                or in the courts of your country of residence as required by
                applicable law.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                16. Governing Law
              </h3>
              <p className="mt-3 leading-[1.8]">
                These Terms are governed by the laws of the State of Delaware,
                United States, without regard to conflict of law principles. To
                the extent that litigation is permitted under these Terms (see
                Section 15), you consent to the exclusive jurisdiction of the
                federal and state courts located in the State of Delaware.
              </p>
              <p className="mt-3 leading-[1.8]">
                If you are a consumer in the European Union, nothing in these
                Terms affects your rights under mandatory consumer protection
                laws of your country of residence, including the EU Consumer
                Rights Directive (2011/83/EU) and the EU Directive on
                Alternative Dispute Resolution (2013/11/EU).
              </p>
            </section>

            {/* 17 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                17. Force Majeure
              </h3>
              <p className="mt-3 leading-[1.8]">
                Trazo shall not be liable for any failure or delay in
                performance due to causes beyond its reasonable control,
                including but not limited to third-party service outages
                (DigitalOcean, AWS, Stripe), natural disasters, acts of
                government,
                pandemics, or internet infrastructure failures.
              </p>
            </section>

            {/* 18 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                18. Assignment
              </h3>
              <p className="mt-3 leading-[1.8]">
                Trazo may assign these Terms in whole or in part without your
                consent in connection with a merger, acquisition, corporate
                reorganization, or sale of all or substantially all of its
                assets. You may not assign these Terms or transfer your account
                without Trazo&apos;s prior written consent.
              </p>
            </section>

            {/* 19 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                19. Notices
              </h3>
              <p className="mt-3 leading-[1.8]">
                Notices to Trazo must be sent to{" "}
                <a
                  href="mailto:legal@trazo.io"
                  className="text-primary hover:underline"
                >
                  legal@trazo.io
                </a>{" "}
                and are deemed received when confirmed by reply. Notices to you
                will be sent to the email address associated with your account
                and are deemed received 24 hours after sending.
              </p>
            </section>

            {/* 20 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                20. Waiver
              </h3>
              <p className="mt-3 leading-[1.8]">
                The failure of Trazo to enforce any right or provision of these
                Terms shall not constitute a waiver of such right or provision.
                Any waiver of any provision shall be effective only if in
                writing and signed by Trazo.
              </p>
            </section>

            {/* 21 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                21. Severability
              </h3>
              <p className="mt-3 leading-[1.8]">
                If any provision of these Terms is held to be unenforceable or
                invalid, that provision will be limited or eliminated to the
                minimum extent necessary, and the remaining provisions will
                remain in full force and effect.
              </p>
            </section>

            {/* 22 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                22. Entire Agreement
              </h3>
              <p className="mt-3 leading-[1.8]">
                These Terms, together with the{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
                ,{" "}
                <a
                  href="/cookie-policy"
                  className="text-primary hover:underline"
                >
                  Cookie Policy
                </a>
                , and any applicable subscription order, constitute the entire
                agreement between you and Trazo with respect to the Platform and
                supersede all prior and contemporaneous agreements,
                representations, and understandings.
              </p>
            </section>

            {/* 23 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                23. Contact Us
              </h3>
              <p className="mt-3 leading-[1.8]">
                For questions about these Terms, contact us at:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-6">
                <p className="font-semibold text-foreground">Legal Inquiries</p>
                <p className="mt-1 leading-[1.8]">
                  Email:{" "}
                  <a
                    href="mailto:legal@trazo.io"
                    className="text-primary hover:underline"
                  >
                    legal@trazo.io
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
