"use client"

import { FormEvent, useState } from "react"
import { SectionMarker } from "@/components/SectionMarker"

export const ContactForm = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative border-t border-[var(--line)] px-5 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_center,rgba(88,120,255,0.18),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <SectionMarker index="07." />
          <h2 className="mt-6 text-4xl font-medium lowercase tracking-tight sm:text-5xl">
            contact
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm text-[var(--muted)]">Agency</p>
              <a
                href="https://www.sharpmetricsagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-white hover:text-[var(--accent)]"
              >
                sharpmetricsagency.com
              </a>
            </div>
            <div>
              <p className="text-sm text-[var(--muted)]">Location</p>
              <p className="mt-2 text-white">Pescara, Italy</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-2">
              <span className="text-sm text-white">First Name</span>
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full rounded-full border border-white/10 bg-[var(--surface-2)] px-5 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[var(--accent)]"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm text-white">Last Name</span>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full rounded-full border border-white/10 bg-[var(--surface-2)] px-5 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[var(--accent)]"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-2">
              <span className="text-sm text-white">Email Address</span>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-full border border-white/10 bg-[var(--surface-2)] px-5 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[var(--accent)]"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm text-white">Phone Number</span>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-full border border-white/10 bg-[var(--surface-2)] px-5 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[var(--accent)]"
              />
            </label>
          </div>
          <label className="block space-y-2">
            <span className="text-sm text-white">Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message here!"
              className="w-full rounded-3xl border border-white/10 bg-[var(--surface-2)] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[var(--accent)]"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-3 border-b border-white pb-1 text-sm text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Submit
            <span aria-hidden="true">↗</span>
          </button>
          {sent ? (
            <p className="text-sm text-[var(--accent)]">
              Thanks — for now this form is visual only. Reach out via{" "}
              <a
                href="https://www.sharpmetricsagency.com"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                sharpmetricsagency.com
              </a>
              .
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
