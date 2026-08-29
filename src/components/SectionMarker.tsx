type SectionMarkerProps = {
  index: string
  className?: string
}

export const SectionMarker = ({ index, className = "" }: SectionMarkerProps) => {
  return (
    <span className={`text-sm tracking-wide text-[var(--muted)] ${className}`}>
      {index}
    </span>
  )
}
