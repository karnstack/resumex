import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function IndexCardClassified() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-indexcard-classified">
      <header className="icc-head">
        <div className="icc-call-number" aria-hidden="true">
          <div className="icc-call-class">658.4</div>
          <div className="icc-call-cutter">P234</div>
          <div className="icc-call-year">2026</div>
        </div>
        <div className="icc-head-body">
          <div className="icc-eyebrow">PARK, AVERY · ACCESSION 2026-0512</div>
          <h1 className="icc-name">Avery Park</h1>
          <div className="icc-title">Senior Software Engineer — Platform</div>
          <div className="icc-contact">
            <a href="mailto:avery@example.com">avery@example.com</a>
            <span className="icc-sep">·</span>
            <span>New York, NY</span>
            <span className="icc-sep">·</span>
            <a href="https://averypark.dev">averypark.dev</a>
            <span className="icc-sep">·</span>
            <a href="https://github.com/averypark">github.com/averypark</a>
            <span className="icc-sep">·</span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </div>
        </div>
      </header>

      <section className="icc-section" data-print-entry="true">
        <div className="icc-class-col">
          <div className="icc-class-num">920</div>
          <div className="icc-class-label">Biography</div>
        </div>
        <div className="icc-body">
          <h2>Subject Summary</h2>
          <p className="icc-lede">
            Builds resilient backend systems and the platforms that run them. Prefers small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
      </section>

      <section className="icc-section" data-print-entry="true">
        <div className="icc-class-col">
          <div className="icc-class-num">658.4</div>
          <div className="icc-class-label">Experience</div>
        </div>
        <div className="icc-body">
          <h2>Experience</h2>

          <div className="icc-entry" data-print-entry="true">
            <div className="icc-entry-head">
              <div>
                <span className="icc-role">Senior Software Engineer</span>
                <span className="icc-org"> · Coral Labs</span>
              </div>
              <span className="icc-date">2024 — PRES.</span>
            </div>
            <div className="icc-meta">New York, NY · Acc. 2024-0301</div>
            <ul className="icc-bullets">
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

          <div className="icc-entry" data-print-entry="true">
            <div className="icc-entry-head">
              <div>
                <span className="icc-role">Software Engineer 2</span>
                <span className="icc-org"> · Coral Labs</span>
              </div>
              <span className="icc-date">2022 — 2024</span>
            </div>
            <div className="icc-meta">New York, NY · Acc. 2022-0815</div>
            <ul className="icc-bullets">
              <li>
                Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
                production.
              </li>
              <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            </ul>
          </div>

          <div className="icc-entry" data-print-entry="true">
            <div className="icc-entry-head">
              <div>
                <span className="icc-role">Software Engineer</span>
                <span className="icc-org"> · Acme Inc</span>
              </div>
              <span className="icc-date">2020 — 2022</span>
            </div>
            <div className="icc-meta">Remote · Acc. 2020-0106</div>
            <ul className="icc-bullets">
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

          <div className="icc-entry" data-print-entry="true">
            <div className="icc-entry-head">
              <div>
                <span className="icc-role">Software Engineer Intern</span>
                <span className="icc-org"> · Bytework</span>
              </div>
              <span className="icc-date">2018</span>
            </div>
            <div className="icc-meta">Remote · Acc. 2018-0507</div>
            <ul className="icc-bullets">
              <li>
                Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="icc-section" data-print-entry="true">
        <div className="icc-class-col">
          <div className="icc-class-num">005.1</div>
          <div className="icc-class-label">Programming</div>
        </div>
        <div className="icc-body">
          <h2>Cross-References</h2>
          <div className="icc-entry" data-print-entry="true">
            <div className="icc-entry-head">
              <div>
                <span className="icc-role">Loomroute</span>
                <span className="icc-org"> · loomroute.dev</span>
              </div>
              <span className="icc-date">GO · OSS</span>
            </div>
            <p className="icc-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </div>
          <div className="icc-entry" data-print-entry="true">
            <div className="icc-entry-head">
              <div>
                <span className="icc-role">Tinytrace</span>
                <span className="icc-org"> · github.com/averypark/tinytrace</span>
              </div>
              <span className="icc-date">RUST · OSS</span>
            </div>
            <p className="icc-prose">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </p>
          </div>
        </div>
      </section>

      <section className="icc-section" data-print-entry="true">
        <div className="icc-class-col">
          <div className="icc-class-num">378</div>
          <div className="icc-class-label">Higher Ed.</div>
        </div>
        <div className="icc-body">
          <h2>Education</h2>
          <div className="icc-entry" data-print-entry="true">
            <div className="icc-entry-head">
              <div>
                <span className="icc-role">B.S. Computer Science</span>
                <span className="icc-org"> · Northern State University</span>
              </div>
              <span className="icc-date">2014 — 2018</span>
            </div>
          </div>
        </div>
      </section>

      <section className="icc-section" data-print-entry="true">
        <div className="icc-class-col">
          <div className="icc-class-num">004</div>
          <div className="icc-class-label">Computing</div>
        </div>
        <div className="icc-body">
          <h2>Skills</h2>
          <dl className="icc-skills">
            <div className="icc-skill-row">
              <dt>LANG</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="icc-skill-row">
              <dt>BACK</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="icc-skill-row">
              <dt>FRONT</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="icc-skill-row">
              <dt>PLAT</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
