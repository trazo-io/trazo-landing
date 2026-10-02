"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "I was certified recently \u2014 or I am applying for 2027. Is this for me?",
    answer:
      "That is who it is built for. In your first years the routines are still forming, and the annual update is the moment it shows. If you are applying, your certifier will ask you to describe your recordkeeping system in the OSP itself, and processing runs roughly 8\u201316 weeks \u2014 so a plan submitted around New Year is what gets you certified in time to sell as organic in spring. Starting the system before you apply means the description is something you already do rather than something you promise. Farms in transition can use it the same way: parcels carry a Transitional status and the record builds from day one.",
  },
  {
    question: "Can Trazo help with organic record-keeping?",
    answer:
      "Trazo tracks the inputs and practices organic farms already document: OMRI-listed materials, soil amendments, composting events, cover crops, equipment cleaning, and seed sourcing. Every event is timestamped with optional photo evidence. Organic-filtered audit reports (PDF or CSV) are part of the Compliance plan. While Trazo does not replace your certifier\u2019s paperwork, it provides a structured, digital record of your organic practices that supports the documentation requirements of NOP 7 CFR 205.103.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer:
      "Trazo runs in any web browser on your phone or computer. No downloads needed. The interface uses simple forms, voice recording, and photo uploads. The forms are built for a phone in the field, and if something is unclear, email us: the person who builds Trazo answers.",
  },
  {
    question: "Does Trazo check organic certifications?",
    answer:
      "It cross-references them. A USDA Organic certificate you enter is checked against the public USDA Organic Integrity Database \u2014 the government\u2019s list of certified operations \u2014 and a match is shown to buyers as \u2018Verified via USDA Organic Integrity Database\u2019. That is a database match, not an inspection: Trazo does not visit farms and does not certify anything. Other certifications (GlobalG.A.P., Fair Trade, Real Organic Project and the rest) are shown as \u2018Reported by Producer\u2019 until a public register we can check exists for them.",
  },
  {
    question: "How accurate are the carbon calculations?",
    answer:
      "Trazo estimates the operation\u2019s own emissions (fuel, equipment and irrigation energy) plus the emissions from manufacturing the fertilizer and chemicals it buys. This is not a full lifecycle assessment: transport, packaging and retail are outside the boundary. Each factor names its own source. Fuel, electricity and nitrogen use EPA-published values (nitrogen with IPCC guideline values), pesticide and herbicide factors come from published academic studies, and phosphate and potash are Trazo\u2019s own conservative estimates, labelled as such. Every factor and the full method are on our methodology page. If you publish a buyer page, the same estimate appears there in plain terms: what growing a kilogram of the crop produced, or the season\u2019s total when you have not recorded a harvest weight, and the same figure as miles driven in an average car, with that boundary stated next to the number.",
  },
  {
    question: "Do I have to publish a buyer page?",
    answer:
      "No. It is an optional second output of the same records, and it is per season, not per farm. When you finish a production Trazo asks whether to publish it; clear that box and nothing goes public. Afterwards a single switch on your Buyer Page publishes or unpublishes any finished season at any time, and an unpublished season stops answering even for someone holding the code. If you do publish, you download the QR image or a printable sheet of eight lot tags (farm, crop, lot ID, harvest date and the code) for your cartons or bins, and a buyer who scans reaches the farm, the lot, the harvest date, the practices you documented and, when the season has enough logged to compute one, an estimate of its emissions. Your address, ZIP and coordinates are stripped before the page is built, and a parcel added today publishes an approximate location (a point rounded to about a kilometer, no field boundary). Scans are listed on the same screen and can be filtered to one season.",
  },
  {
    question: "Can I hide a record or a field from the buyer page?",
    answer:
      "No, and that is deliberate. What a public page shows is decided by one policy that applies identically to every farm: worker-safety and regulatory data, supplier and purchase records entered in their own fields, and certifier-facing record categories never publish \u2014 and everything else in a published season shows for everyone. The certifier-facing categories (a seed commercial-availability search, a buffer-zone harvest, an equipment cleanout) are withheld because they are evidence of correct practice that reads as its own opposite to a reader without the regulation open; they stay in the certifier packet, where they persuade. Your control is the season: publish it whole, or keep it private, reversibly. Trazo tells you as you log (and on every record afterwards) exactly which fields a buyer sees. A page no farm can edit is the reason a buyer can take yours at face value.",
  },
  {
    question: "Can a buyer see my records before harvest?",
    answer:
      "Yes, without publishing anything. On the Compliance plan you can mint a private buyer review link: a read-only page listing your seasons, including the one still in progress, where each season opens the same view a shopper would see — identical information policy, nothing extra. It is a link you send to one buyer, not a public page: you can revoke it at any time, it expires on its own, and every open is logged so you can see whether they looked. Certifier review links are separate and show a different, certifier-grade dossier; one kind of link never opens the other's view. And if a buyer needs certifier-grade depth, that is a different act: answer their documentation request from your Buyer Page, or share the packet yourself \u2014 deeper access is always your explicit decision.",
  },
  {
    question: "Can I take my records with me?",
    answer:
      "Yes, on every plan including the free one. One click in Documents downloads a ZIP of plain CSV files: every activity record with all its fields, your productions, parcels, sales and photo references. Your records are your records \u2014 7 CFR 205.103 makes you keep them for five years, and a tool you might someday leave should never be the place they are trapped. The certifier-ready packet and audit exports are a paid feature; the raw data never is.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No long-term contracts, and nothing charges you automatically — paid plans are arranged by invoice, so there is no card on file to forget about. Email info@trazo.io to stop a renewal and you keep access to the end of the period you paid for. Starter stays free after that, so your logged season does not disappear when you stop paying.",
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
