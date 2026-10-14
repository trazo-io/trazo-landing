import { NextResponse } from "next/server"

import { submitContact } from "@/lib/contact-email"
import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  const body = await request.json()
  // Fields are HTML-escaped inside buildContactEmail (Run 8b, X1).
  const outcome = await submitContact(body, sendEmail)

  if (outcome.kind === "invalid") {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const result = outcome.result
  const { email } = body as { email: string }

  if (!result.ok) {
    console.error("Contact form send failed:", result.reason)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }

  // Acceptance is not delivery. Resend checks its suppression list AFTER
  // returning 200, so a suppressed address is dropped silently and only shows
  // up as `suppressed` in the dashboard -- five submissions were lost that way
  // on 2026-08-30 while this route reported success each time. Logging the id
  // is what makes a dropped lead traceable to its Resend record; catching it
  // synchronously would need a full-access key (this one is send-only).
  console.log(`Contact form sent, resend_id=${result.id} from=${email}`)

  return NextResponse.json({ success: true })
}
