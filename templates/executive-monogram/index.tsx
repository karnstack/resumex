import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ExecutiveMonogram() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-executive-monogram">
      <header className="exm-head">
        <div className="exm-crest" aria-hidden="true">
          <span className="exm-crest-letters">AP</span>
        </div>
        <h1 className="exm-wordmark" aria-label="Avery Park">
          AVERY&nbsp;&nbsp;PARK
        </h1>
        <div className="exm-title">Senior Software Engineer · Platform</div>
        <div className="exm-contact">
          <span>avery@example.com</span>
          <span className="exm-sep">·</span>
          <span>New York, NY</span>
          <span className="exm-sep">·</span>
          <span>averypark.dev</span>
          <span className="exm-sep">·</span>
          <span>github.com/averypark</span>
          <span className="exm-sep">·</span>
          <span>in/averypark</span>
        </div>
      </header>

      <section className="exm-section" data-print-entry="true">
        <h2>Profile</h2>
        <p className="exm-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="exm-section" data-print-entry="true">
        <h2>Experience</h2>

        <div className="exm-entry" data-print-entry="true">
          <div className="exm-entry-head">
            <div className="exm-entry-title">Senior Software Engineer</div>
            <div className="exm-entry-meta">Mar 2024 — Present</div>
          </div>
          <div className="exm-entry-sub">Coral Labs · New York, NY</div>
          <ul className="exm-bullets">
            <li>Migrated the events pipeline to a sharded Kafka cluster; cut p99 latency 3x.</li>
            <li>Owned platform on-call; reduced pages 60% across two quarters.</li>
            <li>Mentored four engineers through senior-level promotions.</li>
          </ul>
        </div>

        <div className="exm-entry" data-print-entry="true">
          <div className="exm-entry-head">
            <div className="exm-entry-title">Software Engineer II</div>
            <div className="exm-entry-meta">Aug 2022 — Mar 2024</div>
          </div>
          <div className="exm-entry-sub">Coral Labs · New York, NY</div>
          <ul className="exm-bullets">
            <li>Designed the billing pipeline (12M events/day) end-to-end.</li>
            <li>Built the internal feature-flag service used across forty services.</li>
          </ul>
        </div>

        <div className="exm-entry" data-print-entry="true">
          <div className="exm-entry-head">
            <div className="exm-entry-title">Software Engineer</div>
            <div className="exm-entry-meta">Jan 2020 — Jul 2022</div>
          </div>
          <div className="exm-entry-sub">Acme Inc · Remote</div>
          <ul className="exm-bullets">
            <li>Shipped the company's first public API with OAuth2 and SDKs in three languages.</li>
            <li>Migrated the monolith's auth module to a standalone identity service.</li>
          </ul>
        </div>

        <div className="exm-entry" data-print-entry="true">
          <div className="exm-entry-head">
            <div className="exm-entry-title">Software Engineer Intern</div>
            <div className="exm-entry-meta">May 2018 — Aug 2018</div>
          </div>
          <div className="exm-entry-sub">Bytework · Remote</div>
          <ul className="exm-bullets">
            <li>Built an internal log aggregator on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="exm-section" data-print-entry="true">
        <h2>Selected Projects</h2>
        <div className="exm-entry" data-print-entry="true">
          <div className="exm-entry-head">
            <div className="exm-entry-title">Loomroute</div>
            <div className="exm-entry-meta">Open Source · Go</div>
          </div>
          <p className="exm-prose">URL routing library used by ~200 small SaaS applications.</p>
        </div>
        <div className="exm-entry" data-print-entry="true">
          <div className="exm-entry-head">
            <div className="exm-entry-title">Tinytrace</div>
            <div className="exm-entry-meta">Open Source · Rust</div>
          </div>
          <p className="exm-prose">
            Minimal distributed tracing library — span model, OTLP export.
          </p>
        </div>
      </section>

      <section className="exm-section" data-print-entry="true">
        <h2>Education</h2>
        <div className="exm-entry" data-print-entry="true">
          <div className="exm-entry-head">
            <div className="exm-entry-title">B.S. Computer Science</div>
            <div className="exm-entry-meta">2014 — 2018</div>
          </div>
          <div className="exm-entry-sub">Northern State University</div>
        </div>
      </section>

      <section className="exm-section" data-print-entry="true">
        <h2>Skills</h2>
        <dl className="exm-skills">
          <div className="exm-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="exm-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="exm-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="exm-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
