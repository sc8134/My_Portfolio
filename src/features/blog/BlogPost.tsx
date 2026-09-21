import { useEffect, useRef, useState } from 'react'
import { blogPosts } from '../../data/blog'
import type { BlogContentBlock, BlogMood } from '../../types/blog'

interface BlogPostProps {
  slug: string
  onBack: () => void
  onSelectPost: (slug: string) => void
}

const moodConfig: Record<BlogMood, { label: string; color: string; bg: string; border: string }> = {
  building:   { label: 'building',   color: '#e8532a', bg: 'rgba(232,83,42,0.08)',  border: 'rgba(232,83,42,0.28)' },
  thinking:   { label: 'thinking',   color: '#2a6db5', bg: 'rgba(42,109,181,0.08)', border: 'rgba(42,109,181,0.28)' },
  reflecting: { label: 'reflecting', color: '#7a5c2a', bg: 'rgba(122,92,42,0.08)',  border: 'rgba(122,92,42,0.28)' },
  exploring:  { label: 'exploring',  color: '#2a7a6a', bg: 'rgba(42,122,106,0.08)', border: 'rgba(42,122,106,0.28)' },
  shipping:   { label: 'shipping',   color: '#2a7a3b', bg: 'rgba(42,122,59,0.08)',  border: 'rgba(42,122,59,0.28)' },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
function slugifyHeading(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function ArrowLeftIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  )
}
function ArrowRightSmall() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  )
}
function ListIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  )
}

function ReadProgressBar() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight
      if (docH <= 0) return
      setProgress(Math.min(100, (window.scrollY / docH) * 100))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '3px', background: 'var(--color-border-soft)', zIndex: 100 }}>
      <div style={{ height: '100%', width: `${progress}%`, background: 'var(--color-neon)', transition: 'width 80ms linear', boxShadow: '0 0 8px rgba(232,83,42,0.45)' }} />
    </div>
  )
}

function TableOfContents({ headings, activeId }: { headings: string[]; activeId: string }) {
  if (headings.length === 0) return null
  return (
    <div style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-ui)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-subtle)', marginBottom: '0.85rem' }}>
        <ListIcon /> Contents
      </p>
      <nav aria-label="Table of contents">
        <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
          {headings.map((heading) => {
            const id = slugifyHeading(heading)
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  style={{
                    display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.8rem', lineHeight: 1.45,
                    color: isActive ? 'var(--color-neon)' : 'var(--color-muted)',
                    fontWeight: isActive ? 600 : 400, textDecoration: 'none',
                    padding: '0.3rem 0.5rem 0.3rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: `2px solid ${isActive ? 'var(--color-neon)' : 'transparent'}`,
                    transition: 'color 150ms, border-color 150ms, background 150ms',
                    background: isActive ? 'var(--color-neon-dim)' : 'transparent',
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  {heading}
                </a>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.06rem)', lineHeight: 1.9, color: 'var(--color-muted)', marginBottom: '1.6rem' }}>
          {block.text}
        </p>
      )
    case 'heading':
      return (
        <h2 id={slugifyHeading(block.text ?? '')} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)', fontWeight: 700, fontStyle: 'italic', color: 'var(--color-text)', lineHeight: 1.25, marginTop: '2.75rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border-soft)', scrollMarginTop: '7rem' }}>
          {block.text}
        </h2>
      )
    case 'quote':
      return (
        <blockquote style={{ margin: '2.25rem 0', padding: 'clamp(1rem, 3vw, 1.4rem) clamp(1rem, 3vw, 1.6rem) clamp(1rem, 3vw, 1.4rem) clamp(1.1rem, 3vw, 1.85rem)', background: 'var(--color-neon-dim)', border: '1px solid var(--color-neon-border)', borderLeft: '3px solid var(--color-neon)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontStyle: 'italic', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.6, margin: 0 }}>
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      )
    case 'list':
      return (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '1.6rem 0', padding: 0 }}>
          {block.items?.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-body)', fontSize: 'clamp(0.925rem, 1.8vw, 0.975rem)', lineHeight: 1.75, color: 'var(--color-muted)' }}>
              <span style={{ color: 'var(--color-neon)', flexShrink: 0, fontWeight: 700, marginTop: '0.1rem', fontSize: '0.85rem' }}>→</span>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'divider':
      return <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, var(--color-neon), transparent)', borderRadius: '999px', opacity: 0.5, margin: '2.25rem 0' }} aria-hidden="true" />
    default:
      return null
  }
}

