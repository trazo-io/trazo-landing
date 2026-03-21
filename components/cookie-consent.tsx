"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Analytics } from "@vercel/analytics/next"

export const COOKIE_CONSENT_KEY = "trazo-cookie-consent"
const CONSENT_VERSION = 1

type CookiePreferences = {
  essential: true
  analytics: boolean
  functional: boolean
  version: number
  timestamp: number
}

const defaultPreferences: Omit<CookiePreferences, "timestamp"> = {
  essential: true,
  analytics: false,
  functional: false,
  version: CONSENT_VERSION,
}

export function getStoredConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!stored) return null
    const parsed = JSON.parse(stored) as CookiePreferences
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

function storeConsent(
  preferences: Omit<CookiePreferences, "timestamp" | "version">
) {
  const full: CookiePreferences = {
    ...preferences,
    version: CONSENT_VERSION,
    timestamp: Date.now(),
  }
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(full))
  window.dispatchEvent(
    new CustomEvent("cookie-consent-change", { detail: full })
  )
}

// --- Conditional Analytics ---

export function ConditionalAnalytics() {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    const consent = getStoredConsent()
    setAllowed(consent?.analytics === true)

    function onConsentChange(e: Event) {
      const detail = (e as CustomEvent<CookiePreferences>).detail
      setAllowed(detail?.analytics === true)
    }

    function onStorage(e: StorageEvent) {
      if (e.key === COOKIE_CONSENT_KEY) {
        const updated = e.newValue ? JSON.parse(e.newValue) : null
        setAllowed(updated?.analytics === true)
      }
    }

    window.addEventListener("cookie-consent-change", onConsentChange)
    window.addEventListener("storage", onStorage)
    return () => {
      window.removeEventListener("cookie-consent-change", onConsentChange)
      window.removeEventListener("storage", onStorage)
    }
  }, [])

  if (!allowed) return null
  return <Analytics />
}

// --- Toggle Switch ---

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ${
        disabled
          ? "cursor-not-allowed bg-primary/60"
          : checked
            ? "cursor-pointer bg-primary"
            : "cursor-pointer bg-muted-foreground/30"
      }`}
    >
      <span
        className={`pointer-events-none block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-[18px]" : "translate-x-[2px]"
        }`}
      />
    </button>
  )
}

// --- Cookie Consent Banner ---

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    functional: false,
  })

  const show = useCallback(() => {
    const stored = getStoredConsent()
    setPreferences({
      analytics: stored?.analytics ?? false,
      functional: stored?.functional ?? false,
    })
    setShowDetails(false)
    setVisible(true)
    requestAnimationFrame(() => setAnimating(true))
  }, [])

  const hide = useCallback(() => {
    setAnimating(false)
    setTimeout(() => setVisible(false), 300)
  }, [])

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) {
      show()
    }

    function onReopen() {
      show()
    }

    window.addEventListener("cookie-consent-reopen", onReopen)
    return () => window.removeEventListener("cookie-consent-reopen", onReopen)
  }, [show])

  function acceptAll() {
    storeConsent({ essential: true, analytics: true, functional: true })
    hide()
  }

  function acceptEssential() {
    storeConsent({ essential: true, analytics: false, functional: false })
    hide()
  }

  function savePreferences() {
    storeConsent({
      essential: true,
      analytics: preferences.analytics,
      functional: preferences.functional,
    })
    hide()
  }

  if (!visible) return null

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 p-4 transition-all duration-300 ease-out sm:p-6 ${
        animating
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
    >
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card shadow-lg">
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Cookie Preferences
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                We use cookies to improve your experience and analyze platform
                usage. Essential cookies are always active.{" "}
                <Link
                  href="/cookie-policy"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Cookie Policy
                </Link>
              </p>
            </div>
          </div>

          {showDetails && (
            <div className="mt-4 space-y-4 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-foreground">
                    Essential
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Authentication, security, and core functionality.
                  </p>
                </div>
                <Toggle checked disabled label="Essential cookies (always on)" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-foreground">
                    Analytics
                  </span>
                  <p className="text-xs text-muted-foreground">
                    How the platform is used (Vercel Analytics, no PII).
                  </p>
                </div>
                <Toggle
                  checked={preferences.analytics}
                  onChange={(v) =>
                    setPreferences((p) => ({ ...p, analytics: v }))
                  }
                  label="Analytics cookies"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-foreground">
                    Functional
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Language, theme, and region preferences.
                  </p>
                </div>
                <Toggle
                  checked={preferences.functional}
                  onChange={(v) =>
                    setPreferences((p) => ({ ...p, functional: v }))
                  }
                  label="Functional cookies"
                />
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={acceptAll}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Accept All
            </button>
            <button
              onClick={acceptEssential}
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Essential Only
            </button>
            {showDetails ? (
              <button
                onClick={savePreferences}
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Save Preferences
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
              >
                Customize
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
