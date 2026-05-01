import type { ResumeFrontmatter } from '@/lib/schema'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function FrontmatterForm({
  value,
  onChange,
}: {
  value: ResumeFrontmatter
  onChange: (next: ResumeFrontmatter) => void
}) {
  function update<K extends keyof ResumeFrontmatter>(key: K, val: ResumeFrontmatter[K]) {
    onChange({ ...value, [key]: val })
  }

  return (
    <div className="border-border bg-card space-y-4 rounded-xl border p-4 text-sm">
      <Field label="name" htmlFor="fm-name">
        <Input id="fm-name" value={value.name} onChange={(e) => update('name', e.target.value)} />
      </Field>
      <Field label="title" htmlFor="fm-title">
        <Input
          id="fm-title"
          value={value.title ?? ''}
          onChange={(e) => update('title', e.target.value || undefined)}
        />
      </Field>
      <Field label="email" htmlFor="fm-email">
        <Input
          id="fm-email"
          type="email"
          value={value.email ?? ''}
          onChange={(e) => update('email', e.target.value || undefined)}
        />
      </Field>
      <Field label="phone" htmlFor="fm-phone">
        <Input
          id="fm-phone"
          type="tel"
          value={value.phone ?? ''}
          onChange={(e) => update('phone', e.target.value || undefined)}
        />
      </Field>
      <Field label="location" htmlFor="fm-location">
        <Input
          id="fm-location"
          value={value.location ?? ''}
          onChange={(e) => update('location', e.target.value || undefined)}
        />
      </Field>
      {/* links + skills are richer - for v1, edit via raw markdown */}
    </div>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label
        htmlFor={htmlFor}
        className="text-muted-foreground text-xs font-medium tracking-widest uppercase"
      >
        {label}
      </Label>
      {children}
    </div>
  )
}
