import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { site } from '../data/site'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-ink"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      aria-label="Loading"
    >
      <div className="relative">
        <motion.span
          className="absolute -inset-4 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: 'var(--color-brand)',
            borderRightColor: 'var(--color-brand-2)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
        />
        <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-sky-400 shadow-glow">
          <Terminal className="size-8 text-white" />
        </div>
      </div>

      <div className="text-center">
        <p className="font-display text-lg font-semibold text-fg">{site.name}</p>
        <p className="mt-1 text-sm text-mut">Initializing workspace…</p>
      </div>

      <div className="h-1 w-40 overflow-hidden rounded-full bg-elev">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand to-sky-400"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}

export default LoadingScreen