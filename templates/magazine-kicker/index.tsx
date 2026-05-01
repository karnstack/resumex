import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MagazineKicker() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-magazine-kicker">
      <header className="mgk-head">
        <div className="mgk-kicker-row">
          <span className="mgk-kicker-line" aria-hidden="true" />
          <span className="mgk-kicker">
            The&nbsp;Platform&nbsp;Issue · Engineer&nbsp;Profile · Volume&nbsp;XII
          </span>
          <span className="mgk-kicker-line" aria-hidden="true" />
        </div>
        <h1 className="mgk-name">Avery Park</h1>
        <div className="mgk-deck">
          A senior platform engineer on resilient systems and the quiet craft of boring software.
        </div>
        <div className="mgk-meta-row">
          <div className="mgk-role">Senior Software Engineer · Platform</div>
          <div className="mgk-contact">
            <span>New York, NY</span>
            <span className="mgk-dot">·</span>
            <a href="mailto:avery@example.com">avery@example.com</a>
            <span className="mgk-dot">·</span>
            <a href="https://averypark.dev">averypark.dev</a>
            <span className="mgk-dot">·</span>
            <a href="https://github.com/averypark">github/averypark</a>
            <span className="mgk-dot">·</span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </div>
        </div>
      </header>

      <section className="mgk-summary" data-print-entry="true">
        <div className="mgk-section-label">
          <span className="mgk-section-num">§ 01</span>
          <span>Profile</span>
        </div>
        <p className="mgk-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be <em>boring in production</em>{' '}
          and useful to its users.
        </p>
      </section>

      <section className="mgk-section" data-print-entry="true">
        <div className="mgk-section-label">
          <span className="mgk-section-num">§ 02</span>
          <span>Experience</span>
        </div>

        <article className="mgk-entry" data-print-entry="true">
          <header className="mgk-entry-head">
            <div>
              <h3>Senior Software Engineer</h3>
              <div className="mgk-entry-sub">
                <em>Coral Labs</em>
                <span className="mgk-dot">·</span>
                <span>New York, NY</span>
              </div>
            </div>
            <span className="mgk-entry-date">2024 — Present</span>
          </header>
          <ul className="mgk-bullets">
            <li>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency
              by 3×.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
              and runbooks.
            </li>
            <li>Mentored four engineers through L4 → L5 promotions.</li>
          </ul>
        </article>

        <article className="mgk-entry" data-print-entry="true">
          <header className="mgk-entry-head">
            <div>
              <h3>Software Engineer 2</h3>
              <div className="mgk-entry-sub">
                <em>Coral Labs</em>
                <span className="mgk-dot">·</span>
                <span>New York, NY</span>
              </div>
            </div>
            <span className="mgk-entry-date">2022 — 2024</span>
          </header>
          <ul className="mgk-bullets">
            <li>
              Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="mgk-entry" data-print-entry="true">
          <header className="mgk-entry-head">
            <div>
              <h3>Software Engineer</h3>
              <div className="mgk-entry-sub">
                <em>Acme Inc</em>
                <span className="mgk-dot">·</span>
                <span>Remote</span>
              </div>
            </div>
            <span className="mgk-entry-date">2020 — 2022</span>
          </header>
          <ul className="mgk-bullets">
            <li>
              Shipped the company&apos;s first public API with rate limiting, OAuth2, and SDKs in
              three languages.
            </li>
            <li>Cut average build times from eleven minutes to ninety seconds.</li>
          </ul>
        </article>

        <article className="mgk-entry" data-print-entry="true">
          <header className="mgk-entry-head">
            <div>
              <h3>Software Engineer Intern</h3>
              <div className="mgk-entry-sub">
                <em>Bytework</em>
                <span className="mgk-dot">·</span>
                <span>Remote</span>
              </div>
            </div>
            <span className="mgk-entry-date">2018</span>
          </header>
          <ul className="mgk-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="mgk-section mgk-twocol" data-print-entry="true">
        <div>
          <div className="mgk-section-label">
            <span className="mgk-section-num">§ 03</span>
            <span>Projects</span>
          </div>
          <article className="mgk-entry mgk-entry-tight" data-print-entry="true">
            <h3>Loomroute</h3>
            <div className="mgk-entry-sub">
              <em>loomroute.dev</em>
              <span className="mgk-dot">·</span>
              <span>Go · OSS</span>
            </div>
            <p className="mgk-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </article>
          <article className="mgk-entry mgk-entry-tight" data-print-entry="true">
            <h3>Tinytrace</h3>
            <div className="mgk-entry-sub">
              <em>github.com/averypark/tinytrace</em>
              <span className="mgk-dot">·</span>
              <span>Rust · OSS</span>
            </div>
            <p className="mgk-prose">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </p>
          </article>
        </div>
        <div>
          <div className="mgk-section-label">
            <span className="mgk-section-num">§ 04</span>
            <span>Education</span>
          </div>
          <article className="mgk-entry mgk-entry-tight" data-print-entry="true">
            <h3>B.S. Computer Science</h3>
            <div className="mgk-entry-sub">
              <em>Northern State University</em>
              <span className="mgk-dot">·</span>
              <span>2014 — 2018</span>
            </div>
          </article>
          <div className="mgk-section-label mgk-section-label-inline">
            <span className="mgk-section-num">§ 05</span>
            <span>Skills</span>
          </div>
          <dl className="mgk-skills">
            <div>
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div>
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
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
