import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'
import { site } from '../data/site'
import { GitHubIcon } from './icons/BrandIcons'
import { cn } from '../utils/helpers'

function CategoryBadge({ label }) {
  return (
    <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur-sm">
      {label}
    </span>
  )
}

export function ProjectCard({ project, onOpen, index }) {
  const Icon = project.icon
  const categoryLabel = project.categories.includes('android') ? 'Android' : 'Web · Backend'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-300 hover:border-brand/50"
    >
      <button
        onClick={() => onOpen(project)}
        className="relative block w-full cursor-pointer overflow-hidden text-left"
        aria-label={`View details for ${project.title}`}
      >
        <div className="relative flex h-44 items-center justify-center overflow-hidden" style={{ background: project.gradient }}>
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            aria-hidden
            className="absolute -right-8 -bottom-10 size-32 rounded-full bg-white/20 blur-2xl transition-transform duration-500 group-hover:scale-125"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <CategoryBadge label={categoryLabel} />
          </div>
          <div className="relative flex size-16 items-center justify-center rounded-2xl border border-white/40 bg-white/15 text-white shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon size={30} />
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-fg">{project.title}</h3>
            <span className="flex size-8 items-center justify-center rounded-full border border-line text-mut transition-all duration-300 group-hover:border-brand/60 group-hover:text-brand">
              <Eye size={15} />
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-mut">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-line bg-elev px-2 py-1 text-[11px] font-medium text-mut"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>

      <div className="mt-auto flex items-center gap-2 border-t border-line p-4">
        <button
          onClick={() => onOpen(project)}
          className={cn(
            'flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-300',
            'bg-gradient-to-r from-brand to-sky-500 text-white shadow-glow hover:shadow-[0_12px_36px_-6px_var(--color-brand)] hover:brightness-110',
          )}
        >
          <Eye size={16} /> View Details
        </button>
        <a
          href={project.github || site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} code on GitHub`}
          title="View code on GitHub"
          className="flex size-10 items-center justify-center rounded-xl border border-line text-mut transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:text-fg"
        >
          <GitHubIcon size={17} />
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            title="Live demo"
            className="flex size-10 items-center justify-center rounded-xl border border-line text-mut transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/60 hover:text-brand-2"
          >
            <ExternalLink size={17} />
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard