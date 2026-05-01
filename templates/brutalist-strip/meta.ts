import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'brutalist-strip',
  name: 'Brutalist Strip',
  description:
    'Brutalist with a vertical mono-coded contact strip on the right edge. Main body left, sidebar right. Black ink on white, no chromatic accent.',
  tags: ['brutalist', 'two-column', 'sidebar-right', 'mono', 'borders'],
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'IBM Plex Mono, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
