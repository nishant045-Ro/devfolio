import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { navLinks, site, sectionIds } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { GitHubIcon } from './icons/BrandIcons'
import { cn } from '../utils/helpers'

function Brand() {
  const initials = site.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label="Home">
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-sky-400 font-display text-sm font-bold text-white shadow-glow transition-transform duration-300 group-hover:rotate-6">
        {initials}
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-fg">
        {site.brand}
        <span className="text-brand">{site.brandSuffix}</span>
      </span>
    </a>
  )
}

export function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-[70] transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-ink/80 shadow-lg shadow-black/5 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                  isActive ? 'text-fg' : 'text-mut hover:text-fg',
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-line bg-panel"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="hidden size-9 items-center justify-center rounded-full border border-line text-mut transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:text-fg sm:flex"
          >
            <GitHubIcon size={17} />
          </a>

          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title="Toggle theme"
            className="flex size-9 items-center justify-center rounded-full border border-line text-mut transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:text-fg"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              </motion.div>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full border border-line text-mut transition-colors hover:text-fg lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-line bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className={cn(
                    'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    active === link.href.slice(1)
                      ? 'bg-panel text-fg'
                      : 'text-mut hover:bg-panel/60 hover:text-fg',
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-mut transition-colors hover:bg-panel/60 hover:text-fg"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar