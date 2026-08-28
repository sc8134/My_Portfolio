import { useState } from 'react'
import { about } from '../../data/about'
import { useScrollReveal } from '../../hooks/useScrollReveal'

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

type MailState = 'idle' | 'sent'

const subjectOptions = [
  'Job Opportunity',
  'Freelance Project',
  'Collaboration',
  'Just Saying Hi',
  'Open Source',
  'Feedback',
]

export function Contact() {
  const ref = useScrollReveal<HTMLElement>()
  const [mailState, setMailState] = useState<MailState>('idle')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  function handleSend() {
    if (!subject.trim() && !body.trim()) return
    const mailto = `mailto:sc8134s@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailto, '_self')
    setMailState('sent')
  }

  function handleReset() {
    setMailState('idle')
    setSubject('')
    setBody('')
  }

  return (
    <section id="contact" ref={ref} className="section reveal-section">

      {/* Centered heading */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
        <h2 className="heading-lg">Get in <em>touch</em></h2>
        {/* Inter body text */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            marginTop: '0.6rem',
            fontSize: '0.975rem',
            color: 'var(--color-muted)',
          }}
        >
          Open to full-time roles, internships, and interesting projects.
          I reply to every message.
        </p>
        {about.openToWork && (
          <div style={{ marginTop: '0.75rem' }}>
            {/* Available badge — Poppins */}
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
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--color-green)',
                  display: 'inline-block',
                  animation: 'pulse-dot 2s infinite',
                }}
              />
              Available to start soon
            </span>
          </div>
        )}
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          alignItems: 'start',
        }}
      >

        {/* Left: Find me online */}
        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          {/* Panel header — Poppins uppercase label */}
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}
            >
              Find me online
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {contactSocials.map((social, i) => (
              <a
                key={social.id}
                href={social.url}
                target={social.id === 'email' ? '_self' : '_blank'}
                rel={social.id === 'email' ? undefined : 'noreferrer'}
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
                {/* Icon bubble */}
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--color-surface-alt)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-neon)',
                    flexShrink: 0,
                  }}
                >
                  {social.icon}
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      lineHeight: 1.2,
                    }}
                  >
                    {social.platform}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      color: 'var(--color-muted)',
                      marginTop: '0.1rem',
                    }}
                  >
                    {social.handle}
                  </p>
                </div>

                <span style={{ marginLeft: 'auto', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Mail form */}
        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          {/* Panel header */}
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}
            >
              Send a message
            </p>
          </div>

          {mailState === 'idle' ? (
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              {/* Subject chips */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--color-muted)',
                    marginBottom: '0.6rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  Subject
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {subjectOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSubject(option)}
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-pill)',
                        border: `1px solid ${subject === option ? 'var(--color-neon)' : 'var(--color-border)'}`,
                        background: subject === option ? 'var(--color-neon-dim)' : 'var(--color-bg)',
                        color: subject === option ? 'var(--color-neon)' : 'var(--color-muted)',
                        cursor: 'pointer',
                        transition: 'all 150ms ease',
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-body"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--color-muted)',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Hi Sagar, I would like to..."
                  rows={5}
                  style={{
                    width: '100%',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 0.9rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text)',
                    outline: 'none',
                    resize: 'vertical',
                    lineHeight: 1.6,
                    transition: 'border-color 150ms',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-neon-border)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                />
              </div>

              {/* Send button — Poppins */}
              <button
                onClick={handleSend}
                style={{
                  width: '100%',
                  background: 'var(--color-neon)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-pill)',
                  padding: '0.7rem',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'opacity 150ms, transform 140ms',
                  boxShadow: 'var(--shadow-neon)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.88'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Open mail app and send
              </button>

              {/* Helper text — Inter */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--color-muted)',
                  textAlign: 'center',
                }}
              >
                This pre-fills your mail client. Just hit Send.
              </p>
            </div>
          ) : (
            <div
              style={{
                padding: '2.5rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                textAlign: 'center',
              }}
            >
              {/* Checkmark */}
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  border: '2px solid var(--color-neon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-neon)',
                  fontSize: '1.4rem',
                }}
              >
                ✓
              </div>

              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Opening your mail app...
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                  Your message has been pre-filled. Just hit Send.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
                <a
                  href={`mailto:sc8134s@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-neon)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  Open again?
                </a>
                {/* Reset button — Poppins */}
                <button
                  onClick={handleReset}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.5rem 1rem',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--color-muted)',
                    cursor: 'pointer',
                    transition: 'border-color 150ms, color 150ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-neon-border)'
                    e.currentTarget.style.color = 'var(--color-neon)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.color = 'var(--color-muted)'
                  }}
                >
                  Send another message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 680px) {
          #contact > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </section>
  )
}
