import { createFileRoute } from '@tanstack/react-router'
import { useState, type CSSProperties } from 'react'
import { getResume } from '@/lib/resume-registry'
import { usePageMeta } from '@/lib/use-page-meta'
import { PreviewToolbar, type Density } from '@/components/preview-toolbar/PreviewToolbar'
import { PageFrameProvider } from '@/components/page-frame/PageFrame'
import { Stage } from '@/components/stage/Stage'

export const Route = createFileRoute('/$variant')({
  component: VariantRoute,
})

const DEFAULT_DENSITY: Density = 'regular'

function VariantRoute() {
  const { variant } = Route.useParams()
  const mod = getResume(variant)
  const displayName = mod?.meta.displayName ?? variant
  usePageMeta(displayName, `${displayName} - resumex by karnstack.com.`)
  const [appliedScale, setAppliedScale] = useState(1)
  const [forcedScale, setForcedScale] = useState<number | undefined>(undefined)
  const [density, setDensity] = useState<Density>(DEFAULT_DENSITY)
  const [padTop, setPadTop] = useState<number | undefined>(undefined)
  const [padBot, setPadBot] = useState<number | undefined>(undefined)

  if (!mod) {
    return (
      <main className="p-8">
        <h1>unknown resume: {variant}</h1>
      </main>
    )
  }

  const Resume = mod.default

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
          <Resume />
        </PageFrameProvider>
      </div>
      <PreviewToolbar
        slug={variant}
        backTo="/"
        backLabel="home"
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
