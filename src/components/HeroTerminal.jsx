import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Braces, CodeXml, Database, Route, TerminalSquare } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

const LINES = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'nishant@dev — BCA student & web developer' },
  { type: 'cmd', text: 'dev --stack' },
  { type: 'out', text: 'JavaScript  PHP  Laravel  MySQL' },
  { type: 'cmd', text: 'build --current' },
  { type: 'out', text: 'Shop Billing System (PHP + MySQL)' },
  { type: 'cmd', text: 'focus' },
  { type: 'out', text: 'Building modern web experiences 🚀' },
]

const CHIPS = [
  { label: 'JavaScript', color: '#f7df1e', icon: Braces, className: '-top-5 -left-6' },
  { label: 'PHP', color: '#aeb7f0', icon: CodeXml, className: 'top-10 -right-7' },
  { label: 'Laravel', color: '#ff2d20', icon: Route, className: '-bottom-6 left-8' },
  { label: 'MySQL', color: '#e68a2e', icon: Database, className: '-bottom-8 -right-4' },
]

function HeroTerminal({ start = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [pointer, setPointer] = useState(-1)

  const active = pointer >= 0 ? LINES[Math.min(pointer, LINES.length - 1)] : null
  const typing = useTypewriter(active?.text ?? '', {
    enabled: start && inView && pointer >= 0,
    speed: 24,
  })
  const advancedRef = useRef(false)

  useEffect(() => {
    if (!start || !inView) return undefined
    advancedRef.current = false
    const t = setTimeout(() => setPointer(0), 700)
    return () => clearTimeout(t)
  }, [start, inView])

  useEffect(() => {
    if (typing.done && !advancedRef.current) {
      advancedRef.current = true
      const t = setTimeout(() => {
        advancedRef.current = false
        setPointer((p) => (p + 1 >= LINES.length ? p : p + 1))
      }, 550)
      return () => clearTimeout(t)
    }
    return undefined
  }, [typing.done])

  const typingText = active?.type === 'cmd' ? `$ ${typing.value}` : typing.value

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2rem] bg-gradient-to-tr from-brand/25 via-pink-400/10 to-sky-400/25 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl border border-line bg-[#07070f] shadow-2xl"
        style={{ boxShadow: '0 40px 90px -24px rgba(139,92,246,0.35)' }}
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-rose-500/80" />
            <span className="size-3 rounded-full bg-amber-400/80" />
            <span className="size-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
            <TerminalSquare className="size-3.5" /> nishant@dev
          </div>
        </div>

        <div className="min-h-56 px-4 py-5 font-mono text-xs leading-7 sm:px-5 sm:text-sm">
          {LINES.slice(0, pointer).map((line, i) => (
            <p
              key={`${i}-done`}
              className={
                line.type === 'cmd' ? 'text-sky-300' : 'text-emerald-300/90'
              }
            >
              {line.type === 'cmd' ? `$ ${line.text}` : line.text}
            </p>
          ))}
          {active && (
            <p className={active.type === 'cmd' ? 'text-sky-300' : 'text-emerald-300/90'}>
              {typingText}
              <span className="term-caret">▌</span>
            </p>
          )}
          {!active && (
            <p className="text-slate-500">
              <span className="term-caret">▋</span>
            </p>
          )}
        </div>
      </motion.div>

      {CHIPS.map((chip, i) => {
        const Icon = chip.icon
        return (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.15, type: 'spring', stiffness: 260, damping: 18 }}
            className={`absolute ${chip.className} hidden sm:flex`}
          >
            <span
              className="animate-float flex items-center gap-1.5 rounded-xl border border-line bg-panel/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-md"
              style={{ boxShadow: `0 8px 24px -8px ${chip.color}66`, color: chip.color, animationDelay: `${i * 0.8}s` }}
            >
              <Icon size={14} />
              {chip.label}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}

export default HeroTerminal