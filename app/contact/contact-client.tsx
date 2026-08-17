"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const contactFaqs = [
  {
    q: "Is the Starter plan a trial?",
    a: "No. Starter is free permanently \u2014 it does not expire and never asks for a card. The Compliance plan adds the certifier documents: the OSP renewal packet and workbooks, the audit exports and the CA PUR export.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes. Paid plans are arranged by invoice rather than a card form, so email info@trazo.io and we will move you the same day. Nothing upgrades or charges you on its own.",
  },
  {
    q: "Who owns my data?",
    a: "You do. Trazo is the platform, not the data owner, and you control what gets published — nothing goes live until you finish a production and choose to publish it. Being straight about the limit: a one-click export of your whole account is not built yet, so if you want your records out, email us and we will produce them.",
  },
  {
    q: "How do I get started?",
    a: "Sign up at app.trazo.io, add your farm, and start documenting practices. Most farms are fully configured in 15 minutes.",
  },
  {
    q: "Do you offer demos?",
    a: "Send us a message and we will reply with a short recorded walkthrough of the parts you care about, plus a link to a live sample farm you can click through in your own time.",
  },
  {
    q: "Where can I find documentation?",
    a: "Check our blog for guides, or explore the platform. It's designed to be self-explanatory.",
  },
]

export function ContactPageContent() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const form = e.target as HTMLFormElement
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed")
      setStatus("success")
    } catch {
      setErrorMsg("Something went wrong. Please try again or email us directly.")
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Derived from `contactFaqs` so the markup cannot drift from what renders. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: contactFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Have questions about Trazo? We&apos;d love to hear from you.
          </p>
        </section>

        <div className="mx-auto mt-14 max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Info</h2>
              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:info@trazo.io"
                    className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    info@trazo.io
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">
                  Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="mt-6">
                  {contactFaqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                      <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="mt-2 text-muted-foreground">
                Let&apos;s talk about your farm&apos;s transparency
              </p>

              {status === "success" ? (
                <div className="mt-8 flex flex-col items-center rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Check size={32} className="text-primary" />
                  </div>
                  <p className="mt-4 text-xl font-bold text-foreground">
                    Thank you! Your submission has been received!
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-foreground">
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-foreground">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Tell us about your farm and how we can help..."
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-red-500">{errorMsg}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 sm:w-auto"
                    size="lg"
                  >
                    {status === "loading" ? (
                      <>
                        Sending...
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={16} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
