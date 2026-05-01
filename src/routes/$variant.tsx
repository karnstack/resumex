import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { loadVariantSource } from '@/lib/load-resume'
import { parseResume } from '@/lib/parser'
import type { ParsedResume } from '@/lib/schema'
import { getTemplate } from '@/lib/template-registry'
import { isPublic } from '@/lib/mode'

export const Route = createFileRoute('/$variant')({
  beforeLoad: () => {
    if (isPublic) throw new Error('not available on public deploy')
  },
  component: VariantRoute,
})

function VariantRoute() {
  const { variant } = Route.useParams()
  const navigate = useNavigate()
  const [source, setSource] = useState<string | null>(null)
  const [parsed, setParsed] = useState<ParsedResume | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadVariantSource(variant)
      .then((src) => {
        setSource(src)
        try {
          setParsed(parseResume(src))
        } catch (e) {
          setError(String(e))
        }
      })
      .catch((e) => setError(String(e)))
  }, [variant])

  if (error) return <main className="p-8 text-red-700">{error}</main>
  if (!parsed) return <main className="p-8">loading…</main>

  const tpl = getTemplate(parsed.meta.template)
  if (!tpl) {
    return (
      <main className="p-8">
        <h1>unknown template: {parsed.meta.template}</h1>
      </main>
    )
  }
  const Template = tpl.default

  return (
    <div className="grid h-screen grid-cols-[1fr_1fr]">
      <aside className="overflow-auto border-r border-neutral-200 p-4" data-print-hide="true">
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() => navigate({ to: '/' })}
            className="text-sm text-neutral-600 hover:underline"
          >
            ← back
          </button>
          <a
            href={`/${variant}/print`}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-neutral-900 px-3 py-1.5 text-sm text-white"
          >
            print
          </a>
        </div>
        {/* editor lands in Phase E; for now show source for inspection */}
        <pre className="whitespace-pre-wrap break-words rounded bg-neutral-100 p-3 text-xs">
          {source}
        </pre>
      </aside>
      <main className="overflow-auto bg-neutral-50">
        <div className="p-8">
          <div className="mx-auto max-w-[8.5in] bg-white shadow-sm">
            <Template resume={parsed} />
          </div>
        </div>
      </main>
    </div>
  )
}
