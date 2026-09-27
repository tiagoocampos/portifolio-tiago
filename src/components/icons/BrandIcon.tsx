import { iconMap, type IconSlug } from "@/components/icons/icon-map"

interface BrandIconProps {
  slug?: IconSlug
  /** usado como monograma quando não há ícone de marca (ex: C#) */
  fallbackLabel?: string
  className?: string
}

export function BrandIcon({ slug, fallbackLabel, className }: BrandIconProps) {
  const icon = slug ? iconMap[slug] : undefined

  if (!icon) {
    return (
      <span
        className={`flex items-center justify-center text-[10px] font-semibold ${className ?? ""}`}
        aria-hidden="true"
      >
        {fallbackLabel}
      </span>
    )
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}
