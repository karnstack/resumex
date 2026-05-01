import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'terminal',
  name: 'Terminal',
  description:
    'CLI / shell aesthetic. Prompt-style sections, cyan syntax accents on white, full mono.',
  tags: ['terminal', 'mono', 'single-column', 'developer'],
  fonts: {
    mono: "'JetBrains Mono', 'IBM Plex Mono', 'Fira Code', Menlo, Consolas, ui-monospace, monospace",
  },
}
