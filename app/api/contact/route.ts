import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

export async function POST(request: Request) {
  const { firstName, lastName, email, subject, message } = await request.json()

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const apiKey = process.env.SENDGRID_API_KEY
  if (!apiKey) {
    console.error("SENDGRID_API_KEY is not set")
    return NextResponse.json(
      { error: "Contact service is not configured" },
      { status: 500 }
    )
  }

  sgMail.setApiKey(apiKey)

  try {
    await sgMail.send({
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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("SendGrid error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
