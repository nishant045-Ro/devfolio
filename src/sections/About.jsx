import { motion } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  Heart,
  Rocket,
  Terminal,
  TrendingUp,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { CountUp } from '../components/CountUp'

const INTERESTS = [
  'Web Development',
  'Backend Development',
  'JavaScript',
  'PHP & Laravel',
  'MySQL',
  'Android Development',
  'Modern Web Tech',
]

const STATS = [
  { key: 'projects', value: 3, suffix: '+', label: 'Projects Built', icon: Rocket },
  { key: 'tech', value: 5, suffix: '+', label: 'Technologies', icon: Terminal },
  { key: 'bca', text: 'BCA', label: 'Bachelor of Computer Applications', icon: GraduationCap },
  { key: 'learning', text: 'Active', label: 'Currently Learning', icon: TrendingUp },
]

function StatCard({ stat, index }) {
  const Icon = stat.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass glass-hover group rounded-2xl p-5"
    >
      <div className="flex items-center justify-between">
        <span className="size-9 rounded-lg bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110 inline-flex items-center justify-center">
          <Icon size={17} />
        </span>
        <span className="text-gradient font-display text-3xl font-bold">
          {stat.value !== undefined ? (
            <CountUp to={stat.value} suffix={stat.suffix || ''} />
          ) : (
            stat.text
          )}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium text-mut">{stat.label}</p>
    </motion.div>
  )
}

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="A developer in the making"
          description="Focused, curious and building real things — one project at a time."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-relaxed text-mut">
              I&apos;m a{' '}
              <span className="font-semibold text-fg">Bachelor of Computer Applications (BCA)</span>{' '}
              student with a strong passion for the web — both what you see and what happens behind
              the scenes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mut">
              Right now I focus on <span className="font-medium text-fg">JavaScript</span>,{' '}
              <span className="font-medium text-fg">PHP &amp; Laravel</span> and{' '}
              <span className="font-medium text-fg">MySQL</span>. I love learning by building —
              from billing systems to food ordering apps and even Android apps.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mut">
              My goal is to keep growing into a confident full-stack developer who ships clean,
              useful software, then{' '}
              <span className="text-gradient font-semibold">teach what I learn along the way</span>.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {INTERESTS.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-full border border-line bg-panel px-3 py-1.5 text-xs font-medium text-mut transition-colors hover:border-brand/50 hover:text-fg"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-4">
              <Heart className="mt-0.5 size-5 shrink-0 text-pink-400" />
              <p className="text-sm leading-relaxed text-mut">
                Learning is the highlight of my day — I set small goals, build small apps, and
                level up every single week.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <StatCard key={stat.key} stat={stat} index={i} />
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 flex items-center gap-4 rounded-2xl border border-line bg-gradient-to-r from-brand/15 via-pink-400/10 to-sky-400/15 p-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-sky-400 text-white">
                <BookOpen size={18} />
              </span>
              <p className="text-sm leading-snug text-mut">
                Currently diving into{' '}
                <span className="font-semibold text-fg">Advanced JavaScript</span>,{' '}
                <span className="font-semibold text-fg">Android Development</span> and modern web
                workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About