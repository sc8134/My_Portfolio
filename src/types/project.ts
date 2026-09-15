import type { ReactNode } from 'react'

export interface Project {
  id: string
  title: string
  tagline: string
  summary: string
  whyBuilt: string       // "Why I built this" — starts from a real problem
  tech: string[]
  bullets: string[]
  href: string
  repo?: string
  year: number
  featured?: boolean
  fromScratch?: boolean
  live?: boolean         // only true when the project is actually deployed and accessible
  gradient: string       // CSS gradient string for the card header
  icon: ReactNode        // Custom SVG icon for this project
}
