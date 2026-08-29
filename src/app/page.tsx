import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { ContactForm } from "@/components/ContactForm"
import { Reveal } from "@/components/motion/Reveal"
import { SectionMarker } from "@/components/SectionMarker"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { StaggeredWorkGrid } from "@/components/StaggeredWorkGrid"
import { getFeaturedWorks, getPublicWorks } from "@/lib/works"

export default function HomePage() {
  const featured = getFeaturedWorks()
  const totalProjects = getPublicWorks().length

  return (
    <>
      <HeroSection />

      <section className="border-t border-[var(--line)] px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <SectionMarker index="02." />
            <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-[var(--muted)]">
              Great digital work is not only visual. It solves operational
              bottlenecks, connects data, and makes growth repeatable. Every
              build I ship balances conversion design, engineering discipline,
              and automation.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:text-right">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Projects delivered
            </p>
            <div className="mt-3 flex items-end justify-start gap-4 lg:justify-end">
              <p className="font-mono text-5xl font-medium tracking-tighter text-white md:text-6xl">
                {totalProjects}+
              </p>
              <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12">
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-4 h-px w-full bg-[var(--line)] lg:ml-auto lg:w-48" />
          </Reveal>
        </div>
      </section>

      <section id="works" className="border-t border-[var(--line)] px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionMarker index="03." />
            <div className="md:text-right">
              <h2 className="text-4xl font-medium tracking-tighter text-white md:text-5xl">
                Work
              </h2>
              <Link
                href="/lavori"
                className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--muted)] transition-colors hover:text-white"
              >
                View all work
                <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <StaggeredWorkGrid works={featured} compact />
        </div>
      </section>

      <ServicesSection />
      <ContactForm />
    </>
  )
}
