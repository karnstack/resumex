import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function SaasViolet() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-saas-violet">
      <header className="ss-head">
        <div className="ss-head-top">
          <span className="ss-eyebrow">Engineer · Platform</span>
        </div>
        <h1 className="ss-name">Avery Park</h1>
        <div className="ss-title">Senior Software Engineer — Platform Systems</div>
        <div className="ss-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="ss-sep">·</span>
          <span>New York, NY</span>
          <span className="ss-sep">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="ss-sep">·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="ss-sep">·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="ss-section ss-summary" data-print-entry="true">
        <h2 className="ss-h2">About</h2>
        <p className="ss-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be{' '}
          <span className="ss-mark">boring in production</span> and useful to its users.
        </p>
      </section>

      <section className="ss-section" data-print-entry="true">
        <h2 className="ss-h2">Experience</h2>

        <article className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div className="ss-entry-title-row">
              <span className="ss-role">Senior Software Engineer</span>
              <span className="ss-at">at</span>
              <span className="ss-org">Coral Labs</span>
            </div>
            <span className="ss-stamp">Mar 2024 — Present · NYC</span>
          </div>
          <ul className="ss-bullets">
            <li>
              Led migration of the events pipeline to a horizontally-sharded Kafka cluster, cutting
              p99 latency 3×.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
              and better runbooks.
            </li>
            <li>Mentored four engineers through L4 → L5 promotions.</li>
          </ul>
        </article>

        <article className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div className="ss-entry-title-row">
              <span className="ss-role">Software Engineer 2</span>
              <span className="ss-at">at</span>
              <span className="ss-org">Coral Labs</span>
            </div>
            <span className="ss-stamp">Aug 2022 — Mar 2024 · NYC</span>
          </div>
          <ul className="ss-bullets">
            <li>
              Designed and shipped the billing pipeline (12M events/day on Kafka + Postgres) from
              spec to production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            <li>Drove architecture-level reviews for cross-team launches.</li>
          </ul>
        </article>

        <article className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div className="ss-entry-title-row">
              <span className="ss-role">Software Engineer</span>
              <span className="ss-at">at</span>
              <span className="ss-org">Acme Inc</span>
            </div>
            <span className="ss-stamp">Jan 2020 — Jul 2022 · Remote</span>
          </div>
          <ul className="ss-bullets">
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
        </article>

        <article className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div className="ss-entry-title-row">
              <span className="ss-role">Software Engineer Intern</span>
              <span className="ss-at">at</span>
              <span className="ss-org">Bytework</span>
            </div>
            <span className="ss-stamp">May 2018 — Aug 2018 · Remote</span>
          </div>
          <ul className="ss-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="ss-section" data-print-entry="true">
        <h2 className="ss-h2">Projects</h2>

        <article className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div className="ss-entry-title-row">
              <span className="ss-role">Loomroute</span>
              <span className="ss-at">·</span>
              <span className="ss-org">loomroute.dev</span>
            </div>
            <span className="ss-stamp">Go · OSS · Live</span>
          </div>
          <p className="ss-prose">
            URL routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </article>

        <article className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div className="ss-entry-title-row">
              <span className="ss-role">Tinytrace</span>
              <span className="ss-at">·</span>
              <span className="ss-org">github.com/averypark/tinytrace</span>
            </div>
            <span className="ss-stamp">Rust · OSS</span>
          </div>
          <p className="ss-prose">
            Minimal distributed tracing library — span model, OTLP export, ~3k lines.
          </p>
        </article>
      </section>

      <section className="ss-section" data-print-entry="true">
        <h2 className="ss-h2">Skills</h2>
        <div className="ss-skill-grid">
          <div className="ss-skill-row">
            <span className="ss-skill-label">Languages</span>
            <div className="ss-chips">
              <span className="ss-chip">Go</span>
              <span className="ss-chip">TypeScript</span>
              <span className="ss-chip">Python</span>
              <span className="ss-chip">Rust</span>
            </div>
          </div>
          <div className="ss-skill-row">
            <span className="ss-skill-label">Backend</span>
            <div className="ss-chips">
              <span className="ss-chip">Postgres</span>
              <span className="ss-chip">Redis</span>
              <span className="ss-chip">Kafka</span>
              <span className="ss-chip">gRPC</span>
            </div>
          </div>
          <div className="ss-skill-row">
            <span className="ss-skill-label">Frontend</span>
            <div className="ss-chips">
              <span className="ss-chip">React</span>
              <span className="ss-chip">Next.js</span>
              <span className="ss-chip">Tailwind</span>
              <span className="ss-chip">Vite</span>
            </div>
          </div>
          <div className="ss-skill-row">
            <span className="ss-skill-label">Platform</span>
            <div className="ss-chips">
              <span className="ss-chip">AWS</span>
              <span className="ss-chip">Kubernetes</span>
              <span className="ss-chip">Docker</span>
              <span className="ss-chip">Terraform</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ss-section" data-print-entry="true">
        <h2 className="ss-h2">Education</h2>
        <article className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div className="ss-entry-title-row">
              <span className="ss-role">B.S. Computer Science</span>
              <span className="ss-at">at</span>
              <span className="ss-org">Northern State University</span>
            </div>
            <span className="ss-stamp">2014 — 2018</span>
          </div>
        </article>
      </section>
    </PageFrame>
  )
}
