import Image from "next/image"

const armPath =
  "M 50 8 L 50 42 Q 50 50 42 50 L 8 50 L 8 42 L 42 42 Q 42 42 42 42 L 42 8 Z"

export const HeroVisual = () => {
  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-[min(72vw,520px)] items-center justify-center"
      aria-hidden="true"
    >
      <div className="hero-grid absolute inset-0 rounded-full opacity-40" />
      <div className="hero-glow absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.35)_0%,rgba(88,120,255,0.15)_35%,transparent_70%)] blur-2xl" />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-[10%] h-[80%] w-[80%] opacity-20"
        style={{ animation: "logo-spin 60s linear infinite" }}
      >
        {[0, 90, 180, 270].map((rotation) => (
          <path
            key={rotation}
            d={armPath}
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
            transform={`rotate(${rotation} 50 50)`}
          />
        ))}
      </svg>

      <div className="absolute inset-[18%] rounded-full border border-white/10" />
      <div
        className="absolute inset-[22%] rounded-full border border-dashed border-white/10"
        style={{ animation: "logo-spin 48s linear infinite reverse" }}
      />
      <div className="relative z-10 w-[58%] drop-shadow-[0_0_40px_rgba(0,229,255,0.25)]">
        <Image
          src="/logo.png"
          alt=""
          width={850}
          height={850}
          priority
          className="h-auto w-full"
        />
      </div>
    </div>
  )
}
