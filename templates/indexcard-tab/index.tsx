import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function IndexCardTab() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-indexcard-tab">
      <header className="ict-head">
        <div className="ict-head-meta">
          <span>FILE 658.4 / PARK</span>
          <span>·</span>
          <span>CARD 01/01</span>
        </div>
        <h1 className="ict-name">Avery Park</h1>
        <div className="ict-title">Senior Software Engineer — Platform</div>
        <div className="ict-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="ict-sep">·</span>
          <span>New York, NY</span>
          <span className="ict-sep">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="ict-sep">·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="ict-sep">·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="ict-section" data-print-entry="true">
        <aside className="ict-tab" aria-hidden="true">
          <span className="ict-tab-label">SUM</span>
        </aside>
        <div className="ict-body">
          <h2>Subject Summary</h2>
          <p className="ict-lede">
            Builds resilient backend systems and the platforms that run them. Prefers small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
      </section>

      <section className="ict-section" data-print-entry="true">
        <aside className="ict-tab" aria-hidden="true">
          <span className="ict-tab-label">EXP</span>
        </aside>
        <div className="ict-body">
          <h2>Experience</h2>

          <div className="ict-entry" data-print-entry="true">
            <div className="ict-entry-head">
              <div>
                <span className="ict-role">Senior Software Engineer</span>
                <span className="ict-org"> · Coral Labs</span>
              </div>
              <span className="ict-date">2024 — PRES.</span>
            </div>
            <div className="ict-meta">New York, NY</div>
            <ul className="ict-bullets">
              <li>
                Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99
                latency by three.
              </li>
              <li>
                Owned platform on-call across two quarters; reduced pages 60% via sharper alerting
                and runbooks.
              </li>
              <li>Mentored four engineers through L4 to L5 promotions.</li>
            </ul>
          </div>

          <div className="ict-entry" data-print-entry="true">
            <div className="ict-entry-head">
              <div>
                <span className="ict-role">Software Engineer 2</span>
                <span className="ict-org"> · Coral Labs</span>
              </div>
              <span className="ict-date">2022 — 2024</span>
            </div>
            <div className="ict-meta">New York, NY</div>
            <ul className="ict-bullets">
              <li>
                Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
                production.
              </li>
              <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            </ul>
          </div>

          <div className="ict-entry" data-print-entry="true">
            <div className="ict-entry-head">
              <div>
                <span className="ict-role">Software Engineer</span>
                <span className="ict-org"> · Acme Inc</span>
              </div>
              <span className="ict-date">2020 — 2022</span>
            </div>
            <div className="ict-meta">Remote</div>
            <ul className="ict-bullets">
              <li>
                Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
                languages.
              </li>
              <li>
                Migrated the legacy monolith's auth module to a standalone identity service,
                unblocking SSO.
              </li>
              <li>Cut average build times from 11 minutes to 90 seconds.</li>
            </ul>
          </div>

          <div className="ict-entry" data-print-entry="true">
            <div className="ict-entry-head">
              <div>
                <span className="ict-role">Software Engineer Intern</span>
                <span className="ict-org"> · Bytework</span>
              </div>
              <span className="ict-date">2018</span>
            </div>
            <div className="ict-meta">Remote</div>
            <ul className="ict-bullets">
              <li>
                Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ict-section" data-print-entry="true">
        <aside className="ict-tab" aria-hidden="true">
          <span className="ict-tab-label">PRJ</span>
        </aside>
        <div className="ict-body">
          <h2>Cross-References</h2>
          <div className="ict-entry" data-print-entry="true">
            <div className="ict-entry-head">
              <div>
                <span className="ict-role">Loomroute</span>
                <span className="ict-org"> · loomroute.dev</span>
              </div>
              <span className="ict-date">GO · OSS</span>
            </div>
            <p className="ict-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </div>
          <div className="ict-entry" data-print-entry="true">
            <div className="ict-entry-head">
              <div>
                <span className="ict-role">Tinytrace</span>
                <span className="ict-org"> · github.com/averypark/tinytrace</span>
              </div>
              <span className="ict-date">RUST · OSS</span>
            </div>
            <p className="ict-prose">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </p>
          </div>
        </div>
      </section>

      <section className="ict-section" data-print-entry="true">
        <aside className="ict-tab" aria-hidden="true">
          <span className="ict-tab-label">EDU</span>
        </aside>
        <div className="ict-body">
          <h2>Education</h2>
          <div className="ict-entry" data-print-entry="true">
            <div className="ict-entry-head">
              <div>
                <span className="ict-role">B.S. Computer Science</span>
                <span className="ict-org"> · Northern State University</span>
              </div>
              <span className="ict-date">2014 — 2018</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ict-section" data-print-entry="true">
        <aside className="ict-tab" aria-hidden="true">
          <span className="ict-tab-label">SKL</span>
        </aside>
        <div className="ict-body">
          <h2>Skills</h2>
          <dl className="ict-skills">
            <div className="ict-skill-row">
              <dt>LANG</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="ict-skill-row">
              <dt>BACK</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="ict-skill-row">
              <dt>FRONT</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="ict-skill-row">
              <dt>PLAT</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
