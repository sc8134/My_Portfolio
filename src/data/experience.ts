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
      "The friction: a growing platform with real users, no dedicated frontend person, and a UI that wasn't keeping up with the product. I came in and built most of the React frontend from scratch: the admin panel, SMTP email notifications, event management flows. Then handled the full deployment myself: frontend, backend, live domain, SQL database on cPanel. It's equity-based. I didn't join for a paycheck. I joined because I believed in what we were building and wanted to own the outcome.",
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
  },
  {
    id: 'personal-projects',
    type: 'work',
    role: 'Independent Developer',
    company: 'Self-directed Projects',
    date: '2023 – 2025',
    description:
      "The friction: no job, no structure, no one setting priorities. I had to decide what to build, how to build it, and when to ship. Two years of covering every layer myself: UI, API, database, deployment, with no one to ask and no one to blame. The projects I'm most proud of came from this period: Namo Patro, Nova DVR, Signal Job Portal. All written by me. All live on GitHub. Signal got me the job at CodeRunners.",
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
      "Final year, awaiting graduation. The degree gave me the theory: algorithms, networking, data structures, distributed systems. But I never treated it as the only place I was learning. Every semester I was also building real projects outside class. The assignments taught me the vocabulary. The projects taught me the judgment.",
  },
  {
    id: 'plus2',
    type: 'education',
    role: '+2 Science (Physics)',
    company: 'Milestone International College',
    date: '2019 – 2021',
    description:
      "Finished with a 3.78 GPA, top 10% in Nepal. Physics didn't teach me how to code. It taught me how to sit with a problem before reaching for a solution. That habit carried over. I still spend more time thinking about a problem than I do writing code for it.",
  },
]
