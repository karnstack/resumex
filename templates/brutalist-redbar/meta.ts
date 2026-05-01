import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'brutalist-redbar',
  name: 'Brutalist Redbar',
  description:
    'Brutalist with a red slab anchored over the name. Thick red rule under the name; otherwise the same harsh borders, mono labels, and asymmetric blocks.',
  tags: ['brutalist', 'single-column', 'mono', 'borders', 'red', 'accent'],
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'IBM Plex Mono, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
