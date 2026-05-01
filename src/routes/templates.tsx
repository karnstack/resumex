import { createFileRoute } from '@tanstack/react-router'
import { listTemplates } from '@/lib/template-registry'
import { isPublic } from '@/lib/mode'
import { usePageMeta } from '@/lib/use-page-meta'
import { Footer } from '@/components/Footer'
import { TemplateCard } from '@/components/TemplateCard'

export const Route = createFileRoute('/templates')({
  beforeLoad: () => {
    if (isPublic) throw new Error('not available on public deploy')
  },
  component: TemplatesRoute,
})

function TemplatesRoute() {
  usePageMeta('templates', 'Browse all resumex templates - print-native, A4, fits to one page.')
  const templates = listTemplates()
  return (
    <main className="mx-auto max-w-6xl p-8">
      <header className="mb-6">
        <p className="text-muted-foreground mb-1 font-mono text-xs">// templates</p>
        <h1 className="text-2xl font-semibold tracking-tight">templates</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          click any card to open the full preview.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <TemplateCard key={t.id} meta={t} />
        ))}
      </div>
      <Footer />
    </main>
  )
}
