"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Trazo help me earn premium prices?",
    answer:
      "Trazo documents every farming practice and creates a transparency score that verifies your claims. When buyers and consumers can see blockchain-verified proof of your sustainable practices, they're willing to pay premium prices. Your documented practices become your competitive advantage — turning trust into real revenue.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer:
      "Trazo is designed for farmers, not tech companies. You can log events with voice recording, quick photo capture, or simple forms — all in under 2 minutes. No training required. If you can use a smartphone, you can use Trazo.",
  },
  {
    question: "Will consumers actually scan my QR codes?",
    answer:
      "Yes. Studies show that transparency drives purchasing decisions — especially for premium products. When consumers scan your QR code, they see your complete farming journey, building the trust that converts interest into sales. Our analytics dashboard tracks every scan so you can see the engagement.",
  },
  {
    question: "How does blockchain verification work?",
    answer:
      "When you finish a production, Trazo creates a cryptographic fingerprint (hash) of the entire record and writes it to the Polygon blockchain. This creates a tamper-proof timestamp that proves your records haven't been altered. It's like a digital notary for your farming practices. Available as an add-on for $15/month.",
  },
  {
    question: "How accurate are the carbon calculations?",
    answer:
      "All carbon calculations use government-verified emission factors from EPA (40 CFR Part 98) and USDA sources. Unlike other platforms that use estimates, Trazo's calculations are audit-ready from day one. The more events you log, the more accurate your footprint becomes.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. No contracts, no lock-in. Start with a 14-day free trial, and upgrade only when you're ready. If you decide Trazo isn't for you, cancel with one click. Your data is always yours — you can export everything at any time.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative border-t border-border bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Questions & Answers
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Questions From Farmers Like You
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
