"use client"

import { ArrowUpRight } from "@phosphor-icons/react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { HeroVisual } from "@/components/HeroVisual"
import { MagneticButton } from "@/components/motion/MagneticButton"
import { SectionMarker } from "@/components/SectionMarker"

const focusWords = [
  "ecommerce systems",
  "tracking stacks",
  "WooCommerce plugins",
  "n8n automation",
  "AI content pipelines",
]

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [wordIndex, setWordIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"])
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % focusWords.length)
    }, 3200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden px-4 pb-20 pt-28 md:px-6 md:pb-28"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 mesh-gradient opacity-60"
        style={{ y: bgY }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -right-[20vw] top-[10%] h-[50vh] w-[50vw] rounded-full bg-[var(--accent-soft)] blur-[120px]"
        style={{ y: bgY }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div style={{ y: textY }} className="order-2 lg:order-1">
          <SectionMarker index="01." />
          <h1 className="mt-8 max-w-xl text-4xl font-medium leading-[1.05] tracking-tighter text-white md:text-6xl">
            Full stack growth for{" "}
            <span className="text-[var(--accent)]">measurable revenue</span>
          </h1>

          <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-[var(--muted)]">
            Full Stack Growth Marketer at Sharp Metrics. I build ecommerce
            systems, custom WooCommerce plugins, tracking stacks, and AI
            automations that turn traffic into measurable revenue.
          </p>

          <div className="mt-6 h-8 overflow-hidden font-mono text-sm text-[var(--muted)]">
            <AnimatePresence mode="wait">
              <motion.p
                key={focusWords[wordIndex]}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                Currently focused on {focusWords[wordIndex]}.
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/#contact">
              Start a project
              <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton href="/lavori" className="border-transparent bg-transparent px-4">
              View work
            </MagneticButton>
          </div>

          <div className="mt-14 hidden overflow-hidden border-t border-[var(--line)] pt-6 lg:block">
            <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {[...focusWords, ...focusWords].map((word, index) => (
                <span key={`${word}-${index}`}>{word}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: visualY }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
