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

        {/* ── Left: photo ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px', marginTop: '1rem' }}>

            {/* Gradient border ring — coral top-left, navy bottom-right */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '22px',
              background: 'linear-gradient(145deg, var(--color-neon) 0%, var(--color-navy) 55%, var(--color-neon) 100%)',
              zIndex: 0,
            }} />

            {/* White/cream inset so the gradient ring is visible */}
            <div style={{
              position: 'absolute',
              inset: '1px',
              borderRadius: '20px',
              background: 'var(--color-bg)',
              zIndex: 0,
            }} />

            {/* Photo card */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '20px',
              overflow: 'hidden',
              zIndex: 1,
              boxShadow: '0 20px 56px rgba(232,83,42,0.2), 0 6px 20px rgba(30,45,77,0.14)',
            }}>
              <img
                src="/pic/me.webp"
                alt="Sagar Roka Chhetri — Graduation 2022"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', transform: 'scale(1.35)', transformOrigin: 'center 25%' }}
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

              {/* Scrim */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(8,10,20,0.88) 0%, rgba(8,10,20,0.28) 38%, transparent 62%)',
                pointerEvents: 'none',
              }} />

              {/* Top coral line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, transparent, var(--color-neon) 30%, var(--color-neon) 70%, transparent)',
              }} />

              {/* Logo — top left */}
              <div style={{ position: 'absolute', top: '0.8rem', left: '0.8rem' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '7px', overflow: 'hidden',
                  border: '1.5px solid rgba(232,83,42,0.7)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}>
                  <img src="/logo/logo.webp" alt="SR" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Grad badge — top right */}
              <div style={{
                position: 'absolute', top: '0.75rem', right: '0.8rem',
                background: 'rgba(232,83,42,0.92)', backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px',
                padding: '0.2rem 0.5rem',
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                boxShadow: '0 2px 8px rgba(232,83,42,0.45)',
              }}>
                <span style={{ fontSize: '0.7rem', lineHeight: 1 }} aria-hidden="true">🎓</span>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>Grad</span>
              </div>

              {/* Bottom caption */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 0.9rem 0.85rem' }}>
                <div style={{ width: '28px', height: '2px', background: 'var(--color-neon)', borderRadius: 1, marginBottom: '0.4rem' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2, textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
                  Sagar Roka Chhetri
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.28rem' }}>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-neon)' }}>
                    2022 – 2026
                  </span>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.35)', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                    BCE · CS
                  </span>
                </div>
              </div>
            </div>

            {/* Corner accents — coral top, navy bottom */}
            <div style={{ position: 'absolute', top: '2px', left: '2px', zIndex: 2, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', top: '8px', left: 0, width: '18px', height: '2px', background: 'var(--color-neon)', borderRadius: 1 }} />
              <div style={{ position: 'absolute', top: 0, left: '8px', width: '2px', height: '18px', background: 'var(--color-neon)', borderRadius: 1 }} />
            </div>
            <div style={{ position: 'absolute', top: '2px', right: '2px', zIndex: 2, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', top: '8px', right: 0, width: '18px', height: '2px', background: 'var(--color-neon)', borderRadius: 1 }} />
              <div style={{ position: 'absolute', top: 0, right: '8px', width: '2px', height: '18px', background: 'var(--color-neon)', borderRadius: 1 }} />
            </div>
            <div style={{ position: 'absolute', bottom: '2px', left: '2px', zIndex: 2, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', bottom: '8px', left: 0, width: '18px', height: '2px', background: 'var(--color-navy)', borderRadius: 1 }} />
              <div style={{ position: 'absolute', bottom: 0, left: '8px', width: '2px', height: '18px', background: 'var(--color-navy)', borderRadius: 1 }} />
            </div>
            <div style={{ position: 'absolute', bottom: '2px', right: '2px', zIndex: 2, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', bottom: '8px', right: 0, width: '18px', height: '2px', background: 'var(--color-navy)', borderRadius: 1 }} />
              <div style={{ position: 'absolute', bottom: 0, right: '8px', width: '2px', height: '18px', background: 'var(--color-navy)', borderRadius: 1 }} />
            </div>

            {/* Years badge */}
            <div style={{
              position: 'absolute', bottom: '-1.1rem', right: '-1.1rem',
              background: 'var(--color-bg-alt)',
              border: '2px solid var(--color-neon)',
              borderRadius: 'var(--radius-md)',
              padding: '0.55rem 0.9rem',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(232,83,42,0.18), var(--shadow-card)',
              zIndex: 3,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-neon)', lineHeight: 1 }}>
                {about.yearsBuilding}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-muted)', marginTop: '0.2rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                Years
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: bio + stats ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {about.bio.map((para, i) => (
              <p key={i} style={{ fontSize: '0.975rem', lineHeight: 1.8, color: 'var(--color-muted)' }}>{para}</p>
            ))}
          </div>

          {/* Currently exploring */}
          {about.currently && (
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.65rem',
              padding: '0.85rem 1rem',
              background: 'var(--color-neon-dim)',
              border: '1px solid var(--color-neon-border)',
              borderLeft: '3px solid var(--color-neon)',
              borderRadius: 'var(--radius-md)',
            }}>
              <span style={{ fontSize: '0.9rem', flexShrink: 0, marginTop: '0.05rem' }}>🔭</span>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-text)' }}>
                <strong style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-neon)', display: 'block', marginBottom: '0.2rem' }}>Currently exploring</strong>
                {about.currently}
              </p>
            </div>
          )}
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
