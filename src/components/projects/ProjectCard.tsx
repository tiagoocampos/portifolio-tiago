import { useState } from "react"
import { ExternalLink, Play } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BrandIcon } from "@/components/icons/BrandIcon"
import { cn } from "@/lib/utils"
import type { Project } from "@/data/projects"

function ProjectMedia({
  name,
  image,
  video,
  onPlay,
}: Pick<Project, "name" | "image" | "video"> & { onPlay: () => void }) {
  if (!image && !video) return null

  return (
    <div className="group relative -mx-6 -mt-6 aspect-16/10 overflow-hidden rounded-t-2xl bg-muted">
      {image && (
        <>
          <img
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-md"
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <img
            className="relative h-full w-full object-contain"
            src={image}
            alt={`Captura de tela do projeto ${name}`}
            loading="lazy"
          />
        </>
      )}
      {video && (
        <button
          type="button"
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/30"
          aria-label={`Ver vídeo do projeto ${name}`}
        >
          <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-transform group-hover:scale-105">
            <Play className="h-4 w-4" /> Ver projeto
          </span>
        </button>
      )}
    </div>
  )
}

export function ProjectCard({
  name,
  shortDescription,
  longDescription,
  tags,
  githubUrl,
  demoUrl,
  image,
  video,
  live,
  featured,
}: Project) {
  const [expanded, setExpanded] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "flex h-full flex-col gap-4 rounded-2xl border p-6 transition-shadow hover:shadow-[0_0_32px_-12px_var(--accent-brand)]",
        featured
          ? "border-accent-brand/40 bg-linear-to-br from-accent-brand/10 via-card to-card"
          : "border-border bg-card",
      )}
    >
      <ProjectMedia name={name} image={image} video={video} onPlay={() => setVideoOpen(true)} />

      {video && (
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
            </DialogHeader>
            <div className="relative flex max-h-[70vh] items-center justify-center overflow-hidden rounded-lg bg-black">
              {image && (
                <img
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-50 blur-md"
                  src={image}
                  alt=""
                  aria-hidden="true"
                />
              )}
              <video
                className="relative max-h-[70vh] w-full object-contain"
                src={video}
                poster={image}
                autoPlay={videoOpen}
                controls
                loop
                playsInline
              />
            </div>
          </DialogContent>
        </Dialog>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className={cn("font-semibold text-card-foreground", featured ? "text-xl" : "text-lg")}>
          {name}
        </h3>
        {live && (
          <span className="shrink-0 rounded-full bg-accent-brand/15 px-2.5 py-0.5 text-xs font-medium text-accent-brand">
            Em produção
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground">
        {expanded ? longDescription : shortDescription}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="self-start text-xs font-medium text-primary underline-offset-4 hover:underline"
      >
        {expanded ? "Ver menos" : "Ver mais"}
      </button>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-2 pt-2">
        {githubUrl ? (
          <Button asChild variant="outline" size="sm">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <BrandIcon slug="github" className="h-4 w-4" /> Código
            </a>
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled title="Repositório privado ou em breve">
            <BrandIcon slug="github" className="h-4 w-4" /> Código em breve
          </Button>
        )}
        {demoUrl && (
          <Button asChild size="sm">
            <a href={demoUrl} target="_blank" rel="noreferrer">
              <ExternalLink /> Ver demo
            </a>
          </Button>
        )}
      </div>
    </motion.article>
  )
}
