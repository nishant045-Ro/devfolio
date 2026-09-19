import { useEffect, useState } from 'react'

/**
 * Cycles through a list of words typing each one, pausing, then deleting.
 */
export function useRotatingText(words, { typeSpeed = 55, deleteSpeed = 26, pause = 1800 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = words[index] ?? ''
    let timer

    if (phase === 'typing') {
      if (text.length < word.length) {
        timer = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed)
      } else {
        timer = setTimeout(() => setPhase('deleting'), pause)
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timer = setTimeout(() => setText(word.slice(0, text.length - 1)), deleteSpeed)
      } else {
        setIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timer)
  }, [text, phase, index, words, typeSpeed, deleteSpeed, pause])

  return { text, typing: phase === 'typing' }
}

export default useRotatingText