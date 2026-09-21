import { motion } from 'framer-motion'
import { ArrowRight, Download, MessageSquare, Sparkles } from 'lucide-react'
import { site } from '../data/site'
import { socialLinks } from '../data/socialLinks'
import SocialLinks from '../components/SocialLinks'
import HeroTerminal from '../components/HeroTerminal'
import { useRotatingText } from '../hooks/useRotatingText'
import profileImg from '../assets/profile.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.12 * i, ease: 'easeOut' },
  }),
}

function Role() {
  const { text } = useRotatingText(site.roles)
  return (
    <span className="text-gradient font-semibold">
      {text}
      <span className="term-caret">|</span>
    </span>
  )
}

export function Hero({ ready = true }) {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(139,92,246,0.18),transparent)]" />
        <div className="absolute top-20 -left-32 size-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute top-40 -right-32 size-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="text-center lg:text-left">
          <motion.div variants={fadeUp} initial="hidden" animate={ready ? 'visible' : 'hidden'} custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-xs font-medium text-mut">
              <Sparkles className="size-3.5 text-brand" />
              {site.status}
              <span className="hidden size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] sm:block" />
              <span className="hidden text-emerald-400 sm:inline">Open to work</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate={ready ? 'visible' : 'hidden'}
            custom={1}
            className="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="text-gradient bg-clip-text">{site.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={ready ? 'visible' : 'hidden'}
            custom={2}
            className="mt-4 font-display text-xl text-mut sm:text-2xl"
          >
            <Role />
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={ready ? 'visible' : 'hidden'}
            custom={3}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mut lg:mx-0"
          >
            {site.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ready ? 'visible' : 'hidden'}
            custom={4}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-[0_16px_44px_-8px_var(--color-brand)] hover:brightness-110"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={site.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-6 py-3 text-sm font-semibold text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60"
            >
              <Download className="size-4 text-brand" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 text-sm font-semibold text-mut transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/60 hover:text-fg"
            >
              <MessageSquare className="size-4 text-pink-400" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ready ? 'visible' : 'hidden'}
            custom={5}
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
          >
            <span className="text-sm text-soft">Find me on</span>
            <span className="h-px w-8 bg-line" />
            <SocialLinks links={socialLinks} size="md" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-brand/30 via-pink-400/10 to-sky-400/30 blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="animate-float relative overflow-hidden rounded-3xl border border-line bg-panel p-2.5 shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={profileImg}
                  alt={`${site.name} — profile photo`}
                  className="aspect-[4/5] w-full max-h-[440px] object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-line bg-ink/70 p-3 backdrop-blur-md">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-sky-400 font-display text-sm font-bold text-white">
                  {site.firstName.charAt(0)}
                  {site.name.split(' ').pop()?.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-fg">{site.name}</p>
                  <p className="truncate text-xs text-mut">{site.role}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 18 }}
              className="absolute -top-4 -right-2 sm:-right-4"
            >
              <span className="animate-float flex items-center gap-2 rounded-xl border border-line bg-panel/90 px-3 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Open to work
              </span>
            </motion.div>
          </div>

          <div className="mt-8">
            <HeroTerminal start={ready} />
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 text-xs tracking-widest text-soft uppercase"
        >
          <span className="h-px w-12 bg-line" />
          Scroll to explore
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
          <span className="h-px w-12 bg-line" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero