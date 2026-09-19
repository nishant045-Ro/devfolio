import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { projects, projectFilters } from '../data/projects'
import { cn } from '../utils/helpers'

export function Projects() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const visible =
    filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          description="Real projects I built while learning — each one taught me something new."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                'rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200',
                filter === f.id
                  ? 'border-transparent bg-gradient-to-r from-brand to-sky-500 text-white shadow-glow'
                  : 'border-line bg-panel text-mut hover:border-brand/50 hover:text-fg',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-soft"
        >
          More projects are in the works — check back soon.
        </motion.p>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default Projects