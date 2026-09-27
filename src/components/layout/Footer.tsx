import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-6 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {profile.name}. Construído com React, Vite e Tailwind CSS.
      </p>
      <p className="mt-1">
        Estúdio{" "}
        <a
          href={profile.links.nuvi}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          Nuvi
        </a>
      </p>
    </footer>
  )
}
