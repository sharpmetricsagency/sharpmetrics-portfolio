import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContattoPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        For ecommerce projects, WooCommerce plugins, tracking, or marketing
        automation, reach out through Sharp Metrics.
      </p>

      <div className="mt-10 space-y-4 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
          Primary CTA
        </p>
        <a
          href="https://www.sharpmetricsagency.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm text-[var(--surface)]"
        >
          sharpmetricsagency.com
        </a>
      </div>
    </div>
  );
}
