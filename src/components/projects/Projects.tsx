import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { projects } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <Section id="projetos" tone="muted">
      <Reveal className="mb-10 max-w-2xl">
        <p className="font-mono text-xs text-muted-foreground">{"// projetos"}</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projetos
        </h2>
        <p className="mt-2 text-muted-foreground">
          Uma seleção de projetos reais e de portfólio, do SaaS em produção aos experimentos
          full stack.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05} className="h-full">
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
