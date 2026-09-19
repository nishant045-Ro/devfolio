import { motion } from 'framer-motion'
import {
  Braces,
  Database,
  FileCode,
  GraduationCap,
  Rocket,
  Route,
  Smartphone,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { cn } from '../utils/helpers'

const JOURNEY = [
  {
    icon: GraduationCap,
    title: 'BCA',
    text: 'Started my Bachelor of Computer Applications to build a strong computer science foundation.',
  },
  {
    icon: FileCode,
    title: 'HTML & CSS',
    text: 'Learned the building blocks of the web — structure, styling and responsive layouts.',
  },
  {
    icon: Braces,
    title: 'JavaScript',
    text: 'Made pages come alive — DOM manipulation, interactivity and modern ES6+ syntax.',
  },
  {
    icon: Database,
    title: 'PHP & MySQL',
    text: 'Dove into the backend — server-side logic, authentication and relational databases.',
  },
  {
    icon: Route,
    title: 'Laravel',
    text: 'Exploring MVC, routing, Eloquent ORM and the artisan workflow.',
  },
  {
    icon: Smartphone,
    title: 'Android Development',
    text: 'Stepping into mobile with Java and XML in Android Studio.',
  },
  {
    icon: Rocket,
    title: 'Modern Web Technologies',
    text: 'Today — React, Tailwind, APIs and putting it all together in real projects.',
  },
]

export function Journey() {
  return (
    <section id="journey" className="relative py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-32 size-80 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning Journey"
          title="Where I am in my dev journey"
          description="No fake experience here — just an honest, growing path mapped out as I level up."
        />

        <div className="relative">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute top-0 bottom-0 left-5 w-[2px] origin-top bg-gradient-to-b from-brand via-pink-400 to-sky-400 sm:left-1/2 sm:-translate-x-px"
          />

          <div className="space-y-10">
            {JOURNEY.map((step, i) => {
              const Icon = step.icon
              const leftSide = i % 2 === 0
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className={cn(
                    'relative flex items-start gap-6 pl-14 sm:w-1/2 sm:pl-0',
                    leftSide ? 'sm:mr-auto sm:pr-14 sm:text-right' : 'sm:ml-auto sm:pl-14',
                  )}
                >
                  <span
                    className={cn(
                      'absolute top-1 left-5 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-line bg-panel text-brand shadow-lg sm:size-11 sm:translate-x-0',
                      leftSide ? 'sm:right-auto sm:-right-[22px]' : 'sm:-left-[22px]',
                    )}
                  >
                    <Icon size={18} />
                  </span>

                  <div className="flex-1">
                    <h3 className="font-display text-base font-semibold text-fg">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mut">{step.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey