import Link from "next/link";
import { WorkCard } from "@/components/WorkCard";
import { getFeaturedWorks } from "@/lib/works";

export default function HomePage() {
  const featured = getFeaturedWorks();

  return (
    <div>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            Portfolio · Sharp Metrics
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--foreground)] sm:text-6xl">
            Ecommerce, plugin e sistemi che fanno vendere.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Sono Giammarco, co-fondatore di Sharp Metrics. Progetto e costruisco
            store WooCommerce, moduli custom, tracking e automazioni — dal
            framework Sharp Commerce ai negozi live dei clienti.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/lavori"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm text-[var(--surface)]"
            >
              Vedi i lavori
            </Link>
            <Link
              href="/contatto"
              className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-2.5 text-sm"
            >
              Contattami
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            In evidenza
          </h2>
          <Link href="/lavori" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
            Tutti i lavori →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </section>
    </div>
  );
}
