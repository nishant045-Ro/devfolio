import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Desktop-only trailing glow cursor. Disabled automatically on touch
 * devices and for users who prefer reduced motion. The native cursor is
 * kept visible for accessibility.
 */
export function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine && !reduceMotion)
  }, [reduceMotion])

  useEffect(() => {
    if (!enabled) return undefined

    const target = { x: -100, y: -100 }
    const ring = { x: -100, y: -100 }
    const dot = { x: -100, y: -100 }
    let raf
    let hoverTarget = false

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      hoverTarget = e.target.closest('a, button, [role="button"], input, textarea, select')
    }

    const loop = () => {
      dot.x += (target.x - dot.x) * 0.9
      dot.y += (target.y - dot.y) * 0.9
      ring.x += (target.x - ring.x) * 0.16
      ring.y += (target.y - ring.y) * 0.16
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        const scale = hoverTarget ? 1.8 : 1
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%) scale(${scale})`
      }
      raf = requestAnimationFrame(loop)
    }

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1'
      if (ringRef.current) ringRef.current.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[150] size-9 rounded-full border border-brand/50 transition-[opacity] duration-300"
        style={{ opacity: 0 }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[150] size-1.5 rounded-full bg-brand"
        style={{ opacity: 0, boxShadow: '0 0 10px var(--color-brand)' }}
      />
    </>
  )
}

export default CustomCursor