import { useMemo, useState } from 'react'
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
  const all = listTemplates()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return all
    return all.filter((t) => {
      const haystack = `${t.id} ${t.name} ${t.description} ${t.tags.join(' ')}`.toLowerCase()
      // every space-separated term must match somewhere - tiny AND search
      return q.split(/\s+/).every((term) => haystack.includes(term))
    })
  }, [all, query])

  return (
    <main className="mx-auto max-w-6xl p-8">
      <header className="mb-6">
        <p className="text-muted-foreground mb-1 font-mono text-xs">// templates</p>
        <h1 className="text-2xl font-semibold tracking-tight">templates</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          click any card to open the full preview, or copy a prompt to fork into your own resume.
        </p>
      </header>

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search by name, tag, or description"
            aria-label="search templates"
            className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border py-2 pr-3 pl-9 font-mono text-sm shadow-xs outline-none focus-visible:ring-2"
          />
        </div>
        <span className="text-muted-foreground font-mono text-xs">
          {filtered.length} of {all.length}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="border-border bg-card text-muted-foreground rounded-md border border-dashed p-10 text-center font-mono text-sm">
          no templates match "{query}"
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TemplateCard key={t.id} meta={t} />
          ))}
        </div>
      )}

      <Footer />
    </main>
  )
}
