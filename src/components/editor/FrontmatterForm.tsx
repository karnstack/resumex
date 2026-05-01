import type { ResumeFrontmatter } from '@/lib/schema'

export function FrontmatterForm({
  value,
  onChange,
}: {
  value: ResumeFrontmatter
  onChange: (next: ResumeFrontmatter) => void
}) {
  function update<K extends keyof ResumeFrontmatter>(
    key: K,
    val: ResumeFrontmatter[K],
  ) {
    onChange({ ...value, [key]: val })
  }

  return (
    <div className="space-y-3 rounded border border-neutral-200 p-3 text-sm">
      <Field label="name">
        <input
          className="w-full rounded border border-neutral-300 px-2 py-1"
          value={value.name}
          onChange={(e) => update('name', e.target.value)}
        />
      </Field>
      <Field label="title">
        <input
          className="w-full rounded border border-neutral-300 px-2 py-1"
          value={value.title ?? ''}
          onChange={(e) => update('title', e.target.value || undefined)}
        />
      </Field>
      <Field label="email">
        <input
          className="w-full rounded border border-neutral-300 px-2 py-1"
          value={value.email ?? ''}
          onChange={(e) => update('email', e.target.value || undefined)}
        />
      </Field>
      <Field label="phone">
        <input
          className="w-full rounded border border-neutral-300 px-2 py-1"
          value={value.phone ?? ''}
          onChange={(e) => update('phone', e.target.value || undefined)}
        />
      </Field>
      <Field label="location">
        <input
          className="w-full rounded border border-neutral-300 px-2 py-1"
          value={value.location ?? ''}
          onChange={(e) => update('location', e.target.value || undefined)}
        />
      </Field>
      {/* links + skills are richer — for v1, edit via raw markdown */}
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
        {label}
      </span>
      {children}
    </label>
  )
}
