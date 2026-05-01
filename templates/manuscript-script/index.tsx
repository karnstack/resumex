import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ManuscriptScript() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-manuscript-script">
      <header className="msc-head">
        <div className="msc-eyebrow">Curriculum Vitae · Anno MMXXVI</div>
        <h1 className="msc-name">
          <span className="msc-name-script">Avery Park</span>
        </h1>
        <div className="msc-name-roman">AVERY · PARK</div>
        <div className="msc-rule" aria-hidden="true">
          <span className="msc-rule-line" />
          <span className="msc-rule-mark">·</span>
          <span className="msc-rule-line" />
        </div>
        <div className="msc-title">
          <em>senior software engineer</em>, platform
        </div>
        <div className="msc-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="msc-sep">·</span>
          <span>New York, N.Y.</span>
          <span className="msc-sep">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="msc-sep">·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="msc-sep">·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="msc-section" data-print-entry="true">
        <h2 className="msc-section-head">
          <span className="msc-numeral">I.</span>
          <span className="msc-section-name">On the Author</span>
        </h2>
        <p className="msc-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software, in my view, ought to be{' '}
          <em>boring in production</em> and useful to the hands that wield it.
        </p>
      </section>

      <section className="msc-section" data-print-entry="true">
        <h2 className="msc-section-head">
          <span className="msc-numeral">II.</span>
          <span className="msc-section-name">Of Employment</span>
        </h2>

        <article className="msc-entry" data-print-entry="true">
          <div className="msc-entry-head">
            <h3 className="msc-entry-title">
              Senior Software Engineer<span className="msc-comma">,</span> <em>Coral Labs</em>
            </h3>
            <div className="msc-entry-meta">
              <em>March 2024 — Present</em> · New York
            </div>
          </div>
          <ul className="msc-bullets">
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

        <article className="msc-entry" data-print-entry="true">
          <div className="msc-entry-head">
            <h3 className="msc-entry-title">
              Software Engineer 2<span className="msc-comma">,</span> <em>Coral Labs</em>
            </h3>
            <div className="msc-entry-meta">
              <em>August 2022 — March 2024</em> · New York
            </div>
          </div>
          <ul className="msc-bullets">
            <li>
              Designed the billing pipeline (twelve million events per day on Kafka and Postgres)
              from specification to production.
            </li>
            <li>
              Built the internal feature-flag service used across forty and more microservices.
            </li>
          </ul>
        </article>

        <article className="msc-entry" data-print-entry="true">
          <div className="msc-entry-head">
            <h3 className="msc-entry-title">
              Software Engineer<span className="msc-comma">,</span> <em>Acme Inc.</em>
            </h3>
            <div className="msc-entry-meta">
              <em>January 2020 — July 2022</em> · Remote
            </div>
          </div>
          <ul className="msc-bullets">
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

        <article className="msc-entry" data-print-entry="true">
          <div className="msc-entry-head">
            <h3 className="msc-entry-title">
              Software Engineer Intern<span className="msc-comma">,</span> <em>Bytework</em>
            </h3>
            <div className="msc-entry-meta">
              <em>May 2018 — August 2018</em> · Remote
            </div>
          </div>
          <ul className="msc-bullets">
            <li>Built an internal log aggregator in Go atop Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="msc-section" data-print-entry="true">
        <h2 className="msc-section-head">
          <span className="msc-numeral">III.</span>
          <span className="msc-section-name">Curiosities &amp; Projects</span>
        </h2>
        <article className="msc-entry" data-print-entry="true">
          <div className="msc-entry-head">
            <h3 className="msc-entry-title">
              Loomroute<span className="msc-comma">,</span> <em>URL routing library, Go</em>
            </h3>
            <div className="msc-entry-meta">
              <em>2024 — present</em>
            </div>
          </div>
          <p className="msc-prose">
            Used by some two hundred small SaaS applications. Open-source.
          </p>
        </article>
        <article className="msc-entry" data-print-entry="true">
          <div className="msc-entry-head">
            <h3 className="msc-entry-title">
              Tinytrace<span className="msc-comma">,</span> <em>distributed tracing, Rust</em>
            </h3>
            <div className="msc-entry-meta">
              <em>OSS</em>
            </div>
          </div>
          <p className="msc-prose">
            Minimal tracing library — span model, OTLP export, some three thousand lines.
          </p>
        </article>
      </section>

      <section className="msc-section" data-print-entry="true">
        <h2 className="msc-section-head">
          <span className="msc-numeral">IV.</span>
          <span className="msc-section-name">Of Schooling</span>
        </h2>
        <article className="msc-entry" data-print-entry="true">
          <div className="msc-entry-head">
            <h3 className="msc-entry-title">
              B.S. Computer Science<span className="msc-comma">,</span>{' '}
              <em>Northern State University</em>
            </h3>
            <div className="msc-entry-meta">
              <em>2014 — 2018</em>
            </div>
          </div>
        </article>
      </section>

      <section className="msc-section" data-print-entry="true">
        <h2 className="msc-section-head">
          <span className="msc-numeral">V.</span>
          <span className="msc-section-name">Instruments &amp; Tongues</span>
        </h2>
        <dl className="msc-skills">
          <div className="msc-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="msc-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="msc-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="msc-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>

      <div className="msc-signature" aria-hidden="true">
        <span className="msc-signature-script">A.P.</span>
      </div>
    </PageFrame>
  )
}
