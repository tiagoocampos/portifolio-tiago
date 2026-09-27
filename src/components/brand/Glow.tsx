import { cn } from "@/lib/utils"

interface GlowProps {
  className?: string
}

/** Glow radial sutil na cor de destaque da marca, usado para dar identidade ao fundo das seções. */
export function Glow({ className }: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 h-[28rem] w-[28rem] rounded-full bg-accent-brand/20 blur-[120px]",
        className,
      )}
    />
  )
}
