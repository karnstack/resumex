import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ManuscriptOrnament() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-manuscript-ornament">
      <header className="mo-head">
        <div className="mo-eyebrow">
          <span className="mo-eyebrow-glyph">❦</span>
          <span>Curriculum Vitae · Anno MMXXVI</span>
          <span className="mo-eyebrow-glyph">❦</span>
        </div>
        <h1 className="mo-name">Avery Park</h1>
        <div className="mo-title">
          <em>senior software engineer</em>, platform
        </div>
        <div className="mo-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="mo-sep">·</span>
          <span>New York, N.Y.</span>
          <span className="mo-sep">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="mo-sep">·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="mo-sep">·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <div className="mo-divider" aria-hidden="true">
        <span className="mo-divider-line" />
        <span className="mo-ornament">§</span>
        <span className="mo-divider-line" />
      </div>

      <section className="mo-section" data-print-entry="true">
        <h2 className="mo-section-head">
          <span className="mo-numeral">I.</span>
          <span className="mo-section-name">On the Author</span>
        </h2>
        <p className="mo-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software, in my view, ought to be{' '}
          <em>boring in production</em> and useful to the hands that wield it.
        </p>
      </section>

      <div className="mo-divider" aria-hidden="true">
        <span className="mo-divider-line" />
        <span className="mo-ornament">❦</span>
        <span className="mo-divider-line" />
      </div>

      <section className="mo-section" data-print-entry="true">
        <h2 className="mo-section-head">
          <span className="mo-numeral">II.</span>
          <span className="mo-section-name">Of Employment</span>
        </h2>

        <article className="mo-entry" data-print-entry="true">
          <div className="mo-entry-head">
            <h3 className="mo-entry-title">
              Senior Software Engineer<span className="mo-comma">,</span> <em>Coral Labs</em>
            </h3>
            <div className="mo-entry-meta">
              <em>March 2024 — Present</em> · New York
            </div>
          </div>
          <ul className="mo-bullets">
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

        <div className="mo-mini-divider" aria-hidden="true">
          <span>* * *</span>
        </div>

        <article className="mo-entry" data-print-entry="true">
          <div className="mo-entry-head">
            <h3 className="mo-entry-title">
              Software Engineer 2<span className="mo-comma">,</span> <em>Coral Labs</em>
            </h3>
            <div className="mo-entry-meta">
              <em>August 2022 — March 2024</em> · New York
            </div>
          </div>
          <ul className="mo-bullets">
            <li>
              Designed the billing pipeline (twelve million events per day on Kafka and Postgres)
              from specification to production.
            </li>
            <li>
              Built the internal feature-flag service used across forty and more microservices.
            </li>
          </ul>
        </article>

        <div className="mo-mini-divider" aria-hidden="true">
          <span>* * *</span>
        </div>

        <article className="mo-entry" data-print-entry="true">
          <div className="mo-entry-head">
            <h3 className="mo-entry-title">
              Software Engineer<span className="mo-comma">,</span> <em>Acme Inc.</em>
            </h3>
            <div className="mo-entry-meta">
              <em>January 2020 — July 2022</em> · Remote
            </div>
          </div>
          <ul className="mo-bullets">
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

        <div className="mo-mini-divider" aria-hidden="true">
          <span>* * *</span>
        </div>

        <article className="mo-entry" data-print-entry="true">
          <div className="mo-entry-head">
            <h3 className="mo-entry-title">
              Software Engineer Intern<span className="mo-comma">,</span> <em>Bytework</em>
            </h3>
            <div className="mo-entry-meta">
              <em>May 2018 — August 2018</em> · Remote
            </div>
          </div>
          <ul className="mo-bullets">
            <li>Built an internal log aggregator in Go atop Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <div className="mo-divider" aria-hidden="true">
        <span className="mo-divider-line" />
        <span className="mo-ornament">❀</span>
        <span className="mo-divider-line" />
      </div>

      <section className="mo-section" data-print-entry="true">
        <h2 className="mo-section-head">
          <span className="mo-numeral">III.</span>
          <span className="mo-section-name">Curiosities &amp; Projects</span>
        </h2>
        <article className="mo-entry" data-print-entry="true">
          <div className="mo-entry-head">
            <h3 className="mo-entry-title">
              Loomroute<span className="mo-comma">,</span> <em>URL routing library, Go</em>
            </h3>
            <div className="mo-entry-meta">
              <em>2024 — present</em>
            </div>
          </div>
          <p className="mo-prose">Used by some two hundred small SaaS applications. Open-source.</p>
        </article>
        <div className="mo-mini-divider" aria-hidden="true">
          <span>* * *</span>
        </div>
        <article className="mo-entry" data-print-entry="true">
          <div className="mo-entry-head">
            <h3 className="mo-entry-title">
              Tinytrace<span className="mo-comma">,</span> <em>distributed tracing, Rust</em>
            </h3>
            <div className="mo-entry-meta">
              <em>OSS</em>
            </div>
          </div>
          <p className="mo-prose">
            Minimal tracing library — span model, OTLP export, some three thousand lines.
          </p>
        </article>
      </section>

      <div className="mo-divider" aria-hidden="true">
        <span className="mo-divider-line" />
        <span className="mo-ornament">§</span>
        <span className="mo-divider-line" />
      </div>

      <section className="mo-section" data-print-entry="true">
        <h2 className="mo-section-head">
          <span className="mo-numeral">IV.</span>
          <span className="mo-section-name">Of Schooling</span>
        </h2>
        <article className="mo-entry" data-print-entry="true">
          <div className="mo-entry-head">
            <h3 className="mo-entry-title">
              B.S. Computer Science<span className="mo-comma">,</span>{' '}
              <em>Northern State University</em>
            </h3>
            <div className="mo-entry-meta">
              <em>2014 — 2018</em>
            </div>
          </div>
        </article>
      </section>

      <div className="mo-divider" aria-hidden="true">
        <span className="mo-divider-line" />
        <span className="mo-ornament">❦</span>
        <span className="mo-divider-line" />
      </div>

      <section className="mo-section" data-print-entry="true">
        <h2 className="mo-section-head">
          <span className="mo-numeral">V.</span>
          <span className="mo-section-name">Instruments &amp; Tongues</span>
        </h2>
        <dl className="mo-skills">
          <div className="mo-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="mo-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="mo-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="mo-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>

      <div className="mo-divider mo-divider-end" aria-hidden="true">
        <span className="mo-ornament">❦ § ❦</span>
      </div>
    </PageFrame>
  )
}
