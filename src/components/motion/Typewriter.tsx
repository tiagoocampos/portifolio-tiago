import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string
  className?: string
  speed?: number
}

/** Digita o texto caractere a caractere uma única vez, com um cursor piscando ao final. */
export function Typewriter({ text, className, speed = 28 }: TypewriterProps) {
  const [chars, setChars] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setChars((prev) => {
        if (prev >= text.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  const done = chars >= text.length

  return (
    <span className={className}>
      {text.slice(0, chars)}
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block w-0.5 translate-y-px bg-current ${done ? "animate-pulse" : ""}`}
        style={{ height: "1em" }}
      />
    </span>
  )
}
