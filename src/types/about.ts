export interface StatItem {
  value: string
  label: string
}

export interface PhilosophyCard {
  icon: string
  title: string
  desc: string
}

export interface AboutData {
  name: string
  role: string
  roles: string[]
  tagline: string
  heroBio: string        // short one-liner shown in the hero section
  bio: string[]          // longer paragraphs used in the About section
  yearsBuilding: string
  philosophyCards: PhilosophyCard[]
  stats: StatItem[]
  resumeUrl: string
  openToWork: boolean
  facts: string[]
}
