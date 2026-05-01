import { matter } from './frontmatter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import type { Root, Heading, RootContent } from 'mdast'
import {
  ResumeFrontmatterSchema,
  type ParsedResume,
  type ParsedSection,
  type ParsedEntry,
} from './schema'

const mdToHtml = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeStringify, { allowDangerousHtml: true })

function renderMarkdown(nodes: RootContent[]): string {
  const fakeRoot: Root = { type: 'root', children: nodes }
  return String(mdToHtml.stringify(mdToHtml.runSync(fakeRoot)))
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function nodeText(node: { children?: unknown[] } | unknown): string {
  // depth-first text concatenation
  let out = ''
  visit(node as Root, 'text', (n: { value: string }) => {
    out += n.value
  })
  return out
}

function parseMetadataLine(text: string): { dateRange?: string; location?: string } {
  // text like "Mar 2024 – Present · Remote" — split on '·' then trim each part
  const parts = text.split('·').map((p) => p.trim())
  if (parts.length === 0) return {}
  if (parts.length === 1) return { dateRange: parts[0] || undefined }
  return { dateRange: parts[0] || undefined, location: parts[1] || undefined }
}

function isItalicOnlyParagraph(node: RootContent): boolean {
  if (node.type !== 'paragraph') return false
  const p = node as { children: RootContent[] }
  if (p.children.length !== 1) return false
  return p.children[0].type === 'emphasis'
}

function parseEntries(nodes: RootContent[]): ParsedEntry[] {
  const entries: ParsedEntry[] = []
  // group nodes by H3 boundaries
  const h3Indices: number[] = []
  nodes.forEach((n, i) => {
    if (n.type === 'heading' && (n as Heading).depth === 3) h3Indices.push(i)
  })
  for (let i = 0; i < h3Indices.length; i++) {
    const start = h3Indices[i]
    const end = h3Indices[i + 1] ?? nodes.length
    const heading = nodes[start] as Heading
    const headingText = nodeText(heading).trim()
    const atIdx = headingText.indexOf(' @ ')
    const title = atIdx >= 0 ? headingText.slice(0, atIdx).trim() : headingText
    const subtitle = atIdx >= 0 ? headingText.slice(atIdx + 3).trim() : undefined

    const restNodes = nodes.slice(start + 1, end)
    let metadata: { dateRange?: string; location?: string } = {}
    let cursor = 0
    if (restNodes[0] && isItalicOnlyParagraph(restNodes[0])) {
      const text = nodeText(restNodes[0]).trim()
      metadata = parseMetadataLine(text)
      cursor = 1
    }

    // collect first list as bullets, anything else after as freeform body
    const remaining = restNodes.slice(cursor)
    let bullets: string[] = []
    let bodyNodes: RootContent[] = []
    let bulletsTaken = false
    for (const n of remaining) {
      if (!bulletsTaken && n.type === 'list') {
        const list = n as { children: { children: RootContent[] }[] }
        bullets = list.children.map((li) => renderMarkdown(li.children))
        bulletsTaken = true
        continue
      }
      bodyNodes.push(n)
    }
    const body = bodyNodes.length > 0 ? renderMarkdown(bodyNodes) : undefined

    entries.push({
      title,
      subtitle,
      ...metadata,
      bullets,
      body,
    })
  }
  return entries
}

export function parseResume(source: string): ParsedResume {
  const { data, content } = matter(source)
  const meta = ResumeFrontmatterSchema.parse(data)

  const ast = unified().use(remarkParse).use(remarkGfm).parse(content) as Root

  // collect H2 indices
  const h2Positions: number[] = []
  ast.children.forEach((node, i) => {
    if (node.type === 'heading' && (node as Heading).depth === 2) {
      h2Positions.push(i)
    }
  })

  // build sections by chunking children between H2s
  const sections: ParsedSection[] = []
  for (let i = 0; i < h2Positions.length; i++) {
    const start = h2Positions[i]
    const end = h2Positions[i + 1] ?? ast.children.length
    const headingNode = ast.children[start] as Heading
    const name = headingNode.children
      .filter((c) => c.type === 'text')
      .map((c) => (c as { value: string }).value)
      .join('')
      .trim()
    const bodyNodes = ast.children.slice(start + 1, end)

    const entries = parseEntries(bodyNodes)
    const body =
      entries.length === 0 && bodyNodes.length > 0 ? renderMarkdown(bodyNodes) : undefined

    sections.push({
      key: slugify(name),
      name,
      entries,
      body,
    })
  }

  // honor sectionOrder
  let orderedSections = sections
  if (meta.sectionOrder) {
    const byKey = new Map(sections.map((s) => [s.key, s]))
    orderedSections = meta.sectionOrder.flatMap((key) => byKey.get(key) ?? [])
  }

  return { meta, sections: orderedSections }
}
