import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { projects } from '../../data/projects'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { Project } from '../../types/project'

// ── Icons ─────────────────────────────────────────────────────────────────────

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

// ── Cover map ─────────────────────────────────────────────────────────────────

const coverImages: Record<string, string> = {
  'bolts-army':        '/projects/janakpur.webp',
  'nova-dvr':          '/projects/nova.webp',
  'velora':            '/projects/velora.webp',
  'signal-job-portal': '/projects/signal.webp',
  'jobhunt-agent':     '/projects/jobhunt.webp',
  'ai-reel-generator': '/projects/ai reel.webp',
  'namo-patro':        '/projects/namo.webp',
  'phishing-tool':     '/projects/phishing.webp',
}

// ── App icon (collapsed state) ────────────────────────────────────────────────

function AppIcon({ project, onClick }: { project: Project; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)
  const accentMatch = project.gradient.match(/#[0-9a-fA-F]{6}/)
  const accent = accentMatch ? accentMatch[0] : '#e8532a'
  const cover = coverImages[project.id]

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Open ${project.title}`}
      style={{
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.55rem',
        padding: '0.75rem 0.5rem',
        borderRadius: 'var(--radius-lg)',
        background: hovered ? 'var(--color-neon-dim)' : 'transparent',
        transition: 'background 180ms',
        userSelect: 'none',
      }}
    >
      {/* Icon square */}
      <div style={{
        width: '72px',
        height: '72px',
        borderRadius: '18px',
        overflow: 'hidden',
        position: 'relative',
        background: project.gradient,
        border: `2px solid ${hovered ? accent : 'var(--color-border)'}`,
        boxShadow: hovered
          ? `0 8px 24px ${accent}44, 0 2px 8px rgba(0,0,0,0.12)`
          : '0 2px 8px rgba(0,0,0,0.10)',
        transform: hovered ? 'scale(1.1) translateY(-3px)' : 'scale(1)',
        transition: 'transform 220ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 220ms, border-color 180ms',
        flexShrink: 0,
      }}>
        {cover && !imgError ? (
          <img
            src={cover}
            alt=""
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.92)',
            background: project.gradient,
          }}>
            {project.icon}
          </div>
        )}
        {/* Live dot */}
        {project.live && (
          <span style={{
            position: 'absolute', bottom: '4px', right: '4px',
            width: 8, height: 8, borderRadius: '50%',
            background: '#22c55e',
            border: '2px solid #fff',
            boxShadow: '0 0 6px #22c55e88',
            animation: 'pulse-dot 2s infinite',
            display: 'inline-block',
          }} />
        )}
      </div>

      {/* Label */}
      <span style={{
        fontFamily: 'var(--font-ui)',
        fontSize: '0.7rem',
        fontWeight: 600,
        color: hovered ? accent : 'var(--color-text)',
        textAlign: 'center',
        lineHeight: 1.2,
        maxWidth: '80px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        transition: 'color 180ms',
      }}>
        {project.title}
      </span>
    </button>
  )
}

// ── Detail drawer ─────────────────────────────────────────────────────────────

function ProjectDetail({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const [imgError, setImgError] = useState(false)
  const [visible, setVisible] = useState(false)
  const cover = coverImages[project.id]
  const accentMatch = project.gradient.match(/#[0-9a-fA-F]{6}/)
  const accent = accentMatch ? accentMatch[0] : '#e8532a'
  const drawerRef = useRef<HTMLDivElement>(null)

  // Animate in
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(id)
  }, [])

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  function handleClose() {
    setVisible(false)
    setTimeout(onClose, 320)
  }

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(4px)',
          zIndex: 200,
          opacity: visible ? 1 : 0,
          transition: 'opacity 300ms ease',
        }}
        aria-hidden="true"
      />

      {/* Drawer panel — slides up from bottom */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        style={{
          position: 'fixed',
          bottom: 0, left: '50%',
          transform: visible ? 'translate(-50%, 0)' : 'translate(-50%, 100%)',
          transition: 'transform 340ms cubic-bezier(0.16,1,0.3,1)',
          width: 'min(780px, 100vw)',
          height: '92vh',
          maxHeight: '92vh',
          background: 'var(--color-bg-alt)',
          borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
          border: '1px solid var(--color-border)',
          borderBottom: 'none',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.18)',
          zIndex: 201,
          overflowY: 'auto',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0.75rem 0 0' }}>
          <div style={{ width: 40, height: 4, borderRadius: 999, background: 'var(--color-border)' }} />
        </div>

        {/* Cover image */}
        <div style={{
          position: 'relative', height: '220px', flexShrink: 0,
          background: project.gradient, overflow: 'hidden',
          margin: '0.75rem 1.25rem 0',
          borderRadius: 'var(--radius-md)',
        }}>
          {cover && !imgError && (
            <img
              src={cover}
              alt={project.title}
              onError={() => setImgError(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', pointerEvents: 'none' }} />
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: '0.75rem', right: '0.75rem',
              width: '2rem', height: '2rem',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 150ms',
              zIndex: 1,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
          >
            <CloseIcon />
          </button>
          {/* Title overlay */}
          <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
              {project.featured && (
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: accent, borderRadius: '3px', padding: '0.1rem 0.4rem' }}>
                  Featured
                </span>
              )}
              {project.live && (
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: '#fff', background: 'rgba(22,163,74,0.85)', borderRadius: '3px', padding: '0.1rem 0.4rem' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
                  Live
                </span>
              )}
              {project.fromScratch && (
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: '3px', padding: '0.1rem 0.4rem' }}>
                  From scratch
                </span>
              )}
            </div>
            <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
              {project.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', margin: '0.2rem 0 0', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem 1.5rem 3.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '0.65rem' }}>
            {project.live && (
              <a href={project.href} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 700, color: '#fff', background: accent, borderRadius: 'var(--radius-pill)', padding: '0.65rem 1.4rem', textDecoration: 'none', boxShadow: `0 2px 16px ${accent}55`, transition: 'opacity 140ms, transform 120ms', flex: 1, justifyContent: 'center' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <ExternalIcon /> View Live
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-pill)', padding: '0.65rem 1.4rem', textDecoration: 'none', transition: 'border-color 140ms, color 140ms', flex: project.live ? 'none' : 1, justifyContent: 'center' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text)' }}
              >
                <GitHubIcon /> Source Code
              </a>
            )}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'var(--color-border)' }} />

          {/* Why I built this */}
          {project.whyBuilt && (
            <div>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: accent, marginBottom: '0.5rem' }}>
                Why I built this
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.925rem', lineHeight: 1.75, color: 'var(--color-text)', margin: 0 }}>
                {project.whyBuilt}
              </p>
            </div>
          )}

          {/* Summary */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.78, color: 'var(--color-muted)', margin: 0 }}>
            {project.summary}
          </p>

          {/* What I shipped */}
          <div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: accent, marginBottom: '0.6rem' }}>
              What I shipped
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {project.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.65rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.55 }}>
                  <span style={{ color: accent, fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>—</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-subtle)', marginBottom: '0.55rem' }}>
              Tech stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {project.tech.map(t => (
                <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500, color: 'var(--color-chip-text)', background: 'var(--color-chip-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-pill)', padding: '0.2rem 0.75rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Meta row */}
          <div style={{ display: 'flex', gap: '1.5rem', padding: '0.9rem 1.1rem', background: `${accent}09`, border: `1px solid ${accent}22`, borderRadius: 'var(--radius-md)', flexWrap: 'wrap' }}>
            {[
              { label: 'Year', val: String(project.year) },
              { label: 'Status', val: project.live ? 'Deployed' : 'GitHub' },
              { label: 'License', val: project.repo ? 'Open source' : 'Private' },
            ].map(({ label, val }) => (
              <div key={label}>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-subtle)', margin: '0 0 0.15rem' }}>{label}</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700, color: accent, margin: 0 }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export function Projects() {
  const ref = useScrollReveal<HTMLElement>()
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeProject = projects.find(p => p.id === activeId) ?? null

  return (
    <section id="projects" ref={ref} className="section reveal-section">

      <div style={{ marginBottom: '2rem' }}>
        <p className="section-label">Portfolio</p>
        <h2 className="heading-lg">Featured <em>Projects</em></h2>
        <p style={{ fontFamily: 'var(--font-body)', marginTop: '0.6rem', fontSize: '0.925rem', color: 'var(--color-muted)' }}>
          These are systems I designed, built, and shipped myself.
          Each one started as a real problem worth solving.
        </p>
      </div>

      {/* App icon grid */}
      <div className="proj-icon-grid">
        {projects.map(project => (
          <AppIcon
            key={project.id}
            project={project}
            onClick={() => setActiveId(project.id)}
          />
        ))}
      </div>

      {/* Detail drawer */}
      {activeProject && (
        <ProjectDetail
          project={activeProject}
          onClose={() => setActiveId(null)}
        />
      )}

      <style>{`
        .proj-icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 0.5rem;
        }
        @media (max-width: 480px) {
          .proj-icon-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
