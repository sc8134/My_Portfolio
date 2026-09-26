import { useState, useEffect, useRef } from 'react'
import { skillCategories } from '../../data/skills'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { skillIconMap } from '../../components/icons/Icons'
import type { Skill, SkillLevel } from '../../types/skill'

// ── Config ────────────────────────────────────────────────────────────────────

type ActiveKey = `${string}::${string}` | null

const levelMap: Record<SkillLevel, { pct: number; label: string; color: string }> = {
  high: { pct: 90, label: 'Production',  color: 'var(--color-neon)'    },
  mid:  { pct: 60, label: 'Comfortable', color: '#b45309'              },
  low:  { pct: 30, label: 'Learning',    color: 'var(--color-subtle)'  },
}

const categoryAccent: Record<string, { color: string; dim: string; border: string }> = {
  frontend: { color: 'var(--color-neon)',   dim: 'var(--color-neon-dim)',         border: 'var(--color-neon-border)'  },
  backend:  { color: 'var(--color-navy)',   dim: 'var(--color-navy-dim)',         border: 'var(--color-navy-border)'  },
  database: { color: 'var(--color-green)',  dim: 'var(--color-green-dim)',        border: 'var(--color-green-border)' },
  tools:    { color: '#b45309',             dim: 'rgba(180,83,9,0.07)',           border: 'rgba(180,83,9,0.25)'       },
}

// ── Animated bar ─────────────────────────────────────────────────────────────

function ProfBar({ pct, color, animate }: { pct: number; color: string; animate: boolean }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!animate) return
    const id = setTimeout(() => setWidth(pct), 120)
    return () => clearTimeout(id)
  }, [animate, pct])

  return (
    <div style={{
      position: 'relative',
      height: '3px',
      background: 'var(--color-border)',
      borderRadius: '999px',
      overflow: 'hidden',
      flex: 1,
    }}>
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: `${width}%`,
        background: color,
        borderRadius: '999px',
        transition: 'width 700ms cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: `0 0 6px ${color}66`,
      }} />
    </div>
  )
}

// ── Skill row ─────────────────────────────────────────────────────────────────

interface SkillRowProps {
  skill: Skill
  catId: string
  isActive: boolean
  onToggle: () => void
  animate: boolean
}

function SkillRow({ skill, catId, isActive, onToggle, animate }: SkillRowProps) {
  const accent = categoryAccent[catId] ?? categoryAccent.frontend
  const lvl = levelMap[skill.level]

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isActive}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        padding: '0.5rem 0.65rem',
        background: isActive ? accent.dim : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        transition: 'background 150ms',
        textAlign: 'left',
      }}
      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = 'var(--color-border-soft)' }}
      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
    >
      {/* Name */}
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.82rem',
        fontWeight: isActive ? 600 : 400,
        color: isActive ? accent.color : 'var(--color-text)',
        minWidth: '7rem',
        flexShrink: 0,
        transition: 'color 150ms',
        textAlign: 'left',
      }}>
        {skill.name}
      </span>

      {/* Bar */}
      <ProfBar pct={lvl.pct} color={isActive ? accent.color : lvl.color} animate={animate} />

      {/* Pct + label */}
      <span style={{
        fontFamily: 'var(--font-ui)',
        fontSize: '0.65rem',
        fontWeight: 700,
        color: isActive ? accent.color : 'var(--color-subtle)',
        minWidth: '2.5rem',
        textAlign: 'right',
        flexShrink: 0,
        transition: 'color 150ms',
      }}>
        {lvl.pct}%
      </span>
    </button>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function Skills() {
  const ref = useScrollReveal<HTMLElement>()
  const [activeKey, setActiveKey] = useState<ActiveKey>(null)
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Trigger bars once on first view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  function toggle(catId: string, skillId: string) {
    const key: ActiveKey = `${catId}::${skillId}`
    setActiveKey(p => p === key ? null : key)
  }

  let activeProof: string | undefined
  let activeName: string | undefined
  if (activeKey) {
    const [catId, skillId] = activeKey.split('::')
    const cat = skillCategories.find(c => c.id === catId)
    activeName = cat?.skills.find(s => s.id === skillId)?.name
    activeProof = cat?.skills.find(s => s.id === skillId)?.proof
  }

  return (
    <section id="skills" ref={ref} className="section reveal-section">

      {/* ── Header ── */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p className="section-label">Skills</p>
        <h2 className="heading-lg">My <em>tech stack</em></h2>
        <p style={{ fontFamily: 'var(--font-body)', marginTop: '0.6rem', fontSize: '0.925rem', color: 'var(--color-muted)' }}>
          Tools I&apos;ve used in production. Click any skill to see where it showed up.
        </p>
      </div>

      {/* ── Bento grid ── */}
      <div ref={sectionRef} className="skills-bento">
        {skillCategories.map((cat) => {
          const accent = categoryAccent[cat.id] ?? categoryAccent.frontend
          return (
            <div
              key={cat.id}
              style={{
                background: 'var(--color-bg-alt)',
                border: `1px solid var(--color-border)`,
                borderTop: `3px solid ${accent.color}`,
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Card header */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                padding: '1rem 1rem 0.75rem',
                borderBottom: '1px solid var(--color-border)',
                background: accent.dim,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: accent.color, display: 'flex', alignItems: 'center' }}>
                    {skillIconMap[cat.id] ?? cat.icon}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: accent.color,
                  }}>
                    {cat.label}
                  </span>
                  <span style={{
                    marginLeft: 'auto',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: 'var(--color-subtle)',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.1rem 0.5rem',
                  }}>
                    {cat.skills.length}
                  </span>
                </div>
                {/* Production context line */}
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  lineHeight: 1.5,
                  color: 'var(--color-muted)',
                  margin: 0,
                }}>
                  {cat.context}
                </p>
              </div>

              {/* Skill rows */}
              <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.1rem', flex: 1 }}>
                {cat.skills.map(skill => {
                  const key: ActiveKey = `${cat.id}::${skill.id}`
                  return (
                    <SkillRow
                      key={skill.id}
                      skill={skill}
                      catId={cat.id}
                      isActive={activeKey === key}
                      onToggle={() => toggle(cat.id, skill.id)}
                      animate={animated}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Proof panel ── */}
      <div style={{
        display: 'grid',
        gridTemplateRows: activeKey ? '1fr' : '0fr',
        transition: 'grid-template-rows 280ms ease',
        overflow: 'hidden',
        marginTop: '1.25rem',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            padding: '1rem 1.25rem',
            background: 'var(--color-bg-alt)',
            border: '1px solid var(--color-neon-border)',
            borderLeft: '3px solid var(--color-neon)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}>
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--color-neon)',
              flexShrink: 0,
            }}>
              {activeName}
            </span>
            <span style={{ width: 1, height: '1rem', background: 'var(--color-neon-border)', flexShrink: 0 }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-muted)', margin: 0 }}>
              {activeProof}
            </p>
          </div>
        </div>
      </div>

      {/* ── Legend ── */}
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
        {Object.entries(levelMap).map(([, { label, color }]) => (
          <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--color-subtle)' }}>
            <span style={{ width: 20, height: 3, borderRadius: 999, background: color, display: 'inline-block' }} />
            {label}
          </span>
        ))}
      </div>

      <style>{`
        .skills-bento {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (max-width: 640px) {
          .skills-bento {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
