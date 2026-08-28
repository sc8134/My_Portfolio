<div align="center">

![banner](https://capsule-render.vercel.app/api?type=waving&color=0:1e3a5f,100:c0392b&height=220&section=header&text=Sagar%20Roka%20Chhetri&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Full%20Stack%20Engineer%20%7C%20React%20%7C%20TypeScript%20%7C%20Python&descSize=18&descAlignY=58&descColor=cccccc)

[![Portfolio](https://img.shields.io/badge/Live%20Portfolio-sagarrc.com.np-c0392b?style=for-the-badge&logo=vercel&logoColor=white)](https://sagarrc.com.np)
[![GitHub](https://img.shields.io/badge/GitHub-sc8134-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sc8134)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sagar--rc-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sagar-rc)
[![Email](https://img.shields.io/badge/Email-sc8134s@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sc8134s@gmail.com)

</div>

---

This is my personal portfolio. I built it from scratch because I wanted something that actually represents how I work, not a theme someone else designed. No templates, no boilerplate, no shortcuts. Every component, every animation, every line of CSS is mine.

---

## Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## What's Inside

The portfolio covers everything I wanted a visitor to know about me without having to dig.

**Hero** greets you with a typewriter effect cycling through my roles, and a short honest bio about how I approach building things.

**About** goes deeper into my story, the philosophy behind how I write code, and a few quick stats.

**Skills** lists my actual stack, the tools I reach for day to day and why.

**Projects** showcases all 7 projects I have built, each with a real summary, the tech used, a live link where available, and a repo link. No filler projects, no "todo app" padding.

**Experience** shows my work at CodeRunners Technologies and my time as an independent developer, alongside my education at Cosmos College under Pokhara University.

**Contact** has my socials and a form that pre-fills your mail client so reaching out takes about ten seconds.

**SARA** is a keyword-driven chatbot I trained on my full background. Ask it about any project, my skills, my story, or why you should hire me. It knows more about me than most people do.

---

## Projects

| Project | Stack | Live |
|---|---|---|
| Nova DVR | React, TypeScript, Python, Flask | [nova-dvr.vercel.app](https://nova-dvr.vercel.app) |
| Velora | React, TypeScript, AI APIs | [velora-six-gules.vercel.app](https://velora-six-gules.vercel.app) |
| Signal Job Portal | React, Node.js, PostgreSQL | [github.com/sc8134/signal-job-portal](https://github.com/sc8134/signal-job-portal) |
| JobHunt Agent | Python, LangGraph, spaCy | [github.com/sc8134/JobHunt-Agent](https://github.com/sc8134/JobHunt-Agent) |
| AI Reel Generator | Python, FFmpeg, OpenAI API | [github.com/sc8134/ai-reel-generator](https://github.com/sc8134/ai-reel-generator) |
| Namo Patro | React, Node.js, PostgreSQL | [github.com/sc8134/Namo-Patro](https://github.com/sc8134/Namo-Patro) |
| Phishing Simulation Tool | React, Flask, Python | [github.com/sc8134/phishing-simulation-tool](https://github.com/sc8134/phishing-simulation-tool) |

---

## GitHub Stats

<div align="center">

![GitHub Stats](https://github-readme-stats-fast.vercel.app/api?username=sc8134&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=c0392b&icon_color=61DAFB&text_color=ffffff&cache_seconds=600)
&nbsp;&nbsp;
![Top Languages](https://github-readme-stats-fast.vercel.app/api/top-langs/?username=sc8134&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=c0392b&text_color=ffffff&cache_seconds=600)

</div>

<div align="center">

![GitHub Streak](https://streak-stats.demolab.com?user=sc8134&theme=tokyonight-duo&hide_border=true&background=0d1117&stroke=c0392b&ring=c0392b&fire=ff6b6b&currStreakLabel=ffffff&sideLabels=ffffff&dates=888888)

</div>

---

## Running Locally

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

## Folder Structure

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

## Design Tokens

All colors, spacing, typography, shadows, and border radii live in `src/theme/tokens.css` as CSS custom properties using the Tailwind CSS v4 `@theme` directive. Nothing is hardcoded in components. If I want to change the accent color across the entire site, I change one value.

---

<div align="center">

![footer](https://capsule-render.vercel.app/api?type=waving&color=0:c0392b,100:1e3a5f&height=120&section=footer)

**Built with care from Kathmandu, Nepal**

</div>
