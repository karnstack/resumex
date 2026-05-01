import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'indexcard',
  name: 'Index Card',
  description:
    'Library-card aesthetic. Top-band tab marker, card-style header, monospaced numerals over a subtle horizontal rule grid.',
  tags: ['indexcard', 'library', 'single-column', 'mono-numerals'],
  fonts: {
    sans: 'ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
  },
}
