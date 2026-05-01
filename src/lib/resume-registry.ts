import type { JSX } from 'react'

export type ResumeComponent = () => JSX.Element

export type ResumeMeta = {
  variant: string
  displayName?: string
}

export type ResumeModule = {
  default: ResumeComponent
  meta: ResumeMeta
}

import * as Generated from '@/generated/resumes'

const registry: Record<string, ResumeModule> =
  (Generated as unknown as { resumes: Record<string, ResumeModule> }).resumes ?? {}

export function getResume(variant: string): ResumeModule | undefined {
  return registry[variant]
}

export function listResumes(): ResumeMeta[] {
  return Object.values(registry).map((m) => m.meta)
}
