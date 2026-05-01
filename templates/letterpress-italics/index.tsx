import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function LetterpressItalics() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-letterpress-italics">
      <header className="lpi-head">
        <div className="lpi-eyebrow">a brief curriculum</div>
        <h1 className="lpi-name">Avery Park</h1>
        <div className="lpi-rule" aria-hidden="true">
          <span className="lpi-orn">&sect;</span>
        </div>
        <div className="lpi-title">senior software engineer, on the platform team</div>
        <div className="lpi-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="lpi-sep">&nbsp;&middot;&nbsp;</span>
          <span>New York, New York</span>
          <span className="lpi-sep">&nbsp;&middot;&nbsp;</span>
          <a href="https://averypark.dev">averypark.dev</a>
        </div>
      </header>

      <section className="lpi-section" data-print-entry="true">
        <h2 className="lpi-section-label">in summary,</h2>
        <p className="lpi-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software, in my view, ought to be quietly
          dependable in production and genuinely useful to the people it serves.
        </p>
      </section>

      <hr className="lpi-hair" />

      <section className="lpi-section" data-print-entry="true">
        <h2 className="lpi-section-label">and so, the experience</h2>

        <article className="lpi-entry" data-print-entry="true">
          <header className="lpi-entry-head">
            <div className="lpi-entry-title">
              <span className="lpi-role">Senior Software Engineer</span>
              <span className="lpi-at">&nbsp;at&nbsp;</span>
              <span className="lpi-org">Coral Labs</span>
            </div>
            <div className="lpi-entry-meta">March 2024 &mdash; Present, in New York</div>
          </header>
          <ul className="lpi-bullets">
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

        <article className="lpi-entry" data-print-entry="true">
          <header className="lpi-entry-head">
            <div className="lpi-entry-title">
              <span className="lpi-role">Software Engineer II</span>
              <span className="lpi-at">&nbsp;at&nbsp;</span>
              <span className="lpi-org">Coral Labs</span>
            </div>
            <div className="lpi-entry-meta">August 2022 &mdash; March 2024, in New York</div>
          </header>
          <ul className="lpi-bullets">
            <li>
              Designed the billing pipeline (twelve million events per day on Kafka and Postgres)
              from specification to production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="lpi-entry" data-print-entry="true">
          <header className="lpi-entry-head">
            <div className="lpi-entry-title">
              <span className="lpi-role">Software Engineer</span>
              <span className="lpi-at">&nbsp;at&nbsp;</span>
              <span className="lpi-org">Acme Inc.</span>
            </div>
            <div className="lpi-entry-meta">January 2020 &mdash; July 2022, remote</div>
          </header>
          <ul className="lpi-bullets">
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

        <article className="lpi-entry" data-print-entry="true">
          <header className="lpi-entry-head">
            <div className="lpi-entry-title">
              <span className="lpi-role">Software Engineer, Intern</span>
              <span className="lpi-at">&nbsp;at&nbsp;</span>
              <span className="lpi-org">Bytework</span>
            </div>
            <div className="lpi-entry-meta">May 2018 &mdash; August 2018, remote</div>
          </header>
          <ul className="lpi-bullets">
            <li>
              Built an internal log aggregator in Go atop Kafka; earned a return offer for full-time
              employment.
            </li>
          </ul>
        </article>
      </section>

      <hr className="lpi-hair" />

      <section className="lpi-section" data-print-entry="true">
        <h2 className="lpi-section-label">a few selected projects,</h2>
        <article className="lpi-entry" data-print-entry="true">
          <header className="lpi-entry-head">
            <div className="lpi-entry-title">
              <span className="lpi-role">Loomroute</span>
              <span className="lpi-at">&nbsp;&mdash;&nbsp;</span>
              <span className="lpi-org">URL routing library, Go</span>
            </div>
            <div className="lpi-entry-meta">loomroute.dev</div>
          </header>
          <p className="lpi-prose">
            An open-source URL routing library used by roughly two hundred small SaaS applications.
            Live since 2024.
          </p>
        </article>
        <article className="lpi-entry" data-print-entry="true">
          <header className="lpi-entry-head">
            <div className="lpi-entry-title">
              <span className="lpi-role">Tinytrace</span>
              <span className="lpi-at">&nbsp;&mdash;&nbsp;</span>
              <span className="lpi-org">distributed tracing, Rust</span>
            </div>
            <div className="lpi-entry-meta">github.com/averypark/tinytrace</div>
          </header>
          <p className="lpi-prose">
            A minimal distributed tracing library: span model, OTLP export, approximately three
            thousand lines.
          </p>
        </article>
      </section>

      <hr className="lpi-hair" />

      <section className="lpi-section" data-print-entry="true">
        <h2 className="lpi-section-label">earlier, a degree</h2>
        <article className="lpi-entry" data-print-entry="true">
          <header className="lpi-entry-head">
            <div className="lpi-entry-title">
              <span className="lpi-role">B.S. Computer Science</span>
              <span className="lpi-at">&nbsp;at&nbsp;</span>
              <span className="lpi-org">Northern State University</span>
            </div>
            <div className="lpi-entry-meta">2014 &mdash; 2018</div>
          </header>
        </article>
      </section>

      <hr className="lpi-hair" />

      <section className="lpi-section" data-print-entry="true">
        <h2 className="lpi-section-label">and finally, what I work with</h2>
        <dl className="lpi-skills">
          <div className="lpi-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="lpi-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="lpi-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="lpi-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
