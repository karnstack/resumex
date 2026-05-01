import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { useFitToPage } from './use-fit-to-page'

type PageFrameContextValue = {
  forcedScale?: number
  onScaleChange?: (scale: number) => void
  /** Bumped by an outer wrapper (preview/editor) when something *outside* the
   * template changes that affects layout — density toggle, padding sliders,
   * etc. Triggers PageFrame to re-measure even though the template's own
   * fitDeps (the resume) haven't changed. */
  fitKey?: string | number
}

/** Optional outer override — preview pages can wrap a template in this provider
 * to drive PageFrame's scale (e.g., from a slider) without templates needing
 * to know about it. Templates remain pure functions of `ParsedResume`. */
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

const PAPER_DIMS = {
  a4: { width: 210, height: 297 },
  letter: { width: 215.9, height: 279.4 },
} as const

export function PageFrame({
  paper = 'a4',
  fitDeps = [],
  className,
  innerClassName,
  forcedScale,
  onScaleChange,
  children,
}: {
  paper?: 'a4' | 'letter'
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
    paper,
    [...fitDeps, ctx.fitKey],
    effectiveForcedScale,
  )
  const dims = PAPER_DIMS[paper]
  useEffect(() => {
    effectiveOnScaleChange?.(scale)
  }, [scale, effectiveOnScaleChange])
  // Inject the @page size dynamically. Putting @page rules inside individual
  // template CSS files breaks because all templates' CSS is bundled together,
  // and @page rules cascade — whichever rule is loaded *last* wins regardless
  // of which template is currently active. That caused emerald-twocol (A4)
  // previews to actually print as Letter size and clip the footer.
  useEffect(() => {
    const id = 'resumex-page-rule'
    let style = document.getElementById(id) as HTMLStyleElement | null
    if (!style) {
      style = document.createElement('style')
      style.id = id
      document.head.appendChild(style)
    }
    style.textContent = `@page { size: ${paper}; margin: 0; }`
    return () => {
      // leave the style in place; the next template's PageFrame will rewrite it
    }
  }, [paper])
  return (
    <article
      className={`resumex-page-frame ${className ?? ''}`}
      style={{
        width: `${dims.width}mm`,
        height: `${dims.height}mm`,
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
          width: `${dims.width / scale}mm`,
          minHeight: `${dims.height / scale}mm`,
          // `zoom` is preferred over `transform: scale` because Chrome's PDF
          // pipeline preserves layout for `zoom` but renders `transform`
          // visually only — meaning content past the un-transformed layout
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
