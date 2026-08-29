"use client"

import { useEffect, useState } from "react"
import { SectionMarker } from "@/components/SectionMarker"

const pillWords = [
  "AUTOMATION",
  "ANALYTICS",
  "CONVERSION",
  "INTEGRATION",
  "AUTOMATION",
  "ANALYTICS",
]

const rows = [
  {
    label: "ecommerce",
    cols: [
      ["WooCommerce rebuilds", "Custom plugins", "CRO modules"],
      ["Store migrations", "Checkout hardening"],
    ],
  },
  {
    label: "tracking",
    cols: [
      ["GTM & server-side", "Consent Mode v2", "Enhanced conversions"],
      ["GA4 / Meta CAPI", "Merchant Center"],
    ],
  },
  {
    label: "systems",
    cols: [
      ["n8n workflows", "AI content pipelines", "Lead generation"],
      ["SharpWMS", "Healthcare CRM forms"],
    ],
  },
]

export const ServicesSection = () => {
  const [activeRow, setActiveRow] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % rows.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="services" className="border-t border-[var(--line)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-start justify-between gap-6">
          <SectionMarker index="04." />
          <h2 className="text-4xl font-medium lowercase tracking-tight sm:text-5xl">
            services
          </h2>
        </div>

        <div className="divide-y divide-[var(--line)]">
          {rows.map((row, rowIndex) => (
            <div
              key={row.label}
              className="grid gap-6 py-8 md:grid-cols-[160px_1fr_1fr] md:items-center md:gap-10"
            >
              <p className="text-lg lowercase text-white md:text-xl">{row.label}</p>

              <div className="flex min-h-16 items-center">
                {rowIndex === activeRow ? (
                  <div className="relative overflow-hidden rounded-full border border-white/10 bg-white px-5 py-3 shadow-[0_0_40px_rgba(0,229,255,0.35)]">
                    <div className="pill-marquee flex w-max gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                      {pillWords.map((word, index) => (
                        <span key={`${word}-${index}`}>{word}</span>
                      ))}
                    </div>
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-black ring-2 ring-white" />
                  </div>
                ) : (
                  <div className="h-12 w-40 rounded-full border border-white/10 bg-white/5" />
                )}
              </div>

              <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
                {row.cols.map((col) => (
                  <ul key={col.join("-")} className="space-y-2 text-sm text-[var(--muted)]">
                    {col.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
