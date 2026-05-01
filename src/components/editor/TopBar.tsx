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
    <div className="flex items-center justify-between gap-3 border-b border-border bg-background p-3">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ←
        </Link>
        <select
          value={variant}
          onChange={(e) => onSwitchVariant(e.target.value)}
          className="rounded-md border border-input bg-background px-3 py-1.5 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/50 transition-[color,box-shadow]"
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
          className="rounded-md border border-input bg-background px-3 py-1.5 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/50 transition-[color,box-shadow]"
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
