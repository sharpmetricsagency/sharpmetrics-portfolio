"use client"

import { motion } from "framer-motion"
import { SectionMarker } from "@/components/SectionMarker"
import { Reveal } from "@/components/motion/Reveal"

const rows = [
  {
    label: "ecommerce",
    items: [
      "WooCommerce rebuilds",
      "Custom plugins",
      "CRO modules",
      "Store migrations",
      "Checkout hardening",
    ],
  },
  {
    label: "tracking",
    items: [
      "GTM and server-side",
      "Consent Mode v2",
      "Enhanced conversions",
      "GA4 / Meta CAPI",
      "Merchant Center",
    ],
  },
  {
    label: "systems",
    items: [
      "n8n workflows",
      "AI content pipelines",
      "Lead generation",
      "SharpWMS",
      "Healthcare CRM forms",
    ],
  },
]

export const ServicesSection = () => {
  return (
    <section id="services" className="border-t border-[var(--line)] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionMarker index="04." />
          <div className="md:text-right">
            <h2 className="text-4xl font-medium tracking-tighter text-white md:text-5xl">
              Services
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)] md:ml-auto">
              Engineering, analytics, and automation shipped as one operating
              stack — not disconnected deliverables.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-[var(--line)]">
          {rows.map((row) => (
            <motion.div
              key={row.label}
              className="group grid gap-8 py-10 md:grid-cols-[180px_1fr] md:items-start md:gap-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <p className="font-mono text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
                {row.label}
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {row.items.map((item) => (
                  <motion.span
                    key={item}
                    layout
                    className="relative block border-t border-[var(--line)] py-4 text-sm text-[var(--muted)] transition-colors group-hover:text-white/80"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
