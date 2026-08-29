import Image from "next/image"
import Link from "next/link"
import { kindLabel, type Work } from "@/lib/works"

const layoutClasses = [
  "md:col-span-5 md:col-start-1 md:row-start-1",
  "md:col-span-6 md:col-start-7 md:row-start-2",
  "md:col-span-5 md:col-start-2 md:row-start-3",
  "md:col-span-6 md:col-start-7 md:row-start-4",
  "md:col-span-5 md:col-start-1 md:row-start-5",
  "md:col-span-6 md:col-start-6 md:row-start-6",
]

const sizeClasses = [
  "aspect-[4/5] max-w-sm",
  "aspect-square max-w-lg md:ml-auto",
  "aspect-[4/5] max-w-md",
  "aspect-[16/11] max-w-xl md:ml-auto",
  "aspect-[4/5] max-w-sm",
  "aspect-square max-w-lg md:ml-auto",
]

type StaggeredWorkGridProps = {
  works: Work[]
  compact?: boolean
}

export const StaggeredWorkGrid = ({ works, compact = false }: StaggeredWorkGridProps) => {
  const items = compact ? works.slice(0, 6) : works

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
      {items.map((work, index) => {
        const cover = work.screenshots[0]
        const layout = layoutClasses[index % layoutClasses.length]
        const size = sizeClasses[index % sizeClasses.length]

        return (
          <Link
            key={work.slug}
            href={`/lavori/${work.slug}`}
            className={`group block ${layout}`}
          >
            <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-2)] ${size}`}>
              {cover ? (
                <Image
                  src={cover}
                  alt={`Screenshot ${work.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[var(--muted)]">
                  {work.title}
                </div>
              )}
            </div>
            <div className={`mt-4 ${index % 2 === 1 ? "md:text-right" : ""}`}>
              <h3 className="text-xl font-medium text-white">{work.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{kindLabel[work.kind]}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
