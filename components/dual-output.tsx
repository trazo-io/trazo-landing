import Image from "next/image";
import Link from "next/link";
import { ShieldCheck,
  ArrowDown,
  EyeOff,
  FileText,
  Link2,
  MapPin,
  Printer,
  QrCode,
  ToggleRight,
} from "lucide-react";
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
  { label: "Product", value: "Entrust SC" },
  { label: "Date", value: "August 7, 2025" },
  // Mirrors the record exactly. Re-cut 2026-08-15 onto Blue Oak Orchards, the farm the rest
  // of the page shows: the old entry came from a different demo farm (Block 1, 42.5 acres,
  // a Visalia supplier), so a visitor scrolling from the hero met a second, unrelated
  // operation. The export's Area cell reads "12.50 acres".
  { label: "Block", value: "East Block · 12.5 acres" },
  // The grower types a TOTAL, not a rate. Showing "8 fl oz/acre" here claimed both a
  // number they never entered and a unit the record does not store (volume_unit is "oz").
  // The per-acre rate is derived — which is the section's argument, so it belongs in the
  // outputs, not the input.
  { label: "Amount", value: "75 oz" },
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

/**
 * The three facts a grower needs before the buyer page is a decision rather than a risk:
 * it is optional and reversible, the code is something they physically print, and the page
 * does not give their field away. Verified against the product, not assumed —
 * `Dashboard/Buyer` (per-production publish Switch + QR and lot-tag downloads),
 * `transparency_views.py` (anonymous reads are gated on published=True), and
 * `history/services/privacy.py` (address, ZIP and coordinates stripped; new parcels publish
 * a ~1 km centre and no boundary).
 * Written here because the section previously carried only "nothing is public until you
 * publish" — a one-directional promise that never answered "can I take it back".
 *
 * ⛔ Do NOT restore the earlier third bullet, "you set how precise the map is, parcel by
 * parcel". `Parcel.location_disclosure_level` exists (exact | approximate | hidden) but is
 * READ-ONLY on the wire (`history/serializers.py:3426`) and has no producer-side editor —
 * grep found it in generated types and consumer render code only. Selling a control that
 * does not ship is the orphaned-feature class. Re-add the sentence in the same change that
 * ships the control, not before.
 */
