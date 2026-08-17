"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Proof that hydration happened, which retires the CSS failsafe in globals.css.
    // Until this lands, a page whose bundle never arrives still reveals itself at 4s.
    document.documentElement.classList.add("js-ready")

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    if (mq.matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  // The hidden state lives in CSS (globals.css), gated on `html.js`, NOT in classes
  // emitted here. React cannot know at render time whether its own bundle will
  // arrive, so anything this component hides directly is hidden in the server HTML
  // too — which is exactly how nine sections came to ship at opacity 0.
  return (
    <div
      ref={ref}
      data-reveal={isVisible ? "shown" : "pending"}
      data-reveal-dir={direction}
      className={className}
      style={
        prefersReducedMotion
          ? undefined
          : ({
              "--reveal-duration": `${duration}ms`,
              "--reveal-delay": `${delay}ms`,
            } as React.CSSProperties)
      }
    >
      {children}
    </div>
  )
}

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 100,
  direction = "up",
  duration = 600,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Proof that hydration happened, which retires the CSS failsafe in globals.css.
    // Until this lands, a page whose bundle never arrives still reveals itself at 4s.
    document.documentElement.classList.add("js-ready")

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    if (mq.matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  // Same contract as ScrollReveal above: hidden state comes from CSS gated on
  // `html.js`, never from classes rendered on the server.
  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              data-reveal={isVisible ? "shown" : "pending"}
              data-reveal-dir={direction}
              style={
                prefersReducedMotion
                  ? undefined
                  : ({
                      "--reveal-duration": `${duration}ms`,
                      "--reveal-delay": `${i * staggerDelay}ms`,
                    } as React.CSSProperties)
              }
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
