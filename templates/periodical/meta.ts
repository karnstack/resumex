import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'periodical',
  name: 'Periodical',
  description:
    'Contemporary-magazine running header bar with edition number, vol/issue marks, and an editorial body.',
  tags: ['periodical', 'editorial', 'single-column', 'running-header'],
  fonts: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
