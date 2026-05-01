import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Dossier() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-dossier">
      <div className="ds-classbar" aria-hidden="true">
        <span className="ds-classbar-left">CONFIDENTIAL — SUBJECT FILE</span>
        <span className="ds-classbar-mid">NEED-TO-KNOW</span>
        <span className="ds-classbar-right">№ AP-2026-0413</span>
      </div>

      <header className="ds-head">
        <div className="ds-head-main">
          <div className="ds-eyebrow">FILE / SUBJECT BRIEF / VOL. 01</div>
          <h1 className="ds-name">Avery Park</h1>
          <div className="ds-title">Senior Software Engineer · Platform</div>
        </div>
        <dl className="ds-id">
          <div className="ds-id-row">
            <dt>SUBJECT</dt>
            <dd>PARK, AVERY</dd>
          </div>
          <div className="ds-id-row">
            <dt>CASE OFFICER</dt>
            <dd>K. STILLWATER</dd>
          </div>
          <div className="ds-id-row">
            <dt>CLEARANCE</dt>
            <dd>L4 / PLATFORM</dd>
          </div>
          <div className="ds-id-row">
            <dt>STATION</dt>
            <dd>NEW YORK, NY</dd>
          </div>
          <div className="ds-id-row">
            <dt>CONTACT</dt>
            <dd>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </dd>
          </div>
          <div className="ds-id-row">
            <dt>CHANNEL</dt>
            <dd>
              <a href="https://averypark.dev">averypark.dev</a>
            </dd>
          </div>
          <div className="ds-id-row">
            <dt>HANDLES</dt>
            <dd>github.com/averypark · in/averypark</dd>
          </div>
        </dl>
      </header>

      <section className="ds-section" data-print-entry="true">
        <div className="ds-section-head">
          <span className="ds-sec-num">§ 01</span>
          <h2>Subject Profile</h2>
          <span className="ds-sec-rule" aria-hidden="true" />
        </div>
        <p className="ds-summary">
          Subject builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Operates on the principle that software should be
          boring in production and useful to its users.
        </p>
      </section>

      <section className="ds-section" data-print-entry="true">
        <div className="ds-section-head">
          <span className="ds-sec-num">§ 02</span>
          <h2>Operational History</h2>
          <span className="ds-sec-rule" aria-hidden="true" />
        </div>

        <article className="ds-entry" data-print-entry="true">
          <header className="ds-entry-head">
            <span className="ds-entry-num">#001</span>
            <div className="ds-entry-titles">
              <div className="ds-entry-title">Senior Software Engineer</div>
              <div className="ds-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="ds-entry-period">MAR 2024 — PRESENT</div>
          </header>
          <ul className="ds-obs">
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

        <article className="ds-entry" data-print-entry="true">
          <header className="ds-entry-head">
            <span className="ds-entry-num">#002</span>
            <div className="ds-entry-titles">
              <div className="ds-entry-title">Software Engineer 2</div>
              <div className="ds-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="ds-entry-period">AUG 2022 — MAR 2024</div>
          </header>
          <ul className="ds-obs">
            <li>
              Designed and shipped the billing pipeline (12M events/day on Kafka + Postgres) from
              specification to production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            <li>Drove architecture-level reviews on cross-team launches.</li>
          </ul>
        </article>

        <article className="ds-entry" data-print-entry="true">
          <header className="ds-entry-head">
            <span className="ds-entry-num">#003</span>
            <div className="ds-entry-titles">
              <div className="ds-entry-title">Software Engineer</div>
              <div className="ds-entry-org">Acme Inc · Remote</div>
            </div>
            <div className="ds-entry-period">JAN 2020 — JUL 2022</div>
          </header>
          <ul className="ds-obs">
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

        <article className="ds-entry" data-print-entry="true">
          <header className="ds-entry-head">
            <span className="ds-entry-num">#004</span>
            <div className="ds-entry-titles">
              <div className="ds-entry-title">Software Engineer Intern</div>
              <div className="ds-entry-org">Bytework · Remote</div>
            </div>
            <div className="ds-entry-period">MAY 2018 — AUG 2018</div>
          </header>
          <ul className="ds-obs">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="ds-section" data-print-entry="true">
        <div className="ds-section-head">
          <span className="ds-sec-num">§ 03</span>
          <h2>Open Source</h2>
          <span className="ds-sec-rule" aria-hidden="true" />
        </div>
        <article className="ds-entry" data-print-entry="true">
          <header className="ds-entry-head">
            <span className="ds-entry-num">#P-01</span>
            <div className="ds-entry-titles">
              <div className="ds-entry-title">Loomroute</div>
              <div className="ds-entry-org">Go · loomroute.dev</div>
            </div>
            <div className="ds-entry-period">2024 — ACTIVE</div>
          </header>
          <p className="ds-prose">
            URL routing library. ~200 small SaaS dependents. Maintained in production since 2024.
          </p>
        </article>
        <article className="ds-entry" data-print-entry="true">
          <header className="ds-entry-head">
            <span className="ds-entry-num">#P-02</span>
            <div className="ds-entry-titles">
              <div className="ds-entry-title">Tinytrace</div>
              <div className="ds-entry-org">Rust · github.com/averypark/tinytrace</div>
            </div>
            <div className="ds-entry-period">2023 — ACTIVE</div>
          </header>
          <p className="ds-prose">
            Minimal distributed tracing library. Span model, OTLP export, ~3k lines.
          </p>
        </article>
      </section>

      <section className="ds-grid">
        <div className="ds-section ds-section--col" data-print-entry="true">
          <div className="ds-section-head">
            <span className="ds-sec-num">§ 04</span>
            <h2>Training</h2>
            <span className="ds-sec-rule" aria-hidden="true" />
          </div>
          <article className="ds-entry" data-print-entry="true">
            <header className="ds-entry-head">
              <span className="ds-entry-num">#E-01</span>
              <div className="ds-entry-titles">
                <div className="ds-entry-title">B.S. Computer Science</div>
                <div className="ds-entry-org">Northern State University</div>
              </div>
              <div className="ds-entry-period">2014 — 2018</div>
            </header>
          </article>
        </div>

        <div className="ds-section ds-section--col" data-print-entry="true">
          <div className="ds-section-head">
            <span className="ds-sec-num">§ 05</span>
            <h2>Capabilities</h2>
            <span className="ds-sec-rule" aria-hidden="true" />
          </div>
          <dl className="ds-skills">
            <div className="ds-skill">
              <dt>LANG</dt>
              <dd>Go · TypeScript · Python · Rust</dd>
            </div>
            <div className="ds-skill">
              <dt>BACKEND</dt>
              <dd>Postgres · Redis · Kafka · gRPC</dd>
            </div>
            <div className="ds-skill">
              <dt>FRONTEND</dt>
              <dd>React · Next.js · Tailwind · Vite</dd>
            </div>
            <div className="ds-skill">
              <dt>PLATFORM</dt>
              <dd>AWS · Kubernetes · Docker · Terraform</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="ds-foot" aria-hidden="true">
        <span>END OF FILE</span>
        <span>FORM AP-26 / REV. C</span>
        <span>PAGE 01 / 01</span>
      </footer>
    </PageFrame>
  )
}
