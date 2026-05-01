import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'dossier-stamped',
  name: 'Dossier — Stamped',
  description:
    'Dossier with a rotated burgundy "APPROVED" stamp near the header. Slate palette, double-rule borders, mono labels.',
  tags: ['dossier', 'single-column', 'slate', 'stamp', 'burgundy'],
  fonts: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
