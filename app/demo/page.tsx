import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * /demo — the four-minute walkthrough (the September 2026 master cut).
 *
 * This is the URL every LinkedIn first comment and every email reply carries, and where the
 * hero's "Watch the demo" button lands. One video, one paragraph, one button. No lightbox: a
 * page has an address, plays on every phone, and is what the comment links to.
 *
 * The file is self-hosted under /videos (Vercel CDN), with a poster and WebVTT captions from the
 * narration. Re-cuts get a NEW filename (…-2026-09 → the next date) so nothing serves a cached
 * old cut; the April video that used to sit at /videos/trazo-demo.mp4 was removed 2026-09-06.
 *
 * Compliance notes (.claude/rules/compliance.md): every sentence below is said or shown in the
 * film and was claim-checked with it. "Trazo doesn't certify your farm" stays on the page in
 * words, not only in the video's close.
 */

export const metadata: Metadata = {
  title: "The four-minute walkthrough | Trazo",
  description:
    "One entry, two outputs. A spray logged once on the phone becomes the input log, the OSP section and the California PUR data for your certifier, and the page your buyer scans. Four minutes, real screens, nothing staged.",
  alternates: { canonical: "https://www.trazo.io/demo" },
  openGraph: {
    title: "One entry. Two outputs. Trazo in four minutes.",
    description:
      "A spray logged once becomes the records your renewal asks for and the page your buyer scans. Real screens, nothing staged.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` replaces the root object, so the
    // image has to be restated here or the page shares as a card with no picture.
    images: ["/videos/trazo-demo-2026-09-poster.jpg"],
  },
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        <article className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Walkthrough · 4 min
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            One entry. Two outputs.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            You log a spray once, on your phone, in the block. That entry becomes the input log
            under 7&nbsp;CFR&nbsp;205.103, the OSP section, the National List check and the data
            for the California PUR. The same entry becomes the page your buyer scans, without the
            details that belong to your certifier. Four minutes, real screens, nothing staged.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5">
            <video
              className="aspect-video h-auto w-full bg-foreground"
              controls
              playsInline
              preload="metadata"
              poster="/videos/trazo-demo-2026-09-poster.jpg"
            >
              <source src="/videos/trazo-demo-2026-09.mp4" type="video/mp4" />
              <track
                kind="captions"
                srcLang="en"
                label="English"
                src="/videos/trazo-demo-2026-09.vtt"
              />
              Your browser cannot play this video.{" "}
              <a href="/videos/trazo-demo-2026-09.mp4">Download the MP4</a>.
            </video>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Trazo doesn&apos;t certify your farm. Your certifier does. Trazo gets you to the table
            with complete records: the readiness checks are ours, the findings are your
            certifier&apos;s.
          </p>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground">Start free. No card, no clock.</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              The Starter plan is free permanently: log the whole season on your phone, in English
              or Spanish. Certifier documents are on the Compliance plan.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button className="gap-2" asChild>
                <a href="https://app.trazo.io/auth/signup">
                  Start free
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
