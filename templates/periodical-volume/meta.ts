import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'periodical-volume',
  name: 'Periodical — Volume',
  description:
    'Oversized Vol/Issue masthead with a running marginal date down the left edge of every section.',
  tags: ['periodical', 'editorial', 'masthead', 'marginal-date'],
  fonts: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
