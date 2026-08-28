import Image from "next/image";
import Link from "next/link";
import { kindLabel, type Work } from "@/lib/works";

export function WorkCard({ work }: { work: Work }) {
  const cover = work.screenshots[0];

  return (
    <Link
      href={`/lavori/${work.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]"
    >
      <div className="relative aspect-[16/10] bg-[var(--surface-2)]">
        {cover ? (
          <Image
            src={cover}
            alt={`Screenshot ${work.title}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[var(--muted)]">
            {work.title}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--muted)]">
          <span>{kindLabel[work.kind]}</span>
          {work.roleUnknown ? (
            <span className="rounded-full border border-[var(--line)] px-2 py-0.5 normal-case tracking-normal">
              ruolo da confermare
            </span>
          ) : null}
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--foreground)]">
          {work.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">
          {work.summary}
        </p>
      </div>
    </Link>
  );
}
