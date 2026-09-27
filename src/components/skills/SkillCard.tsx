import type { CSSProperties } from "react"
import { motion } from "motion/react"
import { BrandIcon } from "@/components/icons/BrandIcon"
import { iconMap, type IconSlug } from "@/components/icons/icon-map"
import type { Skill } from "@/data/skills"

export function SkillCard({ name, icon }: Skill) {
  const brandHex = icon ? `#${iconMap[icon as IconSlug].hex}` : undefined

  return (
    <motion.div
      whileHover={{ y: -3 }}
      style={{ "--tech-color": brandHex ?? "var(--accent-brand)" } as CSSProperties}
      className="group flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-card-foreground transition-colors hover:border-(--tech-color)/50 hover:shadow-[0_0_24px_-8px_var(--tech-color)]"
    >
      <BrandIcon
        slug={icon as IconSlug | undefined}
        fallbackLabel={icon ? undefined : name}
        className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-(--tech-color)"
      />
      <span className="truncate font-medium">{name}</span>
    </motion.div>
  )
}
