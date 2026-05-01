import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ExecutiveDeepBlue() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-executive-deepblue">
      <header className="exb-head">
        <div className="exb-eyebrow">Curriculum Vitae</div>
        <h1 className="exb-wordmark" aria-label="Avery Park">
          AVERY&nbsp;&nbsp;PARK
        </h1>
        <div className="exb-rule" aria-hidden="true" />
        <div className="exb-title">Senior Software Engineer · Platform</div>
        <div className="exb-contact">
          <span>avery@example.com</span>
          <span className="exb-sep">·</span>
          <span>New York, NY</span>
          <span className="exb-sep">·</span>
          <span>averypark.dev</span>
          <span className="exb-sep">·</span>
          <span>github.com/averypark</span>
          <span className="exb-sep">·</span>
          <span>in/averypark</span>
        </div>
      </header>

      <section className="exb-section" data-print-entry="true">
        <h2>Summary</h2>
        <p className="exb-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="exb-section" data-print-entry="true">
        <h2>Experience</h2>

        <div className="exb-entry" data-print-entry="true">
          <div className="exb-entry-head">
            <div className="exb-entry-title">Senior Software Engineer</div>
            <div className="exb-entry-meta">Mar 2024 — Present</div>
          </div>
          <div className="exb-entry-sub">Coral Labs · New York, NY</div>
          <ul className="exb-bullets">
            <li>Migrated the events pipeline to a sharded Kafka cluster; cut p99 latency 3x.</li>
            <li>Owned platform on-call; reduced pages 60% across two quarters.</li>
            <li>Mentored four engineers through senior-level promotions.</li>
          </ul>
        </div>

        <div className="exb-entry" data-print-entry="true">
          <div className="exb-entry-head">
            <div className="exb-entry-title">Software Engineer II</div>
            <div className="exb-entry-meta">Aug 2022 — Mar 2024</div>
          </div>
          <div className="exb-entry-sub">Coral Labs · New York, NY</div>
          <ul className="exb-bullets">
            <li>Designed the billing pipeline (12M events/day) end-to-end.</li>
            <li>Built the internal feature-flag service used across forty services.</li>
          </ul>
        </div>

        <div className="exb-entry" data-print-entry="true">
          <div className="exb-entry-head">
            <div className="exb-entry-title">Software Engineer</div>
            <div className="exb-entry-meta">Jan 2020 — Jul 2022</div>
          </div>
          <div className="exb-entry-sub">Acme Inc · Remote</div>
          <ul className="exb-bullets">
            <li>Shipped the company's first public API with OAuth2 and SDKs in three languages.</li>
            <li>Migrated the monolith's auth module to a standalone identity service.</li>
          </ul>
        </div>

        <div className="exb-entry" data-print-entry="true">
          <div className="exb-entry-head">
            <div className="exb-entry-title">Software Engineer Intern</div>
            <div className="exb-entry-meta">May 2018 — Aug 2018</div>
          </div>
          <div className="exb-entry-sub">Bytework · Remote</div>
          <ul className="exb-bullets">
            <li>Built an internal log aggregator on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="exb-section" data-print-entry="true">
        <h2>Selected Projects</h2>
        <div className="exb-entry" data-print-entry="true">
          <div className="exb-entry-head">
            <div className="exb-entry-title">Loomroute</div>
            <div className="exb-entry-meta">Open Source · Go</div>
          </div>
          <div className="exb-entry-sub">loomroute.dev</div>
          <p className="exb-prose">URL routing library used by ~200 small SaaS applications.</p>
        </div>
        <div className="exb-entry" data-print-entry="true">
          <div className="exb-entry-head">
            <div className="exb-entry-title">Tinytrace</div>
            <div className="exb-entry-meta">Open Source · Rust</div>
          </div>
          <div className="exb-entry-sub">github.com/averypark/tinytrace</div>
          <p className="exb-prose">
            Minimal distributed tracing library — span model, OTLP export.
          </p>
        </div>
      </section>

      <section className="exb-section" data-print-entry="true">
        <h2>Education</h2>
        <div className="exb-entry" data-print-entry="true">
          <div className="exb-entry-head">
            <div className="exb-entry-title">B.S. Computer Science</div>
            <div className="exb-entry-meta">2014 — 2018</div>
          </div>
          <div className="exb-entry-sub">Northern State University</div>
        </div>
      </section>

      <section className="exb-section" data-print-entry="true">
        <h2>Skills</h2>
        <dl className="exb-skills">
          <div className="exb-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="exb-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="exb-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="exb-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
