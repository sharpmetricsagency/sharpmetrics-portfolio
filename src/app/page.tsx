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
            Portfolio · Pescara · Sharp Metrics
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--foreground)] sm:text-6xl">
            Ecommerce, plugins & systems built to convert.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
            Full Stack Growth Marketer — co-founder at Sharp Metrics.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Progetto store WooCommerce, moduli custom, tracking GTM e automazioni
            AI — dal framework Sharp Commerce ai negozi live dei clienti.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/lavori"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm text-[var(--surface)]"
            >
              View work
            </Link>
            <Link
              href="/contatto"
              className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-2.5 text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Featured
          </h2>
          <Link href="/lavori" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
            All work →
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
