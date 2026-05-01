import { createFileRoute } from '@tanstack/react-router'
import { getTemplate } from '@/lib/template-registry'
import { loadSample } from '@/lib/load-sample'

export const Route = createFileRoute('/preview/$templateId')({
  component: PreviewRoute,
})

function PreviewRoute() {
  const { templateId } = Route.useParams()
  const tpl = getTemplate(templateId)
  if (!tpl) {
    return (
      <main className="p-8">
        <h1>unknown template: {templateId}</h1>
      </main>
    )
  }
  const Template = tpl.default
  // render with sample meta forced to this template's id so frontmatter doesn't override
  const resume = loadSample()
  resume.meta.template = templateId
  return <Template resume={resume} />
}
