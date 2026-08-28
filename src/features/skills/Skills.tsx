import { skillCategories } from '../../data/skills'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { skillIconMap } from '../../components/icons/Icons'

export function Skills() {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section id="skills" ref={ref} className="section reveal-section">

      {/* Centered heading */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>Skills</p>
        <h2 className="heading-lg">My <em>tech stack</em></h2>
        {/* Inter subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            marginTop: '0.75rem',
            fontSize: '0.975rem',
            color: 'var(--color-muted)',
          }}
        >
          Tools and technologies I use to build production-grade applications.
        </p>
      </div>

      {/* 2×2 category grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {skillCategories.map((category) => (
          <div
            key={category.id}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              transition: 'border-color 200ms, transform 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-neon-border)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Category header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.1rem' }}>
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-neon-dim)',
                  border: '1px solid var(--color-neon-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {skillIconMap[category.id] ?? category.icon}
              </div>
              {/* Category label — Poppins bold */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                }}
              >
                {category.label}
              </span>
            </div>

            {/* Skill pills — Inter */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.skills.map((skill) => (
                <span
                  key={skill.id}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    color: 'var(--color-chip-text)',
                    background: 'var(--color-chip-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.25rem 0.7rem',
                    transition: 'border-color 150ms, color 150ms, background 150ms',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-neon-border)'
                    e.currentTarget.style.color = 'var(--color-neon)'
                    e.currentTarget.style.background = 'var(--color-neon-dim)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.color = 'var(--color-chip-text)'
                    e.currentTarget.style.background = 'var(--color-chip-bg)'
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
