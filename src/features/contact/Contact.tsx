import { useState, useEffect } from 'react'
import { about } from '../../data/about'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { LightningIcon, ShieldCheckIcon } from '../../components/icons/Icons'

// ── Types ────────────────────────────────────────────────────────────────────

type FormState = 'idle' | 'sending' | 'success' | 'error'

// ── Constants ────────────────────────────────────────────────────────────────

const WEB3FORMS_ACCESS_KEY = '2e3bcb3a-3736-411b-a862-1883194e2423'

const contactSocials = [
  {
    id: 'github',
    platform: 'GitHub',
    handle: '@sc8134',
    url: 'https://github.com/sc8134',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'Sagar RC',
    url: 'https://www.linkedin.com/in/sagar-rc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'email',
    platform: 'Email',
    handle: 'sc8134s@gmail.com',
    url: 'mailto:sc8134s@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    id: 'twitter',
    platform: 'Twitter / X',
    handle: '@Sagarch05339168',
    url: 'https://x.com/Sagarch05339168',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

const subjectOptions = [
  'Job Opportunity',
  'Freelance Project',
  'Collaboration',
  'Just Saying Hi',
  'Open Source',
  'Feedback',
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function getNepaliTime() {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kathmandu',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

function getNepaliHour(): number {
  const str = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kathmandu',
    hour: 'numeric',
    hour12: false,
  })
  return parseInt(str, 10)
}

function getAvailability(hour: number) {
  if (hour >= 9 && hour < 13) {
    // Morning — actively working
    return {
      label: 'Online — morning',
      color: 'var(--color-success)',
      dot: 'var(--color-green)',
      bg: 'var(--color-green-dim)',
      border: 'var(--color-green-border)',
      pulse: true,
    }
  }
  if (hour >= 13 && hour < 18) {
    // Afternoon — likely working
    return {
      label: 'Likely online',
      color: 'var(--color-success)',
      dot: 'var(--color-green)',
      bg: 'var(--color-green-dim)',
      border: 'var(--color-green-border)',
      pulse: true,
    }
  }
  if (hour >= 18 && hour < 23) {
    // Evening — maybe around
    return {
      label: 'Maybe online',
      color: '#b45309',
      dot: '#f59e0b',
      bg: 'rgba(245,158,11,0.10)',
      border: 'rgba(245,158,11,0.30)',
      pulse: true,
    }
  }
  // Late night / early morning — asleep
  return {
    label: 'Probably asleep',
    color: 'var(--color-subtle)',
    dot: '#94a3b8',
    bg: 'rgba(148,163,184,0.1)',
    border: 'rgba(148,163,184,0.22)',
    pulse: false,
  }
}

// ── Component ────────────────────────────────────────────────────────────────

export function Contact() {
  const ref = useScrollReveal<HTMLElement>()

  // Live clock — refreshes every 30 s
  const [localTime, setLocalTime] = useState(getNepaliTime)
  useEffect(() => {
    const id = setInterval(() => setLocalTime(getNepaliTime()), 30_000)
    return () => clearInterval(id)
  }, [])

  const avail = getAvailability(getNepaliHour())

  // Form
  const [formState, setFormState] = useState<FormState>('idle')
  const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const canSubmit =
    subject !== '' &&
    name.trim() !== '' &&
    email.trim() !== '' &&
    body.trim() !== ''

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit || formState === 'sending') return
    setFormState('sending')
    setErrorMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact: ${subject}`,
          name,
          email,
          message: body,
        }),
      })
      const data: { success: boolean; message?: string } = await res.json()
      if (data.success) {
        setFormState('success')
      } else {
        throw new Error(data.message ?? 'Submission failed')
      }
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Try emailing directly.',
      )
      setFormState('error')
    }
  }

  function handleReset() {
    setFormState('idle')
    setSubject('')
    setName('')
    setEmail('')
    setBody('')
    setErrorMsg('')
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: 'var(--color-bg)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    padding: '0.6rem 0.85rem',
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    outline: 'none',
    transition: 'border-color 150ms',
    boxSizing: 'border-box' as const,
  }

  return (
    <section id="contact" ref={ref} className="section reveal-section">

      {/* ── Heading ── */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
        <h2 className="heading-lg">Get in <em>touch</em></h2>
        <p style={{ fontFamily: 'var(--font-body)', marginTop: '0.6rem', fontSize: '0.975rem', color: 'var(--color-muted)' }}>
          If you have an interesting problem, I want to hear about it.
          I also reply to messages that aren&apos;t job offers.
        </p>
        {about.openToWork && (
          <div style={{ marginTop: '0.75rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--color-neon)',
                background: 'var(--color-neon-dim)',
                border: '1px solid var(--color-neon-border)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.25rem 0.85rem',
              }}
            >
              <span
                style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--color-green)',
                  display: 'inline-block',
                  animation: 'pulse-dot 2s infinite',
                }}
              />
              {about.openToWorkText ?? 'Available to start soon'}
            </span>
          </div>
        )}
      </div>

      {/* ── Two-column grid ── */}
      <div className="contact-grid">

        {/* ── LEFT PANEL ── */}
        <div
          style={{
            background: 'var(--color-bg-alt)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
            <p className="c-panel-label">Find me online</p>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {contactSocials.map((s, i) => (
              <a
                key={s.id}
                href={s.url}
                target={s.id === 'email' ? '_self' : '_blank'}
                rel={s.id === 'email' ? undefined : 'noreferrer'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.5rem',
                  borderBottom: i < contactSocials.length - 1 ? '1px solid var(--color-border)' : 'none',
                  textDecoration: 'none',
                  transition: 'background 150ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-neon-dim)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div
                  style={{
                    width: '2.25rem', height: '2.25rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--color-surface-alt)',
                    border: '1px solid var(--color-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-neon)', flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.2 }}>
                    {s.platform}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--color-muted)', marginTop: '0.1rem' }}>
                    {s.handle}
                  </p>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--color-muted)', fontSize: '0.9rem' }}>↗</span>
              </a>
            ))}
          </div>

          {/* ── Local time + availability ── */}
          <div
            style={{
              margin: '1rem 1.5rem 1.5rem',
              padding: '0.85rem 1rem',
              background: 'var(--color-surface-alt)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="var(--color-subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.775rem', fontWeight: 600, color: 'var(--color-muted)' }}>
                Lalitpur, <span style={{ color: 'var(--color-neon)' }}>Nepal</span>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text)', fontVariantNumeric: 'tabular-nums' }}>
                {localTime}
              </span>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.28rem',
                  fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 600,
                  color: avail.color,
                  background: avail.bg,
                  border: `1px solid ${avail.border}`,
                  borderRadius: 'var(--radius-pill)',
                  padding: '0.15rem 0.55rem',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  style={{
                    width: 5, height: 5, borderRadius: '50%',
                    background: avail.dot, display: 'inline-block', flexShrink: 0,
                    animation: avail.pulse ? 'pulse-dot 2s infinite' : 'none',
                  }}
                />
                {avail.label}
              </span>
            </div>
          </div>


        </div>

        {/* ── RIGHT PANEL — Web3Forms ── */}
        <div
          style={{
            background: 'var(--color-bg-alt)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
            <p className="c-panel-label">Send a message</p>
          </div>

          {formState === 'success' ? (
            <div style={{ padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
              <div
                style={{
                  width: '3rem', height: '3rem', borderRadius: '50%',
                  border: '2px solid var(--color-green)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-green)', fontSize: '1.4rem',
                  background: 'var(--color-green-dim)',
                }}
              >
                ✓
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.4rem' }}>
                  Message sent!
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                  I&apos;ll get back to you as soon as I can, usually within 24 hours.
                </p>
              </div>
              <button
                onClick={handleReset}
                style={{
                  marginTop: '0.5rem', background: 'transparent',
                  border: '1px solid var(--color-border)', borderRadius: 'var(--radius-pill)',
                  padding: '0.5rem 1.25rem', fontFamily: 'var(--font-ui)',
                  fontSize: '0.825rem', fontWeight: 600, color: 'var(--color-muted)',
                  cursor: 'pointer', transition: 'border-color 150ms, color 150ms',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-neon-border)'; e.currentTarget.style.color = 'var(--color-neon)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-muted)' }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} noValidate>
              {/* Honeypot — bots fill this, humans won't see it */}
              <input type="text" id="botcheck" name="botcheck" autoComplete="off" defaultValue="" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

              {/* Subject chips */}
              <div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '0.6rem', letterSpacing: '0.04em' }}>
                  What&apos;s this about? <span style={{ color: 'var(--color-neon)' }}>*</span>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {subjectOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSubject(opt)}
                      style={{
                        fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 600,
                        padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-pill)',
                        border: `1px solid ${subject === opt ? 'var(--color-neon)' : 'var(--color-border)'}`,
                        background: subject === opt ? 'var(--color-neon-dim)' : 'var(--color-bg)',
                        color: subject === opt ? 'var(--color-neon)' : 'var(--color-muted)',
                        cursor: 'pointer', transition: 'all 150ms ease',
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name + Email */}
              <div className="contact-name-email-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label htmlFor="c-name" style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                    Name <span style={{ color: 'var(--color-neon)' }}>*</span>
                  </label>
                  <input
                    id="c-name" name="name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Your name" required style={inputBase}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-neon-border)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                  />
                </div>
                <div>
                  <label htmlFor="c-email" style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                    Email <span style={{ color: 'var(--color-neon)' }}>*</span>
                  </label>
                  <input
                    id="c-email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com" required style={inputBase}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-neon-border)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="c-body" style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                  Message <span style={{ color: 'var(--color-neon)' }}>*</span>
                </label>
                <textarea
                  id="c-body" name="message" autoComplete="off" value={body} onChange={(e) => setBody(e.target.value)}
                  placeholder="Hi Sagar, I would like to..." rows={4} required
                  style={{ ...inputBase, resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-neon-border)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                />
              </div>

              {/* Error */}
              {formState === 'error' && (
                <p role="alert" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#b91c1c', background: 'rgba(185,28,28,0.07)', border: '1px solid rgba(185,28,28,0.18)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.75rem', margin: 0 }}>
                  {errorMsg || 'Something went wrong. Try emailing directly.'}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit || formState === 'sending'}
                style={{
                  width: '100%', background: 'var(--color-neon)', color: '#fff', border: 'none',
                  borderRadius: 'var(--radius-pill)', padding: '0.7rem',
                  fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 700,
                  cursor: !canSubmit || formState === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: !canSubmit ? 0.5 : 1,
                  transition: 'opacity 150ms, transform 140ms',
                  boxShadow: 'var(--shadow-neon)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                }}
                onMouseEnter={(e) => { if (canSubmit && formState !== 'sending') { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = canSubmit ? '1' : '0.5'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {formState === 'sending' ? (
                  <>
                    <span style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.35)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'c-spin 0.7s linear infinite' }} />
                    Sending…
                  </>
                ) : 'Send message'}
              </button>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', textAlign: 'center', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontStyle: 'italic' }}>
                <LightningIcon size={13} coral="var(--color-navy)" navy="var(--color-navy)" />
                <span style={{ color: 'var(--color-navy)' }}>Usually replies within 24h</span>
                <span style={{ opacity: 0.3, color: 'var(--color-muted)' }}>·</span>
                <ShieldCheckIcon size={13} coral="var(--color-neon)" navy="var(--color-neon)" />
                <span style={{ color: 'var(--color-neon)' }}>No spam, ever</span>
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        .c-panel-label {
          font-family: var(--font-ui);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-muted);
          margin: 0;
        }
        @media (max-width: 680px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-name-email-row { grid-template-columns: 1fr !important; }
        }
        @keyframes c-spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
