import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { ResumeTemplateMeta } from '@/lib/template-registry'

type Size = 'compact' | 'full'

const IFRAME_HEIGHT: Record<Size, number> = {
  compact: 320,
  full: 420,
}

/**
 * TemplateCard — iframe preview of a template + meta + "preview ↗" that opens
 * the standalone /preview/<id> page in a new tab. Used on both / (compact)
 * and /templates (full).
 */
export function TemplateCard({
  meta,
  size = 'full',
}: {
  meta: ResumeTemplateMeta
  size?: Size
}) {
  return (
    <Card className="gap-0 overflow-hidden p-0 shadow-derek">
      <iframe
        src={`/preview/${meta.id}`}
        className="w-full border-b border-border"
        style={{ height: IFRAME_HEIGHT[size] }}
        title={meta.name}
        loading="lazy"
      />
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <div className="font-semibold">{meta.name}</div>
          <a
            href={`/preview/${meta.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            preview ↗
          </a>
        </div>
        <div className="text-sm text-muted-foreground">{meta.description}</div>
        <div className="flex flex-wrap gap-1 pt-1">
          {meta.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
