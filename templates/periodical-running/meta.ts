import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'periodical-running',
  name: 'Periodical — Running',
  description:
    'Running header band repeats per section ("Avery Park · Experience"); each section gets its own chrome.',
  tags: ['periodical', 'editorial', 'running-header', 'section-bands'],
  fonts: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
