"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ClipboardList, FileCheck2, FolderDown } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * The producer-side product tour: three real screens, user-driven.
 *
 * WHY TABS AND NOT A CAROUSEL
 * ---------------------------
 * The obvious version of this section is an auto-rotating hero carousel. It is a measurably bad
 * idea and has been for a decade: instrumented studies put carousel engagement near 1% of
 * visitors, with the overwhelming majority of that on the first slide, so ~99% of people see
 * exactly what a single static image would have shown them — after paying for the widget.
 * Anything that moves on its own past five seconds also owes a pause/stop/hide control under
 * WCAG 2.2 SC 2.2.2, and interactive JS above the fold competes with LCP and INP.
 *
 * So: no timer, no auto-advance, no motion the reader did not ask for. Radix Tabs gives the
 * WAI-ARIA tabs pattern for free — roving tabindex, arrow-key navigation, aria-selected,
 * aria-controls — which is the part a hand-rolled "carousel with dots" always gets wrong.
 *
 * WHAT IS DELIBERATELY NOT HERE
 * -----------------------------
 * The farm home. The hero image IS that screen, cropped to its two cards, so a "What's due" tab
 * here showed the reader the same deadlines card twice inside one scroll — the exact redundancy
 * that makes a page feel padded. The hero owns what is DUE; this section owns the work: what you
 * log, what it fills in, and what comes out the other end.
 *
 * Also not here: the one spray record split into a certifier log and a shopper card. `DualOutput`
 * tells that story below with the real artifacts and the redaction list.
 *
 * PANELS ARE ALL THE SAME SIZE (2880x1800, i.e. 1440x900 at 2x). Same intrinsic dimensions on every image means
 * switching tabs cannot move a single pixel of the page: no layout shift, no CLS.
 *
 * LOADING: only the visible panel's image is fetched (Radix keeps inactive panels mounted but
 * `hidden`, and a lazy image inside `display:none` does not download). Pointing at or tabbing to
 * a trigger warms that panel's image first, so the switch is instant without paying for three
 * screenshots on every page load.
 */

type Panel = {
  value: string;
  /** Tab label. Short — the tab strip must not wrap on a phone. */
  label: string;
  icon: typeof ClipboardList;
  headline: string;
  body: string;
  src: string;
  /** Art-directed phone capture. See the note on the render below. */
  srcMobile: string;
  alt: string;
};

const PANELS: Panel[] = [
  {
    value: "log",
    label: "The season log",
    icon: ClipboardList,
    headline: "The month, as your certifier will read it",
    body: "Irrigation, input applications, scouting and harvest land on the calendar the day the work happens — colour-coded by type, filterable by block, and switchable to a list. Logged from the phone in the cab, in English or Spanish.",
    src: "/images/tour-season-log-v2.png",
    srcMobile: "/images/tour-m-season-log.png",
    alt: "Trazo activities calendar for August 2026 on a walnut farm, with colour-coded entries: pest and scouting on the 1st and 4th, input applications on the 4th and 7th, and irrigation on the 12th and 15th, above filters for production, inputs, soil, pest, weather and business.",
  },
  {
    value: "plan",
    label: "Your plan",
    icon: FileCheck2,
    headline: "Every module, mapped to § 205.201(a)",
    body: "Answer each module once and your answers compile into the plan sections — your own words kept alongside them. Every card carries the CFR sections it answers to, and a module that does not apply is attested Not applicable rather than left blank.",
    src: "/images/tour-osp-v2.png",
    srcMobile: "/images/tour-m-osp.png",
    alt: "Trazo Organic System Plan page showing version 2 active with 17 of 19 farm-wide modules complete, and module cards for Monitoring & Organic Fraud Prevention, Seeds & Planting Stock, Annual Seedlings marked Not applicable, Perennial Planting Stock, Rotation & Soil Management and Compost & Manure, each citing its CFR sections.",
  },
  {
    value: "docs",
    label: "Your documents",
    icon: FolderDown,
    headline: "The paperwork, already written and dated",
    body: "The audit dossier, the OSP renewal packet and its module PDFs, the Common OSP workbooks, the California PUR export, lot tags — each one built from the records above, filed the moment it is generated. Your own weigh tickets and receipts sit beside them, and a receipt linked to a purchase record travels inside the packet itself.",
    src: "/images/tour-documents-v2.png",
    // v1 predated the Documents mobile fix: the six-column table was crushed to the
    // viewport with "SOURCE" wrapped as a vertical S-O-U-R-C-E stack. v2 caught the
    // stacked-card layout but still had it nested inside an outer card, so ~29% of a
    // 375px screen went to chrome. v3 is the same view after that outer card came off.
    // Filename bumped every cut because `_next/image` caches by SOURCE URL — replacing
    // bytes under an old name serves the stale render forever.
    // Same farm as the other two panels and as the desktop capture: a screenshot from a
    // different establishment would put a second farm name inside one tab, visible only
    // to whichever half of readers is on a phone.
    srcMobile: "/images/tour-m-documents-v3.png",
    // Describes the shelf, not a row order: desktop renders a table and phones render
    // stacked cards, and only one is in the layout at a time, so the alt has to be true
    // of either. Enumerating the table's rows made it wrong for every phone reader.
    alt: "Trazo documents page for Blue Oak Orchards, a shelf of generated certifier artifacts filed by folder with source, size and date — audit dossier, California PUR export, OSP renewal packet, OSP module PDFs, Common OSP workbook and lot tags — filterable by Organic System Plan, Exports and Uploads, with the farm's own files uploaded beside them.",
  },
];

