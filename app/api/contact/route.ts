import { NextResponse } from "next/server"

import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  const { firstName, lastName, email, subject, message } = await request.json()

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const result = await sendEmail({
    to: "info@trazo.io",
    // Not info@ -> info@: Workspace treats mail claiming to be from its own
    // domain but arriving via an outside server as spoofing. reply_to still
    // carries the submitter, so hitting reply answers the person.
    from: "Trazo <noreply@trazo.io>",
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

  // Acceptance is not delivery. Resend checks its suppression list AFTER
  // returning 200, so a suppressed address is dropped silently and only shows
  // up as `suppressed` in the dashboard -- five submissions were lost that way
  // on 2026-08-30 while this route reported success each time. Logging the id
  // is what makes a dropped lead traceable to its Resend record; catching it
  // synchronously would need a full-access key (this one is send-only).
  console.log(`Contact form sent, resend_id=${result.id} from=${email}`)

  return NextResponse.json({ success: true })
}
