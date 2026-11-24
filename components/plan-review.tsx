import { ClipboardCheck } from "lucide-react"

/**
 * PlanReview — the section for the one thing a renewal tool built on a form builder cannot do.
 *
 * Every renewal starts from last year's plan; every tool copies the answers across. What none of
 * them did was say which answers the farm's own records had since overtaken. Trazo now does:
 * before a plan goes to the certifier, it lists — from DATED records only — what happened after
 * each answer was written. No prose is read, no answer is judged, and nothing blocks the Submit
 * button: it is a review list for the person who is the author of the plan (7 CFR 205.201(a)).
 *
 * ⛔ This is a typographic rendering of WHAT the review checks, not a screenshot and not a sample
 * result. Do not add numbers or a farm name here that look like a real finding; the product
 * tour owns the real screenshots, with their "unmodified output, sample farm data" note.
 */

const checks = [
  {
    what: "Ground you began managing",
    why: "A new lease or purchase needs a parcel application, land history and affidavits before it carries a certified crop.",
  },
  {
    what: "Productions started and closed",
    why: "The rotation paragraph in your plan still says what you intended; the seasons say what you grew.",
  },
  {
    what: "§ 205.400(f) notices you filed",
    why: "A change you already told the certifier about, that the plan has not caught up with. When a notice names a field, it prints on that field's application.",
  },
  {
    what: "Materials added or removed",
    why: "Every input on your plan's materials list that was not there when the materials module was last answered.",
  },
  {
    what: "Affidavits and contamination incidents",
    why: "Signed land-history or adjoining-land attestations, and any drift or commingling event recorded on a parcel.",
  },
  {
    what: "Parcels the plan never names",
    why: "A plain check: a field whose name appears nowhere in the plan's text.",
  },
  {
    what: "Modules not revisited in a year",
    why: "Answered eighteen months ago is not wrong, but it is the first thing a reviewer notices.",
  },
]

export function PlanReview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
            <ClipboardCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span className="text-xs font-medium text-primary">Before you file</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Last year&rsquo;s plan, re-read against this year&rsquo;s records.
          </h2>
          <p className="mt-4 text-pretty leading-[1.8] text-muted-foreground">
            Every renewal starts from last year&rsquo;s answers, carried
            across. A plan that still says &ldquo;six parcels&rdquo; when the seventh was leased
            in January reads, to a certifier, like a plan nobody re-read. Trazo lists what your
            records did after each answer was written, so the plan you send describes the
            farm you run.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {/* Seven cards in a two-column grid: the last spans both columns so the
              grid closes clean instead of leaving an orphan cell. */}
          {checks.map((c, i) => (
            <div
              key={c.what}
              className={`rounded-xl border border-border bg-background p-5${
                i === checks.length - 1 ? " sm:col-span-2" : ""
              }`}
            >
              <p className="font-medium text-foreground">{c.what}</p>
              <p className="mt-1 text-sm leading-[1.7] text-muted-foreground">{c.why}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-secondary/30 p-6">
          <h3 className="font-semibold text-foreground">A list, not a verdict</h3>
          <p className="mt-2 leading-[1.8] text-muted-foreground">
            The review is compiled from dated records only: it does not read your prose and
            it never says an answer is wrong. You may well have re-read a section and decided it
            still holds, so it never blocks the Submit button. It sits under your plan on the
            screen, prints on the first page of your renewal packet, and on an active plan it is
            the running list of what next year&rsquo;s annual update will have to mention. You
            remain the author of your plan (7 CFR 205.201(a)); this is the page that keeps you
            from filing a stale one.
          </p>
        </div>
      </div>
    </section>
  )
}
