import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'terminal-prompt',
  name: 'Terminal Prompt',
  description:
    'Every line is a prompt response. Slate accent, > markers throughout, full mono on white.',
  tags: ['terminal', 'mono', 'single-column', 'developer'],
  fonts: {
    mono: "'JetBrains Mono', 'IBM Plex Mono', 'Fira Code', Menlo, Consolas, ui-monospace, monospace",
  },
}
