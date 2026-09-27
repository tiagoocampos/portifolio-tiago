export type SkillGroupId = "frontend" | "backend" | "data" | "tools" | "other"

export interface Skill {
  name: string
  /** slug do iconMap (src/components/skills/icon-map.ts); omitido = usa monograma */
  icon?: string
}

export interface SkillGroup {
  id: SkillGroupId
  title: string
  description: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces modernas, responsivas e acessíveis.",
    skills: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React Native / Expo", icon: "expo" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "shadcn/ui", icon: "shadcnui" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs e serviços com foco em performance e organização.",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
    ],
  },
  {
    id: "data",
    title: "Dados & Auth",
    description: "Persistência, modelagem e autenticação de sistemas reais.",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Drizzle ORM", icon: "drizzle" },
      { name: "Prisma", icon: "prisma" },
      { name: "JWT", icon: "jsonwebtokens" },
      { name: "bcrypt" },
    ],
  },
  {
    id: "tools",
    title: "Ferramentas & Infra",
    description: "Deploy, versionamento e fluxo de trabalho.",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Railway", icon: "railway" },
      { name: "Vercel", icon: "vercel" },
      { name: "Postman", icon: "postman" },
      { name: "dotenv", icon: "dotenv" },
    ],
  },
  {
    id: "other",
    title: "Outros",
    description: "Fundamentos que sustentam o resto da stack.",
    skills: [
      { name: "C", icon: "c" },
      { name: "C#" },
    ],
  },
]
