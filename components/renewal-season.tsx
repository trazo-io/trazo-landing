import Link from "next/link"
import { CalendarClock } from "lucide-react"

/**
 * Renewal-season deadline block.
 *
 * The site previously carried no deadline of any kind, which left the whole pitch resting on
 * "your buyers can see your practices" — a hook 4-5 growers in discovery explicitly rejected
 * ("my certification already satisfies my buyers"). What those growers DO have is a certifier
 * with a date on it, so this section leads with dates rather than benefits.
 *
 * Every date below is published by the certifier or agency named. They vary by operation and
 * change year to year, so the closing line tells growers to confirm their own — a wrong date
 * presented confidently is worse than no date at all.
 *
 * The Common OSP paragraph uses the only permitted claim shape: USDA posted an OPTIONAL standard,
 * adoption is each certifier's decision, so we say "if your certifier adopts it — ask them" and
 * never "your certifier is moving to it."
 */

const milestones = [
  {
    when: "Early November",
    what: "Renewal packets and annual-update forms go out",
    detail:
      "CCOF begins renewals November 3. Oregon Tilth posts renewal forms at the start of November — for OTCO the renewal application is the OSP update.",
  },
  {
    when: "December 31",
    what: "OCCSP application deadline",
    detail:
      "The USDA Organic Certification Cost Share Program reimburses up to 75% of your certification costs, capped at $750 per scope. Same day COG Pro stops service.",
  },
  {
    when: "January – April",
    what: "Annual updates are due",
    detail:
      "CCOF January 1 · PCO January 15 · MOSA February 1 · Oregon Tilth January 1 or April 1 · WSDA March 1.",
  },
  {
    when: "April – November",
    what: "Inspection season",
    detail:
      "Inspections happen when your fields can be observed. Whatever you did not write down during the season is what you will be reconstructing from memory.",
  },
]

export function RenewalSeason() {
  return (
    <section className="border-y border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
            <CalendarClock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span className="text-xs font-medium text-primary">The organic paperwork year</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Your certifier already has the dates. Most tools ignore them.
          </h2>
          <p className="mt-4 text-pretty leading-[1.8] text-muted-foreground">
            Organic recordkeeping is not a year-round chore with no end. It is a handful of
            deadlines you either walk into prepared or scramble to meet.
          </p>
        </div>

        <ol className="mt-12 space-y-4">
          {milestones.map((m) => (
            <li
              key={m.when}
              className="grid gap-2 rounded-xl border border-border bg-background p-6 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <div className="font-semibold text-primary">{m.when}</div>
              <div>
                <p className="font-medium text-foreground">{m.what}</p>
                <p className="mt-1 leading-[1.7] text-muted-foreground">{m.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-xl border border-border bg-background p-6">
          <h3 className="font-semibold text-foreground">
            And there is a new form in the mix
          </h3>
          <p className="mt-2 leading-[1.8] text-muted-foreground">
            In 2026 the USDA posted a <strong className="text-foreground">Common Organic System
            Plan</strong> — a standard OSP template set that certifiers may adopt. It is optional,
            and whether your certifier uses it is their decision, so ask them. If they do, Trazo
            generates its § 11 records section and the four required attachment forms as Excel
            workbooks, filled in from the events you logged. You review, correct and sign them —
            you are the author of your plan, not us.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Dates are as published by each certifier and can differ for your operation —{" "}
          <Link href="/contact" className="underline underline-offset-4">
            confirm yours with your certifier
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
