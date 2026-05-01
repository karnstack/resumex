import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

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
    <div className="border-border bg-background flex items-center justify-between gap-3 border-b p-3">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          ←
        </Link>
        <select
          value={variant}
          onChange={(e) => onSwitchVariant(e.target.value)}
          className="border-input bg-background text-foreground focus:border-ring focus:ring-ring/50 rounded-md border px-3 py-1.5 text-sm transition-[color,box-shadow] outline-none focus:ring-2"
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
          className="border-input bg-background text-foreground focus:border-ring focus:ring-ring/50 rounded-md border px-3 py-1.5 text-sm transition-[color,box-shadow] outline-none focus:ring-2"
        >
          {templateOptions.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <Button asChild size="sm">
        <a href={`/${variant}/print`} target="_blank" rel="noreferrer">
          print
        </a>
      </Button>
    </div>
  )
}
