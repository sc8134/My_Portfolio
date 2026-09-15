import { useState } from 'react'
import { projects } from '../../data/projects'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { Project } from '../../types/project'

// ── Icons ─────────────────────────────────────────────────────────────────────

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="13" height="13"
      viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 300ms ease',
        flexShrink: 0,
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

// ── Row ───────────────────────────────────────────────────────────────────────

interface RowProps {
  project: Project
  index: number
  isOpen: boolean
  onToggle: () => void
}

function ProjectRow({ project, index, isOpen, onToggle }: RowProps) {
  const accentMatch = project.gradient.match(/#[0-9a-fA-F]{6}/)
  const accent = accentMatch ? accentMatch[0] : '#e8532a'

  // hex accent at low opacity for the active-row tint
  const accentBg = `${accent}08`
  const accentBorder = `${accent}55`

  return (
    <article
      style={{
        borderBottom: '1px solid var(--color-border)',
        borderLeft: isOpen ? `3px solid ${accent}` : '3px solid transparent',
        background: isOpen ? accentBg : 'transparent',
        transition: 'background 250ms, border-left-color 250ms',
        paddingLeft: isOpen ? '0.75rem' : '0',
      }}
    >
      {/* ── Collapsed trigger ─────────────────────────────── */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '2rem 1fr auto',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Index */}
        <span
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: isOpen ? accent : 'var(--color-subtle)',
            letterSpacing: '0.1em',
            transition: 'color 200ms',
            userSelect: 'none',
            flexShrink: 0,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title block */}
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.975rem',
                fontWeight: 700,
                color: 'var(--color-text)',
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </span>

            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                color: 'var(--color-subtle)',
                whiteSpace: 'nowrap',
              }}
            >
              {project.year}
            </span>

            {project.fromScratch && (
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: accent, border: `1px solid ${accentBorder}`,
                borderRadius: 'var(--radius-pill)', padding: '0.1rem 0.45rem',
                whiteSpace: 'nowrap',
              }}>
                from scratch
              </span>
            )}
            {project.featured && (
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--color-neon)', border: '1px solid var(--color-neon-border)',
                borderRadius: 'var(--radius-pill)', padding: '0.1rem 0.45rem',
                whiteSpace: 'nowrap',
              }}>
                featured
              </span>
            )}
          </div>

          {!isOpen && (
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.815rem',
              color: 'var(--color-muted)', marginTop: '0.2rem',
              whiteSpace: 'nowrap', overflow: 'hidden',
              textOverflow: 'ellipsis', maxWidth: '54ch',
            }}>
              {project.tagline}
            </p>
          )}

          {!isOpen && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.28rem', marginTop: '0.4rem' }}>
              {project.tech.map((t) => (
                <span key={t} style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.67rem', fontWeight: 500,
                  color: 'var(--color-chip-text)', background: 'var(--color-chip-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-pill)', padding: '0.1rem 0.5rem',
                }}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Chevron */}
        <span style={{ color: isOpen ? accent : 'var(--color-subtle)', transition: 'color 200ms' }}>
          <ChevronIcon open={isOpen} />
        </span>
      </button>

      {/* ── Expanded panel ─────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows 340ms ease',
        overflow: 'hidden',
      }}>
        <div style={{ overflow: 'hidden' }}>

          {/* ── Two-column layout ─────────────────────────── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '0 2rem',
            paddingBottom: '1.75rem',
            alignItems: 'start',
          }}>

            {/* LEFT COLUMN — identity + CTAs */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingTop: '0.25rem',
            }}>
              {/* Project icon — larger, full-width banner */}
              <div style={{
                width: '100%',
                height: '120px',
                borderRadius: 'var(--radius-md)',
                background: project.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.88)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Subtle radial glow behind icon */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 60%, ${accent}33 0%, transparent 70%)`,
                }} />
                <div style={{ transform: 'scale(1.1)', position: 'relative', zIndex: 1 }}>
                  {project.icon}
                </div>
              </div>

              {/* Title + tagline in left col */}
              <div>
                <p style={{
                  fontFamily: 'var(--font-ui)', fontSize: '1rem', fontWeight: 700,
                  color: 'var(--color-text)', lineHeight: 1.25,
                }}>
                  {project.title}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                  color: 'var(--color-muted)', marginTop: '0.25rem', lineHeight: 1.5,
                }}>
                  {project.tagline}
                </p>
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.live && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      justifyContent: 'center', gap: '0.4rem',
                      fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 700,
                      color: '#fff', background: accent,
                      borderRadius: 'var(--radius-pill)', padding: '0.55rem 1rem',
                      textDecoration: 'none',
                      boxShadow: `0 2px 14px ${accent}44`,
                      transition: 'opacity 150ms, transform 120ms',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.85'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <ExternalIcon /> View Live
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      justifyContent: 'center', gap: '0.4rem',
                      fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 600,
                      color: 'var(--color-text)', background: 'transparent',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-pill)', padding: '0.55rem 1rem',
                      textDecoration: 'none',
                      transition: 'border-color 150ms, color 150ms',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = accent
                      e.currentTarget.style.color = accent
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                      e.currentTarget.style.color = 'var(--color-text)'
                    }}
                  >
                    <GitHubIcon /> Source
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN — narrative + metadata bar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', paddingTop: '0.25rem' }}>

              {/* Why I built this */}
              {project.whyBuilt && (
                <div>
                  <p style={{
                    fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: accent, marginBottom: '0.35rem',
                  }}>
                    Why I built this
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                    lineHeight: 1.72, color: 'var(--color-text)',
                  }}>
                    {project.whyBuilt}
                  </p>
                </div>
              )}

              {/* Summary */}
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                lineHeight: 1.72, color: 'var(--color-muted)',
              }}>
                {project.summary}
              </p>

              {/* What I built — bullets */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {project.bullets.map((bullet, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '0.6rem',
                    fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                    color: 'var(--color-muted)', lineHeight: 1.5,
                  }}>
                    <span style={{
                      color: accent, flexShrink: 0,
                      fontWeight: 700, fontSize: '0.8rem', marginTop: '0.15rem',
                    }}>
                      /
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Terminal metadata bar */}
              <div style={{
                marginTop: '0.25rem',
                padding: '0.6rem 0.9rem',
                background: 'var(--color-surface-alt)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0 0',
                fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
                fontSize: '0.72rem',
                color: 'var(--color-subtle)',
                lineHeight: 1.4,
              }}>
                {/* Year */}
                <span style={{ color: accent, fontWeight: 600 }}>{project.year}</span>
                <span style={{ margin: '0 0.55rem', opacity: 0.35 }}>|</span>

                {/* Stack */}
                {project.tech.map((t, i) => (
                  <span key={t}>
                    <span style={{ color: 'var(--color-text)', opacity: 0.75 }}>{t}</span>
                    {i < project.tech.length - 1 && (
                      <span style={{ margin: '0 0.3rem', opacity: 0.3 }}>,</span>
                    )}
                  </span>
                ))}

                <span style={{ margin: '0 0.55rem', opacity: 0.35 }}>|</span>

                {/* Status dot */}
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: '50%',
                    background: project.live ? '#22c55e' : 'var(--color-subtle)',
                    display: 'inline-block',
                    boxShadow: project.live ? '0 0 5px #22c55e88' : 'none',
                  }} />
                  <span style={{ color: project.live ? '#22c55e' : 'var(--color-subtle)', fontWeight: 600 }}>
                    {project.live ? 'live' : 'github'}
                  </span>
                </span>

                {project.repo && (
                  <>
                    <span style={{ margin: '0 0.55rem', opacity: 0.35 }}>|</span>
                    <span style={{ color: 'var(--color-subtle)' }}>open-source</span>
                  </>
                )}

                {project.fromScratch && (
                  <>
                    <span style={{ margin: '0 0.55rem', opacity: 0.35 }}>|</span>
                    <span style={{ color: accent, fontWeight: 600 }}>from-scratch</span>
                  </>
                )}
              </div>

            </div>
          </div>

          {/* Mobile: stack columns on narrow screens */}
          <style>{`
            @media (max-width: 640px) {
              .project-two-col {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>

        </div>
      </div>
    </article>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export function Projects() {
  const ref = useScrollReveal<HTMLElement>()
  const [openId, setOpenId] = useState<string>(projects[0].id)

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? '' : id))
  }

  return (
    <section id="projects" ref={ref} className="section reveal-section">

      <div style={{ marginBottom: '2rem' }}>
        <p className="section-label">Portfolio</p>
        <h2 className="heading-lg">Featured <em>Projects</em></h2>
        <p style={{
          fontFamily: 'var(--font-body)', marginTop: '0.6rem',
          fontSize: '0.925rem', color: 'var(--color-muted)',
        }}>
          Things I built because a problem was annoying enough to do something about.
          Every line of code is mine.
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--color-border)' }}>
        {projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
            isOpen={openId === project.id}
            onToggle={() => toggle(project.id)}
          />
        ))}
      </div>

    </section>
  )
}
