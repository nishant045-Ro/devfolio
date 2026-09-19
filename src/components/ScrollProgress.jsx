import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[90] h-[3px] origin-left bg-gradient-to-r from-brand via-pink-400 to-sky-400"
      style={{ scaleX }}
      aria-hidden
    />
  )
}

export default ScrollProgress