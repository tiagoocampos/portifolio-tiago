import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { skillGroups } from "@/data/skills"
import { SkillCard } from "./SkillCard"

export function Skills() {
  return (
    <Section id="skills">
      <Reveal className="mb-10 max-w-2xl">
        <p className="font-mono text-xs text-muted-foreground">{"// stack"}</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>
        <p className="mt-2 text-muted-foreground">
          Ferramentas que uso no dia a dia para construir aplicações rápidas, seguras e com
          boa experiência de usuário.
        </p>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.05}>
            <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
