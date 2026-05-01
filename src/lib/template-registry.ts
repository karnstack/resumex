import type { JSX } from 'react'
import type { ParsedResume } from './schema'

export type ResumeTemplate = (props: { resume: ParsedResume }) => JSX.Element

export type ResumeTemplateMeta = {
  id: string
  name: string
  description: string
  tags: string[]
  paper?: 'letter' | 'a4'
  fonts?: { sans?: string; serif?: string; mono?: string }
}

export type TemplateModule = {
  default: ResumeTemplate
  meta: ResumeTemplateMeta
}

// loaded from generated registry — see Task 10
import * as Generated from '@/generated/templates'

const registry: Record<string, TemplateModule> =
  (Generated as unknown as { templates: Record<string, TemplateModule> }).templates ?? {}

export function getTemplate(id: string): TemplateModule | undefined {
  return registry[id]
}

export function listTemplates(): ResumeTemplateMeta[] {
  return Object.values(registry).map((m) => m.meta)
}
