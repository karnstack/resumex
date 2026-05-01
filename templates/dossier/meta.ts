import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'dossier',
  name: 'Dossier',
  description:
    'Field-report dossier. Slate palette, classification banner, mono labels and serial numbers on every entry.',
  tags: ['dossier', 'single-column', 'slate', 'mono-labels'],
  fonts: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
