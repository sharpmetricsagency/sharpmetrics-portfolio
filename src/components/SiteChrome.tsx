import Image from "next/image"
import Link from "next/link"

const links = [
  { href: "/#works", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/prodotti", label: "Products" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Sharp Metrics" width={28} height={28} />
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-white">
            Sharp Metrics
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
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
        <Link
          href="/#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-4">
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
