import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'brutalist-stamp',
  name: 'Brutalist Stamp',
  description:
    'Brutalist with date and role rendered as rotated mono-caps stamps. Solid black inverted blocks, slight tilt, harsh borders elsewhere.',
  tags: ['brutalist', 'single-column', 'mono', 'stamp', 'borders'],
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'IBM Plex Mono, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
