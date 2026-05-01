import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ManuscriptFolio() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-manuscript-folio">
      <header className="mf-head">
        <div className="mf-folio-row">
          <span className="mf-folio">folio i.</span>
          <span className="mf-folio-em">Curriculum Vitae · Anno MMXXVI</span>
          <span className="mf-folio">recto</span>
        </div>
        <h1 className="mf-name">Avery Park</h1>
        <div className="mf-title">
          <em>senior software engineer</em>, platform
        </div>
        <div className="mf-rule" aria-hidden="true">
          <span className="mf-rule-glyph">❧</span>
        </div>
        <div className="mf-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="mf-sep">·</span>
          <span>New York, N.Y.</span>
          <span className="mf-sep">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="mf-sep">·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="mf-sep">·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="mf-section" data-print-entry="true">
        <div className="mf-section-row">
          <span className="mf-folio-num">i</span>
          <h2 className="mf-section-head">
            <span className="mf-numeral">I.</span>
            <span className="mf-section-name">On the Author</span>
          </h2>
          <span className="mf-folio-num mf-folio-right">i</span>
        </div>
        <p className="mf-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software, in my view, ought to be{' '}
          <em>boring in production</em> and useful to the hands that wield it.
        </p>
      </section>

      <section className="mf-section" data-print-entry="true">
        <div className="mf-section-row">
          <span className="mf-folio-num">ii</span>
          <h2 className="mf-section-head">
            <span className="mf-numeral">II.</span>
            <span className="mf-section-name">Of Employment</span>
          </h2>
          <span className="mf-folio-num mf-folio-right">ii</span>
        </div>

        <article className="mf-entry" data-print-entry="true">
          <div className="mf-entry-head">
            <h3 className="mf-entry-title">Senior Software Engineer</h3>
            <div className="mf-entry-firm">
              <em>Coral Labs</em>, New York
            </div>
            <div className="mf-entry-meta">
              <em>March 2024 — Present</em>
            </div>
          </div>
          <ul className="mf-bullets">
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

        <article className="mf-entry" data-print-entry="true">
          <div className="mf-entry-head">
            <h3 className="mf-entry-title">Software Engineer 2</h3>
            <div className="mf-entry-firm">
              <em>Coral Labs</em>, New York
            </div>
            <div className="mf-entry-meta">
              <em>August 2022 — March 2024</em>
            </div>
          </div>
          <ul className="mf-bullets">
            <li>
              Designed the billing pipeline (twelve million events per day on Kafka and Postgres)
              from specification to production.
            </li>
            <li>
              Built the internal feature-flag service used across forty and more microservices.
            </li>
          </ul>
        </article>

        <article className="mf-entry" data-print-entry="true">
          <div className="mf-entry-head">
            <h3 className="mf-entry-title">Software Engineer</h3>
            <div className="mf-entry-firm">
              <em>Acme Inc.</em>, Remote
            </div>
            <div className="mf-entry-meta">
              <em>January 2020 — July 2022</em>
            </div>
          </div>
          <ul className="mf-bullets">
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

        <article className="mf-entry" data-print-entry="true">
          <div className="mf-entry-head">
            <h3 className="mf-entry-title">Software Engineer Intern</h3>
            <div className="mf-entry-firm">
              <em>Bytework</em>, Remote
            </div>
            <div className="mf-entry-meta">
              <em>May 2018 — August 2018</em>
            </div>
          </div>
          <ul className="mf-bullets">
            <li>Built an internal log aggregator in Go atop Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="mf-section" data-print-entry="true">
        <div className="mf-section-row">
          <span className="mf-folio-num">iii</span>
          <h2 className="mf-section-head">
            <span className="mf-numeral">III.</span>
            <span className="mf-section-name">Curiosities &amp; Projects</span>
          </h2>
          <span className="mf-folio-num mf-folio-right">iii</span>
        </div>
        <article className="mf-entry" data-print-entry="true">
          <div className="mf-entry-head">
            <h3 className="mf-entry-title">Loomroute</h3>
            <div className="mf-entry-firm">
              <em>URL routing library, Go</em>
            </div>
            <div className="mf-entry-meta">
              <em>2024 — present</em>
            </div>
          </div>
          <p className="mf-prose">Used by some two hundred small SaaS applications. Open-source.</p>
        </article>
        <article className="mf-entry" data-print-entry="true">
          <div className="mf-entry-head">
            <h3 className="mf-entry-title">Tinytrace</h3>
            <div className="mf-entry-firm">
              <em>distributed tracing, Rust</em>
            </div>
            <div className="mf-entry-meta">
              <em>OSS</em>
            </div>
          </div>
          <p className="mf-prose">
            Minimal tracing library — span model, OTLP export, some three thousand lines.
          </p>
        </article>
      </section>

      <section className="mf-section" data-print-entry="true">
        <div className="mf-section-row">
          <span className="mf-folio-num">iv</span>
          <h2 className="mf-section-head">
            <span className="mf-numeral">IV.</span>
            <span className="mf-section-name">Of Schooling</span>
          </h2>
          <span className="mf-folio-num mf-folio-right">iv</span>
        </div>
        <article className="mf-entry" data-print-entry="true">
          <div className="mf-entry-head">
            <h3 className="mf-entry-title">B.S. Computer Science</h3>
            <div className="mf-entry-firm">
              <em>Northern State University</em>
            </div>
            <div className="mf-entry-meta">
              <em>2014 — 2018</em>
            </div>
          </div>
        </article>
      </section>

      <section className="mf-section" data-print-entry="true">
        <div className="mf-section-row">
          <span className="mf-folio-num">v</span>
          <h2 className="mf-section-head">
            <span className="mf-numeral">V.</span>
            <span className="mf-section-name">Instruments &amp; Tongues</span>
          </h2>
          <span className="mf-folio-num mf-folio-right">v</span>
        </div>
        <dl className="mf-skills">
          <div className="mf-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="mf-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="mf-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="mf-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