export function BlogPost({ slug, onBack, onSelectPost }: BlogPostProps) {
  const post = blogPosts.find((p) => p.slug === slug)
  const contentRef = useRef<HTMLDivElement>(null)
  const [activeHeading, setActiveHeading] = useState('')

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [slug])

  useEffect(() => {
    if (!post) return
    const headings = post.content.filter((b) => b.type === 'heading' && b.text).map((b) => slugifyHeading(b.text!))
    if (headings.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActiveHeading(visible[0].target.id)
      },
      { rootMargin: '-10% 0px -75% 0px', threshold: 0 }
    )
    headings.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [post, slug])

  if (!post) {
    return (
      <div style={{ width: 'min(1100px, 92vw)', margin: '0 auto', paddingTop: '5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Entry not found.</p>
        <button onClick={onBack} style={{ marginTop: '1rem' }} className="btn btn-ghost">Go back</button>
      </div>
    )
  }

  const mood = moodConfig[post.mood]
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
  const tocHeadings = post.content.filter((b) => b.type === 'heading' && b.text).map((b) => b.text!)

  return (
    <>
      <ReadProgressBar />

      {/* Responsive grid styles injected via <style> — CSS class wins cleanly over inline */}
      <style>{`
        .bp-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 260px;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: start;
        }
        .bp-sidebar {
          position: sticky;
          top: 6rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        /* Tablet: narrow sidebar */
        @media (max-width: 900px) {
          .bp-layout {
            grid-template-columns: minmax(0, 1fr) 220px;
          }
        }
        /* Mobile: single column, sidebar moves below content */
        @media (max-width: 680px) {
          .bp-layout {
            grid-template-columns: 1fr;
          }
          .bp-sidebar {
            position: static;
            order: 2;
          }
          .bp-article {
            order: 1;
          }
        }
        /* Prev/next nav — stack on very small screens */
        @media (max-width: 420px) {
          .bp-prevnext {
            grid-template-columns: 1fr !important;
          }
        }
        /* Post header tags — don't push to far right on small screens */
        @media (max-width: 560px) {
          .bp-header-meta {
            flex-direction: column;
            align-items: flex-start;
          }
          .bp-header-tags {
            margin-left: 0 !important;
          }
        }
      `}</style>

      <div style={{ width: 'min(1100px, 92vw)', margin: '0 auto', paddingTop: 'clamp(3rem, 8vh, 5rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}>

        {/* Back button */}
        <button
          onClick={onBack}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-muted)', background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-pill)', padding: '0.4rem 0.9rem', cursor: 'pointer', marginBottom: '2.5rem', transition: 'color 150ms, border-color 150ms, background 150ms' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-neon)'; e.currentTarget.style.borderColor = 'var(--color-neon-border)'; e.currentTarget.style.background = 'var(--color-neon-dim)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.background = 'transparent' }}
          aria-label="Back to all entries"
        >
          <ArrowLeftIcon /> All Entries
        </button>

        {/* Post header card */}
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)', marginBottom: '2.5rem', background: 'var(--color-bg-alt)' }}>
          <div style={{ height: '4px', background: mood.color }} aria-hidden="true" />
          <div style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)' }}>

            {/* Entry + mood */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.1rem' }}>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-neon)', textTransform: 'uppercase' }}>
                {post.entryNumber}
              </span>
              <span style={{ color: 'var(--color-border-soft)' }} aria-hidden="true">·</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', color: mood.color, background: mood.bg, border: `1px solid ${mood.border}`, borderRadius: 'var(--radius-pill)', padding: '0.15rem 0.6rem' }}>
                {mood.label}
              </span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.5rem, 5vw, 2.7rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.15, marginBottom: '0.8rem' }}>
              {post.title}
            </h1>

            {/* Subtitle */}
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.6, color: 'var(--color-subtle)', marginBottom: '1.4rem' }}>
              {post.subtitle}
            </p>

            {/* Date + read time + tags — responsive row */}
            <div className="bp-header-meta" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1.1rem', borderTop: '1px solid var(--color-border-soft)' }}>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', color: 'var(--color-subtle)' }}>{formatDate(post.date)}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-ui)', fontSize: '0.78rem', color: 'var(--color-subtle)' }}>
                <ClockIcon /> {post.readTime} min read
              </span>
              <div className="bp-header-tags" style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginLeft: 'auto' }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-chip-text)', background: 'var(--color-chip-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-pill)', padding: '0.15rem 0.6rem' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="bp-layout">

          {/* Article */}
          <article ref={contentRef} className="bp-article">
            <div style={{ maxWidth: '68ch' }}>
              {post.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
            </div>

            {/* Prev / Next */}
            {(prevPost || nextPost) && (
              <div
                className="bp-prevnext"
                style={{
                  display: 'grid',
                  gridTemplateColumns: prevPost && nextPost ? '1fr 1fr' : '1fr',
                  gap: '1rem', marginTop: '3rem',
                  paddingTop: '2rem', borderTop: '1px solid var(--color-border-soft)',
                }}
              >
                {prevPost && (
                  <button
                    onClick={() => onSelectPost(prevPost.slug)}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'clamp(0.85rem, 2vw, 1.1rem) clamp(0.85rem, 2vw, 1.25rem)', cursor: 'pointer', textAlign: 'left', transition: 'border-color 150ms, box-shadow 150ms', width: '100%' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-neon-border)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-subtle)', textTransform: 'uppercase' }}>← Previous</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>{prevPost.title}</span>
                  </button>
                )}
                {nextPost && (
                  <button
                    onClick={() => onSelectPost(nextPost.slug)}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'clamp(0.85rem, 2vw, 1.1rem) clamp(0.85rem, 2vw, 1.25rem)', cursor: 'pointer', textAlign: 'right', width: '100%', transition: 'border-color 150ms, box-shadow 150ms' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-neon-border)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-subtle)', textTransform: 'uppercase' }}>Next →</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>{nextPost.title}</span>
                  </button>
                )}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="bp-sidebar">
            <TableOfContents headings={tocHeadings} activeId={activeHeading} />

            <div style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-subtle)', marginBottom: '0.75rem' }}>Written by</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontStyle: 'italic', fontWeight: 700, color: 'var(--color-neon)', marginBottom: '0.45rem' }}>Sagar Roka Chhetri</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', lineHeight: 1.65, color: 'var(--color-muted)' }}>
                Full stack developer building from Kathmandu. Every line of code on this site is mine.
              </p>
            </div>

            {blogPosts.filter((p) => p.slug !== slug).length > 0 && (
              <div style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-subtle)', marginBottom: '0.85rem' }}>Other Entries</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {blogPosts.filter((p) => p.slug !== slug).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => onSelectPost(p.slug)}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem 0.4rem', borderRadius: 'var(--radius-sm)', textAlign: 'left', transition: 'background 150ms', width: '100%' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-neon-dim)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                    >
                      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.63rem', fontWeight: 700, color: 'var(--color-neon)', flexShrink: 0, marginTop: '0.18rem', letterSpacing: '0.06em' }}>{p.entryNumber}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.35, flex: 1 }}>{p.title}</span>
                      <span style={{ flexShrink: 0, marginTop: '0.2rem', color: 'var(--color-subtle)' }}><ArrowRightSmall /></span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  )
}
