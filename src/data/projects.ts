import type { Project } from '../types/project'
import {
  NovaDVRIcon,
  VeloraIcon,
  SignalIcon,
  JobHuntIcon,
  AIReelIcon,
  NamoPaLroIcon,
  PhishingIcon,
  BoltsArmyIcon,
} from '../components/icons/ProjectIcons'

export const projects: Project[] = [
  {
    id: 'bolts-army',
    title: 'Janakpur Bolts Army',
    tagline: 'Official cricket fanpage. Partnership between Janakpur Bolts Army and CodeRunners. Live at boltsarmy.com.',
    whyBuilt:
      'Janakpur Bolts Army partnered with CodeRunners to build their official online presence. I led the project as the primary engineer, owning the design, core frontend and backend, and the full cPanel deployment.',
    summary:
      'Official fanpage for Janakpur Bolts Army cricket club, built through a partnership between the club and CodeRunners Technologies. Three-person team: I contributed around 50% of the total build, leading UI/UX design, core frontend and backend, and the complete cPanel deployment at boltsarmy.com. Two other developers contributed the remaining 50%.',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'cPanel'],
    bullets: [
      'Built membership system, events page, gallery, Fan Frame feature, and admin panel',
      'Led UI/UX design and core frontend + backend as primary engineer (~50% of build)',
      'Full cPanel deployment - domain config, build pipeline, and ongoing maintenance',
    ],
    href: 'https://boltsarmy.com',
    year: 2025,
    featured: true,
    live: true,
    gradient: 'linear-gradient(135deg, #7c1f1f 0%, #1a1a2e 100%)',
    icon: BoltsArmyIcon({ size: 48 }),
  },
  {
    id: 'nova-dvr',
    title: 'Nova DVR',
    tagline: 'Media downloader and organizer I built for myself first',
    whyBuilt:
      'I had five different tools open at once just to download, convert, and tag a batch of videos. None of them talked to each other. I got tired of the ritual and built one thing that does all of it.',
    summary:
      'I was tired of juggling five different tools just to download and organize videos. So I built one that handles everything: multi-platform downloads, batch scheduling, format conversion, cloud sync, and AI metadata tagging. React frontend, Python/Flask backend, deployed on Vercel.',
    tech: ['TypeScript', 'React', 'Python', 'Flask', 'Tailwind CSS', 'Vercel'],
    bullets: [
      'Multi-platform video download with batch scheduling',
      'AI metadata tagging to auto-categorize your content',
      'Cloud sync and format conversion in one pipeline',
    ],
    href: 'https://nova-dvr.vercel.app',
    repo: 'https://github.com/sc8134/Nova_DVR',
    year: 2025,
    featured: true,
    fromScratch: true,
    live: true,
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d1b4e 100%)',
    icon: NovaDVRIcon({ size: 48 }),
  },
  {
    id: 'velora',
    title: 'Velora',
    tagline: 'A media hub that actually makes sense to use',
    whyBuilt:
      'Nova DVR solved the download problem but the discovery side was still manual. I wanted one interface that could find content, pull it, and surface what was worth watching, without switching context.',
    summary:
      'Velora started as a side experiment and turned into something I use regularly. It brings video downloading, AI recognition, and smart content discovery into one interface. Built with TypeScript and React.',
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'AI APIs', 'Vercel'],
    bullets: [
      'Smart video extraction and content discovery',
      'AI recognition features built in from the start',
      'Responsive, accessible on any device',
    ],
    href: 'https://github.com/sc8134/Velora',
    repo: 'https://github.com/sc8134/Velora',
    year: 2025,
    fromScratch: true,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    icon: VeloraIcon({ size: 48 }),
  },
  {
    id: 'signal-job-portal',
    title: 'Signal Job Portal',
    tagline: 'Full-stack job board, built end to end by me',
    whyBuilt:
      'I wanted to prove to myself I could build a complete system: real auth, separate dashboards for two user types, a matching engine, without leaving anything half-done. It ended up getting me the job at CodeRunners.',
    summary:
      'I wanted to build a complete full-stack system with real auth flows, separate dashboards, and a matching engine. Signal is a job portal with dual-role authentication for employers and job seekers, smart filtering, and a UI I kept clean on purpose. This project got me the job at CodeRunners.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    bullets: [
      'Dual-role auth: separate flows for employers and job seekers',
      'Smart job matching and filtering from scratch',
      'Full REST API with Node.js and PostgreSQL',
    ],
    href: 'https://github.com/sc8134/signal-job-portal',
    repo: 'https://github.com/sc8134/signal-job-portal',
    year: 2025,
    fromScratch: true,
    gradient: 'linear-gradient(135deg, #c0392b 0%, #8e2323 100%)',
    icon: SignalIcon({ size: 48 }),
  },
  {
    id: 'jobhunt-agent',
    title: 'JobHunt Agent',
    tagline: "AI agent that applies for jobs so you don't have to",
    whyBuilt:
      'Job hunting involves writing the same cover letter twelve times with minor tweaks. That is not a human problem, it is a pattern-matching problem. I wanted to see how far open-source models could take it without a paid API.',
    summary:
      'Job hunting is repetitive. I built an agent that takes your resume, semantically matches it against job listings, ranks the best fits, and writes a tailored cover letter for each one. No paid API needed, runs entirely on open-source models.',
    tech: ['Python', 'LangGraph', 'spaCy', 'sentence-transformers', 'NLP'],
    bullets: [
      'Semantic resume-to-job matching, no keyword stuffing',
      'Cover letter generated per job automatically',
      'Runs on open-source models, no OpenAI key needed',
    ],
    href: 'https://github.com/sc8134/JobHunt-Agent',
    repo: 'https://github.com/sc8134/JobHunt-Agent',
    year: 2025,
    fromScratch: true,
    gradient: 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)',
    icon: JobHuntIcon({ size: 48 }),
  },
  {
    id: 'ai-reel-generator',
    title: 'AI Reel Generator',
    tagline: 'Type a prompt, get a video. End to end in Python.',
    whyBuilt:
      'I wanted to know whether the entire content creation pipeline (script, voiceover, captions, music, assembly) could be automated from a single text input. Turns out it mostly can.',
    summary:
      'I built this to see if the full content creation pipeline could be automated. You give it a text prompt and it outputs a short-form video reel: captions, background music, visual templates, all assembled with FFmpeg. No timeline editing, no manual work.',
    tech: ['Python', 'FFmpeg', 'OpenAI API', 'AI/ML', 'REST API'],
    bullets: [
      'Text prompt to full video reel, automated end to end',
      'Auto-generated captions synced to speech',
      'Background music selection and template system',
    ],
    href: 'https://github.com/sc8134/ai-reel-generator',
    repo: 'https://github.com/sc8134/ai-reel-generator',
    year: 2025,
    fromScratch: true,
    gradient: 'linear-gradient(135deg, #1a3a2a 0%, #0d1f16 100%)',
    icon: AIReelIcon({ size: 48 }),
  },
  {
    id: 'namo-patro',
    title: 'Namo Patro',
    tagline: 'Nepali calendar app, built because nothing good existed',
    whyBuilt:
      "I'm Nepali. We use Bikram Sambat. Every calendar app I tried was either cluttered with ads, missing half the data, or built by someone who clearly didn't use it themselves. I wanted one that a Nepali person would actually reach for.",
    summary:
      "I'm Nepali. We use the Bikram Sambat calendar. Every app I tried was cluttered, outdated, or missing the data my community actually cares about: festivals, tithis, finance tools. So I built one from scratch and open-sourced it under GPL-3.0.",
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    bullets: [
      'BS to AD calendar conversion, accurate and fast',
      'Nepali festival listings, astrology, and tithi data',
      'Finance tools and live radio. GPL-3.0 open source.',
    ],
    href: 'https://github.com/sc8134/Namo-Patro',
    repo: 'https://github.com/sc8134/Namo-Patro',
    year: 2024,
    featured: true,
    fromScratch: true,
    gradient: 'linear-gradient(135deg, #2d1b00 0%, #4a2f00 100%)',
    icon: NamoPaLroIcon({ size: 48 }),
  },
  {
    id: 'phishing-tool',
    title: 'Phishing Simulation Tool',
    tagline: 'Security awareness training platform for organizations',
    whyBuilt:
      'Most security training is a PDF nobody reads. The only thing that actually changes behavior is letting someone click a fake phishing link and see the result. I built a controlled environment to do that safely.',
    summary:
      'Most employees have no idea what a phishing email looks like until they click one. This platform lets organizations run controlled simulations, track who clicked, and measure real vulnerability. React and Tailwind on the front, Flask on the back.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Flask', 'Python'],
    bullets: [
      'Controlled phishing campaign creation and sending',
      'Click-through tracking and vulnerability analytics',
      'Clean admin dashboard for campaign management',
    ],
    href: 'https://github.com/sc8134/phishing-simulation-tool',
    repo: 'https://github.com/sc8134/phishing-simulation-tool',
    year: 2024,
    fromScratch: true,
    gradient: 'linear-gradient(135deg, #2d1b4e 0%, #1a0f2e 100%)',
    icon: PhishingIcon({ size: 48 }),
  },
]
