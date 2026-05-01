import { z } from 'zod'

export const LinkSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
})

export const SkillGroupSchema = z.object({
  group: z.string().min(1),
  items: z.array(z.string().min(1)).min(1),
})

export const ResumeFrontmatterSchema = z
  .object({
    template: z.string().min(1),
    name: z.string().min(1),
    title: z.string().optional(),
    location: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    links: z.array(LinkSchema).optional(),
    skills: z.array(SkillGroupSchema).optional(),
    sectionOrder: z.array(z.string()).optional(),
    paper: z.enum(['letter', 'a4']).optional(),
  })
  .strict()

export type ResumeFrontmatter = z.infer<typeof ResumeFrontmatterSchema>

export type ParsedEntry = {
  title: string
  subtitle?: string
  dateRange?: string
  location?: string
  bullets: string[] // each bullet rendered as HTML
  body?: string // any non-bullet markdown after the metadata line, as HTML
}

export type ParsedSection = {
  key: string // 'experience' (slug of name)
  name: string // 'Experience'
  entries: ParsedEntry[]
  body?: string // HTML — used when entries.length === 0
}

export type ParsedResume = {
  meta: ResumeFrontmatter
  sections: ParsedSection[]
}
