// Build docs/hero.png: a fanned stack of 5 template "papers" floating on a
// transparent canvas. The center sheet is the hero, four flanking sheets
// rotate outward at -10/-5/+5/+10 degrees with layered shadows.
//
// Run: pnpm hero
// Override base URL: RESUMEX_HERO_BASE=http://localhost:5173 pnpm hero
//
// First-time setup, after `pnpm install`:
//   pnpm exec playwright install chromium
//
// Re-run when a featured template's visual identity changes meaningfully.
// The output PNG is committed to git so it ships in the README without
// runtime work.

import { chromium } from "playwright"
import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")

const BASE = process.env.RESUMEX_HERO_BASE || "https://resumex.karnstack.com"
const OUTPUT = path.join(ROOT, "docs", "hero.png")

// Five hand-picked templates spanning the strongest aesthetic families.
// Order is left-to-right in the fan: outer left, inner left, center hero,
// inner right, outer right.
const TEMPLATES = [
  "swiss",
  "emerald-twocol",
  "editorial-vogue",
  "brutalist-redbar",
  "architect-blueprint",
]

// Capture viewport. A4 at 96dpi is 793x1122. 3x device scale keeps the
// glyphs sharp through GitHub's downscale to ~900px wide.
const TPL_VIEWPORT_W = 793
const TPL_VIEWPORT_H = 1122
const DSF = 3

// Final canvas. 1280x640 @ 3x dsf yields a 3840x1920 PNG. GitHub displays
// at width="900", giving roughly 4x effective resolution after downscale.
const CANVAS_W = 1280
const CANVAS_H = 640

async function captureTemplate(context, id) {
  const page = await context.newPage()
  await page.goto(`${BASE}/preview/${id}?embed=true`, {
    waitUntil: "networkidle",
    timeout: 30000,
  })
  // Brief settle for webfonts and any final layout shifts.
  await page.waitForTimeout(1500)
  const buf = await page.screenshot({ type: "png" })
  await page.close()
  console.log(`captured ${id}`)
  return buf.toString("base64")
}

function buildHtml(dataUris) {
  const [outerL, innerL, center, innerR, outerR] = dataUris
  return `<!DOCTYPE html>
<html><head><style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body {
  width: ${CANVAS_W}px;
  height: ${CANVAS_H}px;
  overflow: hidden;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
}
body { display: grid; place-items: center; }

/* Five sheets fanned out around a central hero. Layered shadows mimic
 * paper resting on a surface: tight contact + medium ambient + soft cast.
 * Hairline outline gives the card a defined edge on white backgrounds
 * while staying invisible on dark ones. */
.stack { position: relative; width: 1180px; height: 560px; }
.c {
  position: absolute;
  top: 50%; left: 50%;
  background: #fefefe;
  transform-origin: center;
  outline: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow:
    0 1px 2px rgba(15, 23, 42, 0.08),
    0 8px 16px -4px rgba(15, 23, 42, 0.10),
    0 24px 48px -12px rgba(15, 23, 42, 0.18);
}
.c img {
  display: block;
  width: 100%;
  height: auto;
}
.c1 { width: 280px; height: 396px; transform: translate(calc(-50% - 380px), -50%) rotate(-10deg); z-index: 1; }
.c2 { width: 312px; height: 442px; transform: translate(calc(-50% - 200px), -50%) rotate(-5deg); z-index: 2; }
.c3 { width: 348px; height: 492px; transform: translate(-50%, -50%) rotate(0deg); z-index: 3;
  box-shadow:
    0 2px 4px rgba(15, 23, 42, 0.12),
    0 16px 32px -8px rgba(15, 23, 42, 0.15),
    0 40px 80px -16px rgba(15, 23, 42, 0.22);
}
.c4 { width: 312px; height: 442px; transform: translate(calc(-50% + 200px), -50%) rotate(5deg); z-index: 2; }
.c5 { width: 280px; height: 396px; transform: translate(calc(-50% + 380px), -50%) rotate(10deg); z-index: 1; }
</style></head>
<body>
<div class="stack">
  <div class="c c1"><img src="data:image/png;base64,${outerL}"/></div>
  <div class="c c2"><img src="data:image/png;base64,${innerL}"/></div>
  <div class="c c3"><img src="data:image/png;base64,${center}"/></div>
  <div class="c c4"><img src="data:image/png;base64,${innerR}"/></div>
  <div class="c c5"><img src="data:image/png;base64,${outerR}"/></div>
</div>
</body></html>`
}

async function main() {
  if (TEMPLATES.length !== 5) {
    throw new Error(`expected 5 templates, got ${TEMPLATES.length}`)
  }

  console.log(`base: ${BASE}`)
  const browser = await chromium.launch()

  // Pass 1: capture each template at A4 native size, base64 the PNG so we
  // can inline it into the composition page (Chromium blocks file:// reads
  // from about:blank origins so data URIs are the simplest path).
  const captureCtx = await browser.newContext({
    viewport: { width: TPL_VIEWPORT_W, height: TPL_VIEWPORT_H },
    deviceScaleFactor: DSF,
  })
  const dataUris = []
  for (const id of TEMPLATES) {
    dataUris.push(await captureTemplate(captureCtx, id))
  }
  await captureCtx.close()

  // Pass 2: render the composition at the canvas size and screenshot with
  // omitBackground so the PNG ships with full alpha transparency.
  const composeCtx = await browser.newContext({
    viewport: { width: CANVAS_W, height: CANVAS_H },
    deviceScaleFactor: DSF,
  })
  const page = await composeCtx.newPage()
  await page.setContent(buildHtml(dataUris), { waitUntil: "networkidle" })
  await page.waitForTimeout(500)

  await mkdir(path.dirname(OUTPUT), { recursive: true })
  await page.screenshot({
    path: OUTPUT,
    type: "png",
    omitBackground: true,
  })

  await browser.close()

  const { size } = await import("node:fs/promises").then((m) => m.stat(OUTPUT))
  console.log(
    `wrote ${path.relative(ROOT, OUTPUT)} (${(size / 1024).toFixed(1)} KB)`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
