import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function DossierRedact() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-dossier-redact">
      <div className="dr-classbar" aria-hidden="true">
        <span className="dr-classbar-left">CONFIDENTIAL — SUBJECT FILE</span>
        <span className="dr-classbar-mid">REDACTED FOR EXTERNAL REVIEW</span>
        <span className="dr-classbar-right">№ AP-2026-0413</span>
      </div>

      <header className="dr-head">
        <div className="dr-head-main">
          <div className="dr-eyebrow">FILE / SUBJECT BRIEF / VOL. 02</div>
          <h1 className="dr-name">Avery Park</h1>
          <div className="dr-title">Senior Software Engineer · Platform</div>
        </div>
        <dl className="dr-id">
          <div className="dr-id-row">
            <dt>SUBJECT</dt>
            <dd>PARK, AVERY</dd>
          </div>
          <div className="dr-id-row">
            <dt>CASE OFFICER</dt>
            <dd>
              <span className="dr-redact">[REDACTED]</span>
            </dd>
          </div>
          <div className="dr-id-row">
            <dt>CLEARANCE</dt>
            <dd>L4 / PLATFORM</dd>
          </div>
          <div className="dr-id-row">
            <dt>STATION</dt>
            <dd>NEW YORK, NY</dd>
          </div>
          <div className="dr-id-row">
            <dt>CONTACT</dt>
            <dd>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </dd>
          </div>
          <div className="dr-id-row">
            <dt>CHANNEL</dt>
            <dd>
              <a href="https://averypark.dev">averypark.dev</a>
            </dd>
          </div>
          <div className="dr-id-row">
            <dt>HANDLES</dt>
            <dd>github.com/averypark · in/averypark</dd>
          </div>
        </dl>
      </header>

      <section className="dr-section" data-print-entry="true">
        <div className="dr-section-head">
          <span className="dr-sec-num">§ 01</span>
          <h2>Subject Profile</h2>
          <span className="dr-sec-rule" aria-hidden="true" />
        </div>
        <p className="dr-summary">
          Subject builds <span className="dr-redact">resilient backend systems</span> and the
          platforms that run them. Prefers small, reversible changes and clear interfaces. Operates
          on the principle that software should be{' '}
          <span className="dr-redact">boring in production</span> and useful to its users.
        </p>
      </section>

      <section className="dr-section" data-print-entry="true">
        <div className="dr-section-head">
          <span className="dr-sec-num">§ 02</span>
          <h2>Operational History</h2>
          <span className="dr-sec-rule" aria-hidden="true" />
        </div>

        <article className="dr-entry" data-print-entry="true">
          <header className="dr-entry-head">
            <span className="dr-entry-num">#001</span>
            <div className="dr-entry-titles">
              <div className="dr-entry-title">Senior Software Engineer</div>
              <div className="dr-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="dr-entry-period">MAR 2024 — PRESENT</div>
          </header>
          <ul className="dr-obs">
            <li>
              Subject led migration of the events pipeline to a{' '}
              <span className="dr-redact">horizontally-sharded Kafka cluster</span>; p99 latency
              reduced threefold.
            </li>
            <li>
              Owned platform on-call across two quarters. Page volume reduced 60% via revised
              alerting and runbooks.
            </li>
            <li>
              Mentored four engineers through <span className="dr-redact">L4 → L5</span> promotion
              review.
            </li>
          </ul>
        </article>

        <article className="dr-entry" data-print-entry="true">
          <header className="dr-entry-head">
            <span className="dr-entry-num">#002</span>
            <div className="dr-entry-titles">
              <div className="dr-entry-title">Software Engineer 2</div>
              <div className="dr-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="dr-entry-period">AUG 2022 — MAR 2024</div>
          </header>
          <ul className="dr-obs">
            <li>
              Designed and shipped the billing pipeline (
              <span className="dr-redact">12M events/day</span> on Kafka + Postgres) from
              specification to production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            <li>Drove architecture-level reviews on cross-team launches.</li>
          </ul>
        </article>

        <article className="dr-entry" data-print-entry="true">
          <header className="dr-entry-head">
            <span className="dr-entry-num">#003</span>
            <div className="dr-entry-titles">
              <div className="dr-entry-title">Software Engineer</div>
              <div className="dr-entry-org">Acme Inc · Remote</div>
            </div>
            <div className="dr-entry-period">JAN 2020 — JUL 2022</div>
          </header>
          <ul className="dr-obs">
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

        <article className="dr-entry" data-print-entry="true">
          <header className="dr-entry-head">
            <span className="dr-entry-num">#004</span>
            <div className="dr-entry-titles">
              <div className="dr-entry-title">Software Engineer Intern</div>
              <div className="dr-entry-org">Bytework · Remote</div>
            </div>
            <div className="dr-entry-period">MAY 2018 — AUG 2018</div>
          </header>
          <ul className="dr-obs">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="dr-section" data-print-entry="true">
        <div className="dr-section-head">
          <span className="dr-sec-num">§ 03</span>
          <h2>Open Source</h2>
          <span className="dr-sec-rule" aria-hidden="true" />
        </div>
        <article className="dr-entry" data-print-entry="true">
          <header className="dr-entry-head">
            <span className="dr-entry-num">#P-01</span>
            <div className="dr-entry-titles">
              <div className="dr-entry-title">Loomroute</div>
              <div className="dr-entry-org">Go · loomroute.dev</div>
            </div>
            <div className="dr-entry-period">2024 — ACTIVE</div>
          </header>
          <p className="dr-prose">
            URL routing library. <span className="dr-redact">~200 small SaaS dependents</span>.
            Maintained in production since 2024.
          </p>
        </article>
        <article className="dr-entry" data-print-entry="true">
          <header className="dr-entry-head">
            <span className="dr-entry-num">#P-02</span>
            <div className="dr-entry-titles">
              <div className="dr-entry-title">Tinytrace</div>
              <div className="dr-entry-org">Rust · github.com/averypark/tinytrace</div>
            </div>
            <div className="dr-entry-period">2023 — ACTIVE</div>
          </header>
          <p className="dr-prose">
            Minimal distributed tracing library. Span model, OTLP export, ~3k lines.
          </p>
        </article>
      </section>

      <section className="dr-grid">
        <div className="dr-section dr-section--col" data-print-entry="true">
          <div className="dr-section-head">
            <span className="dr-sec-num">§ 04</span>
            <h2>Training</h2>
            <span className="dr-sec-rule" aria-hidden="true" />
          </div>
          <article className="dr-entry" data-print-entry="true">
            <header className="dr-entry-head">
              <span className="dr-entry-num">#E-01</span>
              <div className="dr-entry-titles">
                <div className="dr-entry-title">B.S. Computer Science</div>
                <div className="dr-entry-org">Northern State University</div>
              </div>
              <div className="dr-entry-period">2014 — 2018</div>
            </header>
          </article>
        </div>

        <div className="dr-section dr-section--col" data-print-entry="true">
          <div className="dr-section-head">
            <span className="dr-sec-num">§ 05</span>
            <h2>Capabilities</h2>
            <span className="dr-sec-rule" aria-hidden="true" />
          </div>
          <dl className="dr-skills">
            <div className="dr-skill">
              <dt>LANG</dt>
              <dd>Go · TypeScript · Python · Rust</dd>
            </div>
            <div className="dr-skill">
              <dt>BACKEND</dt>
              <dd>Postgres · Redis · Kafka · gRPC</dd>
            </div>
            <div className="dr-skill">
              <dt>FRONTEND</dt>
              <dd>React · Next.js · Tailwind · Vite</dd>
            </div>
            <div className="dr-skill">
              <dt>PLATFORM</dt>
              <dd>AWS · Kubernetes · Docker · Terraform</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="dr-foot" aria-hidden="true">
        <span>END OF FILE</span>
        <span>FORM AP-26 / REV. C — REDACTED</span>
        <span>PAGE 01 / 01</span>
      </footer>
    </PageFrame>
  )
}
