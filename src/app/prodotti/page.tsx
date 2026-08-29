import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/motion/Reveal"
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
    <div className="px-4 pb-20 pt-32 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionMarker index="05." />
          <div className="md:text-right">
            <h1 className="text-4xl font-medium tracking-tighter text-white md:text-5xl">
              Products
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)] md:ml-auto">
              Reusable frameworks, plugins, and operations systems — Sharp
              Commerce, SharpWMS, SIVIS CF7, WooCommerce modules, and n8n
              automation.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-[var(--line)]">
          {products.map((work) => (
            <Link
              key={work.slug}
              href={`/lavori/${work.slug}`}
              className="group grid gap-4 py-10 transition-colors md:grid-cols-[1fr_2fr] md:items-center md:gap-12"
            >
              <h2 className="text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-[var(--accent)]">
                {work.title}
              </h2>
              <div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {work.summary}
                </p>
                <p className="mt-3 flex items-center gap-1 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {work.stack.join(" · ")}
                  <ArrowUpRight
                    size={12}
                    weight="bold"
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
