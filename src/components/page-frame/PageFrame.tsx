import type { ReactNode } from 'react'
import { useFitToPage } from './use-fit-to-page'

const PAPER_DIMS = {
  a4: { width: 210, height: 297 },
  letter: { width: 215.9, height: 279.4 },
} as const

export function PageFrame({
  paper = 'a4',
  fitDeps = [],
  className,
  innerClassName,
  children,
}: {
  paper?: 'a4' | 'letter'
  fitDeps?: unknown[]
  className?: string
  innerClassName?: string
  children: ReactNode
}) {
  const { ref, scale } = useFitToPage<HTMLDivElement>(paper, fitDeps)
  const dims = PAPER_DIMS[paper]
  return (
    <article
      className={`resumex-page-frame ${className ?? ''}`}
      style={{
        width: `${dims.width}mm`,
        height: `${dims.height}mm`,
        position: 'relative',
        overflow: 'hidden',
        background: 'white',
      }}
    >
      <div
        ref={ref}
        className={innerClassName}
        style={{
          width: `${dims.width / scale}mm`,
          minHeight: `${dims.height / scale}mm`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </article>
  )
}
