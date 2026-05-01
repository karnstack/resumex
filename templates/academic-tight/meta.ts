import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'academic-tight',
  name: 'Academic Tight',
  description:
    'Publication-heavy LaTeX CV. Tighter spacing, 9.5pt body, reduced section gaps, hanging-indent reference list.',
  tags: ['academic', 'serif', 'single-column', 'tight', 'cv', 'publications'],
  fonts: {
    serif:
      "'Computer Modern', 'CMU Serif', 'Latin Modern Roman', 'EB Garamond', Georgia, 'Times New Roman', serif",
  },
}
