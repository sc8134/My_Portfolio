export type SkillLevel = 'high' | 'mid' | 'low'

export interface Skill {
  id: string
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: string
  label: string
  icon: string
  skills: Skill[]
}
