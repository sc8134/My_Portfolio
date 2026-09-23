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
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px', marginTop: '0.5rem' }}>

            {/* Decorative background card — offset shadow effect */}
            <div style={{
              position: 'absolute',
              top: '12px', left: '12px',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, var(--color-neon) 0%, #f59e0b 100%)',
              opacity: 0.25,
              zIndex: 0,
            }} />

            {/* Second decorative card */}
            <div style={{
              position: 'absolute',
              top: '6px', left: '6px',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '18px',
              border: '1px solid var(--color-neon-border)',
              zIndex: 0,
            }} />

            {/* Main photo card */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '18px',
              overflow: 'hidden',
              zIndex: 1,
              boxShadow: '0 20px 60px rgba(232,83,42,0.22), 0 8px 24px rgba(0,0,0,0.18)',
            }}>
              <img
                src="/pic/me.webp"
                alt="Sagar Roka Chhetri — Graduation 2022"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  const t = e.currentTarget
                  t.style.display = 'none'
                  const p = t.parentElement
                  if (p && !p.querySelector('.initials-fallback')) {
                    const d = document.createElement('div')
                    d.className = 'initials-fallback'
                    d.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:4rem;font-weight:700;color:var(--color-neon);background:var(--color-bg-alt);'
                    d.textContent = 'SR'
                    p.appendChild(d)
                  }
                }}
              />

              {/* Full scrim — dark gradient bottom 45% */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.35) 35%, transparent 65%)',
                pointerEvents: 'none',
              }} />

              {/* Top bar — thin gold line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent 0%, #f59e0b 30%, var(--color-neon) 70%, transparent 100%)',
              }} />

              {/* Top-left monogram badge */}
              <div style={{
                position: 'absolute', top: '0.85rem', left: '0.85rem',
                display: 'flex', alignItems: 'center', gap: '0.3rem',
              }}>
                <div style={{
                  width: '28px', height: '28px',
                  borderRadius: '6px',
                  background: 'rgba(232,83,42,0.85)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(232,83,42,0.45)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1,
                  }}>SR</span>
                </div>
              </div>

              {/* Graduation cap — top right */}
              <div style={{
                position: 'absolute', top: '0.75rem', right: '0.85rem',
                background: 'rgba(245,158,11,0.85)',
                backdropFilter: 'blur(8px)',
                borderRadius: '6px',
                padding: '0.2rem 0.45rem',
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                boxShadow: '0 2px 8px rgba(245,158,11,0.4)',
              }}>
                <span style={{ fontSize: '0.75rem', lineHeight: 1 }} aria-hidden="true">🎓</span>
                <span style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}>Grad</span>
              </div>

              {/* Bottom content */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1rem 1rem 0.9rem',
              }}>
                {/* Thin gold rule */}
                <div style={{
                  width: '32px', height: '2px',
                  background: 'linear-gradient(90deg, #f59e0b, var(--color-neon))',
                  borderRadius: 1,
                  marginBottom: '0.45rem',
                }} />

                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#fff',
                  margin: 0,
                  lineHeight: 1.2,
                  letterSpacing: '0.01em',
                  textShadow: '0 1px 6px rgba(0,0,0,0.6)',
                }}>
                  Sagar Roka Chhetri
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.3rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#f59e0b',
                  }}>
                    Class of 2022
                  </span>
                  <span style={{
                    width: 3, height: 3, borderRadius: '50%',
                    background: 'var(--color-neon)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.55)',
                  }}>
                    BCE · CS
                  </span>
                </div>
              </div>
            </div>

            {/* Years building badge — floating bottom-right */}
            <div style={{
              position: 'absolute', bottom: '-1.1rem', right: '-1.1rem',
              background: 'var(--color-surface)',
              border: '2px solid var(--color-neon)',
              borderRadius: 'var(--radius-md)',
              padding: '0.55rem 0.9rem',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(232,83,42,0.25), var(--shadow-card)',
              zIndex: 2,
              backdropFilter: 'blur(8px)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem', fontWeight: 700,
                color: 'var(--color-neon)', lineHeight: 1,
              }}>
                {about.yearsBuilding}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-muted)', marginTop: '0.2rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                Years
              </div>
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
