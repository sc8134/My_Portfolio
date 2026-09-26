export type ExperienceType = 'work' | 'education'

export interface Experience {
  id: string
  type: ExperienceType
  role: string
  company: string
  companyColor?: string
  university?: string
  date: string
  location?: string
  description: string
  bullets?: string[]   /* optional achievement bullets shown below description */
  tech?: string[]
}
