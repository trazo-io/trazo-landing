"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * The audit-export page, shown as a document sheet with a click-to-expand escape hatch.
 *
 * Why not scroll the image horizontally in place: the export is 14 columns wide, so a page-level
 * preview can only ever show part of it. Putting a horizontal scroller around the preview would
 * hide the payoff behind a gesture most visitors never make, and on mobile a nested horizontal
 * scroller fights the page's vertical scroll and swallows touches. It also reads as an apology —
 * "our document does not fit" — which is the opposite of what this section is arguing.
 *
 * The pattern that works: an honest, static preview that is legible on its own, a soft edge that
 * says the page continues, and one obvious click for anyone who wants the whole table. Scrolling
 * then happens inside a dialog the visitor deliberately opened, which is the one place it is
 * expected.
 */
export function CertifierLogPreview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group relative block h-[520px] w-full overflow-hidden rounded-sm border border-border bg-white text-left shadow-xl shadow-foreground/5 transition-shadow hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:h-[560px]"
          aria-label="Expand the full Input Application Log from the audit export"
        >
          <Image
            src="/images/dual-output-certifier-v6.png"
            alt="A page of the Trazo NOP audit export: an Input Application Log listing the Entrust SC application with its date, product, type, concentration, amount, area, method and target pest, followed by Input Purchase Traceability under 7 CFR 205.103 and OMRI / National List verification under 7 CFR 205.601."
            width={700}
            height={1400}
            quality={95}
            className="h-full w-full object-cover object-top"
          />

          {/* The export is wider than this sheet can show. A soft edge says "the page
              continues"; a hard crop line reads as a rendering fault. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"
          />

          <span className="pointer-events-none absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border bg-white/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur transition-colors group-hover:border-primary/40 group-hover:text-primary">
            <Maximize2 size={12} />
            See every column
          </span>
        </button>
      </DialogTrigger>

      {/* shadcn's DialogContent ships `sm:max-w-lg`, so the override has to be at the same
          breakpoint or the dialog stays 32rem wide and the table needs scrolling even on a
          desktop that has room for it. */}
      <DialogContent className="w-[96vw] max-w-[96vw] p-4 sm:max-w-[min(96vw,1240px)] sm:p-6">
        <DialogTitle className="pr-8 text-base">
          Input Application Log: NOP audit export
        </DialogTitle>
        <DialogDescription className="text-sm">
          Every column your certifier receives for each application, cited to 7
          CFR 205.103.
        </DialogDescription>

        {/* Horizontal scrolling belongs here — inside a view the reader chose to open. */}
        <div className="mt-2 overflow-x-auto rounded-md border border-border bg-white">
          <Image
            src="/images/dual-output-certifier-full-v6.png"
            alt="The complete Input Application Log table: Date, Product, Type, NPK or concentration, Amount, Area, Method, Target, Organic Status, REI hours, PHI days, Buffer metres, EPA registration number and restricted-use flag, for a fertigation and an Entrust SC application."
            width={1425}
            height={430}
            quality={95}
            className="h-auto max-w-none"
            style={{ width: "1140px" }}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Sample farm data. Swipe or scroll the table sideways on a small
          screen.
        </p>
      </DialogContent>
    </Dialog>
  );
}
