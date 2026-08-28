# Sagar Roka Chhetri — Portfolio

Live at [sagarrc.com.np](https://sagarrc.com.np)

This is my personal portfolio. I built it from scratch because I wanted something that actually represents how I work, not a theme someone else designed. No templates, no boilerplate, no shortcuts. Every component, every animation, every line of CSS is mine.

---

## What it's built with

| Layer | Tools |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 + custom CSS design tokens |
| Animations | CSS keyframes + custom scroll reveal hook |
| Deployment | Vercel |

---

## What's inside

The portfolio covers everything I wanted a visitor to know about me without having to dig.

**Hero** greets you with a typewriter effect cycling through my roles, and a short honest bio about how I approach building things.

**About** goes deeper into my story, the philosophy behind how I write code, and a few quick stats.

**Skills** lists my actual stack, the tools I reach for day to day and why.

**Projects** showcases all 7 projects I've built, each with a real summary, the tech used, a live link where available, and a repo link. No filler projects, no "todo app" padding.

**Experience** shows my work at CodeRunners Technologies and my time as an independent developer, alongside my education at Cosmos College under Pokhara University.

**Contact** has my socials and a form that pre-fills your mail client so reaching out takes about ten seconds.

**SARA** is a keyword-driven chatbot I trained on my full background. Ask it about any project, my skills, my story, or why you should hire me. It knows more about me than most people do.

Other things worth mentioning: fully responsive layout, scroll-reveal animations, sticky navbar with active section tracking, SEO meta tags, Open Graph, and Twitter Card in the HTML head.

---

## Projects

| Project | Stack | Link |
|---|---|---|
| Nova DVR | React, TypeScript, Python, Flask | [nova-dvr.vercel.app](https://nova-dvr.vercel.app) |
| Velora | React, TypeScript, AI APIs | [velora-six-gules.vercel.app](https://velora-six-gules.vercel.app) |
| Signal Job Portal | React, Node.js, PostgreSQL | [github.com/sc8134/signal-job-portal](https://github.com/sc8134/signal-job-portal) |
| JobHunt Agent | Python, LangGraph, spaCy | [github.com/sc8134/JobHunt-Agent](https://github.com/sc8134/JobHunt-Agent) |
| AI Reel Generator | Python, FFmpeg, OpenAI API | [github.com/sc8134/ai-reel-generator](https://github.com/sc8134/ai-reel-generator) |
| Namo Patro | React, Node.js, PostgreSQL | [github.com/sc8134/Namo-Patro](https://github.com/sc8134/Namo-Patro) |
| Phishing Simulation Tool | React, Flask, Python | [github.com/sc8134/phishing-simulation-tool](https://github.com/sc8134/phishing-simulation-tool) |

---

## Running it locally

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Type check without building
npx tsc --noEmit

# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## Folder structure

```
src/
├── components/     shared UI: Button, Card, Layout, Icons
├── data/           static content: about, projects, experience, skills, socials
├── features/       page sections: Hero, About, Skills, Projects, Experience, Contact, Sara
├── hooks/          custom hooks: useActiveSection, useScrollReveal, useTypewriter, and more
├── styles/         global CSS: base.css, index.css
├── theme/          design tokens: tokens.css
├── types/          TypeScript interfaces
└── utils/          small helpers: cn.ts
```

---

## Design tokens

All colors, spacing, typography, shadows, and border radii live in `src/theme/tokens.css` as CSS custom properties using the Tailwind CSS v4 `@theme` directive. Nothing is hardcoded in components. If I want to change the accent color across the entire site, I change one value.

---

## Get in touch

If you want to talk about a role, a project, or just have a question, any of these work.

- Email: sc8134s@gmail.com
- GitHub: [github.com/sc8134](https://github.com/sc8134)
- LinkedIn: [linkedin.com/in/sagar-rc](https://www.linkedin.com/in/sagar-rc)
- Twitter/X: [@Sagarch05339168](https://x.com/Sagarch05339168)

---

© 2025 Sagar Roka Chhetri. All rights reserved.
