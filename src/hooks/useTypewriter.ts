import { useState, useEffect } from 'react'

/**
 * Typewriter effect that types out a string character by character,
 * pauses, then deletes it before moving to the next string.
 */
export function useTypewriter(words: string[], options?: {
  typeSpeed?: number
  deleteSpeed?: number
  pauseMs?: number
}) {
  const typeSpeed   = options?.typeSpeed  ?? 80
  const deleteSpeed = options?.deleteSpeed ?? 45
  const pauseMs     = options?.pauseMs    ?? 1800

  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return

    const current = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        if (charIndex < current.length) {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        } else {
          // Finished typing — pause then start deleting
          setTimeout(() => setDeleting(true), pauseMs)
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        } else {
          // Finished deleting — move to next word
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, deleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}
