import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-6 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {profile.name}. Construído com React, Vite e Tailwind CSS.
      </p>
      
    </footer>
  )
}
