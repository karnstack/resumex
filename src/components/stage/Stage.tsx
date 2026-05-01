import type { ReactNode } from 'react'
import './stage.css'

/**
 * Stage - full-viewport wrapper for any "preview a single page" surface
 * (template gallery, resume preview). Provides a quiet gray dotted background
 * with generous padding so the contained page sits visually framed.
 *
 * Hidden in print (background image stripped via stage.css).
 */
export function Stage({ children }: { children: ReactNode }) {
  return <div className="resumex-stage">{children}</div>
}
