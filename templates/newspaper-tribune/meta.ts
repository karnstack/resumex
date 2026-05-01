import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'newspaper-tribune',
  name: 'Newspaper Tribune',
  description:
    'Tabloid-style. Oversized condensed serif headline as the name, italic deck, single-column body, dropcap lede.',
  tags: ['newspaper', 'tabloid', 'serif', 'single-column'],
  fonts: {
    sans: "'Times New Roman', 'Liberation Serif', Georgia, serif",
  },
}
