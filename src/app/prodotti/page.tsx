import type { Metadata } from "next";
import Link from "next/link";
import { getAllWorks } from "@/lib/works";

export const metadata: Metadata = {
  title: "Prodotti",
};

export default function ProdottiPage() {
  const products = getAllWorks().filter((w) =>
    ["prodotto", "plugin", "gestionale"].includes(w.kind),
  );

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">
        Prodotti
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Framework, plugin e sistemi operativi riusabili — Sharp Commerce, moduli
        WooCommerce, Sharp Metrics / n8n.
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
