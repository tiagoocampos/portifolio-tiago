import { FileDown, Mail } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { Glow } from "@/components/brand/Glow"
import { Typewriter } from "@/components/motion/Typewriter"
import { profile } from "@/data/profile"

export function Hero() {
  return (
    <section id="top" className="relative w-full scroll-mt-14 overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <Glow className="top-0 left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-1/3" />

      <Container className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
        <div className="flex max-w-xl flex-col gap-6 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              {profile.name}
            </h1>
            <p className="min-h-6 font-mono text-sm text-primary">
              <span className="text-accent-brand">{"> "}</span>
              <Typewriter text={profile.tagline} />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base text-muted-foreground"
          >
            Trago ideias do zero até produção: modelagem de dados, APIs e arquitetura no backend,
            interface e experiência no frontend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:justify-start"
          >
            {profile.resumeUrl ? (
              <Button asChild>
                <a href={profile.resumeUrl} download>
                  <FileDown /> Baixar meu currículo
                </a>
              </Button>
            ) : (
              <Button disabled title="Currículo em breve">
                <FileDown /> Currículo em breve
              </Button>
            )}
            <Button asChild variant="outline">
              <a href="#contato">
                <Mail /> Entre em contato comigo
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-full bg-accent-brand/20 blur-2xl" />
          <img
            className="relative h-48 w-48 rounded-full object-cover ring-4 ring-border sm:h-64 sm:w-64"
            src={profile.photo}
            alt={`Foto de perfil de ${profile.name}`}
            width={256}
            height={256}
            loading="eager"
          />
          
        </motion.div>
      </Container>
    </section>
  )
}
