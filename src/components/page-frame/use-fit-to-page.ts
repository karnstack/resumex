import { useLayoutEffect, useRef, useState, type DependencyList } from 'react'

const PAPER_HEIGHT_MM = { a4: 297, letter: 279.4 } as const
const MIN_SCALE = 0.45
/* leave 2px so sub-pixel rounding from `transform: scale` doesn't push the
   footer past the article's overflow:hidden clip boundary in print. */
const FIT_SAFETY_PX = 2

/**
 * Measure content and return a scale that fits it into one page.
 *
 * Returns both `autoScale` (computed from measurement) and `scale` (the value
 * a consumer should apply). When `forcedScale` is provided, `scale === forcedScale`
 * and measurement is skipped — useful for a manual override slider in preview tools.
 */
export function useFitToPage<T extends HTMLElement = HTMLDivElement>(
  paper: 'a4' | 'letter' = 'a4',
  deps: DependencyList = [],
  forcedScale?: number,
) {
  const ref = useRef<T>(null)
  const [autoScale, setAutoScale] = useState(1)
  const heightPx = (PAPER_HEIGHT_MM[paper] * 96) / 25.4

  useLayoutEffect(() => {
    if (forcedScale !== undefined) return
    const el = ref.current
    if (!el) return
    let cancelled = false

    const measure = () => {
      if (cancelled) return
      const prevZoom = el.style.zoom
      const prevWidth = el.style.width
      const prevMinHeight = el.style.minHeight

      el.style.zoom = '1'
      el.style.width = paper === 'a4' ? '210mm' : '215.9mm'
      el.style.minHeight = '0'
      // force a synchronous reflow so scrollHeight reads the committed layout
      void el.offsetHeight
      const natural = el.scrollHeight

      el.style.zoom = prevZoom
      el.style.width = prevWidth
      el.style.minHeight = prevMinHeight

      const target = heightPx - FIT_SAFETY_PX
      const fit = natural > target ? Math.max(MIN_SCALE, target / natural) : 1
      setAutoScale((prev) => (Math.abs(prev - fit) < 0.001 ? prev : fit))
    }

    measure()
    if ('fonts' in document) {
      document.fonts.ready.then(measure)
    }

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, forcedScale])

  const scale = forcedScale ?? autoScale
  return { ref, scale, autoScale }
}
