"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2 } from "lucide-react"

interface NewsletterFormProps {
  variant?: "inline" | "block"
}

export function NewsletterForm({ variant = "inline" }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [email, setEmail] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error("Failed")
      setStatus("success")
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-primary">
        <Check size={16} />
        <span>Thanks! We&apos;ll keep you updated.</span>
      </div>
    )
  }

  if (variant === "block") {
    return (
      <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Email address for newsletter"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : "Subscribe"}
        </button>
        {status === "error" && (
          <p className="mt-2 text-xs text-red-500">Something went wrong. Try again.</p>
        )}
      </form>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-3 flex items-stretch gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Email address for newsletter"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-primary px-3 text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <ArrowRight size={16} />
          )}
          <span className="sr-only">Subscribe</span>
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-500">Something went wrong. Try again.</p>
      )}
    </div>
  )
}
