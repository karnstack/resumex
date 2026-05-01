import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Magazine() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-magazine">
      <header className="mg-head">
        <div className="mg-kicker">
          <span className="mg-kicker-block" aria-hidden="true" />
          <span>Feature</span>
          <span className="mg-kicker-sep">·</span>
          <span>May 2026</span>
          <span className="mg-kicker-sep">·</span>
          <span>The Platform Issue</span>
        </div>
        <h1 className="mg-name">Avery Park</h1>
        <div className="mg-deck">
          A senior platform engineer on building boring infrastructure that&nbsp;people actually
          enjoy using.
        </div>
        <div className="mg-byline">
          <span className="mg-byline-label">Subject</span>
          <span>Senior Software Engineer · Platform</span>
          <span className="mg-byline-dot">·</span>
          <span>New York, NY</span>
          <span className="mg-byline-dot">·</span>
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="mg-byline-dot">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="mg-byline-dot">·</span>
          <a href="https://github.com/averypark">github/averypark</a>
        </div>
      </header>

      <section className="mg-pullquote" data-print-entry="true">
        <span className="mg-quote-mark" aria-hidden="true">
          &ldquo;
        </span>
        <p>
          I build resilient backend systems and the platforms that run them. Software should be
          boring in production and useful to its users.
        </p>
        <div className="mg-quote-attrib">— On craft</div>
      </section>

      <section className="mg-section" data-print-entry="true">
        <div className="mg-section-head">
          <span className="mg-section-num">01</span>
          <h2>The Work</h2>
          <span className="mg-section-rule" aria-hidden="true" />
        </div>

        <article className="mg-entry" data-print-entry="true">
          <header className="mg-entry-head">
            <h3>Senior Software Engineer</h3>
            <span className="mg-entry-date">Mar 2024 — Present</span>
          </header>
          <div className="mg-entry-sub">
            <em>Coral Labs</em>
            <span className="mg-dot">·</span>
            <span>New York, NY</span>
          </div>
          <ul className="mg-bullets">
            <li>
              Led the migration of the events pipeline to a horizontally-sharded Kafka cluster,
              cutting p99 latency by 3×.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
              and runbooks.
            </li>
            <li>Mentored four engineers through L4 → L5 promotions.</li>
          </ul>
        </article>

        <article className="mg-entry" data-print-entry="true">
          <header className="mg-entry-head">
            <h3>Software Engineer 2</h3>
            <span className="mg-entry-date">Aug 2022 — Mar 2024</span>
          </header>
          <div className="mg-entry-sub">
            <em>Coral Labs</em>
            <span className="mg-dot">·</span>
            <span>New York, NY</span>
          </div>
          <ul className="mg-bullets">
            <li>
              Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="mg-entry" data-print-entry="true">
          <header className="mg-entry-head">
            <h3>Software Engineer</h3>
            <span className="mg-entry-date">Jan 2020 — Jul 2022</span>
          </header>
          <div className="mg-entry-sub">
            <em>Acme Inc</em>
            <span className="mg-dot">·</span>
            <span>Remote</span>
          </div>
          <ul className="mg-bullets">
            <li>
              Shipped the company&apos;s first public API with rate limiting, OAuth2, and SDKs in
              three languages.
            </li>
            <li>Cut average build times from eleven minutes to ninety seconds.</li>
          </ul>
        </article>

        <article className="mg-entry" data-print-entry="true">
          <header className="mg-entry-head">
            <h3>Software Engineer Intern</h3>
            <span className="mg-entry-date">May — Aug 2018</span>
          </header>
          <div className="mg-entry-sub">
            <em>Bytework</em>
            <span className="mg-dot">·</span>
            <span>Remote</span>
          </div>
          <ul className="mg-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="mg-section mg-twocol" data-print-entry="true">
        <div className="mg-twocol-col">
          <div className="mg-section-head">
            <span className="mg-section-num">02</span>
            <h2>Field Notes</h2>
            <span className="mg-section-rule" aria-hidden="true" />
          </div>
          <article className="mg-entry mg-entry-tight" data-print-entry="true">
            <header className="mg-entry-head">
              <h3>Loomroute</h3>
              <span className="mg-entry-date">Go · OSS</span>
            </header>
            <p className="mg-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </article>
          <article className="mg-entry mg-entry-tight" data-print-entry="true">
            <header className="mg-entry-head">
              <h3>Tinytrace</h3>
              <span className="mg-entry-date">Rust · OSS</span>
            </header>
            <p className="mg-prose">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </p>
          </article>
        </div>
        <div className="mg-twocol-col">
          <div className="mg-section-head">
            <span className="mg-section-num">03</span>
            <h2>Education</h2>
            <span className="mg-section-rule" aria-hidden="true" />
          </div>
          <article className="mg-entry mg-entry-tight" data-print-entry="true">
            <header className="mg-entry-head">
              <h3>B.S. Computer Science</h3>
              <span className="mg-entry-date">2014 — 2018</span>
            </header>
            <div className="mg-entry-sub">
              <em>Northern State University</em>
            </div>
          </article>
          <div className="mg-section-sub">Stack</div>
          <dl className="mg-skills">
            <div className="mg-skill-row">
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="mg-skill-row">
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="mg-skill-row">
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
