import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Activity } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skills, learningNow } from '../data/skills'
import { cn } from '../utils/helpers'

const FILTERS = ['All', 'Frontend', 'Backend', 'Database', 'Programming', 'Tools']

export function Skills() {
  const [filter, setFilter] = useState('All')
  const visible =
    filter === 'All' ? skills : skills.filter((s) => s.category === filter)

  return (
    <section id="skills" className="relative py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-32 size-80 rounded-full bg-pink-400/8 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 size-80 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & tools I work with"
          description="A constantly growing toolbox — measured honestly as I keep learning."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
                filter === f
                  ? 'border-transparent bg-gradient-to-r from-brand to-sky-500 text-white shadow-glow'
                  : 'border-line bg-panel text-mut hover:border-brand/50 hover:text-fg',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-line bg-panel p-6"
        >
          <div className="flex items-center gap-2">
            <Activity className="size-4 text-emerald-400" />
            <h3 className="font-display text-sm font-semibold tracking-widest text-fg uppercase">
              Currently Learning
            </h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {learningNow.map((item) => {
              const Icon = item.icon
              return (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-elev px-4 py-2.5 text-sm font-medium text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50"
                  style={{ color: item.color }}
                >
                  <span className="relative">
                    <Icon size={16} />
                    <span className="absolute -top-1 -right-1 size-1.5 animate-pulse rounded-full bg-emerald-400" />
                  </span>
                  {item.name}
                </span>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills