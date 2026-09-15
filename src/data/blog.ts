import type { BlogPost } from '../types/blog'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'why-i-built-this-portfolio',
    entryNumber: '#001',
    title: 'Why I Built This Portfolio From Scratch',
    subtitle: 'No templates. No shortcuts. Just me, VS Code, and way too many late nights.',
    date: '2026-08-15',
    readTime: 5,
    mood: 'reflecting',
    tags: ['portfolio', 'react', 'personal'],
    excerpt:
      'Everyone said just use a template. I almost did. Then I spent three weeks building it from zero instead. Here is the honest story of why, and what broke along the way.',
    content: [
      {
        type: 'paragraph',
        text: 'Okay so the original plan was simple. Update the old portfolio, add the new projects, ship it, move on. That was it. I opened the old site, stared at it for maybe thirty seconds, and closed the tab.',
      },
      {
        type: 'paragraph',
        text: 'It was not that it looked bad. It looked fine. That was the problem. It looked like everyone else\'s portfolio. Generic layout, generic font choices, the same hero section structure I had seen a hundred times. Anyone could have built it. I could not see myself in it anymore.',
      },
      {
        type: 'heading',
        text: 'So I started over',
      },
      {
        type: 'paragraph',
        text: 'I set one rule: nothing pre-built. No component libraries, no Tailwind UI, no shadcn, nothing. Every single thing you see on this site I wrote myself. That includes the nav, the animations, the card layouts, all of it. Not because I think using libraries is wrong. I use them in my actual job every day. But I wanted this one thing to be completely mine.',
      },
      {
        type: 'quote',
        text: 'When you build it yourself, you stop asking "how do I make this look good" and start asking "why does this feel right." Those are very different questions.',
      },
      {
        type: 'paragraph',
        text: 'The design took forever to nail. I wanted something warm, not the usual dark-mode developer aesthetic. The parchment background, the Cormorant Garamond for headings, the coral accent color. None of that was planned upfront. I arrived at it by trying things and deleting them until something finally felt honest.',
      },
      {
        type: 'heading',
        text: 'The part that actually hurt',
      },
      {
        type: 'paragraph',
        text: 'The scroll reveal animations took two full days. Not the code part. The IntersectionObserver logic is like twenty lines. The part that took two days was getting the timing to feel natural. Too fast and it looks cheap. Too slow and it feels sluggish. There is no formula for that. You just keep tweaking until your gut says yes.',
      },
      {
        type: 'list',
        items: [
          'One bad spacing decision will quietly break five other things downstream',
          'The instinct for what looks good is a real skill and you build it by doing, not reading',
          'Portfolios are not showcases, they are conversations - build them that way',
          'Shipping something imperfect is always better than keeping something perfect in a private repo',
        ],
      },
      {
        type: 'paragraph',
        text: 'This site is not finished and honestly it probably never will be. Every time I learn something new I want to come back and improve something. That is fine. It is a living thing. This blog is part of that.',
      },
    ],
  },
  {
    id: '2',
    slug: 'my-take-on-the-ai-era',
    entryNumber: '#002',
    title: 'My Take on the AI Era as a Dev from Nepal',
    subtitle: 'Everyone has an opinion on AI and coding. Here is mine, from someone who actually uses it every day.',
    date: '2026-08-28',
    readTime: 6,
    mood: 'thinking',
    tags: ['ai', 'opinion', 'career'],
    excerpt:
      'I use AI tools every single day to build real things. And I think most of the "developers are being replaced" conversation is completely missing the point.',
    content: [
      {
        type: 'paragraph',
        text: 'Let me be upfront. I use Claude, GPT, and Copilot regularly. Not to avoid work, but because they genuinely help me move faster. So when I say I think the "AI is replacing developers" panic is overblown, I am not saying it as someone who avoids the tools. I am saying it as someone who uses them and can see clearly what they do and do not do.',
      },
      {
        type: 'heading',
        text: 'What AI is actually good at',
      },
      {
        type: 'paragraph',
        text: 'AI is excellent at pattern completion. Give it a clear, well-shaped problem and it will write working code faster than I can type. Boilerplate, CRUD operations, standard component structures, converting something from one format to another. All of that it handles really well. I am not going to pretend otherwise.',
      },
      {
        type: 'paragraph',
        text: 'But here is what it cannot do. It cannot tell you why a system was built a certain way. It cannot feel when a technically correct solution is the wrong one for your actual users. It does not have judgment. It does not have taste. Every output it gives you is a probability distribution, not a decision. The decision is still yours.',
      },
      {
        type: 'quote',
        text: 'The devs who will struggle are not the ones who cannot code without AI. They are the ones who stopped thinking once AI could type for them.',
      },
      {
        type: 'heading',
        text: 'Why I chose to understand first',
      },
      {
        type: 'paragraph',
        text: 'I got into coding without a mentor, without a bootcamp, without any structured path. Just me and Stack Overflow and a lot of broken scripts. When these AI tools became widely available I could have used them to skip the hard parts. I deliberately did not. Because I understood that if I never built the mental model myself, I would never be able to effectively direct the AI or catch when it was wrong. And it is wrong more often than people admit.',
      },
      {
        type: 'list',
        items: [
          'Use AI to go faster, not to avoid understanding what you are building',
          'Build things by hand first, automate the parts you already understand',
          'The junior to senior jump is increasingly about judgment, not just syntax knowledge',
          'Every AI output is a first draft - the edit is where the real work starts',
        ],
      },
      {
        type: 'paragraph',
        text: 'I am building from Kathmandu. The global market is more competitive now, that is real. But the floor for what is worth paying a human developer for has also gone up. The commodity stuff is getting automated. What is left - architecture decisions, understanding user needs, debugging weird production issues at 2am, knowing when to say no to a feature - that stuff is more valuable than ever.',
      },
      {
        type: 'paragraph',
        text: 'My bet is simple. A developer who thinks clearly and knows how to use AI well can do more than a team that does not. I would rather be that developer than spend energy worrying about being replaced.',
      },
    ],
  },
  {
    id: '3',
    slug: 'building-sara-my-ai-assistant',
    entryNumber: '#003',
    title: 'I Built an AI Assistant Into My Portfolio. Here is What Actually Happened.',
    subtitle: 'The gap between "add AI" and building something that genuinely works is bigger than I expected.',
    date: '2026-09-01',
    readTime: 6,
    mood: 'building',
    tags: ['ai', 'project', 'building', 'sara'],
    excerpt:
      'Sara is the AI assistant living in my portfolio. Getting her from "kinda works" to something I was proud to ship took a lot more thought than I expected. This is that story.',
    content: [
      {
        type: 'paragraph',
        text: 'The idea was straightforward. Instead of someone landing on my portfolio and reading static text about me, they could just ask questions. Sara would answer. Simple concept. I thought it would take a weekend. It took significantly longer than that.',
      },
      {
        type: 'heading',
        text: 'Version one was embarrassing',
      },
      {
        type: 'paragraph',
        text: 'First version was: write a system prompt with my bio, take user message, call the API, stream the response back. It worked in the technical sense. Responses came back. They were just... bad. Too formal. Too generic. Reading them felt like talking to a LinkedIn post, not a person. I had built a chatbot that happened to know some facts about me, not an assistant that represented me.',
      },
      {
        type: 'quote',
        text: 'The hardest part of building AI features is not the API integration. It is making the output feel like it was made by someone who actually cares.',
      },
      {
        type: 'heading',
        text: 'The thing that actually fixed it',
      },
      {
        type: 'paragraph',
        text: 'The shift that changed everything was reframing the system prompt goal. Instead of "describe Sagar accurately," I changed it to "you are talking to someone who is deciding whether to reach out to Sagar for work." That one change completely transformed the outputs. Sara stopped giving Wikipedia summaries and started giving answers that actually moved the conversation forward.',
      },
      {
        type: 'list',
        items: [
          'Prompt engineering is product design - the whole user experience lives in that system prompt',
          'Specific instructions beat comprehensive instructions every single time',
          'Streaming makes responses feel alive in a way that waiting for the full reply never does',
          'Error states and rate limiting are not edge cases, they are part of the product',
        ],
      },
      {
        type: 'paragraph',
        text: 'The name Sara comes from SARA - Sagar\'s Autonomous Response Assistant. Yes it is a bit on the nose. It stuck anyway. She knows my projects, my stack, my opinions, the kind of work I am looking for. When someone asks something outside her context she says so directly instead of making something up.',
      },
      {
        type: 'heading',
        text: 'What this taught me about AI features in general',
      },
      {
        type: 'paragraph',
        text: 'Most AI features fail not because the model is bad but because the thinking around it is weak. The model is just the engine. The actual work is everything wrapped around it: what context you give it, what constraints you set, what happens when something goes wrong, how you manage user expectations. Treat AI as a feature toggle and you get something forgettable. Treat it as a product problem and you might build something worth using.',
      },
      {
        type: 'paragraph',
        text: 'Sara is still a work in progress. I keep tweaking the prompt, adjusting the UI, thinking about what she should and should not be able to do. But she works now in the way I actually wanted her to work. That was the goal.',
      },
    ],
  },
]
