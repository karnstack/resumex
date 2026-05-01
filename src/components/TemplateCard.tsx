import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { ResumeTemplateMeta } from '@/lib/template-registry'

/**
 * TemplateCard — A4-thumbnail preview (transform-scaled iframe rendering the
 * real template at full size, visually shrunk to fit the card's
 * 210:297 aspect-ratio) + name, description, tags, and a "preview ↗" button
 * that opens the standalone /preview/<id> in a new tab.
 *
 * Why an iframe + transform-scale: keeps the preview live (always reflects
 * the current template), no headless-browser screenshot pipeline. Pointer
 * events on the iframe are disabled; the whole thumbnail is itself a link
 * to the fullscreen preview.
 */
export function TemplateCard({ meta }: { meta: ResumeTemplateMeta }) {
  return (
    <Card className="flex h-full flex-col gap-0 overflow-hidden p-0 transition-shadow hover:shadow-derek">
      <a
        href={`/preview/${meta.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="tn-thumb group relative block aspect-[210/297] overflow-hidden border-b border-border bg-white"
        aria-label={`open ${meta.name} fullscreen preview`}
      >
        <iframe
          src={`/preview/${meta.id}`}
          title={meta.name}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border-0 bg-white"
          style={{ width: '793px', height: '1122px' }}
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/[0.03]" />
      </a>
      <CardContent className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-2">
          <div className="text-base font-semibold tracking-tight">{meta.name}</div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {meta.paper ?? 'letter'}
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {meta.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {meta.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between gap-2 border-t border-border pt-3">
          <span className="font-mono text-xs text-muted-foreground">{meta.id}</span>
          <Button asChild size="sm" variant="outline" className="font-mono">
            <a
              href={`/preview/${meta.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              preview ↗
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
