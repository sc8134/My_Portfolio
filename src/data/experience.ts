import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
  {
    id: 'coderunners',
    type: 'work',
    role: 'Full Stack Developer',
    company: 'CodeRunners Technologies',
    date: 'Jul 2025 – Present',
    location: 'Remote',
    description:
      "My first real production role. I'm working on a MERN stack platform that has actual users, not a demo, not a sandbox. I built most of the React frontend from scratch, wired up SMTP-based email notifications, and built the admin panel for event management. Equity-based, which means I joined because I believed in what we were building.",
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
  },
  {
    id: 'personal-projects',
    type: 'work',
    role: 'Independent Developer',
    company: 'Self-directed Projects',
    date: '2023 – 2025',
    description:
      "Two years of building things myself, on my own time, with no one telling me what to do or how to do it. I covered every layer: UI, API, database, deployment. The projects I'm most proud of came from this period: Namo Patro, Nova DVR, Signal Job Portal. All written by me, all live on GitHub.",
    tech: ['React', 'TypeScript', 'Flask', 'Node.js', 'PostgreSQL', 'Python'],
  },
  {
    id: 'bce',
    type: 'education',
    role: 'B.C.E. Computer Engineering',
    company: 'Cosmos College of Management & Technology',
    university: 'Pokhara University',
    date: '2022 – 2026',
    description:
      "Final year, awaiting graduation. The degree gave me the theory: algorithms, networking, data structures, distributed systems. But I never treated university as the only place I was learning. Every semester I was also building real projects outside class, and those taught me more than any assignment did.",
  },
  {
    id: 'plus2',
    type: 'education',
    role: '+2 Science (Physics)',
    company: 'Milestone International College',
    date: '2019 – 2021',
    description:
      "Finished with a 3.78 GPA, top 10% in Nepal. Physics taught me how to think through problems systematically before reaching for tools. That habit stuck. I still spend more time thinking about a problem than I do writing code for it.",
  },
]
