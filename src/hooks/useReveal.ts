import { useEffect, useRef } from 'react'

/**
 * Aplica a classe "is-visible" ao elemento quando ele entra na viewport.
 * Usado com moderação (títulos de seção, não em cada card individual)
 * para manter o site rápido e sóbrio, conforme solicitado no briefing.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
