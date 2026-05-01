import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Executive() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-executive">
      <header className="ex-head">
        <div className="ex-eyebrow">Curriculum Vitae</div>
        <h1 className="ex-wordmark" aria-label="Avery Park">
          AVERY&nbsp;&nbsp;PARK
        </h1>
        <div className="ex-title">Senior Software Engineer · Platform</div>
        <div className="ex-rule" aria-hidden="true" />
        <div className="ex-contact">
          <span>avery@example.com</span>
          <span className="ex-sep">·</span>
          <span>New York, NY</span>
          <span className="ex-sep">·</span>
          <span>averypark.dev</span>
          <span className="ex-sep">·</span>
          <span>github.com/averypark</span>
          <span className="ex-sep">·</span>
          <span>in/averypark</span>
        </div>
      </header>

      <section className="ex-section" data-print-entry="true">
        <h2>Summary</h2>
        <p className="ex-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="ex-section" data-print-entry="true">
        <h2>Experience</h2>

        <div className="ex-entry" data-print-entry="true">
          <div className="ex-entry-head">
            <div className="ex-entry-title">
              Senior Software Engineer <span className="ex-at">·</span>{' '}
              <span className="ex-org">Coral Labs</span>
            </div>
            <div className="ex-entry-meta">Mar 2024 — Present · New York, NY</div>
          </div>
          <ul className="ex-bullets">
            <li>Migrated the events pipeline to a sharded Kafka cluster; cut p99 latency 3x.</li>
            <li>Owned platform on-call; reduced pages 60% across two quarters.</li>
            <li>Mentored four engineers through senior-level promotions.</li>
          </ul>
        </div>

        <div className="ex-entry" data-print-entry="true">
          <div className="ex-entry-head">
            <div className="ex-entry-title">
              Software Engineer II <span className="ex-at">·</span>{' '}
              <span className="ex-org">Coral Labs</span>
            </div>
            <div className="ex-entry-meta">Aug 2022 — Mar 2024 · New York, NY</div>
          </div>
          <ul className="ex-bullets">
            <li>Designed the billing pipeline (12M events/day) end-to-end.</li>
            <li>Built the internal feature-flag service used across forty services.</li>
          </ul>
        </div>

        <div className="ex-entry" data-print-entry="true">
          <div className="ex-entry-head">
            <div className="ex-entry-title">
              Software Engineer <span className="ex-at">·</span>{' '}
              <span className="ex-org">Acme Inc</span>
            </div>
            <div className="ex-entry-meta">Jan 2020 — Jul 2022 · Remote</div>
          </div>
          <ul className="ex-bullets">
            <li>Shipped the company's first public API with OAuth2 and SDKs in three languages.</li>
            <li>Migrated the monolith's auth module to a standalone identity service.</li>
          </ul>
        </div>

        <div className="ex-entry" data-print-entry="true">
          <div className="ex-entry-head">
            <div className="ex-entry-title">
              Software Engineer Intern <span className="ex-at">·</span>{' '}
              <span className="ex-org">Bytework</span>
            </div>
            <div className="ex-entry-meta">May 2018 — Aug 2018 · Remote</div>
          </div>
          <ul className="ex-bullets">
            <li>Built an internal log aggregator on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="ex-section" data-print-entry="true">
        <h2>Selected Projects</h2>
        <div className="ex-entry" data-print-entry="true">
          <div className="ex-entry-head">
            <div className="ex-entry-title">
              Loomroute <span className="ex-at">·</span>{' '}
              <span className="ex-org">Open Source · Go</span>
            </div>
            <div className="ex-entry-meta">loomroute.dev</div>
          </div>
          <p className="ex-prose">URL routing library used by ~200 small SaaS applications.</p>
        </div>
        <div className="ex-entry" data-print-entry="true">
          <div className="ex-entry-head">
            <div className="ex-entry-title">
              Tinytrace <span className="ex-at">·</span>{' '}
              <span className="ex-org">Open Source · Rust</span>
            </div>
            <div className="ex-entry-meta">github.com/averypark/tinytrace</div>
          </div>
          <p className="ex-prose">Minimal distributed tracing library — span model, OTLP export.</p>
        </div>
      </section>

      <section className="ex-section" data-print-entry="true">
        <h2>Education</h2>
        <div className="ex-entry" data-print-entry="true">
          <div className="ex-entry-head">
            <div className="ex-entry-title">
              B.S. Computer Science <span className="ex-at">·</span>{' '}
              <span className="ex-org">Northern State University</span>
            </div>
            <div className="ex-entry-meta">2014 — 2018</div>
          </div>
        </div>
      </section>

      <section className="ex-section" data-print-entry="true">
        <h2>Skills</h2>
        <dl className="ex-skills">
          <div className="ex-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="ex-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="ex-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="ex-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
