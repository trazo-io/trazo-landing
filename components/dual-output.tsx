import Image from "next/image";
import { ArrowDown, EyeOff, FileText, QrCode } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CertifierLogPreview } from "@/components/certifier-log-preview";

/**
 * The dual-output proof section.
 *
 * The hero already promises "enter it once, get two things". This is where that promise stops
 * being a claim: one real spray record from a California walnut block, and the two artifacts
 * it actually produced — the certifier's Input Application Log and the shopper's card.
 *
 * The redaction strip is the part no competitor shows. A grower's regulated detail (applicator
 * name, DPR certificate, EPA registration, REI/PHI, buffer distance) belongs to the certifier
 * and to nobody else; the same entry reaches a shopper with those fields withheld. That is a
 * product decision worth showing, not describing.
 *
 * Screenshots are real output from the platform, not mockups. Both are labelled as sample farm
 * data because they are — inventing a grower would undercut the entire point of the page.
 */

/** What the grower typed once, in the field. */
const ENTRY_FIELDS: Array<{ label: string; value: string }> = [
  { label: "Product", value: "Entrust SC Naturalyte Insect Control" },
  { label: "Date", value: "July 8, 2025" },
  // Mirrors the record exactly. The parcel is named "Block 1 – Chandler" in the app and
  // the export's Area cell reads "42.50 acres · Block 1"; an invented "(Chandler)" format
  // would contradict this section's own claim that nothing here was re-typed.
  { label: "Block", value: "Block 1 · 42.5 acres" },
  // The grower types a TOTAL, not a rate. Showing "8 fl oz/acre" here claimed both a
  // number they never entered and a unit the record does not store (volume_unit is "oz").
  // The per-acre rate is derived — which is the section's argument, so it belongs in the
  // outputs, not the input.
  { label: "Amount", value: "340 oz" },
  { label: "Method", value: "Air-blast" },
  { label: "Target", value: "Navel orangeworm" },
];

/**
 * Fields the certifier record carries that the public page deliberately does not. Every one of
 * these is stripped server-side before the consumer payload is built, not merely hidden in CSS.
 */
const WITHHELD = [
  "Applicator name",
  "DPR certificate #",
  "EPA registration #",
  "Re-entry interval",
  "Pre-harvest interval",
  "Buffer distance",
  "Supplier & invoice",
];

export function DualOutput() {
  return (
    <section
      id="one-entry-two-outputs"
      className="relative overflow-hidden border-y border-border bg-secondary/30 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="text-xs font-medium text-primary">
                One spray record, start to finish
              </span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              You log it once.{" "}
              <span className="text-primary">Two audiences</span> get what they
              each need.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              One spray record from an organic walnut block: the entry, and the
              two documents it produced. Nothing here was re-typed.
            </p>
          </div>
        </ScrollReveal>

        {/* ── The single input ─────────────────────────────────────────── */}
        <ScrollReveal delay={100}>
          <div className="mx-auto mt-12 max-w-xl">
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  What you enter, in the field
                </h3>
              </div>
              <dl className="divide-y divide-border">
                {/* Fixed label column rather than flex-wrap: with wrapping, a long value
                    ("Entrust SC Naturalyte Insect Control") dropped to its own line while a
                    short one stayed inline, so the column of values zig-zagged at 375px. */}
                {ENTRY_FIELDS.map((field) => (
                  <div
                    key={field.label}
                    className="grid grid-cols-[84px_1fr] items-baseline gap-x-3 py-2 sm:grid-cols-[100px_1fr]"
                  >
                    <dt className="text-sm text-muted-foreground">
                      {field.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Entered once, on a phone, at the edge of the block. Everything
                on both documents below comes from this entry and your farm
                profile, including the per-acre rate Trazo works out from the
                amount and the block size.
              </p>
            </div>

            <div className="flex justify-center py-6" aria-hidden="true">
              <ArrowDown className="text-primary" size={28} />
            </div>
          </div>
        </ScrollReveal>

        {/* ── The two outputs, as they actually appear on a phone ──────── */}
        <ScrollReveal delay={150} duration={800}>
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-start md:gap-12 lg:gap-20">
            {/* Certifier — a page of the PDF, shown as the document it is. Deliberately NOT
                in a phone frame: the audit export is a document a certifier reads at a desk or
                prints, and dressing it as an app screen would misrepresent the deliverable. */}
            <div className="flex w-full max-w-[320px] flex-col items-center gap-6 md:max-w-[300px]">
              <CertifierLogPreview />

              <div className="text-center">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1">
                  <FileText className="text-muted-foreground" size={13} />
                  <span className="text-xs font-medium text-muted-foreground">
                    Output 1 &middot; Your certifier
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  The full regulated record
                </h3>
                <p className="mx-auto mt-1 max-w-[300px] text-sm text-muted-foreground">
                  Rate, area, target pest, re-entry and pre-harvest intervals,
                  buffer distance, EPA registration, supplier invoice, with the
                  CFR sections cited.
                </p>
              </div>
            </div>

            {/* Consumer — the public page a shopper reaches from the QR code */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[2.5rem] border-[8px] border-foreground/10 bg-card shadow-2xl shadow-primary/10 md:h-[560px] md:w-[280px]">
                {/* Explicit dimensions, not `fill`. The asset is already the frame's exact
                    1:2 ratio, so there is nothing for srcset to negotiate — and with `fill`
                    the browser can paint a tiny candidate first, which object-cover blows up
                    to fill the frame. That intermediate state renders as a wildly zoomed,
                    cropped screenshot. */}
                <Image
                  src="/images/dual-output-consumer-v3.png"
                  alt="The same spray on the public Trazo page: the product name, the date, a plain-language line saying a pest treatment approved for organic growing was applied, an OMRI Listed badge, and details reading What's in it: Spinosad 22.5%, Area Treated: 42.5 acres, What it protects against: Navel orangeworm."
                  width={375}
                  height={750}
                  quality={95}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="text-center">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1">
                  <QrCode className="text-muted-foreground" size={13} />
                  <span className="text-xs font-medium text-muted-foreground">
                    Output 2 &middot; Your buyer
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  The same spray, in plain words
                </h3>
                <p className="mx-auto mt-1 max-w-[280px] text-sm text-muted-foreground">
                  What&rsquo;s in it, what it protects against, and that the
                  product is allowed in organic growing. No login, no acronyms
                  to look up.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── The redaction: the part nobody else shows ─────────────────── */}
        <ScrollReveal delay={250}>
          <div className="mt-14 rounded-2xl border border-border bg-background p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <EyeOff className="text-muted-foreground" size={18} />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-foreground">
                  What the public page leaves out, on purpose
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Your worker&rsquo;s name and licence number, the EPA
                  registration, the re-entry window, who you buy from: a
                  certifier is entitled to all of it. A shopper is not. Trazo
                  removes these before the public page is built, so they are
                  never sent to a browser.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {WITHHELD.map((field) => (
                    <li
                      key={field}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground line-through decoration-muted-foreground/50"
                    >
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Screenshots are unmodified output from Trazo, using sample farm data.
          Organic status shown is the status recorded for the input; Trazo does
          not certify farms.
        </p>
      </div>
    </section>
  );
}
