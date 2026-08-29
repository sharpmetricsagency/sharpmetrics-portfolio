"use client"

import Image from "next/image"
import Link from "next/link"
import { List, X } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const links = [
  { href: "/#works", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/prodotti", label: "Products" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen((prev) => !prev)
  const handleClose = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="glass-panel mx-4 mt-4 rounded-2xl md:mx-6">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4">
          <Link href="/" className="flex items-center gap-3" onClick={handleClose}>
            <Image src="/logo.png" alt="Sharp Metrics" width={28} height={28} />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-white">
              Sharp Metrics
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex" aria-label="Main">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] md:inline-flex"
            >
              Start project
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={handleToggle}
            >
              {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="glass-panel mx-4 mt-2 rounded-2xl px-5 py-4 md:hidden"
            aria-label="Mobile"
          >
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm text-white"
                    onClick={handleClose}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span>Giammarco</span>
          <span>Full Stack Growth Marketer</span>
          <span>Pescara, Italy</span>
        </div>
        <a
          href="https://www.sharpmetricsagency.com"
          className="transition-colors hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          sharpmetricsagency.com
        </a>
      </div>
    </footer>
  )
}
