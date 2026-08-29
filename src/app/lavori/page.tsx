import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/motion/Reveal"
import { SectionMarker } from "@/components/SectionMarker"
import { StaggeredWorkGrid } from "@/components/StaggeredWorkGrid"
import { getPublicWorks } from "@/lib/works"

export const metadata: Metadata = {
  title: "Work",
}

export default function LavoriPage() {
  const works = getPublicWorks()

  return (
    <div className="px-4 pb-20 pt-32 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionMarker index="03." />
          <div className="md:text-right">
            <h1 className="text-4xl font-medium tracking-tighter text-white md:text-5xl">
              Work
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)] md:ml-auto">
              Selected ecommerce, healthcare, and product projects. Client URLs
              stay private; screenshots show the live experience.
            </p>
          </div>
        </Reveal>
        <StaggeredWorkGrid works={works} />
        <Reveal className="mt-20 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-sm text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Start a project
            <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
