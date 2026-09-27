import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Container } from "./Container"

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** alterna o tom de fundo entre seções sem cores hardcoded */
  tone?: "background" | "muted"
}

export function Section({ id, children, className, tone = "background" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full scroll-mt-14 py-16 sm:py-24",
        tone === "muted" && "bg-muted/30",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  )
}
