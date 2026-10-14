// Run 8b, X1: contact-form fields reach the HTML email escaped. No email is sent and no network
// is touched: the sender is a mock, and the second case stubs fetch under the real Resend helper.
// Run: pnpm test   (node --test; Node strips the TypeScript types of the imported modules)

import { test } from "node:test"
import assert from "node:assert/strict"

import { submitContact, escapeHtml } from "../lib/contact-email.ts"
import { sendEmail } from "../lib/email.ts"

const hostile = {
  firstName: '<img src=x onerror="alert(1)">',
  lastName: "O'Brien & Sons",
  email: "grower@example.com",
  subject: "<b>Renewal</b>",
  message: 'Hi,\nclick <a href="x">here</a>\n<script>alert(1)</script>',
}

test("escapeHtml escapes the five markup characters", () => {
  assert.equal(escapeHtml(`<a href="x">'&'</a>`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;")
})

test("every field arrives escaped in the html body; the text body is unchanged", async () => {
  const sent = []
  const outcome = await submitContact(hostile, async (email) => {
    sent.push(email)
    return { ok: true, id: "mock" }
  })

  assert.equal(outcome.kind, "sent")
  assert.equal(sent.length, 1)
  const { html, text, replyTo } = sent[0]

  for (const raw of ["<a href", "<script>", "<img", "<b>"]) {
    assert.ok(!html.includes(raw), `raw markup ${raw} reached the html body`)
  }
  assert.ok(html.includes("click &lt;a href=&quot;x&quot;&gt;here&lt;/a&gt;"))
  assert.ok(html.includes("&lt;script&gt;alert(1)&lt;/script&gt;"))
  assert.ok(html.includes("&lt;img src=x onerror=&quot;alert(1)&quot;&gt;"))
  assert.ok(html.includes("O&#39;Brien &amp; Sons"))
  assert.ok(html.includes("&lt;b&gt;Renewal&lt;/b&gt;"))
  // Newlines become <br /> after escaping, so the only tags are the template's own.
  assert.ok(html.includes("Hi,<br />click"))

  assert.equal(
    text,
    `Name: ${hostile.firstName} ${hostile.lastName}\nEmail: ${hostile.email}\nSubject: ${hostile.subject}\n\nMessage:\n${hostile.message}`,
  )
  assert.equal(replyTo, hostile.email)
})

test("missing or non-string fields are refused before anything is sent", async () => {
  let calls = 0
  const send = async () => {
    calls += 1
    return { ok: true, id: "mock" }
  }
  assert.equal((await submitContact({ ...hostile, message: "" }, send)).kind, "invalid")
  assert.equal((await submitContact({ ...hostile, email: 42 }, send)).kind, "invalid")
  assert.equal((await submitContact(null, send)).kind, "invalid")
  assert.equal(calls, 0)
})

test("through the real Resend helper, the request body carries the escaped html (fetch stubbed)", async (t) => {
  const requests = []
  const realFetch = globalThis.fetch
  const realKey = process.env.RESEND_API_KEY
  process.env.RESEND_API_KEY = "test-key-not-real"
  globalThis.fetch = async (url, init) => {
    requests.push({ url, body: JSON.parse(init.body) })
    return new Response(JSON.stringify({ id: "stubbed" }), { status: 200 })
  }
  t.after(() => {
    globalThis.fetch = realFetch
    if (realKey === undefined) delete process.env.RESEND_API_KEY
    else process.env.RESEND_API_KEY = realKey
  })

  const outcome = await submitContact(hostile, sendEmail)

  assert.deepEqual(outcome, { kind: "sent", result: { ok: true, id: "stubbed" } })
  assert.equal(requests.length, 1)
  const { body } = requests[0]
  assert.ok(!body.html.includes("<script>"))
  assert.ok(!body.html.includes('<a href="x">'))
  assert.ok(body.html.includes("&lt;script&gt;"))
  assert.equal(body.text.includes("<script>alert(1)</script>"), true)
  assert.equal(body.reply_to, hostile.email)
})
