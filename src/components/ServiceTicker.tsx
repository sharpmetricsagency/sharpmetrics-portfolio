"use client"

import { useEffect, useState } from "react"

const words = [
  "ecommerce.",
  "tracking.",
  "automation.",
  "plugins.",
  "ai.",
]

export const ServiceTicker = () => {
  const [active, setActive] = useState(2)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % words.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-end gap-3 text-right text-2xl font-medium sm:text-3xl md:text-4xl">
      {words.map((word, index) => (
        <span
          key={word}
          className={
            index === active
              ? "text-white transition-colors duration-500"
              : "outline-text transition-colors duration-500"
          }
        >
          {word}
        </span>
      ))}
    </div>
  )
}
