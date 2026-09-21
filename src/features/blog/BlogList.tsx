import { useState } from 'react'
import { blogPosts } from '../../data/blog'
import type { BlogPost, BlogMood } from '../../types/blog'

interface BlogListProps {
  onSelectPost: (slug: string) => void
  onBack: () => void
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

function ArrowLeftIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  )
}
function ArrowRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  )
}

function FeaturedCard({ post, onSelect }: { post: BlogPost; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false)
  const mood = moodConfig[post.mood]
  return (
    <article
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button" tabIndex={0}
      aria-label={`Read ${post.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      style={{
        background: 'var(--color-bg-alt)',
        border: `1px solid ${hovered ? 'var(--color-neon-border)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer',
        transition: 'box-shadow 220ms ease, border-color 220ms ease',
        boxShadow: hovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        display: 'grid', gridTemplateColumns: '4px 1fr',
      }}
    >
      <div style={{ background: mood.color, opacity: 0.85 }} aria-hidden="true" />
      <div style={{ padding: 'clamp(1.25rem, 4vw, 2.25rem)', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>

        {/* Meta badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-neon)', textTransform: 'uppercase' }}>
            {post.entryNumber}
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: 'var(--color-neon)', borderRadius: 'var(--radius-pill)', padding: '0.15rem 0.65rem' }}>
            Latest
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', color: mood.color, background: mood.bg, border: `1px solid ${mood.border}`, borderRadius: 'var(--radius-pill)', padding: '0.15rem 0.6rem' }}>
            {mood.label}
          </span>
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.25rem, 4vw, 1.9rem)', fontWeight: 800, color: hovered ? 'var(--color-neon)' : 'var(--color-text)', lineHeight: 1.2, transition: 'color 200ms' }}>
          {post.title}
        </h2>

        {/* Excerpt */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.875rem, 2vw, 1rem)', lineHeight: 1.75, color: 'var(--color-muted)' }}>
          {post.excerpt}
        </p>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.6rem', paddingTop: '0.85rem', borderTop: '1px solid var(--color-border-soft)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--color-subtle)' }}>{formatDate(post.date)}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.28rem', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--color-subtle)' }}>
              <ClockIcon /> {post.readTime} min read
            </span>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700, color: hovered ? 'var(--color-neon)' : 'var(--color-text)', transition: 'color 200ms', whiteSpace: 'nowrap' }}>
            Read entry <ArrowRightIcon />
          </span>
        </div>
      </div>
    </article>
  )
}

function BlogCard({ post, onSelect }: { post: BlogPost; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false)
  const mood = moodConfig[post.mood]
  return (
    <article
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button" tabIndex={0}
      aria-label={`Read ${post.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      style={{
        background: 'var(--color-bg-alt)',
        border: `1px solid ${hovered ? 'var(--color-neon-border)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer',
        transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        display: 'grid', gridTemplateColumns: '4px 1fr',
      }}
    >
      <div style={{ background: mood.color, opacity: 0.7 }} aria-hidden="true" />
      <div style={{ padding: 'clamp(1rem, 3vw, 1.5rem)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-neon)', textTransform: 'uppercase' }}>
            {post.entryNumber}
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.06em', color: mood.color, background: mood.bg, border: `1px solid ${mood.border}`, borderRadius: 'var(--radius-pill)', padding: '0.12rem 0.55rem' }}>
            {mood.label}
          </span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.975rem, 2.5vw, 1.1rem)', fontWeight: 700, color: hovered ? 'var(--color-neon)' : 'var(--color-text)', lineHeight: 1.3, transition: 'color 200ms' }}>
          {post.title}
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--color-muted)',
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        } as React.CSSProperties}>
          {post.excerpt}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--color-chip-text)', background: 'var(--color-chip-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-pill)', padding: '0.1rem 0.5rem' }}>
              #{tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.65rem', borderTop: '1px solid var(--color-border-soft)', marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', color: 'var(--color-subtle)' }}>{formatDate(post.date)}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.22rem', fontFamily: 'var(--font-ui)', fontSize: '0.68rem', color: 'var(--color-subtle)' }}>
              <ClockIcon /> {post.readTime} min
            </span>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.28rem', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 600, color: hovered ? 'var(--color-neon)' : 'var(--color-muted)', transition: 'color 200ms', whiteSpace: 'nowrap' }}>
            Read <ArrowRightIcon />
          </span>
        </div>
      </div>
    </article>
  )
}

export function BlogList({ onSelectPost, onBack }: BlogListProps) {
  const [featuredPost, ...restPosts] = blogPosts

  return (
    <>
      {/* Inject responsive rules */}
      <style>{`
        .blog-list-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 480px) {
          .blog-list-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{
        width: 'min(1100px, 92vw)', margin: '0 auto',
        paddingTop: 'clamp(3rem, 8vh, 5rem)',
        paddingBottom: 'clamp(4rem, 10vw, 7rem)',
      }}>

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 600,
            color: 'var(--color-muted)', background: 'transparent',
            border: '1px solid var(--color-border)', borderRadius: 'var(--radius-pill)',
            padding: '0.4rem 0.9rem', cursor: 'pointer', marginBottom: '2.5rem',
            transition: 'color 150ms, border-color 150ms, background 150ms',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-neon)'; e.currentTarget.style.borderColor = 'var(--color-neon-border)'; e.currentTarget.style.background = 'var(--color-neon-dim)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.background = 'transparent' }}
          aria-label="Back to portfolio"
        >
          <ArrowLeftIcon /> Portfolio
        </button>

        {/* Page header */}
        <div style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Log Entries</p>
          <h1 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(2rem, 6vw, 3.8rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Thoughts, Builds &{' '}
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: '1.06em', color: 'var(--color-neon)' }}>
              Honest Takes
            </span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.75, color: 'var(--color-muted)', maxWidth: '58ch' }}>
            A running log of what I am building, thinking, and learning -
            written for myself, shared with whoever finds it useful.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', fontFamily: 'var(--font-ui)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-muted)', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-pill)', padding: '0.3rem 0.85rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-neon)', display: 'block', flexShrink: 0 }} />
            {blogPosts.length} entries · growing
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, var(--color-neon), transparent)', opacity: 0.25, marginBottom: 'clamp(1.5rem, 4vw, 3rem)' }} aria-hidden="true" />

        {/* Featured post */}
        {featuredPost && (
          <div style={{ marginBottom: '1.5rem' }}>
            <FeaturedCard post={featuredPost} onSelect={() => onSelectPost(featuredPost.slug)} />
          </div>
        )}

        {/* Rest of posts */}
        {restPosts.length > 0 && (
          <div className="blog-list-grid">
            {restPosts.map((post) => (
              <BlogCard key={post.id} post={post} onSelect={() => onSelectPost(post.slug)} />
            ))}
          </div>
        )}

        <p style={{ marginTop: '3rem', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-subtle)', fontStyle: 'italic' }}>
          More entries coming. Writing is slow when you are also building.
        </p>
      </div>
    </>
  )
}
