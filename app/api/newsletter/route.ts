import { NextResponse } from "next/server"

import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  const result = await sendEmail({
    to: "info@trazo.io",
    // Not info@ -> info@: Workspace treats mail claiming to be from its own
    // domain but arriving via an outside server as spoofing. reply_to still
    // carries the submitter, so hitting reply answers the person.
    from: "Trazo <noreply@trazo.io>",
    subject: `New Newsletter Subscriber: ${email}`,
    text: `New newsletter subscription from: ${email}`,
    html: `<p>New newsletter subscription from: <strong>${email}</strong></p>`,
  })

  if (!result.ok) {
    console.error("Newsletter subscribe send failed:", result.reason)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }

  // See the note in app/api/contact/route.ts: a 200 from Resend does not mean
  // the message was delivered, so log the id to keep the send traceable.
  console.log(`Newsletter subscribe sent, resend_id=${result.id} from=${email}`)

  return NextResponse.json({ success: true })
}
