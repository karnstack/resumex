import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ExecutiveRule() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-executive-rule">
      <header className="exr-head">
        <h1 className="exr-wordmark" aria-label="Avery Park">
          AVERY&nbsp;&nbsp;PARK
        </h1>
        <div className="exr-rule" aria-hidden="true" />
        <div className="exr-meta-row">
          <div className="exr-title">Senior Software Engineer · Platform</div>
          <div className="exr-contact">
            <span>avery@example.com</span>
            <span className="exr-sep">·</span>
            <span>New York, NY</span>
            <span className="exr-sep">·</span>
            <span>averypark.dev</span>
            <span className="exr-sep">·</span>
            <span>github.com/averypark</span>
          </div>
        </div>
      </header>

      <section className="exr-section" data-print-entry="true">
        <h2>
          <span className="exr-h2-text">Summary</span>
        </h2>
        <p className="exr-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="exr-section" data-print-entry="true">
        <h2>
          <span className="exr-h2-text">Experience</span>
        </h2>

        <div className="exr-entry" data-print-entry="true">
          <div className="exr-entry-head">
            <div className="exr-entry-title">
              Senior Software Engineer <span className="exr-org">— Coral Labs</span>
            </div>
            <div className="exr-entry-meta">Mar 2024 — Present · New York, NY</div>
          </div>
          <ul className="exr-bullets">
            <li>Migrated the events pipeline to a sharded Kafka cluster; cut p99 latency 3x.</li>
            <li>Owned platform on-call; reduced pages 60% across two quarters.</li>
            <li>Mentored four engineers through senior-level promotions.</li>
          </ul>
        </div>

        <div className="exr-entry" data-print-entry="true">
          <div className="exr-entry-head">
            <div className="exr-entry-title">
              Software Engineer II <span className="exr-org">— Coral Labs</span>
            </div>
            <div className="exr-entry-meta">Aug 2022 — Mar 2024 · New York, NY</div>
          </div>
          <ul className="exr-bullets">
            <li>Designed the billing pipeline (12M events/day) end-to-end.</li>
            <li>Built the internal feature-flag service used across forty services.</li>
          </ul>
        </div>

        <div className="exr-entry" data-print-entry="true">
          <div className="exr-entry-head">
            <div className="exr-entry-title">
              Software Engineer <span className="exr-org">— Acme Inc</span>
            </div>
            <div className="exr-entry-meta">Jan 2020 — Jul 2022 · Remote</div>
          </div>
          <ul className="exr-bullets">
            <li>Shipped the company's first public API with OAuth2 and SDKs in three languages.</li>
            <li>Migrated the monolith's auth module to a standalone identity service.</li>
          </ul>
        </div>

        <div className="exr-entry" data-print-entry="true">
          <div className="exr-entry-head">
            <div className="exr-entry-title">
              Software Engineer Intern <span className="exr-org">— Bytework</span>
            </div>
            <div className="exr-entry-meta">May 2018 — Aug 2018 · Remote</div>
          </div>
          <ul className="exr-bullets">
            <li>Built an internal log aggregator on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="exr-section" data-print-entry="true">
        <h2>
          <span className="exr-h2-text">Selected Projects</span>
        </h2>
        <div className="exr-entry" data-print-entry="true">
          <div className="exr-entry-head">
            <div className="exr-entry-title">
              Loomroute <span className="exr-org">— Open Source · Go</span>
            </div>
            <div className="exr-entry-meta">loomroute.dev</div>
          </div>
          <p className="exr-prose">URL routing library used by ~200 small SaaS applications.</p>
        </div>
        <div className="exr-entry" data-print-entry="true">
          <div className="exr-entry-head">
            <div className="exr-entry-title">
              Tinytrace <span className="exr-org">— Open Source · Rust</span>
            </div>
            <div className="exr-entry-meta">github.com/averypark/tinytrace</div>
          </div>
          <p className="exr-prose">
            Minimal distributed tracing library — span model, OTLP export.
          </p>
        </div>
      </section>

      <section className="exr-section" data-print-entry="true">
        <h2>
          <span className="exr-h2-text">Education</span>
        </h2>
        <div className="exr-entry" data-print-entry="true">
          <div className="exr-entry-head">
            <div className="exr-entry-title">
              B.S. Computer Science <span className="exr-org">— Northern State University</span>
            </div>
            <div className="exr-entry-meta">2014 — 2018</div>
          </div>
        </div>
      </section>

      <section className="exr-section" data-print-entry="true">
        <h2>
          <span className="exr-h2-text">Skills</span>
        </h2>
        <dl className="exr-skills">
          <div className="exr-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="exr-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="exr-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="exr-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
