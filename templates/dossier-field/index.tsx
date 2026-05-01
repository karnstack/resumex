import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function DossierField() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-dossier-field">
      <div className="df-classbar" aria-hidden="true">
        <span className="df-classbar-left">FIELD REPORT — INTERNAL · NEED-TO-KNOW</span>
        <span className="df-classbar-mid">CASE: AP-2026</span>
        <span className="df-classbar-right">№ FR-0413</span>
      </div>

      <header className="df-head">
        <div className="df-head-main">
          <div className="df-eyebrow">FIELD REPORT · COMPILED 02 MAY 2026</div>
          <h1 className="df-name">Avery Park</h1>
          <div className="df-title">Senior Software Engineer · Platform</div>
        </div>
        <dl className="df-id">
          <div className="df-id-row">
            <dt>SUBJECT</dt>
            <dd>PARK, AVERY</dd>
          </div>
          <div className="df-id-row">
            <dt>CASE OFFICER</dt>
            <dd>K. STILLWATER</dd>
          </div>
          <div className="df-id-row">
            <dt>STATION</dt>
            <dd>NEW YORK, NY</dd>
          </div>
          <div className="df-id-row">
            <dt>CONTACT</dt>
            <dd>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </dd>
          </div>
          <div className="df-id-row">
            <dt>CHANNEL</dt>
            <dd>
              <a href="https://averypark.dev">averypark.dev</a>
            </dd>
          </div>
          <div className="df-id-row">
            <dt>HANDLES</dt>
            <dd>github.com/averypark · in/averypark</dd>
          </div>
        </dl>
      </header>

      <section className="df-section df-section--brief" data-print-entry="true">
        <div className="df-fieldhead">
          <span className="df-fieldhead-key">FIELD NOTE / №00</span>
          <span className="df-fieldhead-title">Subject Brief</span>
          <span className="df-fieldhead-date">02 MAY 2026</span>
        </div>
        <p className="df-summary">
          Subject builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Operates on the principle that software should be
          boring in production and useful to its users.
        </p>
      </section>

      <h2 className="df-h">Operational History</h2>

      <article className="df-note" data-print-entry="true">
        <header className="df-fieldhead">
          <span className="df-fieldhead-key">FIELD NOTE / №01</span>
          <span className="df-fieldhead-title">Senior Software Engineer · Coral Labs</span>
          <span className="df-fieldhead-date">MAR 2024 — PRESENT</span>
        </header>
        <div className="df-loc">LOC: NEW YORK, NY</div>
        <ul className="df-obs">
          <li>
            <span className="df-obs-label">Observed</span>: subject led migration of the events
            pipeline to a horizontally-sharded Kafka cluster; p99 latency reduced threefold.
          </li>
          <li>
            <span className="df-obs-label">Confirmed</span>: owned platform on-call across two
            quarters; page volume reduced 60% via revised alerting and runbooks.
          </li>
          <li>
            <span className="df-obs-label">Noted</span>: mentored four engineers through L4 → L5
            promotion review.
          </li>
        </ul>
      </article>

      <article className="df-note" data-print-entry="true">
        <header className="df-fieldhead">
          <span className="df-fieldhead-key">FIELD NOTE / №02</span>
          <span className="df-fieldhead-title">Software Engineer 2 · Coral Labs</span>
          <span className="df-fieldhead-date">AUG 2022 — MAR 2024</span>
        </header>
        <div className="df-loc">LOC: NEW YORK, NY</div>
        <ul className="df-obs">
          <li>
            <span className="df-obs-label">Designed</span>: billing pipeline (12M events/day on
            Kafka + Postgres) from specification to production.
          </li>
          <li>
            <span className="df-obs-label">Built</span>: internal feature-flag service used across
            forty-plus microservices.
          </li>
          <li>
            <span className="df-obs-label">Drove</span>: architecture-level reviews on cross-team
            launches.
          </li>
        </ul>
      </article>

      <article className="df-note" data-print-entry="true">
        <header className="df-fieldhead">
          <span className="df-fieldhead-key">FIELD NOTE / №03</span>
          <span className="df-fieldhead-title">Software Engineer · Acme Inc</span>
          <span className="df-fieldhead-date">JAN 2020 — JUL 2022</span>
        </header>
        <div className="df-loc">LOC: REMOTE</div>
        <ul className="df-obs">
          <li>
            <span className="df-obs-label">Shipped</span>: company's first public API with rate
            limiting, OAuth2, and SDKs in three languages.
          </li>
          <li>
            <span className="df-obs-label">Migrated</span>: legacy monolith's auth module to a
            standalone identity service; unblocked SSO.
          </li>
          <li>
            <span className="df-obs-label">Reduced</span>: average build times from 11 min to 90 s
            via test-matrix parallelization.
          </li>
        </ul>
      </article>

      <article className="df-note" data-print-entry="true">
        <header className="df-fieldhead">
          <span className="df-fieldhead-key">FIELD NOTE / №04</span>
          <span className="df-fieldhead-title">Software Engineer Intern · Bytework</span>
          <span className="df-fieldhead-date">MAY 2018 — AUG 2018</span>
        </header>
        <div className="df-loc">LOC: REMOTE</div>
        <ul className="df-obs">
          <li>
            <span className="df-obs-label">Built</span>: internal log aggregator in Go on top of
            Kafka. Earned a return offer.
          </li>
        </ul>
      </article>

      <h2 className="df-h">Adjacent Activity</h2>

      <article className="df-note df-note--compact" data-print-entry="true">
        <header className="df-fieldhead">
          <span className="df-fieldhead-key">FIELD NOTE / №P-01</span>
          <span className="df-fieldhead-title">Loomroute · Go</span>
          <span className="df-fieldhead-date">2024 — ACTIVE</span>
        </header>
        <p className="df-prose">
          URL routing library. ~200 small SaaS dependents. Maintained in production since 2024.
        </p>
      </article>
      <article className="df-note df-note--compact" data-print-entry="true">
        <header className="df-fieldhead">
          <span className="df-fieldhead-key">FIELD NOTE / №P-02</span>
          <span className="df-fieldhead-title">Tinytrace · Rust</span>
          <span className="df-fieldhead-date">2023 — ACTIVE</span>
        </header>
        <p className="df-prose">
          Minimal distributed tracing library. Span model, OTLP export, ~3k lines.
        </p>
      </article>

      <section className="df-grid">
        <div data-print-entry="true">
          <h2 className="df-h df-h--col">Training</h2>
          <article className="df-note df-note--compact" data-print-entry="true">
            <header className="df-fieldhead">
              <span className="df-fieldhead-key">FIELD NOTE / №E-01</span>
              <span className="df-fieldhead-title">B.S. Computer Science</span>
              <span className="df-fieldhead-date">2014 — 2018</span>
            </header>
            <div className="df-loc">INST: NORTHERN STATE UNIVERSITY</div>
          </article>
        </div>

        <div data-print-entry="true">
          <h2 className="df-h df-h--col">Capabilities</h2>
          <dl className="df-skills">
            <div className="df-skill">
              <dt>LANG</dt>
              <dd>Go · TypeScript · Python · Rust</dd>
            </div>
            <div className="df-skill">
              <dt>BACKEND</dt>
              <dd>Postgres · Redis · Kafka · gRPC</dd>
            </div>
            <div className="df-skill">
              <dt>FRONTEND</dt>
              <dd>React · Next.js · Tailwind · Vite</dd>
            </div>
            <div className="df-skill">
              <dt>PLATFORM</dt>
              <dd>AWS · Kubernetes · Docker · Terraform</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="df-foot" aria-hidden="true">
        <span>END OF REPORT</span>
        <span>FORM FR-26 / REV. C</span>
        <span>PAGE 01 / 01</span>
      </footer>
    </PageFrame>
  )
}
