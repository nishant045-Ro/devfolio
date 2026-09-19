import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Check,
  ExternalLink,
  FileText,
  ListChecks,
  Monitor,
  User,
  X,
} from 'lucide-react'
import { site } from '../data/site'
import { GitHubIcon } from './icons/BrandIcons'

function ModalSection({ icon: Icon, title, children }) {
  return (
    <div className="mt-6">
      <h4 className="flex items-center gap-2 font-display text-sm font-semibold tracking-widest text-fg uppercase">
        <Icon size={16} className="text-brand" />
        {title}
      </h4>
      <div className="mt-3">{children}</div>
    </div>
  )
}

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-line bg-panel shadow-2xl sm:rounded-3xl"
          >
            <div className="relative flex h-36 shrink-0 items-center justify-center overflow-hidden" style={{ background: project.gradient }}>
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              <div aria-hidden className="absolute -bottom-10 left-1/2 size-40 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
              <div className="relative flex size-16 items-center justify-center rounded-2xl border border-white/40 bg-white/15 text-white shadow-xl backdrop-blur-md">
                <project.icon size={30} />
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-md transition-all hover:rotate-90 hover:bg-black/45"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-fg">{project.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mut">{project.tagline}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-line bg-elev px-2.5 py-1 text-xs font-medium text-mut"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ModalSection icon={FileText} title="Overview">
                <p className="text-sm leading-relaxed text-mut">{project.overview}</p>
              </ModalSection>

              <ModalSection icon={ListChecks} title="Features">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-mut">
                      <Check size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </ModalSection>

              <ModalSection icon={Monitor} title="UI Preview">
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.views.map((view) => (
                    <div
                      key={view.name}
                      className="flex items-center gap-3 rounded-xl border border-line bg-elev p-3.5 transition-colors hover:border-brand/40"
                    >
                      <span
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg text-white"
                        style={{ background: project.gradient }}
                      >
                        <view.icon size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-fg">{view.name}</p>
                        <p className="text-xs text-mut">{view.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-soft">
                  Stylized preview of the screens I built — screenshots will be added as the
                  projects are polished.
                </p>
              </ModalSection>

              <ModalSection icon={User} title="Development Role">
                <p className="text-sm leading-relaxed text-mut">{project.role}</p>
              </ModalSection>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github || site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-110"
                >
                  <GitHubIcon size={17} />
                  {project.github ? 'View Source Code' : 'View GitHub Profile'}
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-elev px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-sky-400/50"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal