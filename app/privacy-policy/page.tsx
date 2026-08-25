import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Trazo",
  description:
    "How Trazo collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              How Trazo collects, uses, and protects your personal information.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: August 23, 2026
            </p>
          </header>

          <div className="prose-custom space-y-10 text-foreground/80">
            {/* 1 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                1. Introduction
              </h3>
              <p className="mt-3 leading-[1.8]">
                {
                  'Trazo ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our organic recordkeeping platform.'
                }
              </p>
              <p className="mt-3 leading-[1.8]">
                This policy applies to our website, mobile applications, QR code
                scanning services, and all related software and services
                (collectively, the &quot;Platform&quot;).
              </p>
            </section>

            {/* 2 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                2. Information We Collect
              </h3>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.1 Personal Information
              </h4>
              <p className="mt-2 leading-[1.8]">
                We collect personal information that you provide directly to us:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Account Information:</strong> Email address, first and
                  last name, phone number (optional)
                </li>
                <li>
                  <strong>Profile Data:</strong> Profile images, user
                  preferences, notification settings
                </li>
                <li>
                  <strong>Authentication Data:</strong> Email verification
                  status, password (encrypted), social login IDs
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.2 Business Information (Producer Accounts)
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Company Details:</strong> Business name, trade name,
                  description, industry classification
                </li>
                <li>
                  <strong>Business Address:</strong> Street address, city, state,
                  country, postal code
                </li>
                <li>
                  <strong>Tax Information:</strong> Tax ID, EIN, RUT, or other
                  fiscal identification numbers
                </li>
                <li>
                  <strong>Contact Information:</strong> Business email, phone,
                  website, social media profiles
                </li>
                <li>
                  <strong>Business Metadata:</strong> Employee count,
                  certifications, sustainability practices
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.3 Agricultural Production Data
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Farm Information:</strong> Establishment names,
                  locations, geospatial coordinates
                </li>
                <li>
                  <strong>Crop Data:</strong> Crop types, production methods,
                  agricultural practices
                </li>
                <li>
                  <strong>Records & Carbon Data:</strong> Record-completeness
                  checks, emission factors, direct operational emission estimates
                </li>
                <li>
                  <strong>Production Events:</strong> Agricultural timelines,
                  equipment usage, chemical applications
                </li>
                <li>
                  <strong>Environmental Data:</strong> Weather conditions, soil
                  data, irrigation information
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.4 Usage and Analytics Data
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Platform Usage:</strong> Feature utilization, session
                  duration, user interactions
                </li>
                <li>
                  <strong>QR Code Analytics:</strong> Scan counts, geographic
                  data, consumer engagement metrics
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, device
                  model, operating system, IP address
                </li>
                <li>
                  <strong>Educational Engagement:</strong> Content viewed, time
                  spent, quiz scores, course progress
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.5 Payment and Subscription Data
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Billing Information:</strong> Subscription plans,
                  billing cycles, payment history
                </li>
                <li>
                  <strong>Usage Metrics:</strong> Storage used, QR scans,
                  productions tracked for billing
                </li>
                <li>
                  <strong>Payment Processing:</strong> Payment methods handled
                  securely by Stripe (we do not store credit card numbers)
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.6 NOP Audit Documentation Data
              </h4>
              <p className="mt-2 leading-[1.8]">
                When you generate a NOP Audit PDF for an organic certifier, the
                Platform compiles the following information into the export:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Photo Metadata:</strong> Field photos you have uploaded
                  may carry EXIF metadata including GPS coordinates, camera model,
                  and capture timestamp. This metadata is embedded in the audit
                  PDF as part of tamper-evidence captions. You can disable GPS on
                  your camera or strip EXIF before upload if you prefer not to
                  share precise location data with your certifier.
                </li>
                <li>
                  <strong>Record Change History:</strong> Every edit to a
                  production record is logged with timestamp and the responsible
                  user (farmer, field manager, or automated system). Change logs
                  are retained for 5 years and included in audit PDFs you share
                  with certifiers.
                </li>
                <li>
                  <strong>Drift Detector Findings:</strong> Chemical and soil
                  amendment inputs you log are automatically matched against the
                  OMRI Listed Products database and the USDA National List of
                  Allowed and Prohibited Substances. Mismatches and unresolved
                  inputs are surfaced in the audit PDF as drift findings. These
                  matches use fuzzy text comparison and may produce false
                  positives or false negatives.
                </li>
                <li>
                  <strong>Compliance Snapshot:</strong> The page-1 snapshot
                  derives PASS / REVIEW / FAIL outcomes from the data you have
                  entered. It is generated automatically; Trazo does not
                  independently verify the underlying records.
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                3. How We Use Your Information
              </h3>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                3.1 Platform Services
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Provide record-completeness checks and direct operational
                  emission estimates using published EPA/USDA emission factors
                </li>
                <li>
                  Generate and manage QR codes for consumer transparency access
                </li>
                <li>
                  Track agricultural production events and sustainability metrics
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                3.2 Account Management
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Create and maintain user accounts with role-based access
                  control
                </li>
                <li>
                  Process subscription payments and manage billing cycles
                </li>
                <li>
                  Send service-related notifications and account updates
                </li>
                <li>Provide customer support and technical assistance</li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                3.3 Platform Improvement and Research
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Analyze usage patterns to improve Platform functionality
                </li>
                <li>
                  Create aggregated, anonymized datasets for agricultural
                  research
                </li>
                <li>
                  Develop new features and carbon calculation methodologies
                </li>
                <li>Monitor Platform performance and security</li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                3.4 Legal Compliance
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Comply with applicable tax, financial, and regulatory
                  record-keeping requirements
                </li>
                <li>
                  Maintain agricultural data integrity for certification and
                  audit purposes
                </li>
                <li>Respond to legal requests and prevent fraud</li>
                <li>Maintain audit trails for regulatory compliance</li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                3.5 Legal Basis for Processing (GDPR Art. 6)
              </h4>
              <p className="mt-2 leading-[1.8]">
                For users in the European Economic Area (EEA) and United
                Kingdom, we process your personal data under the following legal
                bases:
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-2 pr-4 font-semibold text-foreground">
                        Processing Activity
                      </th>
                      <th className="pb-2 font-semibold text-foreground">
                        Legal Basis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4">
                        Account creation, authentication, subscription billing
                      </td>
                      <td className="py-2">
                        Contract performance (Art. 6(1)(b))
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Record-completeness checks, carbon calculations, QR codes,
                        production event tracking
                      </td>
                      <td className="py-2">
                        Contract performance (Art. 6(1)(b))
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Voice recording processing via OpenAI
                      </td>
                      <td className="py-2">
                        Consent (Art. 6(1)(a)): you initiate each recording
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Analytics cookies (Vercel Analytics)
                      </td>
                      <td className="py-2">
                        Consent (Art. 6(1)(a)): via cookie banner
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Platform improvement, aggregated research
                      </td>
                      <td className="py-2">
                        Legitimate interest (Art. 6(1)(f)): improving service
                        quality
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Security monitoring, fraud prevention
                      </td>
                      <td className="py-2">
                        Legitimate interest (Art. 6(1)(f)): protecting users
                        and platform
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Tax records, financial compliance, legal requests
                      </td>
                      <td className="py-2">
                        Legal obligation (Art. 6(1)(c))
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        NOP Audit PDF generation and certifier sharing (you
                        choose when to export and to whom you send it)
                      </td>
                      <td className="py-2">
                        Contract performance (Art. 6(1)(b))
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Drift detection and compliance snapshot (automatic
                        checks against OMRI / National List on event save)
                      </td>
                      <td className="py-2">
                        Contract performance (Art. 6(1)(b)): part of the
                        organic documentation feature
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 leading-[1.8]">
                Where processing is based on consent, you may withdraw consent
                at any time without affecting the lawfulness of processing
                performed before withdrawal. To withdraw consent, contact{" "}
                <a
                  href="mailto:privacy@trazo.io"
                  className="text-primary hover:underline"
                >
                  privacy@trazo.io
                </a>
                .
              </p>
            </section>

            {/* 4 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                4. How We Share Your Information
              </h3>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                4.1 Third-Party Service Providers
              </h4>
              <p className="mt-2 leading-[1.8]">
                We share information with trusted service providers who assist in
                operating our Platform:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>USDA APIs</strong>: Crop types, production methods for
                  emission factor validation and compliance
                </li>
                <li>
                  <strong>Stripe</strong>: Billing information, usage metrics
                  for payment processing and subscription management
                </li>
                <li>
                  <strong>DigitalOcean</strong>: Application hosting and
                  managed database services
                </li>
                <li>
                  <strong>AWS</strong>: Media file storage (S3) for images,
                  documents, and QR codes
                </li>
                <li>
                  <strong>OpenAI</strong>: Voice recordings, text data for
                  AI-powered data processing (Trazo has opted out of model
                  training; your data is not used to train OpenAI models)
                </li>
                <li>
                  <strong>Vercel Analytics</strong>: Anonymized page view and
                  performance data for platform improvement (no PII collected)
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                4.2 Consumer Transparency Sharing
              </h4>
              <p className="mt-2 leading-[1.8]">
                As directed by Producer users, we share specific carbon and
                sustainability data with consumers through:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  QR code scanning providing documented farming practices,
                  photos and certification status. No score, grade, tier or
                  badge of Trazo&apos;s own is shown to consumers &mdash; practices
                  are counted, not graded
                </li>
                <li>Public sustainability metrics and certification status</li>
                <li>
                  Agricultural practice information for transparency
                </li>
                <li>
                  Farm location and establishment information as authorized
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                4.3 Legal Requirements
              </h4>
              <p className="mt-2 leading-[1.8]">
                We may disclose information when required by law or to: comply
                with legal process or government requests; protect against fraud
                or security threats; enforce our Terms of Service; protect the
                rights, property, or safety of Trazo, users, or the public.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                4.4 Aggregated Data
              </h4>
              <p className="mt-2 leading-[1.8]">
                We may share aggregated, anonymized data that cannot identify
                individual users or businesses for research, industry reports,
                and platform improvement purposes.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                4.5 Certifier Sharing (NOP Audit PDF)
              </h4>
              <p className="mt-2 leading-[1.8]">
                When you export a NOP Audit PDF, the Platform produces a file you
                control. Trazo does not transmit the PDF to any certifier on your
                behalf. You choose when, how, and to whom you share it (typically
                by uploading to your certifier&apos;s portal such as MyCCOF or
                emailing it directly). Once you share the PDF, the recipient will
                have access to the data described in Section 2.6, including
                photo EXIF/GPS metadata, change-history attribution, drift
                findings, and the compliance snapshot.
              </p>
              <p className="mt-2 leading-[1.8]">
                Trazo is a documentation platform and is not a USDA-accredited
                certifier. We do not represent your operation to any certifier
                and do not receive their decisions. Recipients of the PDF are
                bound by their own privacy obligations, not ours.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                5. Data Storage and Security
              </h3>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                5.1 Data Storage Locations
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Primary Database:</strong> PostgreSQL hosted on
                  DigitalOcean Managed Database
                </li>
                <li>
                  <strong>File Storage:</strong> AWS S3 for images, documents,
                  and QR codes
                </li>
                <li>
                  <strong>Security Logs:</strong> Rotating log files with
                  limited retention
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                5.2 Security Measures
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Authentication:</strong> JWT tokens with 15-minute
                  access and 7-day refresh periods (30 days with Remember
                  Me)
                </li>
                <li>
                  <strong>Access Control:</strong> Role-based permissions with
                  granular user roles
                </li>
                <li>
                  <strong>Rate Limiting:</strong> 100 requests/hour for anonymous
                  users, 1000/hour for authenticated users
                </li>
                <li>
                  <strong>Encryption:</strong> HTTPS for all data transmission,
                  secure cookie handling
                </li>
                <li>
                  <strong>Input Validation:</strong> Comprehensive validation,
                  especially for carbon calculation data
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                5.3 International Data Transfers
              </h4>
              <p className="mt-2 leading-[1.8]">
                Your data may be transferred to and processed in countries other
                than your own, including the United States where our primary
                servers are located. For these transfers, we implement:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>EU-US Data Privacy Framework:</strong> Compliance with
                  adequacy decisions where applicable
                </li>
                <li>
                  <strong>Standard Contractual Clauses (SCCs):</strong>{" "}
                  EU Commission-approved transfer mechanisms
                </li>
                <li>
                  <strong>Technical Safeguards:</strong> Encryption, access
                  controls, and monitoring systems
                </li>
                <li>
                  <strong>Contractual Protections:</strong> Data processing
                  agreements with all third-party processors
                </li>
              </ul>
              <p className="mt-3 leading-[1.8]">
                EU residents can request details about specific transfer
                mechanisms and safeguards applicable to their data.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                6. Data Retention
              </h3>
              <p className="mt-3 leading-[1.8]">
                We retain your information for different periods depending on the
                type of data and legal requirements:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Account Information:</strong> Until account deletion +
                  90 days
                </li>
                <li>
                  <strong>Agricultural Data:</strong> 7 years or until deletion
                  request
                </li>
                <li>
                  <strong>Payment Records:</strong> 7 years (tax and financial
                  compliance)
                </li>
                <li>
                  <strong>Usage Analytics:</strong> 2 years
                </li>
                <li>
                  <strong>Security Logs:</strong> 1 year
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                7. Your Privacy Rights
              </h3>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.1 Access and Control
              </h4>
              <p className="mt-2 leading-[1.8]">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Access:</strong> Request a copy of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information (subject to limitations)
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a portable
                  format
                </li>
                <li>
                  <strong>Restriction:</strong> Limit how we process your
                  information
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.2 California Consumer Privacy Act (CCPA) Rights
              </h4>
              <p className="mt-2 leading-[1.8]">
                California residents have additional rights under the CCPA:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Right to know what personal information is collected and how
                  it&apos;s used
                </li>
                <li>
                  Right to delete personal information (with certain exceptions)
                </li>
                <li>
                  Right to opt out of the sale of personal information (we do not
                  sell personal information)
                </li>
                <li>
                  Right to non-discrimination for exercising CCPA rights
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.3 European Union GDPR Rights
              </h4>
              <p className="mt-2 leading-[1.8]">
                EU residents have rights under the General Data Protection
                Regulation (GDPR):
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Legal basis for processing (legitimate interest, consent,
                  contract performance)
                </li>
                <li>
                  Right to withdraw consent where processing is based on consent
                </li>
                <li>
                  Right to object to processing based on legitimate interests
                </li>
                <li>Right to file complaints with supervisory authorities</li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.4 Limitations on Rights and GDPR Compliance
              </h4>
              <p className="mt-2 leading-[1.8]">
                Some privacy rights may be limited by technical and legal
                constraints:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Legal Requirements:</strong> Data required for
                  compliance with agricultural regulations and audit trails
                </li>
                <li>
                  <strong>Aggregated Data:</strong> Information that has been
                  anonymized and cannot identify individuals
                </li>
                <li>
                  <strong>Active Legal Proceedings:</strong> Data subject to
                  litigation hold or investigation requirements
                </li>
              </ul>
              <p className="mt-3 leading-[1.8]">
                <strong>Important:</strong> We will provide detailed
                explanations of any limitations when processing your requests.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                8. Cookies and Tracking Technologies
              </h3>
              <p className="mt-3 leading-[1.8]">
                We use cookies and similar technologies to enhance your
                experience and analyze Platform usage:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Essential Cookies:</strong> Required for Platform
                  functionality and security
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  the Platform is used (opt-in only)
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences
                  and settings
                </li>
              </ul>
              <p className="mt-3 leading-[1.8]">
                You can control cookie settings through the cookie consent
                banner displayed on your first visit, or through your browser
                preferences. For detailed information about specific cookies,
                see our{" "}
                <a
                  href="/cookie-policy"
                  className="text-primary hover:underline"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </section>

            {/* 9 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                9. Data Breach Notification
              </h3>
              <p className="mt-3 leading-[1.8]">
                In the event of a data breach that may affect your personal
                information, we will:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Authority Notification:</strong> Report to supervisory
                  authorities within 72 hours when required by law
                </li>
                <li>
                  <strong>Individual Notification:</strong> Notify affected
                  users without unreasonable delay if high risk to rights and
                  freedoms
                </li>
                <li>
                  <strong>Remedial Actions:</strong> Implement immediate
                  containment and recovery measures
                </li>
                <li>
                  <strong>Documentation:</strong> Maintain records of breach
                  assessment and response actions
                </li>
              </ul>
            </section>

            {/* 10 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                10. Children&apos;s Privacy and Age Verification
              </h3>
              <p className="mt-3 leading-[1.8]">
                Our Platform is a business tool and is not intended for children
                under 18. Registration requires accepting our Terms of Service,
                under which you represent that you are at least 18 and, where you
                act for a business, authorized to do so. We do not knowingly
                collect personal information from children under 18.
              </p>
              <p className="mt-3 leading-[1.8]">
                If we become aware that we have collected information from a
                child under 18, we will delete it promptly. Parents or guardians
                who believe their child has provided information to us should
                contact us immediately at{" "}
                <a
                  href="mailto:privacy@trazo.io"
                  className="text-primary hover:underline"
                >
                  privacy@trazo.io
                </a>
                .
              </p>
            </section>

            {/* 11 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                11. Changes to This Privacy Policy
              </h3>
              <p className="mt-3 leading-[1.8]">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of material changes by:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>Email notification to your registered email address</li>
                <li>Prominent notice on our Platform</li>
                <li>
                  Updated &quot;Last modified&quot; date at the top of this
                  policy
                </li>
              </ul>
              <p className="mt-3 leading-[1.8]">
                For changes that affect consent-based processing (such as
                analytics or voice recording), we will seek your affirmative
                consent before applying the new terms. For other changes,
                continued use of the Platform after the notice period
                constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                12. Contact Us
              </h3>
              <p className="mt-3 leading-[1.8]">
                If you have questions about this Privacy Policy or want to
                exercise your privacy rights, please contact us:
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
                <p className="leading-[1.8]">Subject: Privacy Rights Request</p>
              </div>
              <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-6">
                <p className="font-semibold text-foreground">General Contact</p>
                <p className="mt-1 leading-[1.8]">
                  Email:{" "}
                  <a
                    href="mailto:support@trazo.io"
                    className="text-primary hover:underline"
                  >
                    support@trazo.io
                  </a>
                </p>
              </div>
              <p className="mt-4 leading-[1.8]">
                We will respond to your privacy requests within 30 days (or as
                required by applicable law). For verification purposes, we may
                need to confirm your identity before processing certain requests.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
