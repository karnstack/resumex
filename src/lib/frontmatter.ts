import { parse as parseYaml, stringify as stringifyYaml } from 'yaml'

export type Matter<T = unknown> = {
  data: T
  content: string
}

const FRONT_MATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

export function matter<T = Record<string, unknown>>(source: string): Matter<T> {
  const match = source.match(FRONT_MATTER_RE)
  if (!match) return { data: {} as T, content: source }
  const [, raw, rest] = match
  const data = (parseYaml(raw) ?? {}) as T
  return { data, content: rest }
}

export function matterStringify(content: string, data: unknown): string {
  const yaml = stringifyYaml(data).trimEnd()
  const body = content.startsWith('\n') ? content : `\n${content}`
  return `---\n${yaml}\n---${body}`
}
