import { useState } from 'react'
import { Layout }     from './components/Layout/Layout'
import { Hero }       from './features/hero/Hero'
import { About }      from './features/about/About'
import { Skills }     from './features/skills/Skills'
import { Projects }   from './features/projects/Projects'
import { Experience } from './features/experience/Experience'
import { Sara }       from './features/sara/Sara'
import { Contact }    from './features/contact/Contact'
import { BlogList }   from './features/blog/BlogList'
import { BlogPost }   from './features/blog/BlogPost'

type View = 'home' | 'blog-list' | 'blog-post'

function App() {
  const [view, setView]               = useState<View>('home')
  const [selectedSlug, setSelectedSlug] = useState<string>('')

  function goToBlogList() {
    setView('blog-list')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goToPost(slug: string) {
    setSelectedSlug(slug)
    setView('blog-post')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goHome() {
    setView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (view === 'blog-list') {
    return (
      <Layout isBlogPage onBlogClick={goToBlogList} onHomeClick={goHome}>
        <BlogList onSelectPost={goToPost} onBack={goHome} />
      </Layout>
    )
  }

  if (view === 'blog-post') {
    return (
      <Layout isBlogPage onBlogClick={goToBlogList} onHomeClick={goHome}>
        <BlogPost slug={selectedSlug} onBack={goToBlogList} onSelectPost={goToPost} />
      </Layout>
    )
  }

  return (
    <Layout onBlogClick={goToBlogList} onHomeClick={goHome}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Sara />
      <Contact />
    </Layout>
  )
}

export default App
