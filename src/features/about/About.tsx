import { about } from '../../data/about'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { philosophyIconMap } from '../../components/icons/Icons'

export function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="section reveal-section">
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>Who am I</p>
        <h2 className="heading-lg">
          Turning{' '}
          <em style={{ color: 'var(--color-neon)', fontStyle: 'italic' }}>complexity</em>
          {' '}into clarity
        </h2>
      </div>

      <div className="about-grid" style={{ marginTop: '3rem' }}>
        {/* Left: photo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>

            {/* Outer glow ring — graduation gold/coral gradient */}
            <div style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '22px',
              background: 'linear-gradient(135deg, var(--color-neon) 0%, #f59e0b 50%, var(--color-neon) 100%)',
              opacity: 0.55,
              zIndex: 0,
            }} />

            {/* Photo card */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-bg-alt)',
                border: '3px solid transparent',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                boxShadow: '0 8px 32px rgba(232,83,42,0.18), 0 2px 8px rgba(0,0,0,0.12)',
              }}
            >
              <img
                src="/pic/me.webp"
                alt="Sagar Roka Chhetri — Graduation"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const t = e.currentTarget
                  t.style.display = 'none'
                  const p = t.parentElement
                  if (p && !p.querySelector('.initials-fallback')) {
                    const d = document.createElement('div')
                    d.className = 'initials-fallback'
                    d.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:4rem;font-weight:700;color:var(--color-neon);'
                    d.textContent = 'SR'
                    p.appendChild(d)
                  }
                }}
              />

              {/* Bottom scrim for badge readability */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '35%',
                background: 'linear-gradient(to top, rgba(14,26,48,0.72) 0%, transparent 100%)',
                pointerEvents: 'none',
              }} />

              {/* Graduation cap — top right corner */}
              <span style={{
                position: 'absolute', top: '0.65rem', right: '0.65rem',
                fontSize: '1.4rem',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
                lineHeight: 1,
              }} aria-hidden="true">🎓</span>

              {/* Class of badge — bottom left */}
              <div style={{
                position: 'absolute', bottom: '0.75rem', left: '0.75rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#f59e0b',
                  margin: 0,
                  lineHeight: 1,
                  marginBottom: '0.2rem',
                }}>
                  Class of
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#fff',
                  margin: 0,
                  lineHeight: 1,
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                }}>
                  2026
                </p>
              </div>

              {/* Top-left corner accent lines */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '28px', height: '28px', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '8px', left: 0, width: '18px', height: '2px', background: '#f59e0b', borderRadius: 1 }} />
                <div style={{ position: 'absolute', top: 0, left: '8px', width: '2px', height: '18px', background: '#f59e0b', borderRadius: 1 }} />
              </div>
              {/* Bottom-right corner accent lines */}
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '28px', height: '28px', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', bottom: '8px', right: 0, width: '18px', height: '2px', background: 'var(--color-neon)', borderRadius: 1 }} />
                <div style={{ position: 'absolute', bottom: 0, right: '8px', width: '2px', height: '18px', background: 'var(--color-neon)', borderRadius: 1 }} />
              </div>
            </div>

            {/* Years building badge */}
            <div
              style={{
                position: 'absolute', bottom: '-1rem', right: '-1rem',
                background: 'var(--color-surface)',
                border: '2px solid var(--color-neon-border)',
                borderRadius: 'var(--radius-md)',
                padding: '0.6rem 1rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-card), 0 0 12px rgba(232,83,42,0.15)',
                zIndex: 2,
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-neon)', lineHeight: 1 }}>
                {about.yearsBuilding} Years
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-muted)', marginTop: '0.2rem' }}>Building</div>
            </div>
          </div>
        </div>

        {/* Right: bio + stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {about.bio.map((para, i) => (
              <p key={i} style={{ fontSize: '0.975rem', lineHeight: 1.8, color: 'var(--color-muted)' }}>{para}</p>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '0.5rem' }}>
            {about.stats.map((stat) => (
              <div key={stat.label} className="stat-card" style={{ textAlign: 'center' }}>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '3rem' }}>
        {about.philosophyCards.map((card) => (
          <div
            key={card.title}
            style={{
              background: 'var(--color-bg-alt)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.4rem',
              transition: 'border-color 200ms, transform 200ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-neon-border)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-sm)', background: 'var(--color-neon-dim)', border: '1px solid var(--color-neon-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.9rem', flexShrink: 0 }}>
              {philosophyIconMap[card.title] ?? card.icon}
            </div>
            <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.4rem' }}>{card.title}</p>
            <p style={{ fontSize: '0.825rem', lineHeight: 1.6, color: 'var(--color-muted)' }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
