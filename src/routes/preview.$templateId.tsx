import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState, type CSSProperties } from 'react'
import { z } from 'zod'
import { getTemplate } from '@/lib/template-registry'
import { loadSample } from '@/lib/load-sample'
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
  // stabilize the resume ref so route re-renders (e.g., slider drags) don't
  // create a new resume object, which would otherwise re-trigger PageFrame's
  // useFitToPage measurement on every keystroke and cause visual flicker.
  const resume = useMemo(() => {
    const r = loadSample()
    r.meta.template = templateId
    return r
  }, [templateId])

  if (embed) {
    return <Template resume={resume} />
  }

  // CSS vars on the density wrapper — templates that opt into them via
  // padding-top: var(--page-pad-top, default) pick up the override; others
  // ignore it. Only set when slider is dirty so the template default wins.
  const wrapperStyle: CSSProperties = {}
  if (padTop !== undefined)
    (wrapperStyle as Record<string, string>)['--page-pad-top'] = `${padTop}mm`
  if (padBot !== undefined)
    (wrapperStyle as Record<string, string>)['--page-pad-bot'] = `${padBot}mm`

  // any of these change content height; PageFrame uses fitKey to re-measure
  const fitKey = `${density}|${padTop ?? '_'}|${padBot ?? '_'}`

  return (
    <Stage>
      <div className={`density-${density}`} style={wrapperStyle}>
        <PageFrameProvider
          forcedScale={forcedScale}
          onScaleChange={setAppliedScale}
          fitKey={fitKey}
        >
          <Template resume={resume} />
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
