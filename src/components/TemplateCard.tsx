import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { ResumeTemplateMeta } from '@/lib/template-registry'

/**
 * TemplateCard - A4 thumbnail (transform-scaled iframe of the live template)
 * + meta + a preview link.
 *
 * Iframes are mounted only when the card is near the viewport
 * (IntersectionObserver, 400px rootMargin) and unmounted when it leaves -
 * critical for the gallery, which renders 100+ cards at once. Without
 * windowing, Chrome hits ERR_INSUFFICIENT_RESOURCES because each iframe
 * pulls dev-server modules over its own set of connections.
 *
 * Once the iframe loads, it fades in with a small lift. While not loaded
 * (or before mount) a quiet skeleton holds the slot so the card height
 * doesn't jitter.
 */
export function TemplateCard({ meta }: { meta: ResumeTemplateMeta }) {
  const thumbRef = useRef<HTMLAnchorElement | null>(null)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = thumbRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setInView(entry.isIntersecting)
      },
      { rootMargin: '400px 0px', threshold: 0 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Reset the loaded flag when the iframe is unmounted so the next mount
  // re-runs the fade-in transition.
  useEffect(() => {
    if (!inView) setLoaded(false)
  }, [inView])

  return (
    <Card className="hover:shadow-card-hover flex h-full flex-col gap-0 overflow-hidden p-0 transition-shadow duration-200">
      <Link
        ref={thumbRef}
        to="/preview/$templateId"
        params={{ templateId: meta.id }}
        className="tn-thumb group border-border relative block aspect-[210/297] overflow-hidden border-b bg-white"
        aria-label={`open ${meta.name} fullscreen preview`}
      >
        {/* Skeleton holds the slot - quiet, not flashy. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-zinc-100 transition-opacity duration-300"
          style={{ opacity: loaded ? 0 : 1 }}
        />
        {inView && (
          <iframe
            src={`/preview/${meta.id}?embed=1`}
            title={meta.name}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            onLoad={() => setLoaded(true)}
            className="tn-frame pointer-events-none absolute inset-0 border-0 bg-white"
            style={{
              width: '793px',
              height: '1122px',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 360ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        )}
        <div className="bg-foreground/0 group-hover:bg-foreground/[0.03] absolute inset-0 transition-colors" />
      </Link>
      <CardContent className="flex flex-1 flex-col gap-3 p-5">
        <div className="text-base font-semibold tracking-tight">{meta.name}</div>
        <p className="text-muted-foreground flex-1 text-sm leading-relaxed">{meta.description}</p>
        <div className="flex flex-wrap gap-1">
          {meta.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="border-border mt-2 flex items-center justify-between gap-2 border-t pt-3">
          <span className="text-muted-foreground font-mono text-xs">{meta.id}</span>
          <Button asChild size="sm" variant="outline" className="font-mono">
            <Link to="/preview/$templateId" params={{ templateId: meta.id }}>
              preview →
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
