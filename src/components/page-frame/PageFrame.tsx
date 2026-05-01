import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { useFitToPage } from './use-fit-to-page'

/* A4 is the only supported paper size. Letter was dropped to keep the print
   pipeline (and density math) one-target. */
const PAGE_WIDTH_MM = 210
const PAGE_HEIGHT_MM = 297

type PageFrameContextValue = {
  forcedScale?: number
  onScaleChange?: (scale: number) => void
  /** Bumped by an outer wrapper (preview/editor) when something *outside* the
   * template changes that affects layout - density toggle, padding sliders,
   * etc. Triggers PageFrame to re-measure even though the template's own
   * fitDeps (the resume) haven't changed. */
  fitKey?: string | number
}

/** Optional outer override - preview pages can wrap a template in this provider
 * to drive PageFrame's scale (e.g., from a slider) without templates needing
 * to know about it. Templates remain no-prop standalone components. */
export const PageFrameContext = createContext<PageFrameContextValue>({})

export function PageFrameProvider({
  forcedScale,
  onScaleChange,
  fitKey,
  children,
}: PageFrameContextValue & { children: ReactNode }) {
  return (
    <PageFrameContext.Provider value={{ forcedScale, onScaleChange, fitKey }}>
      {children}
    </PageFrameContext.Provider>
  )
}

export function PageFrame({
  fitDeps = [],
  className,
  innerClassName,
  forcedScale,
  onScaleChange,
  children,
}: {
  fitDeps?: unknown[]
  className?: string
  innerClassName?: string
  /** Direct override; usually pass nothing and let PageFrameContext supply this. */
  forcedScale?: number
  onScaleChange?: (scale: number) => void
  children: ReactNode
}) {
  const ctx = useContext(PageFrameContext)
  const effectiveForcedScale = forcedScale ?? ctx.forcedScale
  const effectiveOnScaleChange = onScaleChange ?? ctx.onScaleChange
  const { ref, scale } = useFitToPage<HTMLDivElement>(
    [...fitDeps, ctx.fitKey],
    effectiveForcedScale,
  )
  useEffect(() => {
    effectiveOnScaleChange?.(scale)
  }, [scale, effectiveOnScaleChange])
  return (
    <article
      className={`resumex-page-frame ${className ?? ''}`}
      style={{
        width: `${PAGE_WIDTH_MM}mm`,
        height: `${PAGE_HEIGHT_MM}mm`,
        position: 'relative',
        overflow: 'hidden',
        background: 'white',
        margin: '0 auto',
      }}
    >
      <div
        ref={ref}
        className={innerClassName}
        style={{
          width: `${PAGE_WIDTH_MM / scale}mm`,
          minHeight: `${PAGE_HEIGHT_MM / scale}mm`,
          // `zoom` is preferred over `transform: scale` because Chrome's PDF
          // pipeline preserves layout for `zoom` but renders `transform`
          // visually only - meaning content past the un-transformed layout
          // box can leak into the printed page (and into the PDF) even when
          // the article has overflow:hidden. `zoom` also keeps the layout
          // consistent so scrollHeight measurements stay accurate.
          zoom: scale,
        }}
      >
        {children}
      </div>
    </article>
  )
}
