import { Layout }     from './components/Layout/Layout'
import { Hero }       from './features/hero/Hero'
import { About }      from './features/about/About'
import { Skills }     from './features/skills/Skills'
import { Projects }   from './features/projects/Projects'
import { Experience } from './features/experience/Experience'
import { Sara }       from './features/sara/Sara'
import { Contact }    from './features/contact/Contact'

function App() {
  return (
    <Layout>
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
