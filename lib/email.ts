/**
 * Resend transactional email helper.
 *
 * Uses the REST API directly (no SDK) so the field names match the Django
 * backend's ResendAPIBackend — REST is snake_case (`reply_to`); only the
 * Node SDK is camelCase.
 */

const RESEND_API_URL = "https://api.resend.com/emails"

type SendEmailInput = {
  to: string
  from: string
  subject: string
  text?: string
  html?: string
  replyTo?: string
}

type SendEmailResult = { ok: true; id: string } | { ok: false; reason: string }

/**
 * Sends one email. Never throws — the caller gets a reason string that is
 * already safe to log. Callers must not put `reason` in an HTTP response body.
 */
export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { ok: false, reason: "RESEND_API_KEY is not set" }
  }

  let response: Response
  try {
    response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: input.from,
        to: [input.to],
        subject: input.subject,
        ...(input.text ? { text: input.text } : {}),
        ...(input.html ? { html: input.html } : {}),
        ...(input.replyTo ? { reply_to: input.replyTo } : {}),
      }),
    })
  } catch (error) {
    // Network/DNS failure — never reached Resend.
    return { ok: false, reason: `request failed: ${String(error)}` }
  }

  // Read the body once, as text: an error body is not always valid JSON.
  const raw = await response.text()

  if (!response.ok) {
    // The whole point of this helper: surface Resend's own message instead of
    // the "[object]" that a bare console.error(error) used to print. A dead
    // API key looked identical to a malformed payload for four months.
    return { ok: false, reason: `HTTP ${response.status} ${raw}` }
  }

  try {
    const { id } = JSON.parse(raw) as { id: string }
    return { ok: true, id }
  } catch {
    return { ok: false, reason: `unparseable success body: ${raw}` }
  }
}
