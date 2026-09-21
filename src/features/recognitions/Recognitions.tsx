import { useScrollReveal } from '../../hooks/useScrollReveal'

// ── Icons ─────────────────────────────────────────────────────────────────────

function CertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L12 14.27l-4.94 2.43.94-5.49-4-3.9 5.53-.8L12 1.5zM5 20h14v2H5v-2z" />
    </svg>
  )
}

function LORIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 13h8v1.5H8V13zm0 3h5v1.5H8V16zm0-6h2v1.5H8V10z" />
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const recognitions = [
  {
    id: 'codealpha-cert',
    kind: 'Certificate of Completion',
    icon: <CertIcon />,
    issuer: 'CodeAlpha',
    issuerNote: 'Ministry of Corporate Affairs, Govt. of India',
    role: 'Full Stack Development Intern',
    date: 'Aug 2026 – Sep 2026',
    issued: 'Sep 20, 2026',
    credentialId: 'CA/DF1/252458',
    description:
      'Successfully completed the one-month Virtual Internship Program at CodeAlpha in Full Stack Development, demonstrating dedication, sincerity, and a high level of productivity throughout.',
    highlights: ['Full Stack Development', 'Virtual Internship', '1 Month'],
    pdfUrl: '/certificate/codealpha-certificate.pdf',
    govBacked: true,
  },
  {
    id: 'codealpha-lor',
    kind: 'Letter of Recommendation',
    icon: <LORIcon />,
    issuer: 'CodeAlpha',
    issuerNote: 'Signed by Founder & CEO',
    role: 'Full Stack Development Intern',
    date: 'Aug 2026 – Sep 2026',
    issued: 'Sep 20, 2026',
    credentialId: 'CA/DF1/252458',
    description:
      'Wholeheartedly recommended by CodeAlpha for excellent analytical skills, quick acquisition of new technologies, high productivity, and strong team collaboration. A valuable asset to any prospective employer.',
    highlights: ['Analytical Skills', 'Team Collaboration', 'Recommended'],
    pdfUrl: '/certificate/codealpha-lor.pdf',
    govBacked: false,
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export function Recognitions() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="recognitions" ref={ref} className="section reveal-section">

      {/* ── Heading — centered, matches Experience ── */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>Credentials</p>
        <h2 className="heading-lg">Certifications & <em>Recognition</em></h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          marginTop: '0.6rem',
          fontSize: '0.975rem',
          color: 'var(--color-muted)',
          maxWidth: '52ch',
          margin: '0.6rem auto 0',
        }}>
          Verified credentials issued by organizations I have worked with.
        </p>
      </div>

      {/* ── Timeline — exact same pattern as Experience ── */}
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

        {recognitions.map((r) => (
          <div
            key={r.id}
            style={{ display: 'flex', gap: '1.25rem', paddingBottom: '1.5rem', position: 'relative' }}
          >
            {/* ── Icon bubble ── */}
            <div style={{ flexShrink: 0, zIndex: 1 }}>
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-neon-dim)',
                border: '1px solid var(--color-neon-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-neon)',
              }}>
                {r.icon}
              </div>
            </div>

            {/* ── Content card ── */}
            <div
              style={{
                flex: 1,
                background: 'var(--color-bg-alt)',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-neon)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                transition: 'box-shadow 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* ── Header row ── */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '0.6rem',
              }}>
                <div>
                  {/* Kind label — Poppins bold, matches role style */}
                  <p style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.975rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    lineHeight: 1.3,
                  }}>
                    {r.kind}
                  </p>

                  {/* Issuer — Cormorant italic coral, matches company style */}
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-neon)',
                    marginTop: '0.15rem',
                  }}>
                    {r.issuer}
                  </p>

                  {/* Issuer note — muted sub, matches university style */}
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    color: 'var(--color-muted)',
                    marginTop: '0.1rem',
                  }}>
                    {r.issuerNote}
                  </p>
                </div>

                {/* Date badge — exact match to Experience date pill */}
                <span style={{
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
                }}>
                  {r.date}
                </span>
              </div>

              {/* ── Description — matches Experience desc style ── */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: 'var(--color-muted)',
              }}>
                {r.description}
              </p>

              {/* ── Credential meta row ── */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem',
                marginTop: '0.9rem',
                alignItems: 'center',
              }}>
                {/* Issued date chip */}
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--color-chip-text)',
                  background: 'var(--color-chip-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '0.15rem 0.6rem',
                }}>
                  Issued {r.issued}
                </span>

                {/* Credential ID chip */}
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--color-neon)',
                  background: 'var(--color-neon-dim)',
                  border: '1px solid var(--color-neon-border)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '0.15rem 0.6rem',
                }}>
                  ID: {r.credentialId}
                </span>

                {/* Skill/highlight chips — same style as tech chips */}
                {r.highlights.map((h) => (
                  <span key={h} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--color-chip-text)',
                    background: 'var(--color-chip-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.15rem 0.6rem',
                  }}>
                    {h}
                  </span>
                ))}

                {/* Govt backed badge */}
                {r.govBacked && (
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--color-success)',
                    background: 'var(--color-green-dim)',
                    border: '1px solid var(--color-green-border)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.15rem 0.6rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: 'var(--color-green)',
                      display: 'inline-block',
                      animation: 'pulse-dot 2s infinite',
                    }} />
                    Govt. of India
                  </span>
                )}

                {/* View PDF — right-aligned, outline style */}
                <a
                  href={r.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    marginLeft: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--color-neon)',
                    background: 'var(--color-neon-dim)',
                    border: '1px solid var(--color-neon-border)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.28rem 0.85rem',
                    textDecoration: 'none',
                    transition: 'background 150ms, box-shadow 150ms',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-neon)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.boxShadow = 'var(--shadow-neon)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--color-neon-dim)'
                    e.currentTarget.style.color = 'var(--color-neon)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
