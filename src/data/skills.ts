import type { SkillCategory } from '../types/skill'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🖥',
    skills: [
      { id: 'react',          name: 'React',          level: 'high' },
      { id: 'nextjs',         name: 'Next.js',        level: 'high' },
      { id: 'typescript',     name: 'TypeScript',     level: 'high' },
      { id: 'javascript',     name: 'JavaScript',     level: 'high' },
      { id: 'tailwind',       name: 'Tailwind CSS',   level: 'high' },
      { id: 'framer',         name: 'Framer Motion',  level: 'mid'  },
      { id: 'angular',        name: 'Angular',        level: 'mid'  },
      { id: 'vite',           name: 'Vite',           level: 'high' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙',
    skills: [
      { id: 'nodejs',         name: 'Node.js',        level: 'high' },
      { id: 'express',        name: 'Express',        level: 'high' },
      { id: 'python',         name: 'Python',         level: 'high' },
      { id: 'fastapi',        name: 'FastAPI',        level: 'high' },
      { id: 'flask',          name: 'Flask',          level: 'high' },
      { id: 'restapis',       name: 'REST APIs',      level: 'high' },
      { id: 'websockets',     name: 'WebSockets',     level: 'mid'  },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: '🗄',
    skills: [
      { id: 'postgresql',     name: 'PostgreSQL',     level: 'high' },
      { id: 'mongodb',        name: 'MongoDB',        level: 'high' },
      { id: 'redis',          name: 'Redis',          level: 'mid'  },
      { id: 'mysql',          name: 'MySQL',          level: 'high' },
      { id: 'prisma',         name: 'Prisma',         level: 'mid'  },
      { id: 'clickhouse',     name: 'ClickHouse',     level: 'low'  },
      { id: 'firebase',       name: 'Firebase',       level: 'mid'  },
      { id: 'supabase',       name: 'Supabase',       level: 'mid'  },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: '🔧',
    skills: [
      { id: 'docker',         name: 'Docker',         level: 'mid'  },
      { id: 'kubernetes',     name: 'Kubernetes',     level: 'low'  },
      { id: 'aws',            name: 'AWS',            level: 'mid'  },
      { id: 'cicd',           name: 'CI/CD',          level: 'mid'  },
      { id: 'git',            name: 'Git',            level: 'high' },
      { id: 'githubactions',  name: 'GitHub Actions', level: 'mid'  },
      { id: 'nginx',          name: 'Nginx',          level: 'mid'  },
      { id: 'linux',          name: 'Linux',          level: 'high' },
    ],
  },
]
