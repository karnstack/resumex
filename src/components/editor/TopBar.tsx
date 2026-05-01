import { Link } from '@tanstack/react-router'

export function TopBar({
  variant,
  variants,
  templateId,
  templateOptions,
  onTemplateChange,
  onSwitchVariant,
}: {
  variant: string
  variants: string[]
  templateId: string
  templateOptions: { id: string; name: string }[]
  onTemplateChange: (id: string) => void
  onSwitchVariant: (v: string) => void
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-neutral-200 bg-white p-3">
      <div className="flex items-center gap-3">
        <Link to="/" className="text-sm text-neutral-600 hover:underline">
          ←
        </Link>
        <select
          value={variant}
          onChange={(e) => onSwitchVariant(e.target.value)}
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
        >
          {variants.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
        <select
          value={templateId}
          onChange={(e) => onTemplateChange(e.target.value)}
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
        >
          {templateOptions.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <a
        href={`/${variant}/print`}
        target="_blank"
        rel="noreferrer"
        className="rounded bg-neutral-900 px-3 py-1.5 text-sm text-white"
      >
        print
      </a>
    </div>
  )
}
