import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'architect',
  name: 'Architect',
  description:
    'Engineering drawing aesthetic. Drafting-sheet borders, dimension lines, monospaced labels, schedule-style entry numbering.',
  tags: ['architect', 'technical', 'single-column', 'mono'],
  fonts: {
    sans: 'Helvetica Neue, Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
