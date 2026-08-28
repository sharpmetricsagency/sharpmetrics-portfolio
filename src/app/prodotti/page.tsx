import type { Metadata } from "next";
import Link from "next/link";
import { getPublicWorks } from "@/lib/works";

export const metadata: Metadata = {
  title: "Products",
};

const productSlugs = [
  "sharp-commerce",
  "sharpwms",
  "sharp-metrics",
  "plugin-woocommerce",
  "sivis-cf7",
  "n8n-google-ads-audit",
];

export default function ProdottiPage() {
  const products = getPublicWorks().filter((w) => productSlugs.includes(w.slug));

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">
        Products
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Reusable frameworks, plugins, and operations systems — Sharp Commerce,
        SharpWMS, SIVIS CF7, WooCommerce modules, and n8n automation.
      </p>

      <div className="mt-10 space-y-4">
        {products.map((work) => (
          <Link
            key={work.slug}
            href={`/lavori/${work.slug}`}
            className="block rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl">
              {work.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {work.summary}
            </p>
            <p className="mt-3 text-xs uppercase tracking-wider text-[var(--muted)]">
              {work.stack.join(" · ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
