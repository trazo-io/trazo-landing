import { NextResponse } from "next/server"

import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  const result = await sendEmail({
    to: "info@trazo.io",
    from: "info@trazo.io",
    subject: `New Newsletter Subscriber: ${email}`,
    text: `New newsletter subscription from: ${email}`,
    html: `<p>New newsletter subscription from: <strong>${email}</strong></p>`,
  })

  if (!result.ok) {
    console.error("Newsletter subscribe send failed:", result.reason)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
