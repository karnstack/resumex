import { parseResume } from './parser'
import type { ParsedResume } from './schema'

export async function listVariants(): Promise<string[]> {
  const r = await fetch('/api/resumes')
  if (!r.ok) throw new Error(`list failed: ${r.status}`)
  const json = (await r.json()) as { variants: string[] }
  return json.variants
}

export async function loadVariantSource(variant: string): Promise<string> {
  const r = await fetch(`/api/resumes/${encodeURIComponent(variant)}`)
  if (r.status === 404) throw new Error('not found')
  if (!r.ok) throw new Error(`load failed: ${r.status}`)
  return r.text()
}

export async function loadVariant(variant: string): Promise<ParsedResume> {
  const source = await loadVariantSource(variant)
  return parseResume(source)
}

export async function saveVariantSource(variant: string, content: string): Promise<void> {
  const r = await fetch('/api/save', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ variant, content }),
  })
  if (!r.ok) throw new Error(`save failed: ${r.status}`)
}
