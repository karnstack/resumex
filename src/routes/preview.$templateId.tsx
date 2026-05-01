import { createFileRoute } from '@tanstack/react-router'
import { useState, type CSSProperties } from 'react'
import { z } from 'zod'
import { getTemplate } from '@/lib/template-registry'
import { usePageMeta } from '@/lib/use-page-meta'
import { PreviewToolbar, type Density } from '@/components/preview-toolbar/PreviewToolbar'
import { PageFrameProvider } from '@/components/page-frame/PageFrame'
import { Stage } from '@/components/stage/Stage'

const searchSchema = z.object({
  embed: z.coerce.boolean().optional(),
})

export const Route = createFileRoute('/preview/$templateId')({
  validateSearch: searchSchema,
  component: PreviewRoute,
})

const DEFAULT_DENSITY: Density = 'regular'

function PreviewRoute() {
  const { templateId } = Route.useParams()
  const { embed } = Route.useSearch()
  const tpl = getTemplate(templateId)
  usePageMeta(tpl ? `${tpl.meta.name} preview` : 'preview', tpl?.meta.description)
  const [appliedScale, setAppliedScale] = useState(1)
  const [forcedScale, setForcedScale] = useState<number | undefined>(undefined)
  const [density, setDensity] = useState<Density>(DEFAULT_DENSITY)
  const [padTop, setPadTop] = useState<number | undefined>(undefined)
  const [padBot, setPadBot] = useState<number | undefined>(undefined)

  if (!tpl) {
    return (
      <main className="p-8">
        <h1>unknown template: {templateId}</h1>
      </main>
    )
  }

  const Template = tpl.default

  if (embed) {
    return <Template />
  }

  const wrapperStyle: CSSProperties = {}
  if (padTop !== undefined)
    (wrapperStyle as Record<string, string>)['--page-pad-top'] = `${padTop}mm`
  if (padBot !== undefined)
    (wrapperStyle as Record<string, string>)['--page-pad-bot'] = `${padBot}mm`

  const fitKey = `${density}|${padTop ?? '_'}|${padBot ?? '_'}`

  return (
    <Stage>
      <div className={`density-${density}`} style={wrapperStyle}>
        <PageFrameProvider
          forcedScale={forcedScale}
          onScaleChange={setAppliedScale}
          fitKey={fitKey}
        >
          <Template />
        </PageFrameProvider>
      </div>
      <PreviewToolbar
        slug={templateId}
        backTo="/templates"
        backLabel="all templates"
        scale={appliedScale}
        scaleOverridden={forcedScale !== undefined}
        onScaleChange={setForcedScale}
        density={density}
        defaultDensity={DEFAULT_DENSITY}
        onDensityChange={setDensity}
        padTop={padTop}
        padBot={padBot}
        onPadTopChange={setPadTop}
        onPadBotChange={setPadBot}
      />
    </Stage>
  )
}
