import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function BrutalistStamp() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-brutalist-stamp">
      <header className="bs-head">
        <div className="bs-stamp bs-stamp-approved">APPROVED</div>
        <div className="bs-eyebrow">FILE NO. 001 / RESUME</div>
        <h1 className="bs-name">AVERY PARK</h1>
        <div className="bs-title-row">
          <div className="bs-title-stamp">SR. ENGR / PLATFORM</div>
          <div className="bs-title-meta">NEW YORK, NY &middot; 2026</div>
        </div>
        <div className="bs-contact">
          <span>
            <a href="mailto:avery@example.com">avery@example.com</a>
          </span>
          <span className="bs-bar" />
          <span>
            <a href="https://averypark.dev">averypark.dev</a>
          </span>
          <span className="bs-bar" />
          <span>
            <a href="https://github.com/averypark">github.com/averypark</a>
          </span>
          <span className="bs-bar" />
          <span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </span>
        </div>
      </header>

      <section className="bs-section" data-print-entry="true">
        <h2 className="bs-h2">SUMMARY</h2>
        <p className="bs-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="bs-section" data-print-entry="true">
        <h2 className="bs-h2">EXPERIENCE</h2>

        <div className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <div className="bs-role-stamp bs-tilt-a">SENIOR SOFTWARE ENGINEER</div>
            <div className="bs-date-stamp bs-tilt-b">2024.03 — PRESENT</div>
          </div>
          <div className="bs-org">CORAL LABS &mdash; NEW YORK, NY</div>
          <ul className="bs-bullets">
            <li>Migrated events pipeline to a sharded Kafka cluster. p99 down 3x.</li>
            <li>Owned platform on-call. Pages down 60% via better alerting and runbooks.</li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </div>

        <div className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <div className="bs-role-stamp bs-tilt-c">SOFTWARE ENGINEER 2</div>
            <div className="bs-date-stamp bs-tilt-a">2022.08 — 2024.03</div>
          </div>
          <div className="bs-org">CORAL LABS &mdash; NEW YORK, NY</div>
          <ul className="bs-bullets">
            <li>Designed billing pipeline. 12M events/day on Kafka and Postgres.</li>
            <li>Built feature-flag service used across 40+ microservices.</li>
            <li>Drove architecture-level reviews for cross-team launches.</li>
          </ul>
        </div>

        <div className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <div className="bs-role-stamp bs-tilt-b">SOFTWARE ENGINEER</div>
            <div className="bs-date-stamp bs-tilt-c">2020.01 — 2022.07</div>
          </div>
          <div className="bs-org">ACME INC &mdash; REMOTE</div>
          <ul className="bs-bullets">
            <li>Shipped first public API. Rate limits, OAuth2, SDKs in three languages.</li>
            <li>Extracted auth from monolith. Standalone identity service. Unblocked SSO.</li>
            <li>Cut average build times from 11min to 90s.</li>
          </ul>
        </div>

        <div className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <div className="bs-role-stamp bs-tilt-a">SOFTWARE ENGINEER INTERN</div>
            <div className="bs-date-stamp bs-tilt-b">2018.05 — 2018.08</div>
          </div>
          <div className="bs-org">BYTEWORK &mdash; REMOTE</div>
          <ul className="bs-bullets">
            <li>Built an internal log aggregator in Go on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="bs-section" data-print-entry="true">
        <h2 className="bs-h2">PROJECTS</h2>

        <div className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <div className="bs-role-stamp bs-tilt-c">LOOMROUTE</div>
            <div className="bs-date-stamp bs-tilt-a">LIVE / 2024</div>
          </div>
          <div className="bs-org">URL ROUTING &mdash; GO &mdash; OSS</div>
          <p className="bs-prose">Routing library used by ~200 small SaaS apps. Live since 2024.</p>
        </div>

        <div className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <div className="bs-role-stamp bs-tilt-b">TINYTRACE</div>
            <div className="bs-date-stamp bs-tilt-c">REPO</div>
          </div>
          <div className="bs-org">DISTRIBUTED TRACING &mdash; RUST &mdash; OSS</div>
          <p className="bs-prose">Minimal tracing lib. Span model. OTLP export. ~3k lines.</p>
        </div>
      </section>

      <section className="bs-section" data-print-entry="true">
        <h2 className="bs-h2">EDUCATION</h2>
        <div className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <div className="bs-role-stamp bs-tilt-a">B.S. COMPUTER SCIENCE</div>
            <div className="bs-date-stamp bs-tilt-b">2014 — 2018</div>
          </div>
          <div className="bs-org">NORTHERN STATE UNIVERSITY</div>
        </div>
      </section>

      <section className="bs-section" data-print-entry="true">
        <h2 className="bs-h2">SKILLS</h2>
        <dl className="bs-skills">
          <div className="bs-skill-row">
            <dt>LANGUAGES</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="bs-skill-row">
            <dt>BACKEND</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="bs-skill-row">
            <dt>FRONTEND</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="bs-skill-row">
            <dt>PLATFORM</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
