import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function NewspaperTribune() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-newspaper-tribune">
      <header className="trib-mast">
        <div className="trib-banner">
          <span>The Daily Tribune</span>
          <span className="trib-banner-dot">·</span>
          <span>Career Edition</span>
          <span className="trib-banner-dot">·</span>
          <span>May 2026</span>
        </div>
        <div className="trib-rule trib-rule-thick" aria-hidden="true" />
        <div className="trib-eyebrow">Senior Software Engineer · Platform · New York</div>
        <h1 className="trib-name">Avery Park</h1>
        <p className="trib-deck">
          A platform engineer on resilient backends, sharper alerts, and software that is boring in
          production and useful to its users.
        </p>
        <div className="trib-rule" aria-hidden="true" />
        <div className="trib-byline">
          <span>BY THE EDITORS</span>
          <span>
            <a href="mailto:avery@example.com">avery@example.com</a> ·{' '}
            <a href="https://averypark.dev">averypark.dev</a> ·{' '}
            <a href="https://github.com/averypark">github.com/averypark</a> ·{' '}
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </span>
        </div>
      </header>

      <section className="trib-section trib-lede" data-print-entry="true">
        <p>
          <span className="trib-dropcap">I</span>
          build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="trib-section" data-print-entry="true">
        <h2 className="trib-h2">
          <span>Experience</span>
        </h2>

        <article className="trib-entry" data-print-entry="true">
          <header className="trib-entry-head">
            <h3 className="trib-entry-title">Senior Software Engineer</h3>
            <div className="trib-entry-meta">Mar 2024 — Present</div>
          </header>
          <div className="trib-entry-sub">Coral Labs · New York, NY</div>
          <ul className="trib-bullets">
            <li>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency
              by three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting.
            </li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </article>

        <article className="trib-entry" data-print-entry="true">
          <header className="trib-entry-head">
            <h3 className="trib-entry-title">Software Engineer 2</h3>
            <div className="trib-entry-meta">Aug 2022 — Mar 2024</div>
          </header>
          <div className="trib-entry-sub">Coral Labs · New York, NY</div>
          <ul className="trib-bullets">
            <li>
              Designed the billing pipeline (12M events / day on Kafka + Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="trib-entry" data-print-entry="true">
          <header className="trib-entry-head">
            <h3 className="trib-entry-title">Software Engineer</h3>
            <div className="trib-entry-meta">Jan 2020 — Jul 2022</div>
          </header>
          <div className="trib-entry-sub">Acme Inc · Remote</div>
          <ul className="trib-bullets">
            <li>
              Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
              languages.
            </li>
            <li>
              Migrated the legacy monolith's auth module to a standalone identity service,
              unblocking SSO.
            </li>
            <li>Cut average build times from eleven minutes to ninety seconds.</li>
          </ul>
        </article>

        <article className="trib-entry" data-print-entry="true">
          <header className="trib-entry-head">
            <h3 className="trib-entry-title">Software Engineer Intern</h3>
            <div className="trib-entry-meta">May 2018 — Aug 2018</div>
          </header>
          <div className="trib-entry-sub">Bytework · Remote</div>
          <ul className="trib-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="trib-section trib-grid" data-print-entry="true">
        <div>
          <h2 className="trib-h2">
            <span>Projects</span>
          </h2>
          <article className="trib-entry">
            <h3 className="trib-entry-title">Loomroute</h3>
            <div className="trib-entry-sub">Go · Open Source</div>
            <p>URL routing library used by ~200 small SaaS apps. Live since 2024.</p>
          </article>
          <article className="trib-entry">
            <h3 className="trib-entry-title">Tinytrace</h3>
            <div className="trib-entry-sub">Rust · Open Source</div>
            <p>Minimal distributed tracing library — span model, OTLP export, ~3k lines.</p>
          </article>
        </div>
        <div>
          <h2 className="trib-h2">
            <span>Education</span>
          </h2>
          <article className="trib-entry">
            <h3 className="trib-entry-title">B.S. Computer Science</h3>
            <div className="trib-entry-sub">Northern State University</div>
            <div className="trib-entry-meta trib-meta-inline">2014 — 2018</div>
          </article>

          <h2 className="trib-h2 trib-h2-spaced">
            <span>Skills</span>
          </h2>
          <dl className="trib-skills">
            <div>
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div>
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div>
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
