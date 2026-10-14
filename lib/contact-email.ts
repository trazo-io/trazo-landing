/**
 * Builds and sends the contact-form email. Kept free of Next and path-alias imports so
 * `node --test` can load it directly (tests/contact-email.test.mjs).
 *
 * Run 8b, X1: every submitted field used to be interpolated raw into the HTML body, so a message
 * containing markup (a link, a script tag, a fake "reply here" block) rendered as markup in the
 * inbox. All five fields are now HTML-escaped; the plain-text body is unchanged.
 */

export type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactEmail = {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

/** Escapes the five characters that can open markup or break out of an attribute. */
export function escapeHtml(value: unknown): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Escape first, then turn newlines into <br />, so the only tag in the result is ours. */
function escapeMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

export function buildContactEmail(fields: ContactFields): ContactEmail {
  const { firstName, lastName, email, subject, message } = fields;
  return {
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
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(
      lastName
    )}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeMultiline(message)}</p>
      `,
  };
}

type Sender<R> = (email: ContactEmail) => Promise<R>;

export type ContactResult<R> =
  | { kind: "invalid" }
  | { kind: "sent"; result: R };

/**
 * Validates the submitted body and hands the built email to `send`. The sender is injected so
 * the route passes the real Resend helper and the test passes a mock (no network, no email).
 */
export async function submitContact<R>(
  body: unknown,
  send: Sender<R>
): Promise<ContactResult<R>> {
  const b = (body ?? {}) as Partial<Record<keyof ContactFields, unknown>>;
  const fields = [b.firstName, b.lastName, b.email, b.subject, b.message];
  if (fields.some((f) => typeof f !== "string" || f.length === 0)) {
    return { kind: "invalid" };
  }
  const result = await send(buildContactEmail(b as ContactFields));
  return { kind: "sent", result };
}
