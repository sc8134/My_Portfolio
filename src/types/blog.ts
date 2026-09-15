export type BlogMood = 'building' | 'thinking' | 'reflecting' | 'exploring' | 'shipping'

export interface BlogContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'code' | 'divider' | 'list'
  text?: string
  items?: string[]
  language?: string
}

export interface BlogPost {
  id: string
  slug: string
  entryNumber: string        // e.g. "#001"
  title: string
  subtitle: string
  date: string               // ISO date string
  readTime: number           // minutes
  mood: BlogMood
  tags: string[]
  excerpt: string            // shown on the list card
  content: BlogContentBlock[]
}
