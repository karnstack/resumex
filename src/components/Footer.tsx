/**
 * KarnstackWordmark - gradient-text logo, mirrors the karnstack site nav logo.
 * Linear gradient from --primary → --primary-gradient-end, text-fill clipped.
 */
function KarnstackWordmark() {
  return (
    <a
      href="https://karnstack.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold tracking-tight transition-opacity hover:opacity-80"
      style={{
        background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary-gradient-end) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      karnstack
    </a>
  )
}

/**
 * Footer - small "powered by karnstack" line + repo link. Centered, muted,
 * generous vertical padding to match the karnstack site aesthetic.
 *
 * Hidden in print via data-print-hide.
 */
export function Footer() {
  return (
    <footer
      data-print-hide="true"
      className="text-muted-foreground/70 mt-16 flex flex-col items-center justify-center gap-1 px-6 py-12 text-xs sm:flex-row sm:gap-2"
    >
      <a
        href="https://github.com/karnstack/resumex"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-muted-foreground font-mono transition-colors"
      >
        github.com/karnstack/resumex
      </a>
      <span className="text-muted-foreground/40 hidden sm:inline">·</span>
      <span>
        powered by <KarnstackWordmark />
      </span>
    </footer>
  )
}
