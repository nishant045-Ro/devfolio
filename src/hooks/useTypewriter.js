import { useEffect, useState } from 'react'

/**
 * Types out `text` character by character.
 * Returns the current substring plus a `done` flag.
 */
export function useTypewriter(text, { speed = 30, startDelay = 0, enabled = true } = {}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) {
      setCount(text.length)
      return undefined
    }
    setCount(0)
    let interval
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval)
            return c
          }
          return c + 1
        })
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(startTimer)
      if (interval) clearInterval(interval)
    }
  }, [text, speed, startDelay, enabled])

  return {
    value: text.slice(0, count),
    done: count >= text.length,
  }
}

export default useTypewriter