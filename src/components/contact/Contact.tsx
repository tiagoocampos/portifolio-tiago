import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrandIcon } from "@/components/icons/BrandIcon"
import { Section } from "@/components/layout/Section"
import { Glow } from "@/components/brand/Glow"
import { Reveal } from "@/components/motion/Reveal"
import { profile } from "@/data/profile"

export function Contact() {
  return (
    <Section id="contato" className="relative overflow-hidden">
      <Glow className="bottom-0 left-1/2 -translate-x-1/2" />

      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">{"// contato"}</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Vamos conversar?
        </h2>
        <p className="text-muted-foreground">
          Estou aberto a novas oportunidades, parcerias e projetos freelance. Me manda uma
          mensagem.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail /> {profile.email}
            </a>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <BrandIcon slug="github" className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <BrandIcon fallbackLabel="in" className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
