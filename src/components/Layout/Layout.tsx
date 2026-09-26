import { useEffect, useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface LayoutProps {
  children: ReactNode
  isBlogPage?: boolean
  onBlogClick: () => void
  onHomeClick: () => void
}

const navLinks = [
  { id: 'hero',       label: 'Home'       },
  { id: 'about',      label: 'About'      },
  { id: 'skills',     label: 'Skills'     },
  { id: 'projects',   label: 'Projects'   },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact'    },
]

const sectionIds = navLinks.map((l) => l.id)

// ── Footer social icons ──────────────────────────────────
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}
function ChevronUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  )
}

// ── Footer socials ───────────────────────────────────────
const footerSocials = [
  { id: 'github',   icon: <GithubIcon />,   url: 'https://github.com/sc8134',            label: 'GitHub'    },
  { id: 'linkedin', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/sagar-rc', label: 'LinkedIn'  },
  { id: 'twitter',  icon: <XIcon />,        url: 'https://x.com/Sagarch05339168',        label: 'Twitter/X' },
  { id: 'email',    icon: <EmailIcon />,    url: 'mailto:sc8134s@gmail.com',             label: 'Email'     },
]

export function Layout({ children, isBlogPage = false, onBlogClick, onHomeClick }: LayoutProps) {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [showBackTop, setShowBackTop] = useState(false)
  const activeSection                 = useActiveSection(isBlogPage ? [] : sectionIds)
  const footerRef                     = useScrollReveal<HTMLDivElement>(0.08)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      setShowBackTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Command bar header — full viewport width ──────── */}
      <header
        className={`cmd-bar${scrolled ? ' cmd-bar--scrolled' : ''}`}
        role="banner"
      >
        {/* Inner content constrained to site width */}
        <div className="cmd-bar-inner" style={{ position: 'relative', zIndex: 1 }}>

          {/* Left: brand tagline */}
          <a
            className="cmd-brand"
            href="#hero"
            aria-label="Back to top"
            onClick={(e) => { if (isBlogPage) { e.preventDefault(); onHomeClick() } }}
          >
            <span className="cmd-brand-namaste">Namaste</span>
            <span className="cmd-brand-sep" aria-hidden="true"> | </span>
            <span className="cmd-brand-tagline">Build. Code. Deploy.</span>
          </a>

          {/* Center: floating nav capsule */}
          <nav className="cmd-nav" aria-label="Primary navigation">
            <ul className="cmd-nav-list">
              {isBlogPage ? (
                /* Blog page nav: Home + Blog (active) */
                <>
                  <li>
                    <button
                      className="cmd-nav-link"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      onClick={onHomeClick}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      className="cmd-nav-link cmd-nav-link--active"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      onClick={onBlogClick}
                    >
                      <span className="cmd-nav-dot" aria-hidden="true" />
                      Blog
                    </button>
                  </li>
                </>
              ) : (
                /* Portfolio page nav */
                <>
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        className={`cmd-nav-link${activeSection === link.id ? ' cmd-nav-link--active' : ''}`}
                        href={`#${link.id}`}
                      >
                        {activeSection === link.id && (
                          <span className="cmd-nav-dot" aria-hidden="true" />
                        )}
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <button
                      className="cmd-nav-link"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      onClick={onBlogClick}
                    >
                      Blog
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>



          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
          </button>
        </div>{/* end cmd-bar-inner */}
      </header>

      <div className="site-shell">
        {/* Mobile drawer */}
        <div
          className={`mobile-menu${menuOpen ? ' mobile-menu-open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav aria-label="Mobile navigation">
            <ul className="mobile-nav-list">
              {isBlogPage ? (
                <>
                  <li>
                    <button
                      className="mobile-nav-link"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                      onClick={() => { onHomeClick(); handleNavClick() }}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      className="mobile-nav-link mobile-nav-link-active"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                      onClick={() => { onBlogClick(); handleNavClick() }}
                    >
                      Blog
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        className={`mobile-nav-link${activeSection === link.id ? ' mobile-nav-link-active' : ''}`}
                        href={`#${link.id}`}
                        onClick={handleNavClick}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <button
                      className="mobile-nav-link"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                      onClick={() => { onBlogClick(); handleNavClick() }}
                    >
                      Blog
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <main className="site-main">{children}</main>
      </div>

      {/* ── Closing statement footer ─────────────────────── */}
      <footer className="closing-footer" role="contentinfo">

        {/* SRC watermark behind everything */}
        <div className="closing-watermark" aria-hidden="true">
          <span className="closing-watermark-text">SRC</span>
        </div>

        {/* Radial glow behind the name */}
        <div className="closing-glow" aria-hidden="true" />

        <div className="closing-inner closing-reveal" ref={footerRef}>

          {/* Location tagline */}
          <p className="closing-tagline" style={{ '--stagger': '1' } as React.CSSProperties}>
            <span className="closing-tagline-dot" aria-hidden="true" />
            Built from Kathmandu, one commit at a time
            <span className="closing-tagline-dot" aria-hidden="true" />
          </p>

          {/* Big serif italic headline */}
          <h2 className="closing-name" style={{ '--stagger': '2' } as React.CSSProperties}>
            <span className="closing-name-accent">Next Adventure</span>
            {' '}Awaits
          </h2>

          {/* Tagline */}
          <p className="closing-role" style={{ '--stagger': '3' } as React.CSSProperties}>
            Your vision. My code. Let's ship it.
          </p>

          {/* Decorative rule */}
          <div className="closing-rule" aria-hidden="true" style={{ '--stagger': '4' } as React.CSSProperties} />

          {/* Social icons */}
          <nav className="closing-socials" aria-label="Social links" style={{ '--stagger': '5' } as React.CSSProperties}>
            {footerSocials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target={s.id === 'email' ? '_self' : '_blank'}
                rel={s.id === 'email' ? undefined : 'noreferrer'}
                aria-label={s.label}
                className="closing-social-link"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="closing-copy" style={{ '--stagger': '6' } as React.CSSProperties}>
            © {new Date().getFullYear()} Sagar Roka Chhetri · All rights reserved
          </p>

        </div>
      </footer>

      {/* Back to top */}
      <button
        className={`back-to-top${showBackTop ? ' back-to-top-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUpIcon />
      </button>
    </>
  )
}
