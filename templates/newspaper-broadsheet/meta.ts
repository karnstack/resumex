import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'newspaper-broadsheet',
  name: 'Newspaper Broadsheet',
  description:
    'Full-width single column with kicker. Centered name with double-rule underline, section heads with side rules, section glyph bullets.',
  tags: ['newspaper', 'serif', 'single-column', 'broadsheet'],
  fonts: {
    sans: "'Times New Roman', 'Liberation Serif', Georgia, serif",
  },
}
