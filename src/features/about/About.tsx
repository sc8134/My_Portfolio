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

            {/* Outer ambient glow — diffuse, royal depth */}
            <div style={{
              position: 'absolute',
              inset: '-18px',
              borderRadius: '36px',
              background: 'radial-gradient(ellipse at 40% 30%, rgba(232,83,42,0.18) 0%, rgba(30,45,77,0.22) 55%, transparent 80%)',
              zIndex: 0,
              filter: 'blur(14px)',
              pointerEvents: 'none',
            }} />

            {/* Outer frame ring — rich gold gradient */}
            <div style={{
              position: 'absolute',
              inset: '-5px',
              borderRadius: '26px',
              background: 'linear-gradient(135deg, #c9a84c 0%, #f0d080 28%, #a0722a 52%, #f0d080 74%, #c9a84c 100%)',
              zIndex: 1,
            }} />

            {/* Inner matte inset — creates double-border depth */}
            <div style={{
              position: 'absolute',
              inset: '-1px',
              borderRadius: '22px',
              background: 'var(--color-bg)',
              zIndex: 2,
            }} />

            {/* Thin gold inner line */}
            <div style={{
              position: 'absolute',
              inset: '3px',
              borderRadius: '19px',
              border: '1px solid rgba(201,168,76,0.35)',
              zIndex: 3,
              pointerEvents: 'none',
            }} />

            {/* Photo card */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '18px',
              overflow: 'hidden',
              zIndex: 4,
              boxShadow: '0 24px 64px rgba(30,45,77,0.28), 0 6px 20px rgba(201,168,76,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
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

              {/* Top gold shimmer line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(240,208,128,0.9) 30%, rgba(240,208,128,0.9) 70%, transparent)',
              }} />

              {/* Logo — top left */}
              <div style={{ position: 'absolute', top: '0.8rem', left: '0.8rem' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '7px', overflow: 'hidden',
                  border: '1.5px solid rgba(240,208,128,0.6)',
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
                <div style={{ width: '28px', height: '2px', background: 'linear-gradient(90deg, #f0d080, var(--color-neon))', borderRadius: 1, marginBottom: '0.4rem' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2, textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
                  Sagar Roka Chhetri
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.28rem' }}>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,208,128,0.9)' }}>
                    2022 – 2026
                  </span>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.35)', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.58rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                    BCE · CS
                  </span>
                </div>
              </div>
            </div>

            {/* Royal corner ornaments — gold, all four corners */}
            {/* Top-left */}
            <div style={{ position: 'absolute', top: '-2px', left: '-2px', zIndex: 5, pointerEvents: 'none' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M2 20 L2 4 Q2 2 4 2 L20 2" stroke="#f0d080" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <circle cx="2" cy="2" r="2" fill="#c9a84c"/>
              </svg>
            </div>
            {/* Top-right */}
            <div style={{ position: 'absolute', top: '-2px', right: '-2px', zIndex: 5, pointerEvents: 'none' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M20 20 L20 4 Q20 2 18 2 L2 2" stroke="#f0d080" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <circle cx="20" cy="2" r="2" fill="#c9a84c"/>
              </svg>
            </div>
            {/* Bottom-left */}
            <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', zIndex: 5, pointerEvents: 'none' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M2 2 L2 18 Q2 20 4 20 L20 20" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <circle cx="2" cy="20" r="2" fill="#a0722a"/>
              </svg>
            </div>
            {/* Bottom-right */}
            <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', zIndex: 5, pointerEvents: 'none' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M20 2 L20 18 Q20 20 18 20 L2 20" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <circle cx="20" cy="20" r="2" fill="#a0722a"/>
              </svg>
            </div>

            {/* Years badge */}
            <div style={{
              position: 'absolute', bottom: '-1.1rem', right: '-1.1rem',
              background: 'var(--color-bg-alt)',
              border: '1.5px solid #c9a84c',
              borderRadius: 'var(--radius-md)',
              padding: '0.55rem 0.9rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(201,168,76,0.22), 0 2px 8px rgba(30,45,77,0.18)',
              zIndex: 6,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#c9a84c', lineHeight: 1 }}>
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
