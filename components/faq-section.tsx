"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Trazo help me compete for premium buyers?",
    answer:
      "Trazo creates transparency pages for your products that consumers access via QR codes. When buyers can see exactly how their food was grown, with documented practices, photos, and tamper-proof records, they gain the confidence to choose your product over undocumented alternatives. Specialty retailers increasingly require this kind of documentation, so Trazo makes it easy to provide.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer:
      "Trazo runs in any web browser on your phone or computer. No downloads needed. The interface uses simple forms, voice recording, and photo uploads. The interface is designed for field conditions, so most users are comfortable from day one.",
  },
  {
    question: "Will consumers actually scan my QR codes?",
    answer:
      "Transparency pages are designed for mobile-first quick loading. Consumers actively seek transparency, and Trazo makes it easy to provide and easy to verify. Our analytics dashboard tracks every scan so you can see the engagement.",
  },
  {
    question: "How accurate are the carbon calculations?",
    answer:
      "Trazo calculates Direct Operational Emissions, the emissions farmers actually control: fuel combustion, fertilizer application, and equipment operation. This is not a full lifecycle assessment. All emission factors are sourced from EPA (40 CFR Part 98) and USDA government-published data.",
  },
  {
    question: "Does Trazo verify organic certifications?",
    answer:
      "Yes. USDA Organic certifications are automatically verified against the USDA Organic Integrity Database, which includes over 36,000 certified operations. Consumers see a green \u2018Verified\u2019 badge for farms found in the government database. Other certifications (GlobalG.A.P., Fair Trade, etc.) are displayed as \u2018Reported by Producer\u2019 with plans to add more verification sources.",
  },
  {
    question: "Can Trazo help with organic record-keeping?",
    answer:
      "Trazo tracks the inputs and practices organic farms already document: OMRI-listed materials, soil amendments, composting events, cover crops, equipment cleaning, and seed sourcing. Every event is timestamped with optional photo evidence. You can export organic-filtered audit reports (PDF or CSV) at any time. While Trazo does not replace your certifier\u2019s paperwork, it provides a structured, digital record of your organic practices that supports the documentation requirements of NOP 7 CFR 205.103.",
  },
  {
    question: "Does Trazo work for farms transitioning to organic?",
    answer:
      "Yes. Chemical events include a \u2018Transitional\u2019 status for farms in the certification process. You can set your production method to Organic from day one and begin building your documentation record. Trazo\u2019s system rewards thorough documentation regardless of certification status, so transitional farms benefit from the same system as fully certified operations.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No long-term contracts. Cancel anytime from your dashboard. You'll retain access until the end of your billing period. Your data is always yours.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative border-t border-border bg-secondary/30 py-16 lg:py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
  );
}
