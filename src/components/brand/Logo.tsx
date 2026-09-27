import { cn } from "@/lib/utils"
import { profile } from "@/data/profile"

interface LogoProps {
  className?: string
}

/** Wordmark: <Tiago Campos /> — brackets na cor de destaque, nome em peso normal, tudo em mono. */
export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("font-mono font-medium text-foreground", className)}>
      <span className="text-accent-brand font-bold">{"<"}</span>
      {profile.name}
      <span className="text-accent-brand font-bold">{" />"}</span>
    </span>
  )
}
