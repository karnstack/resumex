import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'academic-lmr',
  name: 'Academic LMR',
  description:
    'Latin-Modern-feel CV. Italic for emphasis, slightly different rhythm. Small Roman-numeraled section index at the top.',
  tags: ['academic', 'serif', 'single-column', 'latin-modern', 'cv'],
  fonts: {
    serif:
      "'Latin Modern Roman', 'CMU Serif', 'Computer Modern', 'EB Garamond', Georgia, 'Times New Roman', serif",
  },
}
