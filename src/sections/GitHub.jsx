import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, GitFork, LoaderCircle, RefreshCcw, Star } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { GitHubIcon } from '../components/icons/BrandIcons'
import { site } from '../data/site'
import { projects } from '../data/projects'
import { LANGUAGE_COLORS } from '../utils/helpers'

const FALLBACK_REPOS = projects.map((p) => ({
  id: p.id,
  name: p.title.replace(/\s+/g, '-').toLowerCase(),
  description: p.tagline,
  language: p.tech[0],
  stargazers_count: 0,
  forks_count: 0,
  html_url: site.githubUrl,
  updated_at: null,
  fork: false,
  fallback: true,
}))

function RepoCard({ repo, index }) {
  const langColor = LANGUAGE_COLORS[repo.language] || '#8b5cf6'
  return (
    <motion.a
      layout
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass glass-hover group flex h-full flex-col rounded-2xl p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <GitHubIcon size={19} />
        </span>
        {repo.fork ? (
          <span className="rounded-full border border-line px-2 py-0.5 text-[10px] font-semibold text-soft uppercase">
            Fork
          </span>
        ) : (
          <ArrowUpRight className="size-4 text-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
        )}
      </div>

      <h3 className="mt-3 font-mono text-sm font-semibold break-words text-fg group-hover:text-brand">
        {repo.name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-mut">
        {repo.description || 'No description provided — check the repository for details.'}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-mut">
        <span className="flex items-center gap-1.5">
          <span
            className="size-2.5 rounded-full"
            style={{ background: langColor, boxShadow: `0 0 8px ${langColor}` }}
          />
          {repo.language || 'N/A'}
        </span>
        <span className="flex items-center gap-1">
          <Star className="size-3.5" /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="size-3.5" /> {repo.forks_count}
        </span>
      </div>

      {repo.updated_at && (
        <p className="mt-3 text-[11px] text-soft">
          Updated {new Date(repo.updated_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
        </p>
      )}
    </motion.a>
  )
}

export function GitHub() {
  const [state, setState] = useState({ status: 'loading', repos: [] })

  const load = useCallback(async () => {
    setState({ status: 'loading', repos: [] })
    try {
      const cached = sessionStorage.getItem('np-github-cache')
      if (cached) {
        const parsed = JSON.parse(cached)
        if (Date.now() - parsed.at < 10 * 60 * 1000) {
          setState({ status: 'ok', repos: parsed.repos })
          return
        }
      }

      const res = await fetch(`https://api.github.com/users/${site.githubUsername}/repos?per_page=8&sort=updated`, {
        headers: { Accept: 'application/vnd.github+json' },
      })
      if (!res.ok) throw new Error(`GitHub API ${res.status}`)
      const data = await res.json()
      const repos = data
        .filter((r) => !r.fork)
        .map((r) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          language: r.language,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
          html_url: r.html_url,
          updated_at: r.updated_at,
          fork: false,
        }))
      if (repos.length === 0) throw new Error('No repositories found')
      sessionStorage.setItem('np-github-cache', JSON.stringify({ at: Date.now(), repos }))
      setState({ status: 'ok', repos })
    } catch {
      setState({ status: 'error', repos: FALLBACK_REPOS })
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return (
    <section id="github" className="relative py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-32 size-80 rounded-full bg-sky-400/8 blur-3xl" />
        <div className="absolute -left-32 bottom-10 size-80 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub"
          title="Latest from my repositories"
          description="Live data from my GitHub profile — falling back to a curated list if the API is unreachable."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-gradient-to-r from-brand/10 via-pink-400/5 to-sky-400/10 p-6 sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-sky-400 text-white shadow-glow">
              <GitHubIcon size={24} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-fg">@{site.githubUsername}</h3>
              <p className="text-sm text-mut">Explore more projects &amp; experiments</p>
            </div>
          </div>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:brightness-110"
          >
            View My GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>

        {state.status === 'loading' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-line bg-panel p-5">
                <div className="h-10 w-10 rounded-xl bg-elev" />
                <div className="mt-4 h-4 w-3/4 rounded bg-elev" />
                <div className="mt-2 h-3 w-full rounded bg-elev" />
                <div className="mt-2 h-3 w-2/3 rounded bg-elev" />
              </div>
            ))}
          </div>
        )}

        {state.status === 'ok' && (
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {state.repos.map((repo, i) => (
                <RepoCard key={repo.id} repo={repo} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {state.status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-panel p-8 text-center"
          >
            <LoaderCircle className="size-6 text-amber-400" />
            <p className="text-sm text-mut">
              Couldn&apos;t reach the GitHub API right now — showing my three main projects instead.
              Public repos will appear here once they&apos;re online.
            </p>
            <button
              onClick={load}
              className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-brand/50"
            >
              <RefreshCcw className="size-3.5" /> Try again
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GitHub