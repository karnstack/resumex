import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function DossierStamped() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-dossier-stamped">
      <div className="dst-classbar" aria-hidden="true">
        <span className="dst-classbar-left">CONFIDENTIAL — SUBJECT FILE</span>
        <span className="dst-classbar-mid">CLEARED FOR INTERVIEW</span>
        <span className="dst-classbar-right">№ AP-2026-0413</span>
      </div>

      <header className="dst-head">
        <div className="dst-head-main">
          <div className="dst-eyebrow">FILE / SUBJECT BRIEF / VOL. 03</div>
          <h1 className="dst-name">Avery Park</h1>
          <div className="dst-title">Senior Software Engineer · Platform</div>
          <dl className="dst-id">
            <div className="dst-id-row">
              <dt>SUBJECT</dt>
              <dd>PARK, AVERY</dd>
              <dt>STATION</dt>
              <dd>NEW YORK, NY</dd>
            </div>
            <div className="dst-id-row">
              <dt>CASE OFFICER</dt>
              <dd>K. STILLWATER</dd>
              <dt>CLEARANCE</dt>
              <dd>L4 / PLATFORM</dd>
            </div>
            <div className="dst-id-row">
              <dt>CONTACT</dt>
              <dd>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </dd>
              <dt>CHANNEL</dt>
              <dd>
                <a href="https://averypark.dev">averypark.dev</a>
              </dd>
            </div>
            <div className="dst-id-row">
              <dt>HANDLES</dt>
              <dd>github.com/averypark · in/averypark</dd>
              <dt>FILED</dt>
              <dd>02 MAY 2026</dd>
            </div>
          </dl>
        </div>
        <div className="dst-stamp" aria-hidden="true">
          <div className="dst-stamp-inner">
            <div className="dst-stamp-top">APPROVED</div>
            <div className="dst-stamp-mid">FOR INTERVIEW</div>
            <div className="dst-stamp-bot">02 · MAY · 2026</div>
          </div>
        </div>
      </header>

      <section className="dst-section" data-print-entry="true">
        <div className="dst-section-head">
          <span className="dst-sec-num">§ 01</span>
          <h2>Subject Profile</h2>
          <span className="dst-sec-rule" aria-hidden="true" />
        </div>
        <p className="dst-summary">
          Subject builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Operates on the principle that software should be
          boring in production and useful to its users.
        </p>
      </section>

      <section className="dst-section" data-print-entry="true">
        <div className="dst-section-head">
          <span className="dst-sec-num">§ 02</span>
          <h2>Operational History</h2>
          <span className="dst-sec-rule" aria-hidden="true" />
        </div>

        <article className="dst-entry" data-print-entry="true">
          <header className="dst-entry-head">
            <span className="dst-entry-num">#001</span>
            <div className="dst-entry-titles">
              <div className="dst-entry-title">Senior Software Engineer</div>
              <div className="dst-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="dst-entry-period">MAR 2024 — PRESENT</div>
          </header>
          <ul className="dst-obs">
            <li>
              Subject led migration of the events pipeline to a horizontally-sharded Kafka cluster;
              p99 latency reduced threefold.
            </li>
            <li>
              Owned platform on-call across two quarters. Page volume reduced 60% via revised
              alerting and runbooks.
            </li>
            <li>Mentored four engineers through L4 → L5 promotion review.</li>
          </ul>
        </article>

        <article className="dst-entry" data-print-entry="true">
          <header className="dst-entry-head">
            <span className="dst-entry-num">#002</span>
            <div className="dst-entry-titles">
              <div className="dst-entry-title">Software Engineer 2</div>
              <div className="dst-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="dst-entry-period">AUG 2022 — MAR 2024</div>
          </header>
          <ul className="dst-obs">
            <li>
              Designed and shipped the billing pipeline (12M events/day on Kafka + Postgres) from
              specification to production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            <li>Drove architecture-level reviews on cross-team launches.</li>
          </ul>
        </article>

        <article className="dst-entry" data-print-entry="true">
          <header className="dst-entry-head">
            <span className="dst-entry-num">#003</span>
            <div className="dst-entry-titles">
              <div className="dst-entry-title">Software Engineer</div>
              <div className="dst-entry-org">Acme Inc · Remote</div>
            </div>
            <div className="dst-entry-period">JAN 2020 — JUL 2022</div>
          </header>
          <ul className="dst-obs">
            <li>
              Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
              languages.
            </li>
            <li>
              Migrated the legacy monolith's auth module to a standalone identity service; unblocked
              SSO.
            </li>
            <li>Cut average build times from 11 min to 90 s by parallelizing the test matrix.</li>
          </ul>
        </article>

        <article className="dst-entry" data-print-entry="true">
          <header className="dst-entry-head">
            <span className="dst-entry-num">#004</span>
            <div className="dst-entry-titles">
              <div className="dst-entry-title">Software Engineer Intern</div>
              <div className="dst-entry-org">Bytework · Remote</div>
            </div>
            <div className="dst-entry-period">MAY 2018 — AUG 2018</div>
          </header>
          <ul className="dst-obs">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="dst-grid">
        <div className="dst-section dst-section--col" data-print-entry="true">
          <div className="dst-section-head">
            <span className="dst-sec-num">§ 03</span>
            <h2>Open Source</h2>
            <span className="dst-sec-rule" aria-hidden="true" />
          </div>
          <article className="dst-entry" data-print-entry="true">
            <header className="dst-entry-head">
              <span className="dst-entry-num">#P-01</span>
              <div className="dst-entry-titles">
                <div className="dst-entry-title">Loomroute</div>
                <div className="dst-entry-org">Go · loomroute.dev</div>
              </div>
              <div className="dst-entry-period">2024 —</div>
            </header>
            <p className="dst-prose">
              URL routing library. ~200 small SaaS dependents. Live since 2024.
            </p>
          </article>
          <article className="dst-entry" data-print-entry="true">
            <header className="dst-entry-head">
              <span className="dst-entry-num">#P-02</span>
              <div className="dst-entry-titles">
                <div className="dst-entry-title">Tinytrace</div>
                <div className="dst-entry-org">Rust · tinytrace</div>
              </div>
              <div className="dst-entry-period">2023 —</div>
            </header>
            <p className="dst-prose">
              Distributed tracing library. Span model + OTLP export, ~3k lines.
            </p>
          </article>
        </div>

        <div className="dst-section dst-section--col" data-print-entry="true">
          <div className="dst-section-head">
            <span className="dst-sec-num">§ 04</span>
            <h2>Capabilities</h2>
            <span className="dst-sec-rule" aria-hidden="true" />
          </div>
          <dl className="dst-skills">
            <div className="dst-skill">
              <dt>LANG</dt>
              <dd>Go · TypeScript · Python · Rust</dd>
            </div>
            <div className="dst-skill">
              <dt>BACKEND</dt>
              <dd>Postgres · Redis · Kafka · gRPC</dd>
            </div>
            <div className="dst-skill">
              <dt>FRONTEND</dt>
              <dd>React · Next.js · Tailwind · Vite</dd>
            </div>
            <div className="dst-skill">
              <dt>PLATFORM</dt>
              <dd>AWS · Kubernetes · Docker · Terraform</dd>
            </div>
          </dl>
          <div className="dst-edu">
            <div className="dst-edu-head">
              <span className="dst-entry-num">#E-01</span>
              <span className="dst-edu-title">B.S. Computer Science</span>
              <span className="dst-edu-period">2014 — 2018</span>
            </div>
            <div className="dst-edu-org">Northern State University</div>
          </div>
        </div>
      </section>

      <footer className="dst-foot" aria-hidden="true">
        <span>END OF FILE</span>
        <span>FORM AP-26 / REV. C</span>
        <span>PAGE 01 / 01</span>
      </footer>
    </PageFrame>
  )
}
