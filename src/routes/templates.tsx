import { createFileRoute } from '@tanstack/react-router'
import { listTemplates } from '@/lib/template-registry'
import { isPublic } from '@/lib/mode'

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
      <h1 className="mb-6 text-2xl font-semibold">templates</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <div key={t.id} className="rounded border border-neutral-200">
            <iframe
              src={`/preview/${t.id}`}
              className="h-[420px] w-full border-b border-neutral-200"
              title={t.name}
              loading="lazy"
            />
            <div className="p-3">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-neutral-600">{t.description}</div>
              <div className="mt-2 flex flex-wrap gap-1">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
