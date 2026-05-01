import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function NewspaperGazette() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-newspaper-gazette">
      <header className="gz-mast">
        <div className="gz-mast-rule gz-mast-rule-thick" aria-hidden="true" />
        <div className="gz-mast-rule" aria-hidden="true" />
        <div className="gz-mast-row">
          <div className="gz-mast-side">Established MMXIV</div>
          <h1 className="gz-title">The Gazette</h1>
          <div className="gz-mast-side">Vol. XII · No. 03</div>
        </div>
        <div className="gz-mast-rule" aria-hidden="true" />
        <div className="gz-mast-rule gz-mast-rule-thick" aria-hidden="true" />
        <div className="gz-mast-meta">
          New York · A weekly chronicle of the works of Avery Park · May 2026
        </div>
        <div className="gz-name-block">
          <div className="gz-ornament" aria-hidden="true">
            ❦
          </div>
          <div className="gz-name">Avery Park</div>
          <div className="gz-name-sub">Senior Software Engineer · Platform</div>
          <div className="gz-name-contact">
            <a href="mailto:avery@example.com">avery@example.com</a>
            <span className="gz-bullet">●</span>
            <a href="https://averypark.dev">averypark.dev</a>
            <span className="gz-bullet">●</span>
            <a href="https://github.com/averypark">github.com/averypark</a>
            <span className="gz-bullet">●</span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </div>
        </div>
      </header>

      <section className="gz-section" data-print-entry="true">
        <div className="gz-running">
          <span className="gz-running-name">The Gazette</span>
          <span className="gz-running-dot">·</span>
          <span className="gz-running-section">Profile</span>
          <span className="gz-running-page">i</span>
        </div>
        <p className="gz-lede">
          <span className="gz-dropcap">I</span>
          build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="gz-section" data-print-entry="true">
        <div className="gz-running">
          <span className="gz-running-name">The Gazette</span>
          <span className="gz-running-dot">·</span>
          <span className="gz-running-section">Experience</span>
          <span className="gz-running-page">ii</span>
        </div>

        <article className="gz-entry" data-print-entry="true">
          <h3 className="gz-entry-title">Senior Software Engineer</h3>
          <div className="gz-entry-line">
            <span className="gz-entry-sub">Coral Labs · New York</span>
            <span className="gz-entry-meta">Mar 2024 — Present</span>
          </div>
          <p>
            Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency by
            three. Owned platform on-call across two quarters and reduced pages by 60% with sharper
            alerting. Mentored four engineers through L4 to L5 promotions.
          </p>
        </article>
        <div className="gz-em-rule" aria-hidden="true">
          —
        </div>

        <article className="gz-entry" data-print-entry="true">
          <h3 className="gz-entry-title">Software Engineer 2</h3>
          <div className="gz-entry-line">
            <span className="gz-entry-sub">Coral Labs · New York</span>
            <span className="gz-entry-meta">Aug 2022 — Mar 2024</span>
          </div>
          <p>
            Designed the billing pipeline (12M events / day on Kafka + Postgres) from spec to
            production. Built the internal feature-flag service used across forty microservices.
          </p>
        </article>
        <div className="gz-em-rule" aria-hidden="true">
          —
        </div>

        <article className="gz-entry" data-print-entry="true">
          <h3 className="gz-entry-title">Software Engineer</h3>
          <div className="gz-entry-line">
            <span className="gz-entry-sub">Acme Inc · Remote</span>
            <span className="gz-entry-meta">Jan 2020 — Jul 2022</span>
          </div>
          <p>
            Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
            languages. Migrated the legacy auth module to a standalone identity service. Cut average
            build times from eleven minutes to ninety seconds.
          </p>
        </article>
        <div className="gz-em-rule" aria-hidden="true">
          —
        </div>

        <article className="gz-entry" data-print-entry="true">
          <h3 className="gz-entry-title">Software Engineer Intern</h3>
          <div className="gz-entry-line">
            <span className="gz-entry-sub">Bytework · Remote</span>
            <span className="gz-entry-meta">May 2018 — Aug 2018</span>
          </div>
          <p>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</p>
        </article>
      </section>

      <section className="gz-section" data-print-entry="true">
        <div className="gz-running">
          <span className="gz-running-name">The Gazette</span>
          <span className="gz-running-dot">·</span>
          <span className="gz-running-section">Projects</span>
          <span className="gz-running-page">iii</span>
        </div>
        <div className="gz-cols-2">
          <article className="gz-entry">
            <h3 className="gz-entry-title">Loomroute</h3>
            <div className="gz-entry-line">
              <span className="gz-entry-sub">Go · Open Source</span>
            </div>
            <p>URL routing library used by ~200 small SaaS apps. Live since 2024.</p>
          </article>
          <article className="gz-entry">
            <h3 className="gz-entry-title">Tinytrace</h3>
            <div className="gz-entry-line">
              <span className="gz-entry-sub">Rust · Open Source</span>
            </div>
            <p>Minimal distributed tracing library — span model, OTLP export, ~3k lines.</p>
          </article>
        </div>
      </section>

      <section className="gz-section gz-foot" data-print-entry="true">
        <div className="gz-foot-col">
          <div className="gz-running">
            <span className="gz-running-name">The Gazette</span>
            <span className="gz-running-dot">·</span>
            <span className="gz-running-section">Education</span>
            <span className="gz-running-page">iv</span>
          </div>
          <article className="gz-entry">
            <h3 className="gz-entry-title">B.S. Computer Science</h3>
            <div className="gz-entry-line">
              <span className="gz-entry-sub">Northern State University</span>
              <span className="gz-entry-meta">2014 — 2018</span>
            </div>
          </article>
        </div>
        <div className="gz-foot-col">
          <div className="gz-running">
            <span className="gz-running-name">The Gazette</span>
            <span className="gz-running-dot">·</span>
            <span className="gz-running-section">Skills</span>
            <span className="gz-running-page">v</span>
          </div>
          <p className="gz-skills">
            <em>Languages</em> Go, TypeScript, Python, Rust. <em>Backend</em> Postgres, Redis,
            Kafka, gRPC. <em>Frontend</em> React, Next.js, Tailwind, Vite. <em>Platform</em> AWS,
            Kubernetes, Docker, Terraform.
          </p>
        </div>
      </section>
    </PageFrame>
  )
}
