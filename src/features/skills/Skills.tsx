import { useState } from 'react'
import { skillCategories } from '../../data/skills'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { skillIconMap } from '../../components/icons/Icons'
import type { Skill } from '../../types/skill'

// Active pill = category id + skill id joined so two pills in different
// categories can never clash even if names are shared.
type ActiveKey = `${string}::${string}` | null

interface PillProps {
  skill: Skill
  categoryId: string
  isActive: boolean
  onToggle: () => void
}

function SkillPill({ skill, isActive, onToggle }: PillProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isActive}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontFamily: 'var(--font-body)',
        fontSize: '0.825rem',
        fontWeight: isActive ? 600 : 500,
        color: isActive ? 'var(--color-neon)' : 'var(--color-chip-text)',
        background: isActive ? 'var(--color-neon-dim)' : 'var(--color-chip-bg)',
        border: `1px solid ${isActive ? 'var(--color-neon-border)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-pill)',
        padding: '0.3rem 0.75rem',
        cursor: 'pointer',
        transition: 'color 150ms, background 150ms, border-color 150ms',
        outline: 'none',
        // level dot color
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.borderColor = 'var(--color-neon-border)'
          e.currentTarget.style.color = 'var(--color-neon)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.borderColor = 'var(--color-border)'
          e.currentTarget.style.color = 'var(--color-chip-text)'
        }
      }}
    >
      {/* Level dot */}
      <span
        aria-hidden="true"
        style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          flexShrink: 0,
          background:
            skill.level === 'high'
              ? 'var(--color-neon)'
              : skill.level === 'mid'
              ? 'var(--color-subtle)'
              : 'var(--color-border)',
          opacity: isActive ? 1 : 0.7,
        }}
      />
      {skill.name}
    </button>
  )
}

export function Skills() {
  const ref = useScrollReveal<HTMLElement>()
  const [activeKey, setActiveKey] = useState<ActiveKey>(null)

  function toggle(categoryId: string, skillId: string) {
    const key: ActiveKey = `${categoryId}::${skillId}`
    setActiveKey((prev) => (prev === key ? null : key))
  }

  // Find the active skill's proof text across all categories
  let activeProof: string | undefined
  let activeName: string | undefined
  if (activeKey) {
    const [catId, skillId] = activeKey.split('::')
    const cat = skillCategories.find((c) => c.id === catId)
    const skill = cat?.skills.find((s) => s.id === skillId)
    activeProof = skill?.proof
    activeName = skill?.name
  }

  return (
    <section id="skills" ref={ref} className="section reveal-section">

      {/* Header */}
      <div style={{ marginBottom: '2.25rem' }}>
        <p className="section-label">Skills</p>
        <h2 className="heading-lg">My <em>tech stack</em></h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            marginTop: '0.6rem',
            fontSize: '0.925rem',
            color: 'var(--color-muted)',
          }}
        >
          Tools I&apos;ve used in production. Tap any pill to see where it actually showed up.
        </p>
      </div>

      {/* Category rows */}
      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {skillCategories.map((category) => (
          <div
            key={category.id}
            style={{
              borderBottom: '1px solid var(--color-border)',
              padding: '1.25rem 0',
            }}
          >
            {/* Category label row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                marginBottom: '0.9rem',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '1.6rem',
                  height: '1.6rem',
                  flexShrink: 0,
                  opacity: 0.85,
                }}
              >
                {skillIconMap[category.id] ?? category.icon}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-subtle)',
                }}
              >
                {category.label}
              </span>
            </div>

            {/* Pill row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {category.skills.map((skill) => {
                const key: ActiveKey = `${category.id}::${skill.id}`
                return (
                  <SkillPill
                    key={skill.id}
                    skill={skill}
                    categoryId={category.id}
                    isActive={activeKey === key}
                    onToggle={() => toggle(category.id, skill.id)}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Proof panel — fixed at bottom of section, slides in when a pill is active */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: activeKey ? '1fr' : '0fr',
          transition: 'grid-template-rows 280ms ease',
          overflow: 'hidden',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.9rem 1.1rem',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-neon-border)',
              borderLeft: '3px solid var(--color-neon)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}
          >
            {/* Label */}
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--color-neon)',
                whiteSpace: 'nowrap',
                paddingTop: '0.05rem',
                flexShrink: 0,
              }}
            >
              {activeName}
            </span>
            <span
              style={{
                width: '1px',
                alignSelf: 'stretch',
                background: 'var(--color-neon-border)',
                flexShrink: 0,
              }}
            />
            {/* Proof text */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: 'var(--color-muted)',
                margin: 0,
              }}
            >
              {activeProof}
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          gap: '1.25rem',
          marginTop: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        {[
          { level: 'high', label: 'Used in production', color: 'var(--color-neon)' },
          { level: 'mid',  label: 'Comfortable',        color: 'var(--color-subtle)' },
          { level: 'low',  label: 'Learning',           color: 'var(--color-border)' },
        ].map(({ label, color }) => (
          <span
            key={label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              color: 'var(--color-subtle)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: color,
                flexShrink: 0,
              }}
            />
            {label}
          </span>
        ))}
      </div>

    </section>
  )
}
