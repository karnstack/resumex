import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ExecutiveGraphite() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-executive-graphite">
      <header className="exg-head">
        <h1 className="exg-wordmark" aria-label="Avery Park">
          AVERY&nbsp;&nbsp;PARK
        </h1>
        <div className="exg-title">Senior Software Engineer · Platform</div>
        <div className="exg-contact">
          <span>avery@example.com</span>
          <span className="exg-sep">/</span>
          <span>New York, NY</span>
          <span className="exg-sep">/</span>
          <span>averypark.dev</span>
          <span className="exg-sep">/</span>
          <span>github.com/averypark</span>
          <span className="exg-sep">/</span>
          <span>in/averypark</span>
        </div>
      </header>

      <section className="exg-section" data-print-entry="true">
        <h2>Summary</h2>
        <p className="exg-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="exg-section" data-print-entry="true">
        <h2>Experience</h2>

        <div className="exg-entry" data-print-entry="true">
          <div className="exg-entry-head">
            <div>
              <div className="exg-entry-title">Senior Software Engineer</div>
              <div className="exg-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="exg-entry-meta">Mar 2024 — Present</div>
          </div>
          <ul className="exg-bullets">
            <li>Migrated the events pipeline to a sharded Kafka cluster; cut p99 latency 3x.</li>
            <li>Owned platform on-call; reduced pages 60% across two quarters.</li>
            <li>Mentored four engineers through senior-level promotions.</li>
          </ul>
        </div>

        <div className="exg-entry" data-print-entry="true">
          <div className="exg-entry-head">
            <div>
              <div className="exg-entry-title">Software Engineer II</div>
              <div className="exg-entry-org">Coral Labs · New York, NY</div>
            </div>
            <div className="exg-entry-meta">Aug 2022 — Mar 2024</div>
          </div>
          <ul className="exg-bullets">
            <li>Designed the billing pipeline (12M events/day) end-to-end.</li>
            <li>Built the internal feature-flag service used across forty services.</li>
          </ul>
        </div>

        <div className="exg-entry" data-print-entry="true">
          <div className="exg-entry-head">
            <div>
              <div className="exg-entry-title">Software Engineer</div>
              <div className="exg-entry-org">Acme Inc · Remote</div>
            </div>
            <div className="exg-entry-meta">Jan 2020 — Jul 2022</div>
          </div>
          <ul className="exg-bullets">
            <li>Shipped the company's first public API with OAuth2 and SDKs in three languages.</li>
            <li>Migrated the monolith's auth module to a standalone identity service.</li>
          </ul>
        </div>

        <div className="exg-entry" data-print-entry="true">
          <div className="exg-entry-head">
            <div>
              <div className="exg-entry-title">Software Engineer Intern</div>
              <div className="exg-entry-org">Bytework · Remote</div>
            </div>
            <div className="exg-entry-meta">May 2018 — Aug 2018</div>
          </div>
          <ul className="exg-bullets">
            <li>Built an internal log aggregator on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="exg-section" data-print-entry="true">
        <h2>Selected Projects</h2>
        <div className="exg-entry" data-print-entry="true">
          <div className="exg-entry-head">
            <div>
              <div className="exg-entry-title">Loomroute</div>
              <div className="exg-entry-org">Open Source · Go</div>
            </div>
            <div className="exg-entry-meta">loomroute.dev</div>
          </div>
          <p className="exg-prose">URL routing library used by ~200 small SaaS applications.</p>
        </div>
        <div className="exg-entry" data-print-entry="true">
          <div className="exg-entry-head">
            <div>
              <div className="exg-entry-title">Tinytrace</div>
              <div className="exg-entry-org">Open Source · Rust</div>
            </div>
            <div className="exg-entry-meta">github.com/averypark/tinytrace</div>
          </div>
          <p className="exg-prose">
            Minimal distributed tracing library — span model, OTLP export.
          </p>
        </div>
      </section>

      <section className="exg-section" data-print-entry="true">
        <h2>Education</h2>
        <div className="exg-entry" data-print-entry="true">
          <div className="exg-entry-head">
            <div>
              <div className="exg-entry-title">B.S. Computer Science</div>
              <div className="exg-entry-org">Northern State University</div>
            </div>
            <div className="exg-entry-meta">2014 — 2018</div>
          </div>
        </div>
      </section>

      <section className="exg-section" data-print-entry="true">
        <h2>Skills</h2>
        <dl className="exg-skills">
          <div className="exg-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="exg-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="exg-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="exg-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
