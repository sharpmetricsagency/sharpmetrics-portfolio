"use client"

import { ArrowUpRight, CircleNotch } from "@phosphor-icons/react"
import { FormEvent, useState } from "react"
import { SectionMarker } from "@/components/SectionMarker"
import { Reveal } from "@/components/motion/Reveal"

type FieldErrors = {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const ContactForm = () => {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const firstName = String(data.get("firstName") ?? "").trim()
    const lastName = String(data.get("lastName") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const phone = String(data.get("phone") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    const nextErrors: FieldErrors = {}
    if (!firstName) nextErrors.firstName = "First name is required"
    if (!lastName) nextErrors.lastName = "Last name is required"
    if (!email) nextErrors.email = "Email is required"
    else if (!validateEmail(email)) nextErrors.email = "Enter a valid email address"
    if (!message) nextErrors.message = "Message is required"

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error")
      return
    }

    setStatus("loading")

    const subject = encodeURIComponent(`Portfolio inquiry from ${firstName} ${lastName}`)
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message}`,
    )

    window.setTimeout(() => {
      window.location.href = `mailto:hello@sharpmetricsagency.com?subject=${subject}&body=${body}`
      setStatus("success")
    }, 400)
  }

  return (
    <section id="contact" className="relative border-t border-[var(--line)] px-4 py-20 md:px-6 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_center,var(--accent-soft),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionMarker index="07." />
          <h2 className="mt-6 text-4xl font-medium tracking-tighter text-white md:text-5xl">
            Contact
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)]">
            Tell me about the project, the bottleneck, or the metric you need
            to move. I reply within two business days.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Agency</p>
              <a
                href="https://www.sharpmetricsagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-white transition-colors hover:text-[var(--accent)]"
              >
                sharpmetricsagency.com
                <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Location</p>
              <p className="mt-2 text-white">Pescara, Italy</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm text-white">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  className="rounded-xl border border-white/10 bg-[var(--surface)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--accent)]"
                />
                {errors.firstName ? (
                  <p id="firstName-error" className="text-xs text-red-400">
                    {errors.firstName}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm text-white">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  className="rounded-xl border border-white/10 bg-[var(--surface)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--accent)]"
                />
                {errors.lastName ? (
                  <p id="lastName-error" className="text-xs text-red-400">
                    {errors.lastName}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-white">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="rounded-xl border border-white/10 bg-[var(--surface)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--accent)]"
                />
                {errors.email ? (
                  <p id="email-error" className="text-xs text-red-400">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm text-white">
                  Phone <span className="text-[var(--muted)]">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="rounded-xl border border-white/10 bg-[var(--surface)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="resize-y rounded-xl border border-white/10 bg-[var(--surface)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--accent)]"
              />
              {errors.message ? (
                <p id="message-error" className="text-xs text-red-400">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm text-white transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98] disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <CircleNotch size={16} weight="bold" className="animate-spin" aria-hidden="true" />
                  Opening mail client
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                </>
              )}
            </button>

            {status === "success" ? (
              <p className="text-sm text-[var(--accent)]" role="status">
                Your mail client should open with a pre-filled message. If it
                did not, write directly via{" "}
                <a
                  href="https://www.sharpmetricsagency.com"
                  className="underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sharpmetricsagency.com
                </a>
                .
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
