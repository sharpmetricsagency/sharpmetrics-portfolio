import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/lavori", label: "Work" },
  { href: "/prodotti", label: "Products" },
  { href: "/contatto", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="font-[family-name:var(--font-display)] text-lg tracking-tight text-[var(--foreground)]">
          Giammarco
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>Full Stack Growth Marketer · Sharp Metrics · Pescara, Italy</p>
        <a
          href="https://www.sharpmetricsagency.com"
          className="hover:text-[var(--foreground)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          sharpmetricsagency.com
        </a>
      </div>
    </footer>
  );
}
