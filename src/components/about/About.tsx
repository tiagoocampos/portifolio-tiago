import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { profile } from "@/data/profile"

export function About() {
  return (
    <Section id="sobre" tone="muted">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="font-mono text-xs text-muted-foreground">{"// sobre mim"}</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Sobre mim
        </h2>
        <p className="text-muted-foreground">{profile.bio}</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-accent-brand/30 bg-accent-brand/10 px-4 py-1.5 text-sm font-medium text-foreground">
            {profile.architectureHighlight}
          </span>
          <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
            {profile.degree}
          </span>
        </div>
      </Reveal>
    </Section>
  )
}
