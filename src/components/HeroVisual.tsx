"use client"

import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, type MouseEvent } from "react"

const armPath =
  "M 50 8 L 50 42 Q 50 50 42 50 L 8 50 L 8 42 L 42 42 Q 42 42 42 42 L 42 8 Z"

export const HeroVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 80, damping: 20 })
  const springY = useSpring(pointerY, { stiffness: 80, damping: 20 })
  const rotateX = useTransform(springY, [-40, 40], [8, -8])
  const rotateY = useTransform(springX, [-40, 40], [-8, 8])

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = containerRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    pointerX.set(event.clientX - rect.left - rect.width / 2)
    pointerY.set(event.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[min(88vw,560px)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] mesh-gradient opacity-80"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
      />

      <motion.div
        className="absolute inset-[6%] rounded-[2rem] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-[14%] h-[72%] w-[72%] opacity-25"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        {[0, 90, 180, 270].map((rotation) => (
          <path
            key={rotation}
            d={armPath}
            fill="none"
            stroke="rgba(250,250,250,0.35)"
            strokeWidth="1.2"
            transform={`rotate(${rotation} 50 50)`}
          />
        ))}
      </motion.svg>

      <motion.div
        className="absolute inset-[20%] rounded-full border border-dashed border-white/10"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
      />

      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
          style={{
            top: `${28 + i * 18}%`,
            left: `${18 + i * 22}%`,
            rotateX,
            rotateY,
            transformPerspective: 900,
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-[22%] flex items-center justify-center"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            repeat: Infinity,
            duration: 5,
          }}
          className="relative w-[62%]"
        >
          <Image
            src="/logo.png"
            alt=""
            width={850}
            height={850}
            priority
            className="h-auto w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
