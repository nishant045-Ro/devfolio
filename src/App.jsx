import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ToastProvider from './components/Toast'
import SectionHeading from './components/SectionHeading'
import Terminal from './components/Terminal'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import GitHub from './sections/GitHub'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import { useTheme } from './hooks/useTheme'

function TerminalSection() {
  return (
    <section id="terminal" className="relative py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 size-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive"
          title="Try my dev terminal"
          description="This isn't a screenshot — it's a real, working terminal. Type a command and explore."
        />
        <Terminal />
      </div>
    </section>
  )
}

function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

        <ScrollProgress />
        <CustomCursor />
        <BackToTop />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        <main>
          <Hero ready={!loading} />
          <About />
          <Skills />
          <Projects />
          <TerminalSection />
          <GitHub />
          <Journey />
          <Contact />
        </main>

        <Footer />
      </ToastProvider>
    </MotionConfig>
  )
}

export default App