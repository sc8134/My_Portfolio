import { useState, useRef, useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface Message {
  from: 'sara' | 'user'
  text: string
}

// ─────────────────────────────────────────────────────────────
// SARA's full knowledge base about Sagar Roka Chhetri
// Each key maps to a natural, human-sounding response.
// Multiple keyword aliases point to the same answer so SARA
// understands questions asked in different ways.
// ─────────────────────────────────────────────────────────────

const knowledge: Record<string, string> = {

  // ── HELP ──────────────────────────────────────────────────
  help: `Sure! Here is everything I can tell you about Sagar. Just type any of these topics and I will give you the full story:

  who / sagar / about    — Who he is and his background
  story / journey        — How he got into coding
  skills / stack         — His full technical skill set
  frontend               — Frontend skills specifically
  backend                — Backend and server-side skills
  projects               — All 7 projects he has built
  nova / nova dvr        — Nova DVR deep dive
  velora                 — Velora Media Hub deep dive
  signal / job portal    — Signal Job Portal deep dive
  jobhunt / agent        — JobHunt Agent deep dive
  namo / patro           — Namo Patro deep dive
  phishing               — Phishing Simulation Tool deep dive
  ai reel / reel         — AI Reel Generator deep dive
  experience / work      — Work experience at CodeRunners
  education / degree     — His BCE degree and academic record
  personality            — What he is like as a person
  philosophy / values    — How he thinks about code and work
  goals / ambition       — What he is working toward
  hire / recruit         — Why you should hire him
  availability           — When he can start
  location / remote      — Where he is and if he works remotely
  contact / reach        — How to get in touch
  fun-facts              — Interesting things about him
  surprise               — Something unexpected`,

  // ── WHO IS SAGAR ──────────────────────────────────────────
  who: `Sagar Roka Chhetri is a 22 year old full-stack engineer from Nepal, currently in his final year of a BCE in Computer Engineering at Cosmos College of Management and Technology under Pokhara University.

He did not get into coding through a bootcamp or a YouTube tutorial. He got into it because things bothered him. He kept running into small annoying problems and instead of accepting them, he wrote Python scripts to fix them. That habit of building solutions to real problems is still exactly what drives him today.

Over the past two plus years he has gone from writing automation scripts to shipping full production applications. His work covers everything from frontend React interfaces to Python and Node.js backends, databases, and deployment. He has built 7 projects, 3 of which are open source, and he is currently working as a Full Stack Engineer at CodeRunners Technologies on a production MERN stack platform.

He is based in Nepal, fully remote-ready, and actively looking for his next full-time role or internship.`,

  sagar: `Sagar Roka Chhetri is a 22 year old full-stack engineer from Nepal, currently in his final year of a BCE in Computer Engineering at Cosmos College of Management and Technology under Pokhara University.

He did not get into coding through a bootcamp or a YouTube tutorial. He got into it because things bothered him. He kept running into small annoying problems and instead of accepting them, he wrote Python scripts to fix them. That habit of building solutions to real problems is still exactly what drives him today.

Over the past two plus years he has gone from writing automation scripts to shipping full production applications. His work covers everything from frontend React interfaces to Python and Node.js backends, databases, and deployment. He has built 7 projects, 3 of which are open source, and he is currently working as a Full Stack Engineer at CodeRunners Technologies on a production MERN stack platform.

He is based in Nepal, fully remote-ready, and actively looking for his next full-time role or internship.`,

  about: `Sagar Roka Chhetri is a 22 year old full-stack engineer from Nepal, currently in his final year of a BCE in Computer Engineering at Cosmos College of Management and Technology under Pokhara University.

He did not get into coding through a bootcamp or a YouTube tutorial. He got into it because things bothered him. He kept running into small annoying problems and instead of accepting them, he wrote Python scripts to fix them. That habit of building solutions to real problems is still exactly what drives him today.

Over the past two plus years he has gone from writing automation scripts to shipping full production applications. His work covers everything from frontend React interfaces to Python and Node.js backends, databases, and deployment. He has built 7 projects, 3 of which are open source, and he is currently working as a Full Stack Engineer at CodeRunners Technologies on a production MERN stack platform.

He is based in Nepal, fully remote-ready, and actively looking for his next full-time role or internship.`,

  // ── STORY / JOURNEY ───────────────────────────────────────
  story: `Sagar's journey into development started in an unexpected place: boredom.

He was in his first year of his Computer Engineering degree when he started noticing how many repetitive things he did every day. Instead of just accepting it, he opened Python and wrote a script to automate them. That first script worked. Then he wrote another one. Then another.

What started as automation curiosity grew into something bigger. He started wondering how websites worked, how data moved between servers and browsers, how real products were built. So he started building. Not following tutorials step by step, but actually picking a problem and figuring it out.

His first real project was Namo Patro, a Nepali digital calendar. He built it because he was genuinely frustrated that no good Nepali calendar existed online. Every existing option was cluttered, outdated, or just not built for how Nepali people actually use a calendar. So he built one from scratch with BS to AD conversion, festival listings, astrology data, and finance tools. It is now GPL-3.0 open source.

From there he kept building. Nova DVR, Velora, Signal Job Portal, the AI Reel Generator, the Phishing Simulation Tool, and JobHunt Agent all followed. Each one started with a real problem. Each one taught him something specific. And all of them are public on GitHub.`,

  journey: `Sagar's journey into development started in an unexpected place: boredom.

He was in his first year of his Computer Engineering degree when he started noticing how many repetitive things he did every day. Instead of just accepting it, he opened Python and wrote a script to automate them. That first script worked. Then he wrote another one. Then another.

What started as automation curiosity grew into something bigger. He started wondering how websites worked, how data moved between servers and browsers, how real products were built. So he started building. Not following tutorials step by step, but actually picking a problem and figuring it out.

His first real project was Namo Patro, a Nepali digital calendar. He built it because he was genuinely frustrated that no good Nepali calendar existed online. Every existing option was cluttered, outdated, or just not built for how Nepali people actually use a calendar. So he built one from scratch with BS to AD conversion, festival listings, astrology data, and finance tools. It is now GPL-3.0 open source.

From there he kept building. Nova DVR, Velora, Signal Job Portal, the AI Reel Generator, the Phishing Simulation Tool, and JobHunt Agent all followed. Each one started with a real problem. Each one taught him something specific. And all of them are public on GitHub.`,

  // ── SKILLS ────────────────────────────────────────────────
  skills: `Sagar has a broad and honest skill set. Here is the full picture:

FRONTEND
React, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion, Angular, Vite. He is most comfortable in React and TypeScript, which is what he uses in production.

BACKEND
Python (his first love), Django, Flask, FastAPI, Node.js, Express, REST APIs, WebSockets. He picks between Python and Node depending on what the project actually needs.

DATABASES
PostgreSQL, MongoDB, SQLite, MySQL, Redis, Prisma, Firebase, Supabase, ClickHouse.

TOOLS AND DEVOPS
Git, GitHub Actions, Docker, Nginx, Linux CLI, AWS, CI/CD pipelines, Kubernetes (learning).

AI AND EMERGING
LangGraph, spaCy, sentence-transformers, OpenAI API, FFmpeg for media pipelines.

His honest self-assessment: he is ship-ready in React, TypeScript, Python, Flask, Node.js, PostgreSQL, and Git. He is actively learning Next.js, Docker, and testing. He knows the basics of Kubernetes and AWS and is building on those.`,

  stack: `Sagar has a broad and honest skill set. Here is the full picture:

FRONTEND
React, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion, Angular, Vite. He is most comfortable in React and TypeScript, which is what he uses in production.

BACKEND
Python (his first love), Django, Flask, FastAPI, Node.js, Express, REST APIs, WebSockets. He picks between Python and Node depending on what the project actually needs.

DATABASES
PostgreSQL, MongoDB, SQLite, MySQL, Redis, Prisma, Firebase, Supabase, ClickHouse.

TOOLS AND DEVOPS
Git, GitHub Actions, Docker, Nginx, Linux CLI, AWS, CI/CD pipelines, Kubernetes (learning).

AI AND EMERGING
LangGraph, spaCy, sentence-transformers, OpenAI API, FFmpeg for media pipelines.

His honest self-assessment: he is ship-ready in React, TypeScript, Python, Flask, Node.js, PostgreSQL, and Git. He is actively learning Next.js, Docker, and testing. He knows the basics of Kubernetes and AWS and is building on those.`,

  // ── FRONTEND ──────────────────────────────────────────────
  frontend: `On the frontend, Sagar works primarily in React and TypeScript. That is his most comfortable environment and what he uses in all of his current production work.

His frontend toolkit includes React, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion for animations, Angular, and Vite as a build tool. He has built full interfaces from scratch including the Nova DVR frontend, Velora, Signal Job Portal, and the Phishing Simulation Tool frontend.

He cares a lot about how things feel to use, so performance and accessibility are always on his mind. He follows Core Web Vitals, thinks about bundle sizes, and writes semantic HTML by habit.`,

  // ── BACKEND ───────────────────────────────────────────────
  backend: `On the backend, Sagar started with Python and Flask, which is still one of his strongest areas. He also works comfortably with Node.js and Express, and has used FastAPI and Django on specific projects.

He has built REST APIs, handled authentication flows including dual-role auth in Signal Job Portal, set up SMTP email integration, built admin control panels, and worked with WebSockets. He is comfortable with PostgreSQL, MongoDB, SQLite, and Redis, and has used Prisma as an ORM.

His backend work at CodeRunners Technologies involves a production MERN stack platform handling real users, which is his most significant professional backend experience to date.`,

  // ── ALL PROJECTS ──────────────────────────────────────────
  projects: `Sagar has built 7 projects, all public on GitHub. Here is the full list:

1. Nova DVR (live at nova-dvr.vercel.app)
   AI-powered media organizer and downloader. Multi-platform downloads, batch scheduling, cloud sync, AI metadata tagging. React frontend, Python/Flask backend.

2. Velora (live at velora-six-gules.vercel.app)
   Next-generation media hub combining video downloading, AI content recognition, and smart discovery. Built with TypeScript and React, deployed on Vercel.

3. Signal Job Portal (github.com/sc8134/signal-job-portal)
   Full-stack job board with dual-role authentication for employers and job seekers. Smart filtering and matching system. TypeScript, React, Node.js.

4. JobHunt Agent (github.com/sc8134/JobHunt-Agent)
   AI job search agent built with LangGraph, spaCy, and sentence-transformers. Paste your resume and it finds, ranks, and writes cover letters for the best matches. No LLM API key required.

5. AI Reel Generator (github.com/sc8134/ai-reel-generator)
   End-to-end Python pipeline that turns text prompts into short-form video reels with captions, background music, and customizable templates.

6. Namo Patro (github.com/sc8134/Namo-Patro)
   Nepali digital calendar and lifestyle platform. BS to AD calendar conversion, festival listings, astrology, finance tools, live radio. GPL-3.0 open source.

7. Phishing Simulation Tool (github.com/sc8134/phishing-simulation-tool)
   Security awareness training platform for organizations. Run controlled phishing simulations, track click-through rates, measure employee vulnerability. React and Flask.

Type any project name for a detailed breakdown!`,

  // ── NOVA DVR ──────────────────────────────────────────────
  nova: `Nova DVR is probably Sagar's most polished project and the one he is most proud of technically.

The problem it solves: downloading and organizing media across platforms was fragmented and slow. There was no single tool that handled everything cleanly.

What he built: Nova DVR handles multi-platform video downloads, batch scheduling, format conversion, cloud sync, and AI-powered metadata tagging that automatically categorizes your content. It has a clean React and TypeScript frontend and a Python/Flask backend that handles all the heavy processing.

The AI metadata tagging was the hardest part. He had to design a pipeline that could analyze downloaded content, extract meaningful tags, and store them in a way that made smart recommendations possible.

It is live at nova-dvr.vercel.app and the source code is at github.com/sc8134/Nova_DVR. It has a star on GitHub which he is quietly proud of.`,

  'nova dvr': `Nova DVR is probably Sagar's most polished project and the one he is most proud of technically.

The problem it solves: downloading and organizing media across platforms was fragmented and slow. There was no single tool that handled everything cleanly.

What he built: Nova DVR handles multi-platform video downloads, batch scheduling, format conversion, cloud sync, and AI-powered metadata tagging that automatically categorizes your content. It has a clean React and TypeScript frontend and a Python/Flask backend that handles all the heavy processing.

The AI metadata tagging was the hardest part. He had to design a pipeline that could analyze downloaded content, extract meaningful tags, and store them in a way that made smart recommendations possible.

It is live at nova-dvr.vercel.app and the source code is at github.com/sc8134/Nova_DVR. It has a star on GitHub which he is quietly proud of.`,

  // ── VELORA ────────────────────────────────────────────────
  velora: `Velora is a next-generation media hub that Sagar built to combine powerful downloading, AI tools, and smart content recognition into one accessible platform.

The idea came from noticing that people who download and manage media have to use five different tools. Velora was his attempt to bring that into one clean interface.

It features intelligent video extraction and content discovery, AI-powered smart recognition, and is designed to be accessible on all devices. It is built with TypeScript and React and deployed live at velora-six-gules.vercel.app. Source is at github.com/sc8134/Velora.

Velora and Nova DVR are related in concept but serve different use cases. Nova DVR focuses on recording and organizing. Velora focuses on discovery and hub-style media management.`,

  // ── SIGNAL JOB PORTAL ─────────────────────────────────────
  signal: `Signal Job Portal is Sagar's most complete full-stack web application.

He built it because he noticed that most job boards are either too complex for small markets or too generic to be useful. Signal was designed with a specific philosophy: clean, intentional, and actually useful.

Key features: dual-role authentication where employers and job seekers have completely separate flows and dashboards. A smart filtering and matching system that surfaces relevant jobs rather than just keyword matches. And a UI that he obsessed over to make the application process feel less painful.

Tech stack: TypeScript, React, Node.js, Tailwind CSS, REST API with PostgreSQL. Source is at github.com/sc8134/signal-job-portal.

This is also the project that got him the role at CodeRunners Technologies. They saw it and offered him a position.`,

  'job portal': `Signal Job Portal is Sagar's most complete full-stack web application.

He built it because he noticed that most job boards are either too complex for small markets or too generic to be useful. Signal was designed with a specific philosophy: clean, intentional, and actually useful.

Key features: dual-role authentication where employers and job seekers have completely separate flows and dashboards. A smart filtering and matching system that surfaces relevant jobs rather than just keyword matches. And a UI that he obsessed over to make the application process feel less painful.

Tech stack: TypeScript, React, Node.js, Tailwind CSS, REST API with PostgreSQL. Source is at github.com/sc8134/signal-job-portal.`,

  // ── JOBHUNT AGENT ─────────────────────────────────────────
  jobhunt: `JobHunt Agent is probably the most technically interesting project Sagar has built so far.

The idea: job searching is exhausting. You paste your resume into dozens of portals, write the same cover letter over and over, and half the time the jobs are not even relevant. JobHunt Agent automates all of that.

How it works: you paste your resume and your job goal. The agent uses sentence-transformers to semantically match your profile against job listings, ranks the best matches, and then generates a tailored cover letter for each one. No OpenAI API key required, it runs entirely on open-source models.

Built with LangGraph for the agent workflow, spaCy for NLP processing, and sentence-transformers for semantic similarity. The multi-step reasoning pipeline is what makes it feel like a real agent rather than just a script.

Source is at github.com/sc8134/JobHunt-Agent. This is the project that shows his ability to work with AI infrastructure beyond just calling an API.`,

  agent: `JobHunt Agent is probably the most technically interesting project Sagar has built so far.

The idea: job searching is exhausting. You paste your resume into dozens of portals, write the same cover letter over and over, and half the time the jobs are not even relevant. JobHunt Agent automates all of that.

How it works: you paste your resume and your job goal. The agent uses sentence-transformers to semantically match your profile against job listings, ranks the best matches, and then generates a tailored cover letter for each one. No OpenAI API key required, it runs entirely on open-source models.

Built with LangGraph for the agent workflow, spaCy for NLP processing, and sentence-transformers for semantic similarity. The multi-step reasoning pipeline is what makes it feel like a real agent rather than just a script.

Source is at github.com/sc8134/JobHunt-Agent.`,

  // ── NAMO PATRO ────────────────────────────────────────────
  namo: `Namo Patro is the project closest to Sagar's heart and the one he considers his most meaningful contribution so far.

The problem: he is Nepali. Nepali people use the Bikram Sambat (BS) calendar, not the Gregorian calendar. Every existing digital calendar for Nepali users was cluttered, ad-heavy, missing key data, or just badly designed. There was no clean, modern, community-focused option.

So he built one. Namo Patro includes full BS to AD calendar conversion, Nepali festival and public holiday listings, astrology and tithi data, a finance tools section, and live radio integration. It was built for real people in his community, not as a portfolio piece.

It is GPL-3.0 open source, meaning anyone can fork it, contribute to it, or build on top of it. Built with TypeScript, React, Node.js, and PostgreSQL. Source is at github.com/sc8134/Namo-Patro.

This project is why Sagar says he builds for underserved communities. He knows what it feels like to not have a tool that was built for you.`,

  patro: `Namo Patro is the project closest to Sagar's heart and the one he considers his most meaningful contribution so far.

The problem: he is Nepali. Nepali people use the Bikram Sambat (BS) calendar, not the Gregorian calendar. Every existing digital calendar for Nepali users was cluttered, ad-heavy, missing key data, or just badly designed. There was no clean, modern, community-focused option.

So he built one. Namo Patro includes full BS to AD calendar conversion, Nepali festival and public holiday listings, astrology and tithi data, a finance tools section, and live radio integration. It was built for real people in his community, not as a portfolio piece.

It is GPL-3.0 open source. Source is at github.com/sc8134/Namo-Patro.`,

  // ── PHISHING TOOL ─────────────────────────────────────────
  phishing: `The Phishing Simulation Tool is Sagar's most security-focused project.

The problem it solves: most organizations have no idea how vulnerable their employees are to phishing attacks until it is too late. Security awareness training is often just a slideshow that nobody pays attention to.

What he built: a platform that lets organizations run realistic, controlled phishing simulations. You create a campaign, send simulated phishing emails, and track who clicked, who entered credentials, and who reported it. The analytics dashboard gives you a clear picture of your organization's vulnerability.

On the technical side it is React and Tailwind on the frontend with a Flask and Python backend. It is one of the more architecturally complex things he has built because the simulation flow requires careful state management across multiple user types.

Source is at github.com/sc8134/phishing-simulation-tool. It has been forked once, which Sagar takes as a sign it was useful to someone.`,

  // ── AI REEL GENERATOR ─────────────────────────────────────
  reel: `The AI Reel Generator came from watching content creators spend hours editing short videos that could have been automated.

What Sagar built: a Python pipeline that takes a text prompt and produces a complete short-form video reel. It auto-generates captions, selects and syncs background music, applies customizable visual templates, and handles all the media processing through FFmpeg.

The pipeline is end-to-end. You type a prompt, the system figures out the visual story, generates the assets, and stitches it all together. No manual editing required.

It uses Python as the core language, FFmpeg for media processing, and the OpenAI API for content generation. The tricky part was building a robust pipeline that could handle failures gracefully at any stage of the process.

Source is at github.com/sc8134/ai-reel-generator.`,

  'ai reel': `The AI Reel Generator came from watching content creators spend hours editing short videos that could have been automated.

What Sagar built: a Python pipeline that takes a text prompt and produces a complete short-form video reel. It auto-generates captions, selects and syncs background music, applies customizable visual templates, and handles all the media processing through FFmpeg.

Source is at github.com/sc8134/ai-reel-generator.`,

  // ── EXPERIENCE ────────────────────────────────────────────
  experience: `Sagar's professional experience is focused and real.

FULL STACK ENGINEER at CodeRunners Technologies (July 2025 to Present)
This is an equity-based arrangement, meaning he joined because he believed in what they were building, not just for a paycheck. He works on a production-level MERN stack platform handling real users. His specific contributions include building the majority of the React frontend, implementing SMTP-based email integration for user notifications, and developing an admin control panel for event management. The platform is currently in deployment.

PERSONAL PROJECTS (2024 to 2025)
Before CodeRunners, Sagar spent a focused year building web applications from scratch to apply and deepen his Computer Engineering coursework. This is when he built Namo Patro and Velora, two of his most substantial projects.

He is honest that he is early in his career. But he is not untested. He has written production code, worked on a live platform with real users, and shipped projects that people actually use.`,

  work: `Sagar's professional experience is focused and real.

FULL STACK ENGINEER at CodeRunners Technologies (July 2025 to Present)
This is an equity-based arrangement, meaning he joined because he believed in what they were building, not just for a paycheck. He works on a production-level MERN stack platform handling real users. His specific contributions include building the majority of the React frontend, implementing SMTP-based email integration for user notifications, and developing an admin control panel for event management. The platform is currently in deployment.

PERSONAL PROJECTS (2024 to 2025)
Before CodeRunners, Sagar spent a focused year building web applications from scratch to apply and deepen his Computer Engineering coursework. This is when he built Namo Patro and Velora, two of his most substantial projects.

He is honest that he is early in his career. But he is not untested. He has written production code, worked on a live platform with real users, and shipped projects that people actually use.`,

  // ── EDUCATION ─────────────────────────────────────────────
  education: `Sagar's academic background is in Computer Engineering.

BCE IN COMPUTER ENGINEERING
Cosmos College of Management and Technology, Pokhara University (2022 to 2026)
He is in his final year, awaiting graduation. His coursework covered software engineering, algorithms, networking, data structures, operating systems, and distributed systems. Importantly, he did not just attend class. He built real projects throughout the degree, all of which are publicly available on GitHub. His university work and his personal projects were always parallel, not separate.

+2 IN SCIENCE (PHYSICS)
Milestone International College (2019 to 2021)
He completed higher secondary with a 3.78 GPA, placing him in the top 10% of students in Nepal. Physics gave him a structured way of thinking about problems that still shows up in how he approaches engineering challenges.`,

  degree: `Sagar's academic background is in Computer Engineering.

BCE IN COMPUTER ENGINEERING
Cosmos College of Management and Technology, Pokhara University (2022 to 2026)
He is in his final year, awaiting graduation. His coursework covered software engineering, algorithms, networking, data structures, operating systems, and distributed systems. Importantly, he did not just attend class. He built real projects throughout the degree, all of which are publicly available on GitHub.

+2 IN SCIENCE (PHYSICS)
Milestone International College (2019 to 2021)
He completed higher secondary with a 3.78 GPA, placing him in the top 10% of students in Nepal.`,

  // ── PERSONALITY ───────────────────────────────────────────
  personality: `Sagar is one of those people who genuinely cannot leave a problem unsolved. If something frustrates him and he thinks it can be fixed with code, he will spend his weekend building the fix. That is not a trait he developed for interviews. It is just how he operates.

He is direct and honest. If he does not know something, he says so. If he thinks an approach is wrong, he says that too. He is not the kind of developer who pretends to know everything and figures it out later. He is the kind who asks good questions early and builds things right the first time.

He works well both independently and in teams. His experience at CodeRunners has given him real exposure to collaborative development, code reviews, and shipping features that other people depend on. But he is also completely comfortable going heads-down alone on a problem for days.

He is curious in a way that bleeds across disciplines. He reads about distributed systems for fun. He got into AI not because it was trendy but because it gave him new tools to solve problems he was already thinking about.

One thing people notice about him: he always has a reason for every decision he made in his code. He thinks deeply before he builds, and he can explain his thinking clearly.`,

  // ── PHILOSOPHY / VALUES ───────────────────────────────────
  philosophy: `Sagar's approach to building software comes down to a few things he genuinely believes:

PERFORMANCE IS RESPECT FOR USERS
He obsesses over Core Web Vitals, bundle sizes, and query efficiency. A slow app is a rude app. If someone is using what you built on a low-end phone on a 3G connection, your choices as a developer directly affect their experience.

BUILD FOR REAL PROBLEMS
He does not start projects to learn a technology. He starts projects because something actually bothers him or someone he knows. The technology follows the problem, not the other way around. This is why his projects like Namo Patro exist. There was a real gap. He filled it.

HONESTY ABOUT YOUR LEVEL
He thinks one of the most valuable things a junior developer can do is be honest about what they know and what they are still learning. It builds trust faster than pretending.

SHIP AND ITERATE
He does not wait for things to be perfect before sharing them. Nova DVR is live. Velora is live. Signal is on GitHub. He believes in getting things in front of people and improving based on what you learn.

COMMUNITY OVER CREDIT
Namo Patro is GPL-3.0. He open-sourced it because he wanted Nepali developers to be able to build on top of it. The project belongs to the community it serves.`,

  values: `Sagar's approach to building software comes down to a few things he genuinely believes:

PERFORMANCE IS RESPECT FOR USERS
He obsesses over Core Web Vitals, bundle sizes, and query efficiency. A slow app is a rude app.

BUILD FOR REAL PROBLEMS
He does not start projects to learn a technology. He starts projects because something actually bothers him. The technology follows the problem.

HONESTY ABOUT YOUR LEVEL
He thinks one of the most valuable things a junior developer can do is be honest about what they know and what they are still learning.

SHIP AND ITERATE
He does not wait for things to be perfect. Nova DVR is live. Velora is live. Signal is on GitHub.

COMMUNITY OVER CREDIT
Namo Patro is GPL-3.0 open source. He built it for the community it serves, not for his resume.`,

  // ── GOALS ─────────────────────────────────────────────────
  goals: `Sagar's goals are clear and grounded.

SHORT TERM
He is actively looking for a full-time role or a meaningful long-term internship. He wants to join a team where he can contribute real code from day one, not sit through months of onboarding. He learns fastest by building things that matter, so he is looking for a place where that is valued.

MEDIUM TERM
He wants to go deep on distributed systems and AI infrastructure. Not just using AI APIs but understanding how to build and scale the systems underneath them. He is already moving in this direction with JobHunt Agent and his current coursework.

LONG TERM
He wants to build products used by millions of people, with a particular focus on underserved communities. Namo Patro is the clearest expression of this. He comes from a community that was not well served by existing tech, and he wants to keep building for people in that position.`,

  ambition: `Sagar's goals are clear and grounded.

SHORT TERM
He is actively looking for a full-time role or a meaningful long-term internship. He wants to join a team where he can contribute real code from day one.

MEDIUM TERM
He wants to go deep on distributed systems and AI infrastructure. Not just using AI APIs but understanding how to build and scale the systems underneath them.

LONG TERM
He wants to build products used by millions of people, with a particular focus on underserved communities. Namo Patro is the clearest expression of this.`,

  // ── WHY HIRE ──────────────────────────────────────────────
  hire: `Here is the honest case for hiring Sagar:

He has shipped production code. He is not just a student with side projects. He is currently working at CodeRunners Technologies on a live MERN stack platform with real users, handling real features.

He picks up new things fast. His entire career so far has been self-directed learning turned into working software. Every project on his GitHub started as something he did not know how to build.

He is honest about his level. He will not waste your time pretending to know things he does not know. He asks good questions, moves quickly, and communicates clearly.

He builds for users, not for his resume. Look at Namo Patro. He built a GPL-3.0 Nepali calendar because his community needed one, not because it would look good in an interview.

He is available now and can start quickly. He is based in Nepal and is fully comfortable working remotely across time zones.

To reach him directly: sc8134s@gmail.com or LinkedIn at linkedin.com/in/sagar-rc or GitHub at github.com/sc8134.`,

  recruit: `Here is the honest case for hiring Sagar:

He has shipped production code at CodeRunners Technologies on a live MERN stack platform. He picks up new things fast. He is honest about his level. He builds for users, not his resume. And he is available now.

To reach him: sc8134s@gmail.com, LinkedIn at linkedin.com/in/sagar-rc, GitHub at github.com/sc8134.`,

  // ── AVAILABILITY ──────────────────────────────────────────
  availability: `Sagar is actively looking right now. He is available for full-time roles, long-term internships, and contract projects.

He can start quickly. He is not in the middle of a notice period or locked into a long commitment. CodeRunners Technologies is an equity-based arrangement that does not conflict with taking a full-time position.

He is based in Nepal and is fully remote-ready. He has experience working asynchronously and is comfortable across time zones.`,

  // ── LOCATION / REMOTE ─────────────────────────────────────
  location: `Sagar is based in Nepal, specifically in Pokhara where his university is located.

He is fully remote-ready and has been working remotely for CodeRunners Technologies since July 2025. He is comfortable with async communication, distributed teams, and working across time zones. He has the setup, the discipline, and the experience for remote work.

He is open to relocating for the right opportunity but does not require it. Remote-first is his preference.`,

  remote: `Sagar is fully remote-ready and has been working remotely since July 2025.

He is comfortable with async communication, distributed teams, and working across time zones. He is based in Nepal but open to relocation for the right opportunity. Remote-first is his preference.`,

  // ── CONTACT ───────────────────────────────────────────────
  contact: `Here is how to reach Sagar:

Email: sc8134s@gmail.com (he replies to every message, usually within 24 hours)
LinkedIn: linkedin.com/in/sagar-rc
GitHub: github.com/sc8134
Twitter/X: x.com/Sagarch05339168

The best way to start a conversation is email or LinkedIn. If you are a recruiter or hiring manager, tell him the role and the company upfront. He appreciates directness.`,

  reach: `Here is how to reach Sagar:

Email: sc8134s@gmail.com
LinkedIn: linkedin.com/in/sagar-rc
GitHub: github.com/sc8134
Twitter/X: x.com/Sagarch05339168

He replies to every message, usually within 24 hours.`,

  // ── FUN FACTS ─────────────────────────────────────────────
  'fun-facts': `A few things about Sagar that do not fit anywhere else:

He ranked in the top 10% of students in Nepal in his +2 Science exams with a 3.78 GPA. Physics gave him the structured problem-solving mindset that shows up in his engineering work.

He built Namo Patro because he was personally frustrated. He needed a Nepali calendar and nothing good existed. That frustration became a GPL-3.0 open source project used by people in his community.

He writes Python scripts to automate literally anything that annoys him more than once. This is how he got into programming and it is still how he operates.

He got his job at CodeRunners Technologies partly because of his Signal Job Portal project. They saw it, liked what they saw, and reached out.

The JobHunt Agent project runs entirely on open-source models with no paid API keys. He built it specifically to prove it could be done without depending on OpenAI.

He is 22 years old and has already shipped 7 public projects, worked on a production platform, and open-sourced a community tool. He is just getting started.`,

  // ── SURPRISE ──────────────────────────────────────────────
  surprise: `Here is something that genuinely surprises people about Sagar:

He once automated his own assignment submission process with a Python script. It logged into the university portal, filled out the form, and submitted the file. Then he got curious about how the portal actually worked. He started inspecting the network requests, reading the responses, wondering how the backend was structured. That curiosity led him to web development, which led to Flask, which led to React, which led to everything you see on this portfolio.

The automation script took him 2 hours to write. The rabbit hole it opened has taken 2 years and counting.

Also: his most starred GitHub repo is Nova DVR, which has 1 star. He is quietly proud of it. Every star is a real person who found the project and thought it was worth noting.`,
}

// ─────────────────────────────────────────────────────────────
// Smart matching: handles natural questions, not just keywords
// ─────────────────────────────────────────────────────────────

function getReply(input: string): string {
  const q = input.trim().toLowerCase()
  if (!q) return `Go ahead, ask me anything about Sagar. Type "help" to see all topics.`

  // Exact key match
  if (knowledge[q]) return knowledge[q]

  // Multi-word keys (e.g. "nova dvr", "ai reel", "job portal")
  const multiHit = Object.keys(knowledge).find((k) => k.length > 6 && q.includes(k))
  if (multiHit) return knowledge[multiHit]

  // Single keyword contained in query
  const singleHit = Object.keys(knowledge).find((k) => q.includes(k))
  if (singleHit) return knowledge[singleHit]

  // Natural language patterns
  if (q.match(/who (is|are)|tell me about|introduce/)) return knowledge['sagar']
  if (q.match(/how.*(start|begin|get into|learn)|origin|background/)) return knowledge['story']
  if (q.match(/what.*(build|made|creat|work on)|portfolio/)) return knowledge['projects']
  if (q.match(/can (he|you|sagar)|able to|know how/)) return knowledge['skills']
  if (q.match(/where.*(live|from|based|locat)/)) return knowledge['location']
  if (q.match(/when.*(start|available|join)/)) return knowledge['availability']
  if (q.match(/why (hire|choose|pick|should)/)) return knowledge['hire']
  if (q.match(/how.*(reach|contact|email|find)/)) return knowledge['contact']
  if (q.match(/study|college|university|degree|school/)) return knowledge['education']
  if (q.match(/work|job|company|employ|position/)) return knowledge['experience']
  if (q.match(/like|enjoy|interest|passion|hobby/)) return knowledge['personality']
  if (q.match(/plan|future|next|aspir/)) return knowledge['goals']

  return `Hmm, I am not sure I have specific info on that. Try rephrasing or type "help" to see everything I know about Sagar. I am pretty thorough, so there is a good chance the answer is in there somewhere.`
}

// ─────────────────────────────────────────────────────────────

const quickAsk = ['who', 'skills', 'projects', 'experience', 'hire', 'contact', 'goals', 'fun-facts', 'surprise']

const INITIAL_MESSAGE: Message = {
  from: 'sara',
  text: `Hi! I'm SARA, Sagar's AI Research Assistant. ✨\n\nI know everything about him. His projects, skills, background, personality, goals, and why you should hire him.\n\nAsk me anything in plain English, like "what has he built?" or "why should I hire him?" or just type a topic. Type "help" for the full list.`,
}

export function Sara() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const prevCountRef = useRef(1)

  useEffect(() => {
    if (messages.length > prevCountRef.current) {
      prevCountRef.current = messages.length
      const el = messagesContainerRef.current
      if (!el) return
      // Find the last SARA message and scroll to its top so user reads from the start
      const allMessages = el.querySelectorAll('.sara-msg')
      const last = allMessages[allMessages.length - 1] as HTMLElement
      if (last) {
        el.scrollTop = last.offsetTop - el.offsetTop - 12
      }
    }
  }, [messages])

  function send(text?: string) {
    const query = (text ?? input).trim()
    if (!query) return
    const userMsg: Message = { from: 'user', text: query }
    const reply: Message = { from: 'sara', text: getReply(query) }
    setMessages((prev) => [...prev, userMsg, reply])
    setInput('')
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') send()
  }

  return (
    <section id="sara" ref={sectionRef} className="section reveal-section">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>
          Easter Egg
        </p>
        <h2 className="heading-lg">
          Ask <em>SARA</em> about Sagar
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', marginTop: '0.6rem', fontSize: '0.95rem', color: 'var(--color-muted)' }}>
          An AI assistant that knows Sagar personally. Try{' '}
          <button
            onClick={() => send('who is sagar')}
            style={{ fontFamily: 'var(--font-ui)', background: 'var(--color-neon-dim)', border: '1px solid var(--color-neon-border)', color: 'var(--color-neon)', borderRadius: 'var(--radius-sm)', padding: '0.1rem 0.5rem', fontSize: '0.825rem', cursor: 'pointer', fontWeight: 600 }}
          >
            who is sagar
          </button>
          {' '}or{' '}
          <button
            onClick={() => send('why should I hire him')}
            style={{ fontFamily: 'var(--font-ui)', background: 'var(--color-neon-dim)', border: '1px solid var(--color-neon-border)', color: 'var(--color-neon)', borderRadius: 'var(--radius-sm)', padding: '0.1rem 0.5rem', fontSize: '0.825rem', cursor: 'pointer', fontWeight: 600 }}
          >
            why should I hire him
          </button>
          , or ask anything in plain English.
        </p>
      </div>

      {/* Terminal */}
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          background: '#0a1a2f',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 0 40px rgba(255,195,11,0.08)',
        }}
      >
        {/* Title bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.6rem 1rem',
            borderBottom: '1px solid #112240',
            background: '#0f2140',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'block' }} />
            <span style={{ fontSize: '0.78rem', color: '#a0a0a0', marginLeft: '0.5rem', fontFamily: 'var(--font-ui)' }}>
              ✦ SARA | Sagar&apos;s AI Research Assistant
            </span>
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-neon)', fontFamily: 'var(--font-ui)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-neon)', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
            online
          </span>
        </div>

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          style={{
            height: '320px',
            overflowY: 'auto',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '0.875rem',
            lineHeight: 1.65,
          }}
        >
          {messages.map((msg, i) => (
            <div key={i} className={msg.from === 'sara' ? 'sara-msg' : ''} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              {msg.from === 'sara' ? (
                <>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, fontFamily: 'var(--font-ui)', color: 'var(--color-neon)', letterSpacing: '0.06em' }}>SARA</span>
                  <p style={{ fontFamily: "'Courier New', Courier, monospace", color: '#e6edf3', whiteSpace: 'pre-line', margin: 0 }}>{msg.text}</p>
                </>
              ) : (
                <>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, fontFamily: 'var(--font-ui)', color: '#a0a0a0', letterSpacing: '0.06em', textAlign: 'right' }}>YOU</span>
                  <p style={{ fontFamily: "'Courier New', Courier, monospace", color: '#8b949e', textAlign: 'right', margin: 0 }}>{msg.text}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            padding: '0.75rem 1rem',
            borderTop: '1px solid #112240',
            background: '#0f2140',
          }}
        >
          <span style={{ color: '#a0a0a0', fontFamily: 'monospace', fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}>&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="ask me anything about sagar..."
            aria-label="Ask SARA a question"
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#e6edf3',
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: '0.875rem',
            }}
          />
          <button
            onClick={() => send()}
            style={{
              background: 'var(--color-neon)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              padding: '0.4rem 1rem',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.825rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'opacity 150ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Ask
          </button>
        </div>
      </div>

      {/* Quick-ask chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', maxWidth: '720px', margin: '1rem auto 0' }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--color-subtle)', alignSelf: 'center' }}>quick ask:</span>
        {quickAsk.map((topic) => (
          <button
            key={topic}
            onClick={() => send(topic)}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.78rem',
              fontWeight: 500,
              color: 'var(--color-muted)',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-pill)',
              padding: '0.25rem 0.7rem',
              cursor: 'pointer',
              transition: 'border-color 150ms, color 150ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-neon-border)'
              e.currentTarget.style.color = 'var(--color-neon)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.color = 'var(--color-muted)'
            }}
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  )
}
