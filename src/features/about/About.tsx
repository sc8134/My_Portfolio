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
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px', marginTop: '1rem' }}>

            {/* ── Royal frame layer 1 — outermost amber glow ── */}
            <div style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #e8532a 35%, #f59e0b 65%, #b45309 100%)',
              opacity: 0.9,
              zIndex: 0,
            }} />

            {/* ── Royal frame layer 2 — dark inset ring ── */}
            <div style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: '21px',
              background: 'linear-gradient(135deg, #1a1206 0%, #2d1f08 50%, #1a1206 100%)',
              zIndex: 1,
            }} />

            {/* ── Royal frame layer 3 — inner gold filigree ring ── */}
            <div style={{
              position: 'absolute',
              inset: '3px',
              borderRadius: '17px',
              border: '1px solid rgba(245,158,11,0.6)',
              zIndex: 2,
              pointerEvents: 'none',
            }} />

            {/* ── Corner jewels ── */}
            {[
              { top: '-2px', left: '-2px' },
              { top: '-2px', right: '-2px' },
              { bottom: '-2px', left: '-2px' },
              { bottom: '-2px', right: '-2px' },
            ].map((pos, i) => (
              <div key={i} style={{
                position: 'absolute',
                ...pos,
                width: '12px', height: '12px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #fff5c0, #f59e0b 50%, #b45309 100%)',
                border: '1px solid #b45309',
                boxShadow: '0 0 8px rgba(245,158,11,0.8), 0 0 2px rgba(255,255,255,0.4)',
                zIndex: 4,
              }} />
            ))}

            {/* ── Main photo card ── */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '18px',
              overflow: 'hidden',
              zIndex: 3,
              boxShadow: '0 24px 64px rgba(180,83,9,0.3), 0 8px 24px rgba(0,0,0,0.25)',
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

              {/* Bottom scrim */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,8,4,0.88) 0%, rgba(10,8,4,0.4) 38%, transparent 65%)',
                pointerEvents: 'none',
              }} />

              {/* Top gold bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent 0%, #f59e0b 20%, #fff5c0 50%, #f59e0b 80%, transparent 100%)',
              }} />

              {/* Top-left logo */}
              <div style={{
                position: 'absolute', top: '0.85rem', left: '0.85rem',
              }}>
                <div style={{
                  width: '30px', height: '30px',
                  borderRadius: '7px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(245,158,11,0.7)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}>
                  <img src="/logo/logo.webp" alt="SR Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Top-right grad badge */}
              <div style={{
                position: 'absolute', top: '0.75rem', right: '0.85rem',
                background: 'rgba(180,83,9,0.88)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(245,158,11,0.6)',
                borderRadius: '6px',
                padding: '0.22rem 0.5rem',
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                boxShadow: '0 2px 10px rgba(180,83,9,0.5)',
              }}>
                <span style={{ fontSize: '0.72rem', lineHeight: 1 }} aria-hidden="true">🎓</span>
                <span style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.55rem',
                  fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: '#fff5c0',
                }}>Grad</span>
              </div>

              {/* Bottom caption */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 1rem 0.9rem' }}>
                <div style={{
                  width: '36px', height: '2px',
                  background: 'linear-gradient(90deg, #f59e0b, #fff5c0, #f59e0b)',
                  borderRadius: 1, marginBottom: '0.45rem',
                }} />
                <p style={{
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  fontSize: '1.05rem', fontWeight: 700,
                  color: '#fff', margin: 0, lineHeight: 1.2,
                  textShadow: '0 1px 8px rgba(0,0,0,0.7)',
                  letterSpacing: '0.01em',
                }}>
                  Sagar Roka Chhetri
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.3rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-ui)', fontSize: '0.6rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f59e0b',
                  }}>
                    2022 – 2026
                  </span>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'var(--font-ui)', fontSize: '0.6rem', fontWeight: 600,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'rgba(255,245,192,0.6)',
                  }}>
                    BCE · CS
                  </span>
                </div>
              </div>
            </div>

            {/* Years badge */}
            <div style={{
              position: 'absolute', bottom: '-1.1rem', right: '-1.1rem',
              background: 'var(--color-bg-alt)',
              border: '2px solid #f59e0b',
              borderRadius: 'var(--radius-md)',
              padding: '0.55rem 0.9rem',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(245,158,11,0.3), var(--shadow-card)',
              zIndex: 5,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700,
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
