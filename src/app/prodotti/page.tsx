import type { Metadata } from "next"
import Link from "next/link"
import { SectionMarker } from "@/components/SectionMarker"
import { getPublicWorks } from "@/lib/works"

export const metadata: Metadata = {
  title: "Products",
}

const productSlugs = [
  "sharp-commerce",
  "sharpwms",
  "sharp-metrics",
  "plugin-woocommerce",
  "sivis-cf7",
  "n8n-google-ads-audit",
]

export default function ProdottiPage() {
  const products = getPublicWorks().filter((w) => productSlugs.includes(w.slug))

  return (
    <div className="px-5 pb-20 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <SectionMarker index="05." />
          <div className="text-right">
            <h1 className="text-4xl font-medium lowercase tracking-tight sm:text-5xl">
              products
            </h1>
            <p className="mt-3 max-w-md text-sm text-[var(--muted)]">
              Reusable frameworks, plugins, and operations systems — Sharp
              Commerce, SharpWMS, SIVIS CF7, WooCommerce modules, and n8n
              automation.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[var(--line)]">
          {products.map((work) => (
            <Link
              key={work.slug}
              href={`/lavori/${work.slug}`}
              className="group grid gap-4 py-8 transition-colors md:grid-cols-[1fr_2fr] md:items-center md:gap-10"
            >
              <h2 className="text-2xl font-medium text-white group-hover:text-[var(--accent)]">
                {work.title}
              </h2>
              <div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {work.summary}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {work.stack.join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
