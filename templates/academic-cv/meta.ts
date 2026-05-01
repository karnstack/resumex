import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'academic-cv',
  name: 'Academic CV',
  description:
    'Publications-forward LaTeX CV. Right-aligned date column, proper hanging-indent reference list, dense typesetting.',
  tags: ['academic', 'serif', 'single-column', 'cv', 'publications', 'date-column'],
  fonts: {
    serif:
      "'Computer Modern', 'CMU Serif', 'Latin Modern Roman', 'EB Garamond', Georgia, 'Times New Roman', serif",
  },
}
