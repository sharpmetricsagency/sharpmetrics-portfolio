import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllWorks, getWork, kindLabel } from "@/lib/works";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllWorks().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.summary,
  };
}

export default async function LavoroPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  return (
    <article className="mx-auto max-w-5xl px-5 py-14">
      <Link href="/lavori" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
        ← Tutti i lavori
      </Link>

      <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
        {kindLabel[work.kind]}
        {work.client ? ` · ${work.client}` : ""}
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
        {work.title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
        {work.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {work.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]"
          >
            {item}
          </span>
        ))}
      </div>

      {work.url ? (
        <p className="mt-4">
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Visita il sito →
          </a>
        </p>
      ) : null}

      {work.screenshots.length > 0 ? (
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {work.screenshots.map((src) => (
            <div
              key={src}
              className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-2)]"
            >
              <Image
                src={src}
                alt={`Screenshot ${work.title}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {[
          ["Problema", work.problem],
          ["Intervento", work.intervention],
          ["Risultato", work.result],
        ].map(([label, text]) => (
          <section key={label}>
            <h2 className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
              {label}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              {text}
            </p>
          </section>
        ))}
      </div>

      {work.gaps.length > 0 ? (
        <section className="mt-12 rounded-lg border border-dashed border-[var(--line)] bg-[var(--surface)] p-5">
          <h2 className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
            Da completare con te
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            {work.gaps.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
