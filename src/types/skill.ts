export type SkillLevel = 'high' | 'mid' | 'low'

export interface Skill {
  id: string
  name: string
  level: SkillLevel
  proof?: string   // one-line evidence: where/how it was actually used
}

export interface SkillCategory {
  id: string
  label: string
  icon: string
  skills: Skill[]
}
