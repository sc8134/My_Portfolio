import type { AboutData } from '../types/about'

export const about: AboutData = {
  name: 'Sagar Roka Chhetri',
  role: 'Full Stack Engineer',

  roles: [
    'Full Stack Engineer',
    'Ships the boring parts too',
    'Open-source first',
    'Builds for real users',
    'Full-stack by necessity',
  ],

  tagline: 'I write the code. Every line, every commit, every bug fix. All me.',

  // One-liner shown in the hero
  heroBio:
    'I design, build and ship full-stack applications that real users rely on — from idea to production. React, TypeScript, Python, Node.js. Every line of code is mine.',

  // About section paragraphs — written as Sagar, in his own words
  bio: [
    "I got into coding the way most people from Nepal do: without a mentor, without a structured path, just me and a browser open to Stack Overflow. I started with Python because I wanted to automate repetitive stuff. That first script that actually worked? That feeling never got old.",
    "Every project on my GitHub was designed, built, and deployed by me. No AI-generated boilerplate, no copy-pasted scaffolding. Namo Patro exists because I was frustrated that no proper Nepali calendar app existed online. Signal Job Portal exists because I wanted to build a full-stack system end to end. These are real problems I cared about.",
    "Right now I'm in my final year of Computer Engineering at Cosmos College under Pokhara University, working part-time as a Full Stack Developer at CodeRunners Technologies on a live MERN platform. My stack is React, TypeScript, Python, Flask, Node.js and PostgreSQL, but I pick tools based on what the project needs, not what's trending.",
  ],

  yearsBuilding: '2+',

  philosophyCards: [
    {
      icon: '⚡',
      title: 'Designed, built, deployed — by me',
      desc: 'Every project is architected, coded and shipped by me end to end. No boilerplate, no co-pilot commits. I own the full stack.',
    },
    {
      icon: '🎯',
      title: 'Real problems, real products',
      desc: 'I ship solutions to problems I genuinely cared about — a Nepali calendar with no good alternative, a job portal that got me hired, a media tool I still use daily.',
    },
    {
      icon: '🔍',
      title: 'I go to the source',
      desc: 'I read the RFC, the docs, the spec. Understanding why something works matters more than knowing that it does.',
    },
    {
      icon: '🚀',
      title: 'Ship early, iterate on real feedback',
      desc: 'I push to production as soon as it works. Every improvement after that is driven by real usage, not speculation.',
    },
  ],

  stats: [
    { value: '8',    label: 'Projects Built'       },
    { value: '2+',   label: 'Years of Experience'  },
    { value: '1',    label: 'Production Role'       },
  ],

  resumeUrl: '/resume/Sagar_Roka_Chhetri_Resume_ATS.pdf',
  openToWork: true,
  openToWorkText: 'Open to full-time roles & internships',

  facts: [
    '📍 Nepal',
    '🐍 Python first',
    '🟢 Open to work',
  ],
}
