import { useLayoutEffect, useRef, useState, type DependencyList } from 'react'

const PAPER_HEIGHT_MM = { a4: 297, letter: 279.4 } as const
const MIN_SCALE = 0.45

export function useFitToPage<T extends HTMLElement = HTMLDivElement>(
  paper: 'a4' | 'letter' = 'a4',
  deps: DependencyList = [],
) {
  const ref = useRef<T>(null)
  const [scale, setScale] = useState(1)
  const heightPx = (PAPER_HEIGHT_MM[paper] * 96) / 25.4

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    let cancelled = false

    const measure = () => {
      if (cancelled) return
      const prevTransform = el.style.transform
      const prevWidth = el.style.width
      const prevMinHeight = el.style.minHeight
      el.style.transform = 'none'
      el.style.width = paper === 'a4' ? '210mm' : '215.9mm'
      el.style.minHeight = '0'
      const natural = el.scrollHeight
      el.style.transform = prevTransform
      el.style.width = prevWidth
      el.style.minHeight = prevMinHeight

      const fit = natural > heightPx ? Math.max(MIN_SCALE, heightPx / natural) : 1
      setScale((prev) => (Math.abs(prev - fit) < 0.001 ? prev : fit))
    }

    measure()
    if ('fonts' in document) {
      document.fonts.ready.then(measure)
    }

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { ref, scale }
}
