import { createFileRoute } from '@tanstack/react-router'
import { listTemplates } from '@/lib/template-registry'
import { isPublic } from '@/lib/mode'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/templates')({
  beforeLoad: () => {
    if (isPublic) throw new Error('not available on public deploy')
  },
  component: TemplatesRoute,
})

function TemplatesRoute() {
  const templates = listTemplates()
  return (
    <main className="mx-auto max-w-6xl p-8">
      <header className="mb-6">
        <p className="mb-1 font-mono text-xs text-muted-foreground">
          // templates
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">templates</h1>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <Card
            key={t.id}
            className="overflow-hidden p-0 shadow-derek gap-0"
          >
            <iframe
              src={`/preview/${t.id}`}
              className="h-[420px] w-full border-b border-border"
              title={t.name}
              loading="lazy"
            />
            <CardContent className="flex flex-col gap-2 p-4">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.description}</div>
              <div className="flex flex-wrap gap-1 pt-1">
                {t.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer />
    </main>
  )
}
