import { about } from '../../data/about'
import { socials } from '../../data/socials'
import { useTypewriter } from '../../hooks/useTypewriter'

const heroSocials = ['github', 'linkedin', 'twitter']

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function EnvelopeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

const iconMap: Record<string, React.ReactNode> = {
  github:   <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  twitter:  <XIcon />,
}

export function Hero() {
  const heroSocialLinks = socials.filter((s) => heroSocials.includes(s.id))
  const roles = about.roles ?? [about.role]

  // Full typewriter: types out each role, deletes it, moves to next
  const typedRole = useTypewriter(roles, {
    typeSpeed:   75,
    deleteSpeed: 40,
    pauseMs:     2000,
  })

  return (
    <section id="hero" className="hero-section section">

      {/* Open to work badge */}
      {about.openToWork && (
        <div className="animate-fade-up">
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <span className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              {about.openToWorkText ?? 'Next Adventure Awaits'}
            </span>
          </a>
        </div>
      )}

      {/* Hi I'm + name */}
      <h1 className="hero-headline animate-fade-up delay-1">
        <span className="hero-greeting">Hi, I&apos;m </span>
        <span className="hero-name-accent">{about.name}</span>
      </h1>

      {/* Typewriter role */}
      <p className="hero-role animate-fade-up delay-2" aria-live="polite">
        {typedRole}
        <span className="typewriter-cursor" aria-hidden="true">|</span>
      </p>

      {/* Bio */}
      <p className="hero-bio animate-fade-up delay-3">
        {about.heroBio ?? about.bio[0]}
      </p>

      {/* Stats row */}
      <div className="hero-stats animate-fade-up delay-3" aria-label="Quick stats">
        {about.stats.map((stat, i) => (
          <div key={i} className="hero-stat">
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="hero-actions animate-fade-up delay-4">
        <a className="btn btn-neon" href="#projects">
          View Projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a className="btn btn-ghost" href="#contact">
          <EnvelopeIcon />
          Contact Me
        </a>
        <a className="btn btn-resume" href={about.resumeUrl} target="_blank" rel="noreferrer">
          <DownloadIcon />
          Resume
        </a>
      </div>

      {/* Social icons */}
      <div className="hero-socials animate-fade-up delay-5" aria-label="Social links">
        {heroSocialLinks.map((social) => (
          <a
            key={social.id}
            className="hero-social-link"
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
          >
            {iconMap[social.id]}
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator animate-fade-up delay-6" aria-hidden="true">
        <span>scroll</span>
        <span className="scroll-line" />
      </div>
    </section>
  )
}
