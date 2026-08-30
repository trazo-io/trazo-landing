import { NextResponse } from "next/server"

import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  const { firstName, lastName, email, subject, message } = await request.json()

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const result = await sendEmail({
    to: "info@trazo.io",
    from: "info@trazo.io",
    replyTo: email,
    subject: `Contact Form: ${subject}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
  })

  if (!result.ok) {
    console.error("Contact form send failed:", result.reason)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
