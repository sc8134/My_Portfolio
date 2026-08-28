import { projects } from '../../data/projects'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function ChromeDots() {
  return (
    <div style={{ display: 'flex', gap: '5px', padding: '10px 14px' }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'block' }} />
    </div>
  )
}

function MockupLines({ count = 3 }: { count?: number }) {
  return (
    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 8,
            borderRadius: 4,
            background: 'rgba(255,255,255,0.15)',
            width: i === 0 ? '70%' : i === count - 1 ? '50%' : '90%',
          }}
        />
      ))}
    </div>
  )
}

export function Projects() {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section id="projects" ref={ref} className="section reveal-section">

      {/* Centered heading */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>Portfolio</p>
        <h2 className="heading-lg">Featured <em>Projects</em></h2>
        {/* Inter subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            marginTop: '0.75rem',
            fontSize: '0.975rem',
            color: 'var(--color-muted)',
            maxWidth: '58ch',
            margin: '0.75rem auto 0',
          }}
        >
          A selection of things I&apos;ve built - real products with real users, each solving a
          specific problem at scale.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {projects.map((project, index) => (
          <article
            key={project.id}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 200ms, box-shadow 200ms, border-color 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
              e.currentTarget.style.borderColor = 'var(--color-neon-border)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = 'var(--color-border)'
            }}
          >
            {/* Gradient mockup header */}
            <div style={{ background: project.gradient, minHeight: '110px', position: 'relative' }}>
              <ChromeDots />
              <MockupLines count={3} />
              {/* Card number — Poppins mono-style */}
              <div
                style={{
                  position: 'absolute',
                  top: '0.6rem',
                  right: '0.75rem',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.1em',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>

              {/* Title + Featured badge */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                {/* Poppins bold for card title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                {project.featured && (
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--color-neon)',
                      background: 'var(--color-neon-dim)',
                      border: '1px solid var(--color-neon-border)',
                      borderRadius: 'var(--radius-pill)',
                      padding: '0.15rem 0.55rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Summary — Inter */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  color: 'var(--color-muted)',
                }}
              >
                {project.summary}
              </p>

              {/* Tech chips — Inter */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--color-chip-text)',
                      background: 'var(--color-chip-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-pill)',
                      padding: '0.15rem 0.6rem',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullet highlights — Inter */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1 }}>
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.825rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: 'var(--color-neon)', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* CTA buttons — Poppins (via .btn class, but also inline for the inline-styled ones) */}
              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.5rem' }}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    color: '#ffffff',
                    background: 'var(--color-neon)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.5rem 0.75rem',
                    textDecoration: 'none',
                    boxShadow: 'var(--shadow-neon)',
                    transition: 'opacity 150ms, transform 140ms',
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
                  Live Demo
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      letterSpacing: '0.01em',
                      color: 'var(--color-text)',
                      background: 'transparent',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-pill)',
                      padding: '0.5rem 0.75rem',
                      textDecoration: 'none',
                      transition: 'border-color 150ms, color 150ms',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-neon-border)'
                      e.currentTarget.style.color = 'var(--color-neon)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                      e.currentTarget.style.color = 'var(--color-text)'
                    }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}
