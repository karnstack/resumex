import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'brutalist',
  name: 'Brutalist',
  description:
    'Brutalist. Mono + geometric sans, hard 2-3px black borders, asymmetric header, all-caps mono labels. Raw, computational, deliberate.',
  tags: ['brutalist', 'single-column', 'mono', 'borders', 'asymmetric'],
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'IBM Plex Mono, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
