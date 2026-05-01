import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'newspaper-times',
  name: 'Newspaper Times',
  description:
    'Times-of-London feel. Centered small-caps masthead, three narrow justified columns, Roman numeral section anchors.',
  tags: ['newspaper', 'serif', 'three-column', 'conservative'],
  fonts: {
    sans: "'Times New Roman', 'Liberation Serif', Georgia, serif",
  },
}
