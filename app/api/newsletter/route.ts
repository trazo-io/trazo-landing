import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  const apiKey = process.env.SENDGRID_API_KEY
  if (!apiKey) {
    console.error("SENDGRID_API_KEY is not set")
    return NextResponse.json(
      { error: "Newsletter service is not configured" },
      { status: 500 }
    )
  }

  sgMail.setApiKey(apiKey)

  try {
    await sgMail.send({
      to: "info@trazo.io",
      from: "info@trazo.io",
      subject: `New Newsletter Subscriber: ${email}`,
      text: `New newsletter subscription from: ${email}`,
      html: `<p>New newsletter subscription from: <strong>${email}</strong></p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("SendGrid error:", error)
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    )
  }
}
