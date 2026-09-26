import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
  {
    id: 'codealpha',
    type: 'work',
    role: 'Full Stack Development Intern',
    company: 'CodeAlpha',
    date: 'Aug 2026 – Sep 2026',
    location: 'Remote',
    description:
      'One-month virtual internship in Full Stack Development. Completed the program, received a Letter of Recommendation and Certificate of Completion.',
    bullets: [
      'Completed structured full-stack curriculum covering React, Node.js and REST API design',
      'Received Letter of Recommendation for strong analytical skills and fast adaptation',
      'Delivered all assigned projects within deadlines in a fully remote environment',
    ],
    tech: ['React', 'Node.js', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'coderunners',
    type: 'work',
    role: 'Full Stack Developer',
    company: 'CodeRunners Technologies',
    date: 'Jul 2025 – Present',
    location: 'Remote',
    description:
      "Joined to own the frontend of a live MERN platform with real users. Built core product features from scratch and handled the full production deployment myself.",
    bullets: [
      'Built the React admin panel, SMTP email notification system, and event management flows from scratch',
      'Deployed the full stack — frontend, backend, live domain, and MySQL database — on cPanel independently',
      'Sole frontend engineer on a production platform actively used by real customers',
      'Equity-based role: joined for ownership, not a paycheck',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript', 'MySQL'],
  },
  {
    id: 'personal-projects',
    type: 'work',
    role: 'Independent Developer',
    company: 'Self-directed Projects',
    date: '2023 – 2025',
    description:
      "Two years of full ownership across every layer — UI, API, database, deployment — with no team and no one to ask. The projects from this period got me hired.",
    bullets: [
      'Shipped 8 projects end-to-end: design, development, deployment, and maintenance — solo',
      'Signal Job Portal landed me the role at CodeRunners Technologies',
      'Namo Patro, Nova DVR, and Signal are live on GitHub with public source code',
      '3 open-source projects under GPL-3.0 and MIT licences',
    ],
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
      "Final year, awaiting graduation. Coursework covered algorithms, networking, data structures, and distributed systems. Built production projects in parallel every semester — the degree gave me vocabulary, the projects gave me judgment.",
  },
  {
    id: 'plus2',
    type: 'education',
    role: '+2 Science (Physics)',
    company: 'Milestone International College',
    date: '2019 – 2021',
    description:
      "Graduated with a 3.78 GPA — top 10% in Nepal. Physics taught me to sit with a problem before reaching for a solution. That habit carried into every line of code I've written since.",
  },
]
