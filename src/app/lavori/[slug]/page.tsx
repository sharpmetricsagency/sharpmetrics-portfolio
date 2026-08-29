import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/motion/Reveal"
import { SectionMarker } from "@/components/SectionMarker"
import { getPublicWorks, getWork, kindLabel } from "@/lib/works"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getPublicWorks().map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) return {}
  return {
    title: work.title,
    description: work.summary,
  }
}

export default async function LavoroPage({ params }: Props) {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) notFound()

  return (
    <article className="px-4 pb-20 pt-32 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <Link
          href="/lavori"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-white"
        >
          <ArrowLeft size={14} weight="bold" aria-hidden="true" />
          All work
        </Link>

        <Reveal className="mt-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <SectionMarker index="03." />
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {kindLabel[work.kind]}
              {work.client ? ` · ${work.client}` : ""}
            </p>
            <h1 className="mt-2 text-4xl font-medium tracking-tighter text-white md:text-5xl">
              {work.title}
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
            {work.summary}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 flex flex-wrap gap-2">
            {work.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-[var(--surface)] px-3 py-1 font-mono text-xs text-[var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        {work.showUrl && work.url ? (
          <p className="mt-4">
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--accent)] underline-offset-4 hover:underline"
            >
              Visit site
            </a>
          </p>
        ) : null}

        {work.screenshots.length > 0 ? (
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {work.screenshots.map((src) => (
              <div
                key={src}
                className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[var(--surface)]"
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

        <div className="mt-16 grid gap-10 border-t border-[var(--line)] pt-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Challenge", work.problem],
            ["Approach", work.intervention],
            ["Outcome", work.result],
          ].map(([label, text]) => (
            <section key={label}>
              <h2 className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {label}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white">{text}</p>
            </section>
          ))}
        </div>

        {work.gaps.length > 0 ? (
          <section className="mt-12 rounded-[1.5rem] border border-dashed border-white/12 bg-[var(--surface)] p-6">
            <h2 className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Open items
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
              {work.gaps.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  )
}

