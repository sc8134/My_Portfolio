export interface Project {
  id: string
  title: string
  tagline: string
  summary: string
  tech: string[]
  bullets: string[]
  href: string
  repo?: string
  year: number
  featured?: boolean
  gradient: string   // CSS gradient string for the card header mockup
}
