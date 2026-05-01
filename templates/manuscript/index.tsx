import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Manuscript() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-manuscript">
      <header className="ms-head">
        <div className="ms-eyebrow">
          <span>Curriculum Vitae</span>
          <span className="ms-eyebrow-dot">·</span>
          <span className="ms-eyebrow-em">Anno MMXXVI</span>
        </div>
        <h1 className="ms-name">Avery Park</h1>
        <div className="ms-rule">
          <span className="ms-rule-line" />
          <span className="ms-rule-mark">·</span>
          <span className="ms-rule-line" />
        </div>
        <div className="ms-title">
          <em>senior software engineer</em> · platform
        </div>
        <div className="ms-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="ms-sep">·</span>
          <span>New York, N.Y.</span>
          <span className="ms-sep">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="ms-sep">·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="ms-sep">·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="ms-section" data-print-entry="true">
        <h2 className="ms-section-head">
          <span className="ms-numeral">I.</span>
          <span className="ms-section-name">On the Author</span>
        </h2>
        <p className="ms-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software, in my view, ought to be{' '}
          <em>boring in production</em> and useful to the hands that wield it.
        </p>
      </section>

      <section className="ms-section" data-print-entry="true">
        <h2 className="ms-section-head">
          <span className="ms-numeral">II.</span>
          <span className="ms-section-name">Of Employment</span>
        </h2>

        <article className="ms-entry" data-print-entry="true">
          <div className="ms-entry-head">
            <h3 className="ms-entry-title">
              Senior Software Engineer<span className="ms-comma">,</span>{' '}
              <span className="ms-entry-firm">Coral Labs</span>
            </h3>
            <div className="ms-entry-meta">
              <em>March 2024 — Present</em>, New York
            </div>
          </div>
          <ul className="ms-bullets">
            <li>
              Led the migration of the events pipeline to a horizontally-sharded Kafka cluster,
              reducing p99 latency by a factor of three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages by sixty per cent through
              sharper alerting and considered runbooks.
            </li>
            <li>Mentored four engineers through promotion from L4 to L5.</li>
          </ul>
        </article>

        <article className="ms-entry" data-print-entry="true">
          <div className="ms-entry-head">
            <h3 className="ms-entry-title">
              Software Engineer 2<span className="ms-comma">,</span>{' '}
              <span className="ms-entry-firm">Coral Labs</span>
            </h3>
            <div className="ms-entry-meta">
              <em>August 2022 — March 2024</em>, New York
            </div>
          </div>
          <ul className="ms-bullets">
            <li>
              Designed the billing pipeline (twelve million events per day on Kafka and Postgres)
              from specification to production.
            </li>
            <li>
              Built the internal feature-flag service used across forty and more microservices.
            </li>
          </ul>
        </article>

        <article className="ms-entry" data-print-entry="true">
          <div className="ms-entry-head">
            <h3 className="ms-entry-title">
              Software Engineer<span className="ms-comma">,</span>{' '}
              <span className="ms-entry-firm">Acme Inc.</span>
            </h3>
            <div className="ms-entry-meta">
              <em>January 2020 — July 2022</em>, Remote
            </div>
          </div>
          <ul className="ms-bullets">
            <li>
              Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
              languages.
            </li>
            <li>
              Migrated the legacy monolith's auth module to a standalone identity service, thereby
              unblocking single sign-on.
            </li>
            <li>Cut average build times from eleven minutes to ninety seconds.</li>
          </ul>
        </article>

        <article className="ms-entry" data-print-entry="true">
          <div className="ms-entry-head">
            <h3 className="ms-entry-title">
              Software Engineer Intern<span className="ms-comma">,</span>{' '}
              <span className="ms-entry-firm">Bytework</span>
            </h3>
            <div className="ms-entry-meta">
              <em>May 2018 — August 2018</em>, Remote
            </div>
          </div>
          <ul className="ms-bullets">
            <li>Built an internal log aggregator in Go atop Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="ms-section" data-print-entry="true">
        <h2 className="ms-section-head">
          <span className="ms-numeral">III.</span>
          <span className="ms-section-name">Curiosities &amp; Projects</span>
        </h2>
        <article className="ms-entry" data-print-entry="true">
          <div className="ms-entry-head">
            <h3 className="ms-entry-title">
              Loomroute<span className="ms-comma">,</span>{' '}
              <span className="ms-entry-firm">URL routing library, Go</span>
            </h3>
            <div className="ms-entry-meta">
              <em>2024 — present</em>
            </div>
          </div>
          <p className="ms-prose">Used by some two hundred small SaaS applications. Open-source.</p>
        </article>
        <article className="ms-entry" data-print-entry="true">
          <div className="ms-entry-head">
            <h3 className="ms-entry-title">
              Tinytrace<span className="ms-comma">,</span>{' '}
              <span className="ms-entry-firm">distributed tracing, Rust</span>
            </h3>
            <div className="ms-entry-meta">
              <em>OSS</em>
            </div>
          </div>
          <p className="ms-prose">
            Minimal tracing library — span model, OTLP export, some three thousand lines.
          </p>
        </article>
      </section>

      <section className="ms-section" data-print-entry="true">
        <h2 className="ms-section-head">
          <span className="ms-numeral">IV.</span>
          <span className="ms-section-name">Of Schooling</span>
        </h2>
        <article className="ms-entry" data-print-entry="true">
          <div className="ms-entry-head">
            <h3 className="ms-entry-title">
              B.S. Computer Science<span className="ms-comma">,</span>{' '}
              <span className="ms-entry-firm">Northern State University</span>
            </h3>
            <div className="ms-entry-meta">
              <em>2014 — 2018</em>
            </div>
          </div>
        </article>
      </section>

      <section className="ms-section" data-print-entry="true">
        <h2 className="ms-section-head">
          <span className="ms-numeral">V.</span>
          <span className="ms-section-name">Instruments &amp; Tongues</span>
        </h2>
        <dl className="ms-skills">
          <div className="ms-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="ms-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="ms-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="ms-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