export function ProductTour() {
  const [active, setActive] = useState(PANELS[0].value);
  const warmed = useRef<Set<string>>(new Set([PANELS[0].value]));

  /**
   * Fetch a panel's screenshot before it is asked for. Pointer-enter and keyboard focus both
   * count: an arrow-key user moving along the tab strip gets the same head start as a mouse.
   */
  const warm = useCallback((panel: Panel) => {
    if (warmed.current.has(panel.value)) return;
    warmed.current.add(panel.value);
    for (const src of [panel.src, panel.srcMobile]) {
      const img = new window.Image();
      img.src = src;
    }
  }, []);

  return (
    <section
      id="product-tour"
      // `scroll-mt` tracks the measured header — see the note in how-it-works.tsx.
      // The old fixed 96px offset left this section 41px under the header on a phone.
      className="scroll-mt-[calc(var(--header-h,140px)+0.5rem)] border-b border-border bg-background pb-16 pt-12 lg:pb-24 lg:pt-16"
      aria-labelledby="product-tour-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="product-tour-heading"
              className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              What you log becomes{" "}
              <span className="text-primary">what you file</span>.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Three screens, one chain: the season you logged, the plan your
              answers compile into, and the paperwork that comes out. Real app, on a 27.9-acre
              certified-organic walnut operation.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Tabs
            value={active}
            onValueChange={setActive}
            className="mt-10 gap-0"
            // The strip is a control, not a slideshow: nothing advances unless a person
            // moves it. Radix handles arrow keys; activation stays automatic (focus selects)
            // because every panel is a static image with nothing to wait for.
          >
            <TabsList className="mx-auto flex h-auto w-full max-w-xl flex-wrap justify-center gap-1 rounded-xl bg-secondary p-1.5">
              {PANELS.map((panel) => (
                <TabsTrigger
                  key={panel.value}
                  value={panel.value}
                  onPointerEnter={() => warm(panel)}
                  onFocus={() => warm(panel)}
                  className="flex-1 gap-2 rounded-lg px-3 py-2 text-sm data-[state=active]:bg-background data-[state=active]:font-semibold data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  <panel.icon aria-hidden="true" size={15} />
                  {panel.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {PANELS.map((panel) => (
              <TabsContent
                key={panel.value}
                value={panel.value}
                // Kept mounted so the browser has the box even while hidden; that plus the
                // shared 1440x900 intrinsic size is what makes switching shift nothing.
                forceMount
                className="mt-8 data-[state=inactive]:hidden"
              >
                <div className="mx-auto max-w-3xl text-center">
                  <h3 className="text-lg font-bold text-foreground md:text-xl">
                    {panel.headline}
                  </h3>
                  <p className="mx-auto mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                    {panel.body}
                  </p>
                </div>

                <div className="relative mx-auto mt-8 w-full max-w-6xl">
                  <div
                    className="absolute -inset-3 rounded-3xl bg-primary/5 blur-2xl"
                    aria-hidden="true"
                  />
                  {/* ART DIRECTION, not just a smaller file.
                      The desktop capture is 1440 CSS px of app. Squeezed into a 327px phone
                      column it is a grey blur — the same legibility failure that made the old
                      hero unreadable, just worse. So phones get a capture taken AT phone width,
                      where the app's own responsive layout does the work and every line is
                      readable. It also happens to be the honest picture of the product: this is
                      logged from a phone at the edge of the block.
                      Two <Image>s rather than <picture>, because next/image owns the srcset for
                      each source; only one is ever in the layout, so nothing shifts. */}
                  <div className="relative mx-auto max-w-[320px] overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5 md:hidden">
                    <Image
                      src={panel.srcMobile}
                      alt={panel.alt}
                      width={780}
                      height={1688}
                      quality={92}
                      sizes="320px"
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                  <div className="relative hidden overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5 md:block">
                    <Image
                      src={panel.src}
                      alt={panel.alt}
                      // True intrinsic size of the operator's own captures (3343x2072, a 2x
                      // shot of a ~1671 CSS px window). Declaring the real dimensions is what
                      // lets next/image build a srcset with detail left on a retina screen; a
                      // 1440-wide first cut was being upscaled ~1.4x on every MacBook.
                      width={3343}
                      height={2072}
                      quality={92}
                      sizes="(max-width: 1152px) 100vw, 1152px"
                      // Lazy on every panel, including the first: this section is below the
                      // fold on every viewport, so an eager fetch here would take bandwidth
                      // from the hero's LCP for an image nobody has scrolled to. The visible
                      // panel loads when the section arrives; the hidden two are inside a
                      // display:none subtree and stay unfetched until warmed or opened.
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Screenshots are unmodified output from Trazo, using sample farm data.
          Record checks are documentation checks on what you entered, not a
          compliance decision — your certifying agent makes that determination.
        </p>
      </div>
    </section>
  );
}
