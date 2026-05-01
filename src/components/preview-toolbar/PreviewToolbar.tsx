import { Link } from '@tanstack/react-router'

export type Density = 'tight' | 'regular' | 'roomy'
const DENSITIES: Density[] = ['tight', 'regular', 'roomy']

const SCALE_MIN = 0.5
const SCALE_MAX = 1.4
const SCALE_STEP = 0.01

const PAD_MIN = 0
const PAD_MAX = 30
const PAD_STEP = 1

/**
 * PreviewToolbar - fixed-position floating controls for any template/resume
 * preview. Hidden in print via data-print-hide. Two clusters:
 *   - bottom-left: back link + slug pill + print button
 *   - top-right: tune panel - scale slider + density selector
 *
 * Scale is informational unless `onScaleChange` is provided. Density is
 * informational unless `onDensityChange` is provided.
 */
export type PreviewToolbarProps = {
  slug: string
  backTo?: string
  backLabel?: string
  scale?: number
  scaleOverridden?: boolean
  onScaleChange?: (next: number | undefined) => void
  density?: Density
  defaultDensity?: Density
  onDensityChange?: (next: Density) => void
  /** top padding (mm) - undefined = template default */
  padTop?: number
  /** bottom padding (mm) - undefined = template default */
  padBot?: number
  defaultPadTop?: number
  defaultPadBot?: number
  onPadTopChange?: (next: number | undefined) => void
  onPadBotChange?: (next: number | undefined) => void
}

export function PreviewToolbar({
  slug,
  backTo = '/',
  backLabel = 'home',
  scale = 1,
  scaleOverridden = false,
  onScaleChange,
  density = 'regular',
  defaultDensity = 'regular',
  onDensityChange,
  padTop,
  padBot,
  defaultPadTop = 22,
  defaultPadBot = 6,
  onPadTopChange,
  onPadBotChange,
}: PreviewToolbarProps) {
  const tuneVisible = onScaleChange || onDensityChange || onPadTopChange || onPadBotChange
  const padTopActive = padTop ?? defaultPadTop
  const padBotActive = padBot ?? defaultPadBot
  const dirty =
    scaleOverridden || density !== defaultDensity || padTop !== undefined || padBot !== undefined

  return (
    <>
      <div data-print-hide="true" className="fixed bottom-6 left-6 z-50 flex items-center gap-2">
        <Link
          to={backTo}
          className="border-border/70 bg-background/85 text-muted-foreground hover:border-border hover:text-foreground inline-flex h-[34px] items-center gap-2 rounded-md border px-3 font-mono text-[11px] no-underline backdrop-blur transition-colors"
        >
          ← {backLabel}
        </Link>
        <span
          title={`scale ${Math.round(scale * 100)}%`}
          className="border-border/70 bg-background/85 text-muted-foreground inline-flex h-[34px] items-center rounded-md border px-3 font-mono text-[11px] backdrop-blur"
        >
          /{slug}
        </span>
        <button
          type="button"
          onClick={() => window.print()}
          className="bg-primary text-primary-foreground inline-flex h-[34px] cursor-pointer items-center gap-2 rounded-md border-0 px-4 text-[12px] font-semibold transition-transform duration-100 ease-out hover:scale-[1.02] active:scale-[0.98]"
          style={{ boxShadow: 'var(--shadow-derek)' }}
        >
          print / pdf
        </button>
      </div>

      {tuneVisible && (
        <div
          data-print-hide="true"
          className="border-border/70 bg-background/85 fixed top-6 right-6 z-50 flex flex-col gap-5 rounded-md border p-3.5 font-mono text-[11px] backdrop-blur"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground/70">// tune</span>
            {dirty && (
              <button
                type="button"
                onClick={() => {
                  onScaleChange?.(undefined)
                  onDensityChange?.(defaultDensity)
                  onPadTopChange?.(undefined)
                  onPadBotChange?.(undefined)
                }}
                className="text-muted-foreground hover:text-foreground cursor-pointer rounded-sm border-0 bg-transparent px-1.5 py-0.5 text-[10px]"
              >
                reset
              </button>
            )}
          </div>

          {onScaleChange && (
            <label className="flex flex-col gap-1.5">
              <span className="text-muted-foreground flex items-center justify-between gap-3">
                <span>scale</span>
                <span className="text-foreground tabular-nums">
                  {scale.toFixed(2)}x{!scaleOverridden && ' · auto'}
                </span>
              </span>
              <input
                type="range"
                min={SCALE_MIN}
                max={SCALE_MAX}
                step={SCALE_STEP}
                value={scale}
                onChange={(e) => onScaleChange(parseFloat(e.target.value))}
                className="cursor-pointer"
              />
            </label>
          )}

          {onDensityChange && (
            <label className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">density</span>
              <div className="border-border/60 flex overflow-hidden rounded-md border">
                {DENSITIES.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => onDensityChange(d)}
                    className={`cursor-pointer border-0 px-2 py-1 text-[10px] ${
                      density === d
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </label>
          )}

          {onPadTopChange && (
            <label className="flex flex-col gap-1.5">
              <span className="text-muted-foreground flex items-center justify-between gap-3">
                <span>pad top</span>
                <span className="text-foreground tabular-nums">
                  {padTopActive}mm
                  {padTop === undefined && ' · auto'}
                </span>
              </span>
              <input
                type="range"
                min={PAD_MIN}
                max={PAD_MAX}
                step={PAD_STEP}
                value={padTopActive}
                onChange={(e) => onPadTopChange(parseFloat(e.target.value))}
                className="cursor-pointer"
              />
            </label>
          )}

          {onPadBotChange && (
            <label className="flex flex-col gap-1.5">
              <span className="text-muted-foreground flex items-center justify-between gap-3">
                <span>pad bottom</span>
                <span className="text-foreground tabular-nums">
                  {padBotActive}mm
                  {padBot === undefined && ' · auto'}
                </span>
              </span>
              <input
                type="range"
                min={PAD_MIN}
                max={PAD_MAX}
                step={PAD_STEP}
                value={padBotActive}
                onChange={(e) => onPadBotChange(parseFloat(e.target.value))}
                className="cursor-pointer"
              />
            </label>
          )}
        </div>
      )}
    </>
  )
}
