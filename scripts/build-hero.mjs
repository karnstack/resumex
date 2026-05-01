// Build docs/hero.png: a 1280x640 grid of 8 template thumbnails captured
// from the live deployment.
//
// Run: pnpm hero
// Override base URL: RESUMEX_HERO_BASE=http://localhost:5173 pnpm hero
//
// First-time setup, after `pnpm install`:
//   pnpm exec playwright install chromium
//
// Re-run this whenever a featured template's visual identity changes
// meaningfully (a swap of typography, color, or layout). The output PNG
// is committed to git so it ships in the README without runtime work.

import { chromium } from "playwright"
import sharp from "sharp"
import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")

const BASE = process.env.RESUMEX_HERO_BASE || "https://resumex.karnstack.com"
const OUTPUT = path.join(ROOT, "docs", "hero.png")

// Ordered for visual rhythm: minimal, modern, expressive, mono on row 1;
// bold, magazine, technical, formal on row 2.
const TEMPLATES = [
  "swiss",
  "emerald-twocol",
  "editorial-vogue",
  "terminal",
  "brutalist-redbar",
  "magazine-issue",
  "architect-blueprint",
  "banker-monogram",
]

const COLS = 4
const ROWS = 2
const CELL = 320
const VIEWPORT = 793 // top square of A4 at 96dpi

async function captureOne(context, id) {
  const page = await context.newPage()
  const url = `${BASE}/preview/${id}?embed=true`
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 })
  // Brief settle for webfonts and any final layout shifts.
  await page.waitForTimeout(1500)
  const buf = await page.screenshot({ type: "png" })
  await page.close()
  console.log(`captured ${id}`)
  return buf
}

async function main() {
  if (TEMPLATES.length !== COLS * ROWS) {
    throw new Error(
      `expected ${COLS * ROWS} templates, got ${TEMPLATES.length}`,
    )
  }

  console.log(`base: ${BASE}`)
  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: VIEWPORT, height: VIEWPORT },
    deviceScaleFactor: 2, // retina-quality source for the downscale
  })

  const buffers = []
  for (const id of TEMPLATES) {
    buffers.push(await captureOne(context, id))
  }
  await browser.close()

  // Resize each capture to CELL x CELL (top-aligned crop). Using the top
  // half of A4 keeps the resume header and the start of the first section,
  // which is where the visual identity lives.
  const cells = await Promise.all(
    buffers.map((b) =>
      sharp(b)
        .resize(CELL, CELL, { fit: "cover", position: "top" })
        .toBuffer(),
    ),
  )

  const composite = cells.map((input, i) => ({
    input,
    left: (i % COLS) * CELL,
    top: Math.floor(i / COLS) * CELL,
  }))

  await mkdir(path.dirname(OUTPUT), { recursive: true })
  await sharp({
    create: {
      width: CELL * COLS,
      height: CELL * ROWS,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite(composite)
    .png({ compressionLevel: 9 })
    .toFile(OUTPUT)

  const { size } = await import("node:fs/promises").then((m) =>
    m.stat(OUTPUT),
  )
  console.log(`wrote ${path.relative(ROOT, OUTPUT)} (${(size / 1024).toFixed(1)} KB)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
