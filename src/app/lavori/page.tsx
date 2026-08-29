import type { Metadata } from "next"
import Link from "next/link"
import { SectionMarker } from "@/components/SectionMarker"
import { StaggeredWorkGrid } from "@/components/StaggeredWorkGrid"
import { getPublicWorks } from "@/lib/works"

export const metadata: Metadata = {
  title: "Work",
}

export default function LavoriPage() {
  const works = getPublicWorks()

  return (
    <div className="px-5 pb-20 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <SectionMarker index="03." />
          <div className="text-right">
            <h1 className="text-4xl font-medium lowercase tracking-tight sm:text-5xl">
              works
            </h1>
            <p className="mt-3 max-w-md text-sm text-[var(--muted)]">
              Selected ecommerce, healthcare, and product projects. Client URLs
              stay private; screenshots show the live experience.
            </p>
          </div>
        </div>
        <StaggeredWorkGrid works={works} />
        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 border-b border-white pb-1 text-sm text-white"
          >
            Start a project
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
