import { Link } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { ResumeTemplateMeta } from '@/lib/template-registry'

/**
 * TemplateCard — A4-thumbnail preview (transform-scaled iframe rendering the
 * real template at full size, visually shrunk to fit the card's
 * 210:297 aspect-ratio) + name, description, tags, and a "preview" button
 * that navigates to /preview/<id> in the same tab. The preview page has its
 * own back button.
 *
 * Why an iframe + transform-scale: keeps the preview live (always reflects
 * the current template), no headless-browser screenshot pipeline. Pointer
 * events on the iframe are disabled; the whole thumbnail is itself a link
 * to the fullscreen preview.
 */
export function TemplateCard({ meta }: { meta: ResumeTemplateMeta }) {
  return (
    <Card className="hover:shadow-derek flex h-full flex-col gap-0 overflow-hidden p-0 transition-shadow">
      <Link
        to="/preview/$templateId"
        params={{ templateId: meta.id }}
        className="tn-thumb group border-border relative block aspect-[210/297] overflow-hidden border-b bg-white"
        aria-label={`open ${meta.name} fullscreen preview`}
      >
        <iframe
          src={`/preview/${meta.id}?embed=1`}
          title={meta.name}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border-0 bg-white"
          style={{ width: '793px', height: '1122px' }}
        />
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
