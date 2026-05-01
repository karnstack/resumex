import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Letterpress() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-letterpress">
      <header className="lp-head">
        <div className="lp-eyebrow">Curriculum Vitae</div>
        <h1 className="lp-name">Avery Park</h1>
        <div className="lp-rule lp-rule-double" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="lp-title">Senior Software Engineer &middot; Platform</div>
        <div className="lp-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="lp-sep" aria-hidden="true">
            &nbsp;&middot;&nbsp;
          </span>
          <span>New York, New York</span>
          <span className="lp-sep" aria-hidden="true">
            &nbsp;&middot;&nbsp;
          </span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="lp-sep" aria-hidden="true">
            &nbsp;&middot;&nbsp;
          </span>
          <a href="https://github.com/averypark">github.com/averypark</a>
        </div>
      </header>

      <section className="lp-section" data-print-entry="true">
        <h2 className="lp-section-label">Summary</h2>
        <p className="lp-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software, in my view, ought to be quietly
          dependable in production and genuinely useful to the people it serves.
        </p>
      </section>

      <hr className="lp-hair" />

      <section className="lp-section" data-print-entry="true">
        <h2 className="lp-section-label">Experience</h2>

        <article className="lp-entry" data-print-entry="true">
          <header className="lp-entry-head">
            <div className="lp-entry-title">
              Senior Software Engineer, <em className="lp-org">Coral Labs</em>
            </div>
            <div className="lp-entry-meta">
              <em>March 2024 &mdash; Present</em>
              <span>New York, NY</span>
            </div>
          </header>
          <ul className="lp-bullets">
            <li>
              Led the migration of the events pipeline to a horizontally-sharded Kafka cluster,
              reducing p99 latency by a factor of three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages by sixty percent through
              sharper alerting and well-kept runbooks.
            </li>
            <li>Mentored four engineers through promotion to senior.</li>
          </ul>
        </article>

        <article className="lp-entry" data-print-entry="true">
          <header className="lp-entry-head">
            <div className="lp-entry-title">
              Software Engineer II, <em className="lp-org">Coral Labs</em>
            </div>
            <div className="lp-entry-meta">
              <em>August 2022 &mdash; March 2024</em>
              <span>New York, NY</span>
            </div>
          </header>
          <ul className="lp-bullets">
            <li>
              Designed the billing pipeline (twelve million events per day on Kafka and Postgres)
              from specification to production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="lp-entry" data-print-entry="true">
          <header className="lp-entry-head">
            <div className="lp-entry-title">
              Software Engineer, <em className="lp-org">Acme Inc.</em>
            </div>
            <div className="lp-entry-meta">
              <em>January 2020 &mdash; July 2022</em>
              <span>Remote</span>
            </div>
          </header>
          <ul className="lp-bullets">
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

        <article className="lp-entry" data-print-entry="true">
          <header className="lp-entry-head">
            <div className="lp-entry-title">
              Software Engineer, Intern &middot; <em className="lp-org">Bytework</em>
            </div>
            <div className="lp-entry-meta">
              <em>May 2018 &mdash; August 2018</em>
              <span>Remote</span>
            </div>
          </header>
          <ul className="lp-bullets">
            <li>
              Built an internal log aggregator in Go atop Kafka; earned a return offer for full-time
              employment.
            </li>
          </ul>
        </article>
      </section>

      <hr className="lp-hair" />

      <section className="lp-section" data-print-entry="true">
        <h2 className="lp-section-label">Selected Projects</h2>
        <article className="lp-entry" data-print-entry="true">
          <header className="lp-entry-head">
            <div className="lp-entry-title">
              Loomroute &mdash; <em>URL routing library, Go</em>
            </div>
            <div className="lp-entry-meta">
              <em>loomroute.dev</em>
            </div>
          </header>
          <p className="lp-prose">
            An open-source URL routing library used by roughly two hundred small SaaS applications.
            Live since 2024.
          </p>
        </article>
        <article className="lp-entry" data-print-entry="true">
          <header className="lp-entry-head">
            <div className="lp-entry-title">
              Tinytrace &mdash; <em>Distributed tracing, Rust</em>
            </div>
            <div className="lp-entry-meta">
              <em>github.com/averypark/tinytrace</em>
            </div>
          </header>
          <p className="lp-prose">
            A minimal distributed tracing library: span model, OTLP export, approximately three
            thousand lines.
          </p>
        </article>
      </section>

      <hr className="lp-hair" />

      <section className="lp-section" data-print-entry="true">
        <h2 className="lp-section-label">Education</h2>
        <article className="lp-entry" data-print-entry="true">
          <header className="lp-entry-head">
            <div className="lp-entry-title">
              B.S. Computer Science, <em className="lp-org">Northern State University</em>
            </div>
            <div className="lp-entry-meta">
              <em>2014 &mdash; 2018</em>
            </div>
          </header>
        </article>
      </section>

      <hr className="lp-hair" />

      <section className="lp-section" data-print-entry="true">
        <h2 className="lp-section-label">Capabilities</h2>
        <dl className="lp-skills">
          <div className="lp-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="lp-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="lp-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="lp-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
