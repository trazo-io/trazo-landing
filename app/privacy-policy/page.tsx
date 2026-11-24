import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Trazo",
  description:
    "How Trazo collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              How Trazo collects, uses, and protects your personal information.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: November 24, 2026
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
                This policy applies to our website, web application, QR code
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
                  <strong>Business Address:</strong> Street address, city,
                  state, country, postal code
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
                  checks, emission factors, and emission estimates (the
                  operation&apos;s own emissions plus the manufacturing of the
                  fertilizer and chemicals it buys)
                </li>
                <li>
                  <strong>Production Events:</strong> Agricultural timelines,
                  equipment usage, chemical applications
                </li>
                <li>
                  <strong>Environmental Data:</strong> Weather conditions, soil
                  data, irrigation information
                </li>
                <li>
                  <strong>Personnel References:</strong> Names of the people
                  recorded as having performed logged work (&quot;performed
                  by&quot;). On public consumer pages these are masked to
                  initials (e.g. &quot;Farm team (A.T.)&quot;) unless the
                  producer explicitly enables full names
                </li>
                <li>
                  <strong>Third-Party Business Records:</strong> Information a
                  producer records about other businesses in order to complete
                  their organic system plan: off-farm handlers and
                  storage facilities (name, address, certifying agent,
                  certificate number and dates), input manufacturers, and
                  suppliers. Certifiers require these on their own forms (for
                  example CCOF G6.1 and G6.2, WSDA sections K and L). This
                  information appears in the producer&rsquo;s certifier packet
                  and audit exports. It is{" "}
                  <strong>not shown on public consumer pages</strong>
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.4 Usage and Analytics Data
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Platform Usage:</strong> Feature utilization, session
                  duration, user interactions. For accounts signed in to the
                  application this includes a masked session replay, a
                  recording of the interface layout and where you clicked, with
                  every piece of text and every form field hidden before the
                  recording leaves your browser
                </li>
                <li>
                  <strong>QR Code Analytics:</strong> Scan counts and the
                  approximate region of a scan, derived on our own servers from
                  a one-way-hashed IP address using a local geolocation
                  database. The IP address is stored only as a hash and is not
                  sent to any third party
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, device
                  model, operating system, IP address
                </li>
                <li>
                  <strong>Error Reports:</strong> When something fails, the
                  browser and our servers send an error report to Sentry: the
                  page or request that failed, the browser and device type, and
                  the steps that led to the error. Web addresses are sent
                  without their query string, and the private part of a review
                  or invitation link is removed, so the links that act as a
                  password never reach Sentry. Your IP address is not included
                </li>
                <li>
                  <strong>Educational Engagement:</strong> FAQ views and
                  helpfulness votes, counted in aggregate per article; we
                  do not track educational progress per user
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
                  <strong>Photo Metadata:</strong> Field photos you have
                  uploaded may carry EXIF metadata including GPS coordinates,
                  camera model, and capture timestamp. This metadata is embedded
                  in the audit PDF as part of tamper-evidence captions. You can
                  disable GPS on your camera or strip EXIF before upload if you
                  prefer not to share precise location data with your certifier.
                </li>
                <li>
                  <strong>Record Change History:</strong> Every edit to a
                  production record is logged with timestamp and the responsible
                  user (farmer, field manager, or automated system). Change logs
                  are kept for 5 years while your account is open and included
                  in audit PDFs you share with certifiers.
                </li>
                <li>
                  <strong>Drift Detector Findings:</strong> Chemical and soil
                  amendment inputs you log are automatically matched against the
                  OMRI Listed Products database and the USDA National List of
                  Allowed and Prohibited Substances. Mismatches and unresolved
                  inputs are surfaced in the audit PDF as drift findings. These
                  matches use exact names, ignoring case and spacing, and a
                  hand-checked alias table; a partial match is shown only as a
                  possible match and decides nothing.
                </li>
                <li>
                  <strong>Documentation Snapshot:</strong> The page-1 snapshot
                  lists documentation checks computed from the data you have
                  entered. The PDF marks each row DOCUMENTED, GAP (a record is
                  missing), REVIEW (for you and your certifier to look at), N/A
                  (there was nothing to check) or FYI (reported for information
                  only).
                  It is generated automatically; Trazo does not independently
                  verify the underlying records, and the snapshot is not a
                  determination of compliance.
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                2.7 Crew Messages (People Without an Account)
              </h4>
              <p className="mt-2 leading-[1.8]">
                A farm can let its crew report work by sending a WhatsApp
                message or voice note to the farm&apos;s Trazo number. The
                people who send these messages do not have a Trazo account. For
                each of them we hold:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Phone number and name:</strong> the number the farm
                  added to its crew list, and the name the farm gave it
                </li>
                <li>
                  <strong>Messages:</strong> the text of each message, the time
                  it arrived and, for a voice note, its transcript
                </li>
                <li>
                  <strong>Voice recordings:</strong> kept by Twilio, not by
                  Trazo, only until someone at the farm has reviewed the note
                  (see Section 6)
                </li>
              </ul>
              <p className="mt-3 leading-[1.8]">
                A message never becomes a record by itself. It arrives as a
                suggestion, and a person at the farm decides what to save,
                under their own name. The first time a number writes, Trazo
                answers with a notice saying who reads the messages, which
                providers handle voice notes, that the recording is deleted
                after review, and that replying STOP ends it. After STOP, Trazo
                reads nothing else from that number. The farm is responsible
                for the crew list it gives us; a crew member can also ask us
                directly about their data at privacy@trazo.io.
              </p>
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
                  Provide record-completeness checks and emission estimates (the
                  operation&apos;s own emissions plus the manufacturing of the
                  fertilizer and chemicals it buys), using emission factors
                  whose source is stated per input class
                </li>
                <li>
                  Generate and manage QR codes for consumer transparency access
                </li>
                <li>
                  Track agricultural production events and sustainability
                  metrics
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
                <li>Process subscription payments and manage billing cycles</li>
                <li>Send service-related notifications and account updates</li>
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
                        Record-completeness checks, carbon calculations, QR
                        codes, production event tracking
                      </td>
                      <td className="py-2">
                        Contract performance (Art. 6(1)(b))
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Voice transcription via Deepgram; transcript processing
                        via OpenAI
                      </td>
                      <td className="py-2">
                        Consent (Art. 6(1)(a)): you initiate each recording
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Crew messages sent to a farm&apos;s Trazo number
                        (delivery via Twilio and WhatsApp, voice notes
                        transcribed by Deepgram and read by OpenAI)
                      </td>
                      <td className="py-2">
                        Legitimate interest (Art. 6(1)(f)): the farm keeping
                        the records of its own work. A crew member can end it
                        at any time by replying STOP
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Error reports (Sentry)
                      </td>
                      <td className="py-2">
                        Legitimate interest (Art. 6(1)(f)): finding and fixing
                        what breaks
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Reading the documents you send us for account setup
                        (spreadsheets, photos of your records and of product
                        labels) via Anthropic, to draft records that you review
                        before anything is saved
                      </td>
                      <td className="py-2">
                        Consent (Art. 6(1)(a)): you send the documents and
                        approve the preview
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Analytics on our public pages (marketing site, consumer
                        QR pages): Vercel Analytics, PostHog
                      </td>
                      <td className="py-2">
                        Consent (Art. 6(1)(a)): via cookie banner
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Product analytics inside the signed-in application
                        (PostHog), including masked session replay
                      </td>
                      <td className="py-2">
                        Legitimate interest (Art. 6(1)(f)): understanding how
                        the product is used so we can fix what does not work.
                        Limited to account holders who have accepted our Terms.
                        You can object at any time (see Section 7)
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
                        Legitimate interest (Art. 6(1)(f)): protecting users and
                        platform
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Tax records, financial compliance, legal requests
                      </td>
                      <td className="py-2">Legal obligation (Art. 6(1)(c))</td>
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
                        Drift detection and documentation snapshot (automatic
                        checks against OMRI / National List on event save)
                      </td>
                      <td className="py-2">
                        Contract performance (Art. 6(1)(b)): part of the organic
                        documentation feature
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
                We share information with trusted service providers who assist
                in operating our Platform:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>USDA APIs</strong>: Crop type and state only, to look
                  up published emission-factor data. No farm identity, location,
                  or personal data is included in these requests. Organic
                  certification cross-checks run against a locally stored copy
                  of the USDA Organic Integrity Database, not by sending your
                  data to USDA
                </li>
                <li>
                  <strong>Stripe</strong>: Billing information, usage metrics
                  for payment processing and subscription management
                </li>
                <li>
                  <strong>DigitalOcean</strong>: Application hosting and managed
                  database services
                </li>
                <li>
                  <strong>AWS</strong>: Media file storage (S3) for images,
                  documents, and QR codes
                </li>
                <li>
                  <strong>Deepgram</strong>: Voice audio for speech-to-text
                  transcription. When you use voice logging, audio is streamed
                  directly from your browser to Deepgram and is not stored by
                  Trazo. For a crew voice note (Section 2.7), our server fetches
                  the recording from Twilio and sends it to Deepgram without
                  saving it
                </li>
                <li>
                  <strong>OpenAI</strong>: The <em>text transcript</em> of a
                  voice entry, the text of a crew message, plus text data, for
                  AI-powered field extraction. OpenAI does not receive voice
                  audio (Trazo has opted out of model training; your data is not
                  used to train OpenAI models)
                </li>
                <li>
                  <strong>Twilio and WhatsApp (Meta)</strong>: Crew messages
                  (Section 2.7): the sender&apos;s phone number, the message,
                  and voice recordings, which Twilio stores until Trazo deletes
                  them. Trazo&apos;s replies to crew numbers are sent the same
                  way
                </li>
                <li>
                  <strong>Resend</strong>: Delivery of the emails Trazo sends:
                  your email address and the message, such as a verification
                  code, a password reset link or an invitation
                </li>
                <li>
                  <strong>Sentry</strong>: Error reports from the browser and
                  our servers, as described in Section 2.4
                </li>
                <li>
                  <strong>Google</strong>: If you sign in with Google, Google
                  confirms your identity and gives us your name and email
                  address. When you search for a farm address or view a parcel
                  map, the address you type and the map area are sent to Google
                  Maps
                </li>
                <li>
                  <strong>Facebook (Meta)</strong>: If you sign in with
                  Facebook, Facebook confirms your identity and gives us your
                  name and email address
                </li>
                <li>
                  <strong>Anthropic</strong>: The documents you send us when we
                  set up your account for you (spreadsheets, photos of your
                  records and of product labels), used to draft records that a
                  person checks and that you review before anything is saved.
                  Sent through Anthropic&apos;s API, whose commercial terms
                  exclude training on customer data. Your original files are
                  stored by Trazo on AWS, not by Anthropic
                </li>
                <li>
                  <strong>Vercel Analytics</strong>: Anonymized page view and
                  performance data for platform improvement (no PII collected)
                </li>
                <li>
                  <strong>PostHog</strong>: Product analytics for the signed-in
                  application: which screens are opened, which actions
                  are taken, and a session replay of the interface. Replay is
                  recorded with all text and all form input masked, so it shows
                  the layout you saw and where you clicked, never the words on
                  screen: no worker names, no parcel locations, no figures and
                  nothing you typed. The only account information sent is your
                  numeric user ID, never your name or email address
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                4.2 Consumer Transparency Sharing
              </h4>
              <p className="mt-2 leading-[1.8]">
                A production becomes publicly visible only when its producer
                explicitly publishes it; a published season can be unpublished
                at any time. Public consumer pages then show:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  Documented farming practices with dates, photos, and
                  certification status, shown as counts and records. Trazo
                  assigns no grade, rating, tier or badge of its own
                </li>
                <li>
                  An estimate of the season&apos;s emissions (the
                  operation&apos;s own emissions plus the manufacturing of the
                  fertilizer and chemicals it buys), in a collapsed, labelled
                  section
                </li>
                <li>
                  Farm location at the precision level the producer selects
                  (exact, approximate, or hidden)
                </li>
              </ul>
              <p className="mt-3 leading-[1.8]">
                <strong>What consumer pages never show.</strong> A uniform
                withholding policy applies to every farm on the Platform and
                cannot be altered per account. Public pages never include:
                worker-safety and regulatory compliance fields (such as
                restricted-entry intervals, applicator identities and
                certification numbers, or permit numbers); supplier and purchase
                records entered in their own fields (supplier names, invoices,
                supplier lot numbers); the full names of farm
                personnel unless the producer has expressly enabled them; and
                internal record categories that exist for certifier review
                rather than consumers (input-sourcing searches, transport
                logistics, buffer-strip disposition, and equipment-cleanout
                logs). Because the policy is uniform, producers cannot
                selectively hide individual practice records or field values
                from published seasons: what a consumer page shows means
                the same thing for every farm.
              </p>
              <p className="mt-3 leading-[1.8]">
                <strong>Notes a producer writes.</strong> One box on each
                activity record is labelled as public, and what a producer types
                there is published in their own words. Every other note field is
                for their certifier and their team and is not published. As an
                additional safeguard, if a supplier name the producer recorded in
                a supplier field also appears in that public box, it is removed
                there. That check is an exact match on a name already in the
                record, so it is a safeguard rather than a guarantee: it cannot
                recognise every abbreviation or spelling, which is why the box is
                labelled as public where it is written.
              </p>

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
                When you export a NOP Audit PDF, the Platform produces a file
                you control. Trazo does not transmit the PDF to any certifier on
                your behalf. You choose when, how, and to whom you share it
                (typically by uploading to your certifier&apos;s portal such as
                MyCCOF or emailing it directly). Once you share the PDF, the
                recipient will have access to the data described in Section 2.6,
                including photo EXIF/GPS metadata, change-history attribution,
                drift findings, and the documentation snapshot.
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
                  <strong>Security Logs:</strong> Written to our hosting
                  provider&apos;s runtime log (DigitalOcean App Platform);
                  Trazo keeps no separate copy
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                5.2 Security Measures
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Authentication:</strong> JWT tokens with 15-minute
                  access and 7-day refresh periods (30 days with Remember Me)
                </li>
                <li>
                  <strong>Access Control:</strong> Role-based permissions with
                  granular user roles
                </li>
                <li>
                  <strong>Rate Limiting:</strong> sign-in, sign-up, password
                  reset and email verification attempts are limited per network
                  address
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
                  <strong>Standard Contractual Clauses (SCCs):</strong> EU
                  Commission-approved transfer mechanisms
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
                We retain your information for different periods depending on
                the type of data and legal requirements:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Account Information:</strong> While your account is
                  open. Deleted within 30 days of a confirmed request to close
                  the account (Section 7.1)
                </li>
                <li>
                  <strong>Farm Records:</strong> While your account is open.
                  Trazo does not delete a season&apos;s records inside the five
                  years the USDA organic regulations require a certified
                  operation to keep them (7 CFR 205.103(b)(4)), even if you ask
                  for one record to be removed. When you close your account, we
                  send you an export first and then delete the records within
                  30 days; keeping that copy for the rest of the five years is
                  then your operation&apos;s responsibility
                </li>
                <li>
                  <strong>Crew Voice Recordings:</strong> Deleted from Twilio
                  when someone at the farm saves or discards the note. A note
                  waiting for review keeps its recording while it waits,
                  because the recording is how the farm checks the transcript,
                  but never more than 30 days. A note Trazo could not read, or
                  one stuck while being transcribed, has its recording deleted
                  after 14 days. The
                  transcript and message text stay with the farm&apos;s records
                </li>
                <li>
                  <strong>Payment Records:</strong> Invoices and payment history
                  are kept in Stripe and in our accounting records as long as tax
                  law requires, also after an account is closed. Card details are
                  held by Stripe, never by Trazo
                </li>
                <li>
                  <strong>Backups:</strong> Our database backups roll over
                  daily, so deleted data leaves them within 8 days
                </li>
                <li>
                  <strong>Product Analytics:</strong> 1 year, covering which
                  screens were opened and which actions were taken, held by
                  PostHog
                </li>
                <li>
                  <strong>Session Replay:</strong> 30 days for masked
                  recordings, deleted automatically by PostHog once the period
                  ends
                </li>
                <li>
                  <strong>Security Logs:</strong> As long as DigitalOcean App
                  Platform keeps runtime logs; Trazo keeps no separate copy
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
                  <strong>Deletion:</strong> To close your account and delete
                  its data, email privacy@trazo.io from the address on the
                  account. We confirm the request with you, send you an export
                  of your records and your uploaded files, take any published
                  consumer pages down straight away, and delete the account and
                  its data within 30 days
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
                  Right to opt out of the sale of personal information (we do
                  not sell personal information)
                </li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
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
                  <strong>Analytics Cookies:</strong> Help us understand how the
                  Platform is used. On our public pages (the marketing
                  site and consumer QR pages) these are opt-in only, set
                  after you accept the cookie banner. Inside the signed-in
                  application they are set for account holders under legitimate
                  interest, as described in Section 3
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
                under which you represent that you are at least 18 and, where
                you act for a business, authorized to do so. We do not knowingly
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
                For changes that affect consent-based processing (such as voice
                recording, or analytics on our public pages), we will seek your
                affirmative consent before applying the new terms. For other
                changes, continued use of the Platform after the notice period
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
                <p className="font-semibold text-foreground">Data Controller</p>
                <p className="mt-1 leading-[1.8]">
                  Trazo is operated by Oscar Mu&ntilde;oz SAS, a{" "}
                  <em>sociedad por acciones simplificada</em> registered in
                  Uruguay, RUT 219072920010.
                </p>
              </div>
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
                need to confirm your identity before processing certain
                requests.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
