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
    'I build web apps that actually work: clean frontends, solid backends, and real users. No templates, no shortcuts. Just code I wrote myself and problems I genuinely wanted to solve.',

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
      title: 'I write my own code',
      desc: 'Every line in my projects is mine. I learn by building, not by copying.',
    },
    {
      icon: '🎯',
      title: 'Real problems only',
      desc: "I don't start projects to fill a portfolio. I start them because something is broken and I want to fix it.",
    },
    {
      icon: '🔍',
      title: 'I read the docs',
      desc: 'Stack Overflow helps, but I go to the source. Understanding why something works matters more than getting it to work.',
    },
    {
      icon: '�',
      title: 'Ship, then improve',
      desc: 'Waiting for perfect is how projects die in draft. I push to production early and iterate from real feedback.',
    },
  ],

  stats: [
    { value: '8',   label: 'Projects Built'  },
    { value: '2+',  label: 'Years Coding'    },
    { value: '3',   label: 'Open Source'     },
  ],

  resumeUrl: '/Resume/Sagar_Roka_Chhetri_Resume_ATS.pdf',
  openToWork: true,
  openToWorkText: 'Currently open to interesting problems',

  facts: [
    '📍 Nepal',
    '🐍 Python first',
    '🟢 Open to work',
  ],
}
