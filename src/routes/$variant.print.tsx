import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { loadVariantSource } from '@/lib/load-resume'
import { parseResume } from '@/lib/parser'
import type { ParsedResume } from '@/lib/schema'
import { getTemplate } from '@/lib/template-registry'
import { isPublic } from '@/lib/mode'

export const Route = createFileRoute('/$variant/print')({
  beforeLoad: () => {
    if (isPublic) throw new Error('not available on public deploy')
  },
  component: PrintRoute,
})

function PrintRoute() {
  const { variant } = Route.useParams()
  const [parsed, setParsed] = useState<ParsedResume | null>(null)

  useEffect(() => {
    loadVariantSource(variant).then((s) => setParsed(parseResume(s)))
    document.body.dataset.print = 'true'
    return () => {
      delete document.body.dataset.print
    }
  }, [variant])

  if (!parsed) return null
  const tpl = getTemplate(parsed.meta.template)
  if (!tpl) return <main>unknown template: {parsed.meta.template}</main>
  const Template = tpl.default
  return <Template resume={parsed} />
}
