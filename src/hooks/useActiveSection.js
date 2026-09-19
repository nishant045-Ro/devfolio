import { useEffect, useState } from 'react'

/**
 * Tracks which section (by id) is currently in view as the user scrolls.
 * The last section whose top passes the offset becomes active.
 */
export function useActiveSection(ids) {
  const key = (ids || []).join(',')
  const [active, setActive] = useState('')

  useEffect(() => {
    const list = (ids || []).filter(Boolean)
    if (list.length === 0) return undefined

    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const pos = window.scrollY + 120
        let current = ''
        for (const id of list) {
          const el = document.getElementById(id)
          if (el && el.offsetTop <= pos) current = id
        }
        setActive(current)
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}

export default useActiveSection