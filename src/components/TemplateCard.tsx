import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { ResumeTemplateMeta } from '@/lib/template-registry'

/**
 * TemplateCard — name + description + tags + a prominent "preview" CTA that
 * opens the standalone /preview/<id> page in a new tab (fullscreen, real
 * A4 size). Intentionally NOT an inline iframe — A4 content cramped into a
 * ~300px card looks scrunched. The actual preview is the dedicated route.
 */
export function TemplateCard({ meta }: { meta: ResumeTemplateMeta }) {
  return (
    <Card className="flex h-full flex-col gap-0 p-0 transition-shadow hover:shadow-derek">
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
          <span className="font-mono text-xs text-muted-foreground">
            {meta.id}
          </span>
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
