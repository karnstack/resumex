import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ManuscriptRoman() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-manuscript-roman">
      <header className="mr-head">
        <div className="mr-eyebrow">Curriculum Vitae · Anno MMXXVI</div>
        <h1 className="mr-name">Avery Park</h1>
        <div className="mr-title">
          <em>senior software engineer</em>, platform
        </div>
        <div className="mr-rule" aria-hidden="true" />
        <div className="mr-contact">
          <span>
            <a href="mailto:avery@example.com">avery@example.com</a>
          </span>
          <span className="mr-sep">·</span>
          <span>New York, N.Y.</span>
          <span className="mr-sep">·</span>
          <span>
            <a href="https://averypark.dev">averypark.dev</a>
          </span>
          <span className="mr-sep">·</span>
          <span>
            <a href="https://github.com/averypark">github.com/averypark</a>
          </span>
          <span className="mr-sep">·</span>
          <span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </span>
        </div>
      </header>

      <section className="mr-section" data-print-entry="true">
        <div className="mr-section-head">
          <span className="mr-numeral">I.</span>
          <span className="mr-section-name">On the Author</span>
        </div>
        <div className="mr-section-body">
          <p className="mr-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software, in my view, ought to be{' '}
            <em>boring in production</em> and useful to the hands that wield it.
          </p>
        </div>
      </section>

      <section className="mr-section" data-print-entry="true">
        <div className="mr-section-head">
          <span className="mr-numeral">II.</span>
          <span className="mr-section-name">Of Employment</span>
        </div>
        <div className="mr-section-body">
          <article className="mr-entry" data-print-entry="true">
            <div className="mr-entry-head">
              <h3 className="mr-entry-title">
                Senior Software Engineer<span className="mr-em">,</span> <em>Coral Labs</em>
              </h3>
              <div className="mr-entry-meta">
                <em>March 2024 — Present</em> · New York
              </div>
            </div>
            <ul className="mr-bullets">
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

          <article className="mr-entry" data-print-entry="true">
            <div className="mr-entry-head">
              <h3 className="mr-entry-title">
                Software Engineer 2<span className="mr-em">,</span> <em>Coral Labs</em>
              </h3>
              <div className="mr-entry-meta">
                <em>August 2022 — March 2024</em> · New York
              </div>
            </div>
            <ul className="mr-bullets">
              <li>
                Designed the billing pipeline (twelve million events per day on Kafka and Postgres)
                from specification to production.
              </li>
              <li>
                Built the internal feature-flag service used across forty and more microservices.
              </li>
            </ul>
          </article>

          <article className="mr-entry" data-print-entry="true">
            <div className="mr-entry-head">
              <h3 className="mr-entry-title">
                Software Engineer<span className="mr-em">,</span> <em>Acme Inc.</em>
              </h3>
              <div className="mr-entry-meta">
                <em>January 2020 — July 2022</em> · Remote
              </div>
            </div>
            <ul className="mr-bullets">
              <li>
                Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
                languages.
              </li>
              <li>
                Migrated the legacy monolith's auth module to a standalone identity service,
                unblocking single sign-on.
              </li>
              <li>Cut average build times from eleven minutes to ninety seconds.</li>
            </ul>
          </article>

          <article className="mr-entry" data-print-entry="true">
            <div className="mr-entry-head">
              <h3 className="mr-entry-title">
                Software Engineer Intern<span className="mr-em">,</span> <em>Bytework</em>
              </h3>
              <div className="mr-entry-meta">
                <em>May 2018 — August 2018</em> · Remote
              </div>
            </div>
            <ul className="mr-bullets">
              <li>Built an internal log aggregator in Go atop Kafka. Earned a return offer.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mr-section" data-print-entry="true">
        <div className="mr-section-head">
          <span className="mr-numeral">III.</span>
          <span className="mr-section-name">Curiosities &amp; Projects</span>
        </div>
        <div className="mr-section-body">
          <article className="mr-entry" data-print-entry="true">
            <div className="mr-entry-head">
              <h3 className="mr-entry-title">
                Loomroute<span className="mr-em">,</span> <em>URL routing library, Go</em>
              </h3>
              <div className="mr-entry-meta">
                <em>2024 — present</em>
              </div>
            </div>
            <p className="mr-prose">
              Used by some two hundred small SaaS applications. Open-source.
            </p>
          </article>
          <article className="mr-entry" data-print-entry="true">
            <div className="mr-entry-head">
              <h3 className="mr-entry-title">
                Tinytrace<span className="mr-em">,</span> <em>distributed tracing, Rust</em>
              </h3>
              <div className="mr-entry-meta">
                <em>OSS</em>
              </div>
            </div>
            <p className="mr-prose">
              Minimal tracing library — span model, OTLP export, some three thousand lines.
            </p>
          </article>
        </div>
      </section>

      <section className="mr-section" data-print-entry="true">
        <div className="mr-section-head">
          <span className="mr-numeral">IV.</span>
          <span className="mr-section-name">Of Schooling</span>
        </div>
        <div className="mr-section-body">
          <article className="mr-entry" data-print-entry="true">
            <div className="mr-entry-head">
              <h3 className="mr-entry-title">
                B.S. Computer Science<span className="mr-em">,</span>{' '}
                <em>Northern State University</em>
              </h3>
              <div className="mr-entry-meta">
                <em>2014 — 2018</em>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mr-section" data-print-entry="true">
        <div className="mr-section-head">
          <span className="mr-numeral">V.</span>
          <span className="mr-section-name">Instruments &amp; Tongues</span>
        </div>
        <div className="mr-section-body">
          <dl className="mr-skills">
            <div className="mr-skill-row">
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="mr-skill-row">
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="mr-skill-row">
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="mr-skill-row">
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
