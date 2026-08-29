"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef, type MouseEvent, type ReactNode } from "react"

type MagneticButtonProps = {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
}

export const MagneticButton = ({
  href,
  children,
  className = "",
  external = false,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })
  const rotateX = useTransform(springY, [-12, 12], [4, -4])
  const rotateY = useTransform(springX, [-12, 12], [-4, 4])

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    x.set(event.clientX - rect.left - rect.width / 2)
    y.set(event.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const sharedClass = `inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm tracking-wide text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98] ${className}`

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, rotateX, rotateY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={sharedClass}>
          {children}
        </a>
      ) : (
        <Link href={href} className={sharedClass}>
          {children}
        </Link>
      )}
    </motion.div>
  )
}
