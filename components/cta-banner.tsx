import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center lg:py-28">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/5" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground/5" aria-hidden="true" />

          <div className="relative">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Stop competing on price.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Start documenting your farm in under 15 minutes. 14-day free trial.
              Cancel anytime.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-primary-foreground px-10 text-base text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a href="https://app.trazo.io/auth/signup">
                  Start Free Trial
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-primary-foreground/30 bg-transparent px-8 text-base !text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
