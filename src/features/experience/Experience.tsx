import { experiences } from '../../data/experience'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function WorkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm-10-2h4v2h-4V5z" />
    </svg>
  )
}

function EducationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </svg>
  )
}

export function Experience() {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section id="experience" ref={ref} className="section reveal-section">

      {/* Centered heading */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>Background</p>
        <h2 className="heading-lg">Experience &amp; <em>Education</em></h2>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0' }}>

        {/* Vertical guide line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '1.75rem',
            top: '2.5rem',
            bottom: '2.5rem',
            width: '2px',
            background: 'var(--color-border)',
          }}
        />

        {experiences.map((exp) => (
          <div
            key={exp.id}
            style={{ display: 'flex', gap: '1.25rem', paddingBottom: '1.5rem', position: 'relative' }}
          >
            {/* Icon bubble */}
            <div style={{ flexShrink: 0, zIndex: 1 }}>
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: exp.type === 'work' ? 'var(--color-neon-dim)' : 'var(--color-surface-alt)',
                  border: `1px solid ${exp.type === 'work' ? 'var(--color-neon-border)' : 'var(--color-border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: exp.type === 'work' ? 'var(--color-neon)' : 'var(--color-text)',
                }}
              >
                {exp.type === 'work' ? <WorkIcon /> : <EducationIcon />}
              </div>
            </div>

            {/* Content card */}
            <div
              style={{
                flex: 1,
                background: 'var(--color-bg-alt)',
                border: '1px solid var(--color-border)',
                borderLeft: `3px solid ${exp.type === 'work' ? 'var(--color-neon)' : 'var(--color-neon-border)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                transition: 'box-shadow 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Header row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '0.6rem',
                }}
              >
                <div>
                  {/* Role — Poppins bold */}
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.975rem',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      lineHeight: 1.3,
                    }}
                  >
                    {exp.role}
                  </p>
                  {/* Company — Playfair italic coral */}
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: exp.companyColor ?? 'var(--color-neon)',
                      marginTop: '0.15rem',
                    }}
                  >
                    {exp.company}
                  </p>
                  {/* University — Inter muted */}
                  {exp.university && (
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        color: 'var(--color-muted)',
                        marginTop: '0.1rem',
                      }}
                    >
                      {exp.university}
                    </p>
                  )}
                </div>

                {/* Date badge — Poppins */}
                <span
                  style={{
                    flexShrink: 0,
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: 'var(--color-muted)',
                    background: 'var(--color-surface-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.2rem 0.75rem',
                    whiteSpace: 'nowrap',
                    alignSelf: 'flex-start',
                  }}
                >
                  {exp.date}
                </span>
              </div>

              {/* Description — Inter */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: 'var(--color-muted)',
                }}
              >
                {exp.description}
              </p>

              {/* Tech chips — Inter */}
              {exp.tech && exp.tech.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.9rem' }}>
                  {exp.tech.map((t) => (
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
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
