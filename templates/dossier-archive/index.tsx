import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function DossierArchive() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-dossier-archive">
      <div className="da-tabrow" aria-hidden="true">
        <div className="da-tab">
          <span className="da-tab-key">FILE</span>
          <span className="da-tab-sep">/</span>
          <span className="da-tab-key">2026</span>
          <span className="da-tab-sep">/</span>
          <span className="da-tab-val">AP</span>
        </div>
        <div className="da-tab da-tab--quiet">
          <span className="da-tab-key">DRAWER</span>
          <span className="da-tab-sep">/</span>
          <span className="da-tab-val">PLATFORM</span>
        </div>
      </div>

      <div className="da-classbar" aria-hidden="true">
        <span className="da-classbar-left">CONFIDENTIAL — ARCHIVE COPY</span>
        <span className="da-classbar-mid">RETENTION · 10Y</span>
        <span className="da-classbar-right">№ AP-2026-0413</span>
      </div>

      <header className="da-head">
        <div className="da-head-main">
          <div className="da-eyebrow">SUBJECT BRIEF · ACCESSION 0413</div>
          <h1 className="da-name">Avery Park</h1>
          <div className="da-title">Senior Software Engineer · Platform</div>
        </div>
        <dl className="da-id">
          <div className="da-id-row">
            <dt>SUBJECT</dt>
            <dd>PARK, AVERY</dd>
          </div>
          <div className="da-id-row">
            <dt>FILED BY</dt>
            <dd>K. STILLWATER</dd>
          </div>
          <div className="da-id-row">
            <dt>BOX</dt>
            <dd>04-NY · SHELF 21</dd>
          </div>
          <div className="da-id-row">
            <dt>STATION</dt>
            <dd>NEW YORK, NY</dd>
          </div>
          <div className="da-id-row">
            <dt>CONTACT</dt>
            <dd>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </dd>
          </div>
          <div className="da-id-row">
            <dt>CHANNEL</dt>
            <dd>
              <a href="https://averypark.dev">averypark.dev</a>
            </dd>
          </div>
          <div className="da-id-row">
            <dt>HANDLES</dt>
            <dd>github.com/averypark · in/averypark</dd>
          </div>
        </dl>
      </header>

      <section className="da-section" data-print-entry="true">
        <div className="da-section-head">
          <span className="da-sec-num">§ 01</span>
          <h2>Subject Profile</h2>
          <span className="da-sec-rule" aria-hidden="true" />
        </div>
        <p className="da-summary">
          Subject builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Operates on the principle that software should be
          boring in production and useful to its users.
        </p>
      </section>

      <section className="da-section" data-print-entry="true">
        <div className="da-section-head">
          <span className="da-sec-num">§ 02</span>
          <h2>Operational History</h2>
          <span className="da-sec-rule" aria-hidden="true" />
        </div>

        <article className="da-entry" data-print-entry="true">
          <header className="da-entry-head">
            <span className="da-entry-num">#001</span>
            <div className="da-entry-titles">
              <div className="da-entry-title">Senior Software Engineer</div>
              <div className="da-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="da-entry-period">MAR 2024 — PRESENT</div>
          </header>
          <ul className="da-obs">
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

        <article className="da-entry" data-print-entry="true">
          <header className="da-entry-head">
            <span className="da-entry-num">#002</span>
            <div className="da-entry-titles">
              <div className="da-entry-title">Software Engineer 2</div>
              <div className="da-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="da-entry-period">AUG 2022 — MAR 2024</div>
          </header>
          <ul className="da-obs">
            <li>
              Designed and shipped the billing pipeline (12M events/day on Kafka + Postgres) from
              specification to production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            <li>Drove architecture-level reviews on cross-team launches.</li>
          </ul>
        </article>

        <article className="da-entry" data-print-entry="true">
          <header className="da-entry-head">
            <span className="da-entry-num">#003</span>
            <div className="da-entry-titles">
              <div className="da-entry-title">Software Engineer</div>
              <div className="da-entry-org">Acme Inc · Remote</div>
            </div>
            <div className="da-entry-period">JAN 2020 — JUL 2022</div>
          </header>
          <ul className="da-obs">
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

        <article className="da-entry" data-print-entry="true">
          <header className="da-entry-head">
            <span className="da-entry-num">#004</span>
            <div className="da-entry-titles">
              <div className="da-entry-title">Software Engineer Intern</div>
              <div className="da-entry-org">Bytework · Remote</div>
            </div>
            <div className="da-entry-period">MAY 2018 — AUG 2018</div>
          </header>
          <ul className="da-obs">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="da-section" data-print-entry="true">
        <div className="da-section-head">
          <span className="da-sec-num">§ 03</span>
          <h2>Open Source</h2>
          <span className="da-sec-rule" aria-hidden="true" />
        </div>
        <article className="da-entry" data-print-entry="true">
          <header className="da-entry-head">
            <span className="da-entry-num">#P-01</span>
            <div className="da-entry-titles">
              <div className="da-entry-title">Loomroute</div>
              <div className="da-entry-org">Go · loomroute.dev</div>
            </div>
            <div className="da-entry-period">2024 — ACTIVE</div>
          </header>
          <p className="da-prose">
            URL routing library. ~200 small SaaS dependents. Maintained in production since 2024.
          </p>
        </article>
        <article className="da-entry" data-print-entry="true">
          <header className="da-entry-head">
            <span className="da-entry-num">#P-02</span>
            <div className="da-entry-titles">
              <div className="da-entry-title">Tinytrace</div>
              <div className="da-entry-org">Rust · github.com/averypark/tinytrace</div>
            </div>
            <div className="da-entry-period">2023 — ACTIVE</div>
          </header>
          <p className="da-prose">
            Minimal distributed tracing library. Span model, OTLP export, ~3k lines.
          </p>
        </article>
      </section>

      <section className="da-grid">
        <div className="da-section da-section--col" data-print-entry="true">
          <div className="da-section-head">
            <span className="da-sec-num">§ 04</span>
            <h2>Training</h2>
            <span className="da-sec-rule" aria-hidden="true" />
          </div>
          <article className="da-entry" data-print-entry="true">
            <header className="da-entry-head">
              <span className="da-entry-num">#E-01</span>
              <div className="da-entry-titles">
                <div className="da-entry-title">B.S. Computer Science</div>
                <div className="da-entry-org">Northern State University</div>
              </div>
              <div className="da-entry-period">2014 — 2018</div>
            </header>
          </article>
        </div>

        <div className="da-section da-section--col" data-print-entry="true">
          <div className="da-section-head">
            <span className="da-sec-num">§ 05</span>
            <h2>Capabilities</h2>
            <span className="da-sec-rule" aria-hidden="true" />
          </div>
          <dl className="da-skills">
            <div className="da-skill">
              <dt>LANG</dt>
              <dd>Go · TypeScript · Python · Rust</dd>
            </div>
            <div className="da-skill">
              <dt>BACKEND</dt>
              <dd>Postgres · Redis · Kafka · gRPC</dd>
            </div>
            <div className="da-skill">
              <dt>FRONTEND</dt>
              <dd>React · Next.js · Tailwind · Vite</dd>
            </div>
            <div className="da-skill">
              <dt>PLATFORM</dt>
              <dd>AWS · Kubernetes · Docker · Terraform</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="da-foot" aria-hidden="true">
        <span>END OF FILE · ACC. 0413</span>
        <span>FORM AP-26 / REV. C</span>
        <span>PAGE 01 / 01</span>
      </footer>
    </PageFrame>
  )
}
