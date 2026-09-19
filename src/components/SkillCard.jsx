import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

export function SkillCard({ skill, index }) {
  const reduceMotion = useReducedMotion()
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07, ease: 'easeOut' }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group glass glass-hover relative overflow-hidden rounded-2xl p-5"
    >
      <div
        aria-hidden
        style={{ '--glow': skill.color }}
        className="pointer-events-none absolute -top-10 -right-10 size-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
      />
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex size-12 items-center justify-center rounded-xl border border-line transition-transform duration-300 group-hover:scale-110"
          style={{ color: skill.color, background: 'color-mix(in srgb, var(--glow) 12%, transparent)' }}
        >
          <Icon size={22} />
        </div>
        {skill.category && (
          <span className="rounded-full border border-line px-2.5 py-1 text-[10px] font-semibold tracking-wider text-soft uppercase">
            {skill.category}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-base font-semibold text-fg">{skill.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-mut">{skill.desc}</p>

      {typeof skill.level === 'number' && (
        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium">
            <span className="text-soft">Proficiency</span>
            <span className="text-mut">{skill.level}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-elev">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, color-mix(in srgb, ${skill.color} 40%, #22d3ee))`,
              }}
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default SkillCard