const BUYER_PAGE_CONTROLS: Array<{
  icon: typeof ToggleRight;
  title: string;
  body: string;
}> = [
  {
    icon: ToggleRight,
    title: "Optional, and reversible",
    body: "A season goes public only when you finish it and confirm — clear that box and nothing publishes. One switch on your Buyer Page turns a published season off again, any time, and an unpublished season stops answering, whoever is holding the code.",
  },
  {
    icon: Printer,
    title: "Your code, on your own packaging",
    body: "Download the QR image, or a letter-size sheet of eight lot tags — farm, crop, lot ID, harvest date and the code — and put them on the cartons or bins, the way \u00a7 205.307 asks nonretail containers to be identified. Each finished season has its own lot, so the tag matches what is in the box.",
  },
  {
    // The credibility half of the withholding story. The redaction strip above shows what
    // is withheld; this card says WHY the page still carries weight: the policy is uniform
    // and no farm can edit it — the argument now written into ToS §8 and Privacy §4.2.
    icon: ShieldCheck,
    title: "Same rules for every farm",
    body: "What a published page shows is set by one policy, identical for every farm — nobody can hide an awkward record or quietly drop a field from a published season. Your choice is the season: publish it whole, or keep it private, reversibly. That is why a buyer can take the page at face value: an absence means the same thing on every Trazo page.",
  },
  {
    // The in-season surface (2026-08-25). Publish-on-finish is the shopper's consent
    // unit; a wholesale buyer decides BEFORE harvest, and the answer is a different
    // consent act, not a weaker one: a private link the grower mints and can revoke.
    // Verified against the product: CertifierAccessLink audience="buyer",
    // /buyer-review/<token>, opens logged, same claim-safe serializers as the page.
    icon: Link2,
    title: "Before harvest, a private link",
    body: "A wholesale buyer deciding in June does not wait for October. On the Compliance plan you can send them a private, read-only link to the season in progress — it shows exactly what the public page would show, under the same one-policy rules, never more. You can revoke it at any time, and every open is logged so you know whether they actually looked.",
  },
  {
    icon: MapPin,
    title: "Your field is not on the page",
    body: "A buyer sees the farm, its city and its state. Your street address, ZIP and coordinates are stripped before the page is built, and a parcel added today publishes an approximate location — a point rounded to about a kilometer, with no field boundary and the zoom capped so it cannot be pushed in closer.",
  },
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
                  The regulated record, as you logged it
                </h3>
                <p className="mx-auto mt-1 max-w-[300px] text-sm text-muted-foreground">
                  Rate, area, target pest, re-entry and pre-harvest intervals,
                  buffer distance, EPA registration, supplier invoice, with the
                  CFR sections cited.
                </p>
                {/* The log is ONE of the certifier artifacts; without this line the
                    section undersold the family (packet, dossier, PUR — 2026-08-11). */}
                <p className="mx-auto mt-2 max-w-[300px] text-xs text-muted-foreground">
                  One page of a family: the OSP renewal packet, whole-operation
                  dossier, and California PUR export are built from the same
                  records.{" "}
                  <Link
                    href="/for-certifiers"
                    className="font-medium text-primary underline underline-offset-2"
                  >
                    Reviewing as a certifier? →
                  </Link>
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
                  src="/images/dual-output-consumer-v6.png"
                  alt="The same spray on the public Trazo page: Entrust SC, pest control, August 7 2025, performed by the farm team, a plain-language line saying a pest treatment approved for organic growing was applied, a note that products allowed in organic growing are reviewed against a public national list, an Allowed Input badge citing National List section 205.601, and a Self Reported label."
                  width={750}
                  height={1800}
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

        {/* ── The page that one record lives on ──────────────────────────
            Absorbed from the former ProductShowcase section. That section showed
            two phones, and its second one was the SAME buyer event card already
            standing in Output 2 above — same farm, same "Self Reported" pill, same
            12.5 acres — so the page told the buyer story twice, two scrolls apart.
            Only this view (the whole page, rather than one record on it) was new,
            so it moves here and the buyer page now has exactly one home. */}
        <ScrollReveal delay={300}>
          <div className="mt-14 flex flex-col items-center gap-10 rounded-2xl border border-border bg-background p-6 md:flex-row md:gap-14 md:p-10">
            {/* Same frame dimensions as the Output-2 phone above, md: bump included —
                without it this renders 244x504 beside a 264x544 sibling and reads as a
                different device. */}
            <div className="relative h-[520px] w-[260px] shrink-0 overflow-hidden rounded-[2.5rem] border-[8px] border-foreground/10 bg-card shadow-2xl shadow-primary/10 md:h-[560px] md:w-[280px]">
              <Image
                src="/images/consumer-transparency-v3.png"
                alt="Trazo buyer page for walnuts from Blue Oak Orchards: Lot BO-2025-EB-01, harvested October 22 2025, 27 practices documented, above the documented growing story and the practices, origin, harvest and records row."
                width={750}
                height={1624}
                quality={95}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="min-w-0 text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground">
                One scan reaches the whole season, not one spray
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The record above is one row on this page. A buyer scanning the
                tag on the carton lands here: the farm, the lot, the harvest
                date, and every practice you documented across the season
                &mdash; counted, not graded. Trazo does not award your farm a
                score, and no self-assigned rating appears anywhere a buyer can
                see.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The same page estimates the season&rsquo;s direct farm emissions
                &mdash; fuel, fertilizer, equipment and irrigation energy,
                calculated with published EPA and USDA factors and written the
                way a buyer can hold it: what growing a kilogram of the crop
                produced, and the same figure as miles driven in an average car.
                Transport, packaging and retail sit outside that boundary, and
                the page says so beside the number.
              </p>

              <ul className="mt-8 space-y-5 text-left">
                {BUYER_PAGE_CONTROLS.map((control) => (
                  <li key={control.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <control.icon className="text-primary" size={16} />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-foreground">
                        {control.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {control.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
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
