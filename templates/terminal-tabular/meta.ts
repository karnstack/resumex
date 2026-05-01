import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'terminal-tabular',
  name: 'Terminal Tabular',
  description:
    'Tabular two-column mono. Left keys (role, company, tenure, loc), right values. The dumped-record variant.',
  tags: ['terminal', 'mono', 'two-column', 'tabular', 'developer'],
  fonts: {
    mono: "'JetBrains Mono', 'IBM Plex Mono', 'Fira Code', Menlo, Consolas, ui-monospace, monospace",
  },
}
