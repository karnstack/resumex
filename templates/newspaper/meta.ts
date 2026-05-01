import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'newspaper',
  name: 'Newspaper',
  description:
    'Old-style newspaper. Masthead with double rules, edition info, two-column experience body in justified serif.',
  tags: ['newspaper', 'serif', 'masthead', 'multi-column'],
  fonts: {
    sans: "'Times New Roman', 'Liberation Serif', Georgia, serif",
  },
}
