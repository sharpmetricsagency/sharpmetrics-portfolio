"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { fadeUp, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { kindLabel, type Work } from "@/lib/work-types"

const layoutClasses = [
  "lg:col-span-5 lg:col-start-1 lg:row-start-1",
  "lg:col-span-6 lg:col-start-7 lg:row-start-2",
  "lg:col-span-5 lg:col-start-2 lg:row-start-3",
  "lg:col-span-6 lg:col-start-7 lg:row-start-4",
  "lg:col-span-5 lg:col-start-1 lg:row-start-5",
  "lg:col-span-6 lg:col-start-6 lg:row-start-6",
]

const sizeClasses = [
  "aspect-[4/5] max-w-sm",
  "aspect-square max-w-lg lg:ml-auto",
  "aspect-[4/5] max-w-md",
  "aspect-[16/11] max-w-xl lg:ml-auto",
  "aspect-[4/5] max-w-sm",
  "aspect-square max-w-lg lg:ml-auto",
]

type StaggeredWorkGridProps = {
  works: Work[]
  compact?: boolean
}

export const StaggeredWorkGrid = ({ works, compact = false }: StaggeredWorkGridProps) => {
  const items = compact ? works.slice(0, 6) : works

  return (
    <RevealGroup className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-20">
      {items.map((work, index) => {
        const cover = work.screenshots[0]
        const layout = layoutClasses[index % layoutClasses.length]
        const size = sizeClasses[index % sizeClasses.length]
        const alignRight = index % 2 === 1

        return (
          <RevealItem key={work.slug} className={layout}>
            <motion.div variants={fadeUp}>
              <Link href={`/lavori/${work.slug}`} className="group block">
                <div
                  className={`relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${size}`}
                >
                  {cover ? (
                    <Image
                      src={cover}
                      alt={`Screenshot ${work.title}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[var(--muted)]">
                      {work.title}
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className={`mt-5 ${alignRight ? "lg:text-right" : ""}`}>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    <span>{kindLabel[work.kind]}</span>
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-white md:text-2xl">
                    {work.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          </RevealItem>
        )
      })}
    </RevealGroup>
  )
}
