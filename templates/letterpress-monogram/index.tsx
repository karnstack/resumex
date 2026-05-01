import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function LetterpressMonogram() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-letterpress-monogram">
      <header className="lpm-head">
        <div className="lpm-monogram" aria-hidden="true">
          <span className="lpm-mono-l">A</span>
          <span className="lpm-mono-bar" />
          <span className="lpm-mono-r">P</span>
        </div>
        <h1 className="lpm-name">Avery Park</h1>
        <div className="lpm-title">Senior Software Engineer &middot; Platform</div>
        <div className="lpm-rule lpm-rule-double" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="lpm-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="lpm-sep">&nbsp;&middot;&nbsp;</span>
          <span>New York, New York</span>
          <span className="lpm-sep">&nbsp;&middot;&nbsp;</span>
          <a href="https://averypark.dev">averypark.dev</a>
        </div>
      </header>

      <section className="lpm-section" data-print-entry="true">
        <h2 className="lpm-section-label">Summary</h2>
        <p className="lpm-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software, in my view, ought to be quietly
          dependable in production and genuinely useful to the people it serves.
        </p>
      </section>

      <hr className="lpm-hair" />

      <section className="lpm-section" data-print-entry="true">
        <h2 className="lpm-section-label">Experience</h2>

        <article className="lpm-entry" data-print-entry="true">
          <header className="lpm-entry-head">
            <div className="lpm-entry-title">
              Senior Software Engineer, <em className="lpm-org">Coral Labs</em>
            </div>
            <div className="lpm-entry-meta">
              <em>March 2024 &mdash; Present</em>
              <span>New York, NY</span>
            </div>
          </header>
          <ul className="lpm-bullets">
            <li>
              Led migration of the events pipeline to a horizontally-sharded Kafka cluster, cutting
              p99 latency by a factor of three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages by sixty percent through
              sharper alerting and well-kept runbooks.
            </li>
            <li>Mentored four engineers through promotion to senior.</li>
          </ul>
        </article>

        <article className="lpm-entry" data-print-entry="true">
          <header className="lpm-entry-head">
            <div className="lpm-entry-title">
              Software Engineer II, <em className="lpm-org">Coral Labs</em>
            </div>
            <div className="lpm-entry-meta">
              <em>August 2022 &mdash; March 2024</em>
              <span>New York, NY</span>
            </div>
          </header>
          <ul className="lpm-bullets">
            <li>
              Designed the billing pipeline (twelve million events per day on Kafka and Postgres)
              from specification to production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="lpm-entry" data-print-entry="true">
          <header className="lpm-entry-head">
            <div className="lpm-entry-title">
              Software Engineer, <em className="lpm-org">Acme Inc.</em>
            </div>
            <div className="lpm-entry-meta">
              <em>January 2020 &mdash; July 2022</em>
              <span>Remote</span>
            </div>
          </header>
          <ul className="lpm-bullets">
            <li>
              Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs in
              three languages.
            </li>
            <li>
              Migrated the legacy monolith&rsquo;s authentication module to a standalone identity
              service, unblocking single sign-on.
            </li>
            <li>Reduced average build times from eleven minutes to ninety seconds.</li>
          </ul>
        </article>

        <article className="lpm-entry" data-print-entry="true">
          <header className="lpm-entry-head">
            <div className="lpm-entry-title">
              Software Engineer, Intern &middot; <em className="lpm-org">Bytework</em>
            </div>
            <div className="lpm-entry-meta">
              <em>May 2018 &mdash; August 2018</em>
              <span>Remote</span>
            </div>
          </header>
          <ul className="lpm-bullets">
            <li>
              Built an internal log aggregator in Go atop Kafka; earned a return offer for full-time
              employment.
            </li>
          </ul>
        </article>
      </section>

      <hr className="lpm-hair" />

      <section className="lpm-section" data-print-entry="true">
        <h2 className="lpm-section-label">Selected Projects</h2>
        <article className="lpm-entry" data-print-entry="true">
          <header className="lpm-entry-head">
            <div className="lpm-entry-title">
              Loomroute &mdash; <em>URL routing library, Go</em>
            </div>
            <div className="lpm-entry-meta">
              <em>loomroute.dev</em>
            </div>
          </header>
          <p className="lpm-prose">
            An open-source URL routing library used by roughly two hundred small SaaS applications.
            Live since 2024.
          </p>
        </article>
        <article className="lpm-entry" data-print-entry="true">
          <header className="lpm-entry-head">
            <div className="lpm-entry-title">
              Tinytrace &mdash; <em>Distributed tracing, Rust</em>
            </div>
            <div className="lpm-entry-meta">
              <em>github.com/averypark/tinytrace</em>
            </div>
          </header>
          <p className="lpm-prose">
            A minimal distributed tracing library: span model, OTLP export, approximately three
            thousand lines.
          </p>
        </article>
      </section>

      <hr className="lpm-hair" />

      <section className="lpm-section" data-print-entry="true">
        <h2 className="lpm-section-label">Education</h2>
        <article className="lpm-entry" data-print-entry="true">
          <header className="lpm-entry-head">
            <div className="lpm-entry-title">
              B.S. Computer Science, <em className="lpm-org">Northern State University</em>
            </div>
            <div className="lpm-entry-meta">
              <em>2014 &mdash; 2018</em>
            </div>
          </header>
        </article>
      </section>

      <hr className="lpm-hair" />

      <section className="lpm-section" data-print-entry="true">
        <h2 className="lpm-section-label">Capabilities</h2>
        <dl className="lpm-skills">
          <div className="lpm-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="lpm-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="lpm-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="lpm-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
