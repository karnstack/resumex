import { useMemo } from 'react'
import matter from 'gray-matter'
import { TopBar } from './TopBar'
import { FrontmatterForm } from './FrontmatterForm'
import { MarkdownEditor } from './MarkdownEditor'
import { useResume } from './use-resume'
import { getTemplate, listTemplates } from '@/lib/template-registry'
import { useNavigate } from '@tanstack/react-router'

export function Editor({ variant, variants }: { variant: string; variants: string[] }) {
  const navigate = useNavigate()
  const { state, setFrontmatter, setBody } = useResume(variant)
  const templates = useMemo(() => listTemplates(), [])

  if (state.phase === 'loading') return <main className="p-8">loading…</main>
  if (state.phase === 'error') return <main className="p-8 text-red-700">{state.error}</main>

  const { source, parsed } = state
  const body = matter(source).content
  const tpl = getTemplate(parsed.meta.template)
  const Template = tpl?.default

  return (
    <div className="flex h-screen flex-col">
      <TopBar
        variant={variant}
        variants={variants}
        templateId={parsed.meta.template}
        templateOptions={templates.map((t) => ({ id: t.id, name: t.name }))}
        onTemplateChange={(id) => setFrontmatter({ ...parsed.meta, template: id })}
        onSwitchVariant={(v) => navigate({ to: '/$variant', params: { variant: v } })}
      />
      <div className="grid flex-1 grid-cols-2 overflow-hidden">
        <aside className="overflow-auto border-r border-neutral-200 p-4" data-print-hide="true">
          <FrontmatterForm value={parsed.meta} onChange={setFrontmatter} />
          <div className="mt-4">
            <MarkdownEditor value={body} onChange={setBody} />
          </div>
        </aside>
        <main className="overflow-auto bg-neutral-50">
          <div className="p-8">
            <div className="mx-auto max-w-[8.5in] bg-white shadow-sm">
              {Template ? (
                <Template resume={parsed} />
              ) : (
                <div className="p-8">unknown template: {parsed.meta.template}</div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
