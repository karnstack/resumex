import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'newspaper-gazette',
  name: 'Newspaper Gazette',
  description:
    'Gazette-style. Italic small-caps masthead, ornamental glyph, running header per section, em-rules between entries.',
  tags: ['newspaper', 'serif', 'gazette', 'ornamental'],
  fonts: {
    sans: "'Times New Roman', 'Liberation Serif', Georgia, serif",
  },
}
