import { motion } from 'framer-motion'
import { cn } from '../utils/helpers'

export function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'mb-12 flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold tracking-widest text-brand uppercase">
          <span className="size-1.5 rounded-full bg-brand shadow-[0_0_8px_var(--color-brand)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
        {title}
      </h2>
      {description && <p className="max-w-2xl text-base leading-relaxed text-mut">{description}</p>}
    </motion.div>
  )
}

export default SectionHeading