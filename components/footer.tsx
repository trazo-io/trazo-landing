import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "How it Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
  essentials: [
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "mailto:hello@trazo.io" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block" aria-label="Trazo Home">
              <Image
                src="/images/logo-green.png"
                alt="Trazo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The transparency platform that turns honest farming into a
              competitive advantage. Document, verify, and share your story.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground">
                Stay connected
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Get transparency insights delivered monthly
              </p>
              <form className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label="Email address for newsletter"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <ArrowRight size={16} />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-foreground">Product</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Essential Pages */}
          <div>
            <h3 className="text-sm font-bold text-foreground">
              Essential Pages
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.essentials.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-foreground">Legal</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Trazo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
