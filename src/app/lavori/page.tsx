import type { Metadata } from "next";
import { WorkCard } from "@/components/WorkCard";
import { getAllWorks, kindLabel, type WorkKind } from "@/lib/works";

export const metadata: Metadata = {
  title: "Lavori",
};

const order: WorkKind[] = [
  "ecommerce",
  "contenuti",
  "prodotto",
  "plugin",
  "gestionale",
];

export default function LavoriPage() {
  const works = getAllWorks();
  const groups = order
    .map((kind) => ({
      kind,
      items: works.filter((w) => w.kind === kind),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">Lavori</h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Schede costruite da siti live, plugin e cartelle di progetto. Dove il
        ruolo non è ancora confermato, lo segnaliamo — completa l’intervista in{" "}
        <code className="text-sm">content/interview.md</code>.
      </p>

      <div className="mt-12 space-y-14">
        {groups.map((group) => (
          <section key={group.kind}>
            <h2 className="mb-5 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              {kindLabel[group.kind]}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((work) => (
                <WorkCard key={work.slug} work={work} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
