import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'brutalist-grid',
  name: 'Brutalist Grid',
  description:
    'Brutalist with a faint structural grid printed across the page. Content blocks anchor to grid intersections; harsh borders, mono labels, no chromatic accent.',
  tags: ['brutalist', 'single-column', 'mono', 'grid', 'borders'],
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'IBM Plex Mono, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
