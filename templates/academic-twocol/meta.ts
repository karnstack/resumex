import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'academic-twocol',
  name: 'Academic Two-Column',
  description:
    'Two-column LaTeX CV. ~30% sidebar for affiliations, contact, and skills; ~70% main with experience and publications.',
  tags: ['academic', 'serif', 'two-column', 'sidebar', 'cv'],
  fonts: {
    serif:
      "'Computer Modern', 'CMU Serif', 'Latin Modern Roman', 'EB Garamond', Georgia, 'Times New Roman', serif",
  },
}
