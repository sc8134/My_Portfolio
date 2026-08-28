import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a ref.
 * When the element enters the viewport it gets the 'revealed' class.
 */
export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.12
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
