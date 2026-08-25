"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  // "Common OSP" promoted to primary nav 2026-08-09: it is the category-defining
  // page and was footer-only. "Features" stays reachable as a homepage section.
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Common OSP", href: "/common-osp" },
  { label: "For Farmers", href: "/for-farmers" },
  { label: "Pricing", href: "/pricing" },
  { label: "COG Pro Migration", href: "/cog-pro-migration" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /**
   * Publish the header's real height as `--header-h` so content below can clear it.
   *
   * This header is `fixed`, and its height is NOT a constant: the renewal-season strip
   * wraps as the viewport narrows, so it measures 109px on desktop, 121px at 390px and
   * 137px at 320px. The hero used a hardcoded `pt-28` (112px), which meant the deadline
   * badge sat 9px under the header on a phone and 25px under it on a small phone.
   *
   * ResizeObserver rather than a resize listener: the strip can also reflow when the
   * font loads or the text changes, neither of which fires `resize`.
   */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const publish = () =>
      document.documentElement.style.setProperty(
        "--header-h",
        `${Math.ceil(el.getBoundingClientRect().height)}px`,
      );
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg"
    >
      {/* Renewal-season strip — the honest adaptation of the countdown-banner
          pattern: real external deadlines (certifier windows, COG Pro sunset),
          never an invented discount clock. The linked pages carry the full
          confirm-with-your-certifier hedges.
          MAINTENANCE: this copy is true through Dec 31, 2026. After the COG Pro
          sunset passes, swap the second fact for the next real deadline
          (OCCSP Dec 31 → certifier due dates Jan–Apr) or remove the strip. */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1.5 text-center text-xs font-medium sm:text-sm">
          <span className="hidden sm:inline">Renewal season is coming:</span>
          <span>
            CCOF &amp; Oregon Tilth open in November · WSDA due March 1 · COG Pro ends Dec 31, 2026
          </span>
          <Link
            href="/cog-pro-migration"
            className="underline underline-offset-2 hover:opacity-85"
          >
            Bring your records over →
          </Link>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-1"
          aria-label="Trazo Home"
        >
          <Image
            src="/images/logo-green.png"
            alt="Trazo"
            width={689}
            height={230}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            asChild
          >
            <a href="https://app.trazo.io/auth/signin">Log In</a>
          </Button>
          <Button
            size="sm"
            className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="https://app.trazo.io/auth/signup">
              Start free
              <ArrowRight size={14} />
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        {/* The negative margin cancels the padding, so this reaches a 44x44 target
            without moving anything in the bar. It was 24x24 — the only route to the
            nav on a phone, for growers wearing work gloves. */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="-m-2.5 p-2.5 text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 border-t border-border pt-4">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-center text-muted-foreground"
                asChild
              >
                <a href="https://app.trazo.io/auth/signin">Log In</a>
              </Button>
              <Button
                size="sm"
                className="w-full gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="https://app.trazo.io/auth/signup">
                  Start free
                  <ArrowRight size={14} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
