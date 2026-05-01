import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'dossier-redact',
  name: 'Dossier — Redacted',
  description:
    'Dossier with playful redaction bars over select phrases. Slate palette, mono labels, classification banner.',
  tags: ['dossier', 'single-column', 'slate', 'redacted', 'mono-labels'],
  fonts: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
