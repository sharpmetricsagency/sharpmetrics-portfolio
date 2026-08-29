import Link from "next/link"
import { ContactForm } from "@/components/ContactForm"
import { HeroVisual } from "@/components/HeroVisual"
import { SectionMarker } from "@/components/SectionMarker"
import { ServiceTicker } from "@/components/ServiceTicker"
import { ServicesSection } from "@/components/ServicesSection"
import { StaggeredWorkGrid } from "@/components/StaggeredWorkGrid"
import { getFeaturedWorks, getPublicWorks } from "@/lib/works"

export default function HomePage() {
  const featured = getFeaturedWorks()
  const totalProjects = getPublicWorks().length

  return (
    <div className="pt-20">
      <section className="relative min-h-[92vh] overflow-hidden px-5 pb-16 pt-10 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr_0.8fr] lg:items-center lg:gap-6">
          <div className="order-2 lg:order-1">
            <SectionMarker index="01." />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              Full Stack Growth Marketer at Sharp Metrics. I build ecommerce
              systems, custom WooCommerce plugins, tracking stacks, and AI
              automations that turn traffic into measurable revenue.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <HeroVisual />
          </div>

          <div className="order-3 flex justify-end">
            <ServiceTicker />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <SectionMarker index="02." className="md:hidden" />
            <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
              Great digital work is not only visual. It solves operational
              bottlenecks, connects data, and makes growth repeatable. Every
              build I ship balances conversion design, engineering discipline,
              and automation.
            </p>
          </div>
          <div className="md:text-right">
            <SectionMarker index="02." className="hidden md:inline-block" />
            <p className="mt-4 text-sm text-[var(--muted)]">Projects delivered</p>
            <div className="mt-2 flex items-end justify-start gap-4 md:justify-end">
              <p className="text-5xl font-medium tracking-tight text-white sm:text-6xl">
                {totalProjects}+
              </p>
              <span className="mb-2 inline-flex h-10 w-10 items-center justify-center border border-white/20 text-sm">
                ↗
              </span>
            </div>
            <div className="mt-3 h-px w-full bg-white/20 md:ml-auto md:w-48" />
          </div>
        </div>
      </section>

      <section id="works" className="border-t border-[var(--line)] px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <SectionMarker index="03." />
            <div className="text-right">
              <h2 className="text-4xl font-medium lowercase tracking-tight sm:text-5xl">
                works
              </h2>
              <Link
                href="/lavori"
                className="mt-3 inline-block text-sm text-[var(--muted)] hover:text-white"
              >
                View all work →
              </Link>
            </div>
          </div>
          <StaggeredWorkGrid works={featured} compact />
        </div>
      </section>

      <ServicesSection />
      <ContactForm />
    </div>
  )
}
