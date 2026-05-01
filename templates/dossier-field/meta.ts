import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'dossier-field',
  name: 'Dossier — Field Notes',
  description:
    'Field-report dossier with numbered FIELD NOTE entries. Slate palette, mono labels, observation-style bullets.',
  tags: ['dossier', 'field-report', 'single-column', 'slate', 'numbered'],
  fonts: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
