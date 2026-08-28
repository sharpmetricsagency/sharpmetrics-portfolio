import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatto",
};

export default function ContattoPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">
        Contatto
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        Per progetti ecommerce, plugin WooCommerce, tracking o automazioni
        marketing, scrivi a Sharp Metrics.
      </p>

      <div className="mt-10 space-y-4 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
          CTA attuale
        </p>
        <a
          href="https://www.sharpmetricsagency.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm text-[var(--surface)]"
        >
          Vai su sharpmetricsagency.com
        </a>
        <p className="text-sm text-[var(--muted)]">
          Email, Calendly o WhatsApp personali: aggiorna{" "}
          <code className="text-xs">content/interview.md</code> e questa pagina.
        </p>
      </div>
    </div>
  );
}
