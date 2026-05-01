import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MagazineCover() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-magazine-cover">
      <div className="mgc-masthead" data-print-entry="true">
        <div className="mgc-mast-top">
          <span className="mgc-mast-kicker">Issue №07 · The Platform Issue · May 2026</span>
          <span className="mgc-mast-price">Senior · Platform</span>
        </div>
        <h1 className="mgc-name">Avery Park</h1>
        <div className="mgc-mast-deck">
          A senior platform engineer on resilient backends &amp; the quiet craft of boring software.
        </div>
        <div className="mgc-mast-bottom">
          <span className="mgc-mast-byline">By Avery Park</span>
          <span className="mgc-mast-rule" aria-hidden="true" />
          <span className="mgc-mast-tag">Engineer Profile</span>
        </div>
      </div>

      <div className="mgc-body">
        <section className="mgc-contact-bar" data-print-entry="true">
          <div>
            <span className="mgc-contact-label">Subject</span>
            Senior Software Engineer · Platform
          </div>
          <div>
            <span className="mgc-contact-label">Located</span>
            New York, NY
          </div>
          <div>
            <span className="mgc-contact-label">Email</span>
            <a href="mailto:avery@example.com">avery@example.com</a>
          </div>
          <div>
            <span className="mgc-contact-label">Web</span>
            <a href="https://averypark.dev">averypark.dev</a>
          </div>
          <div>
            <span className="mgc-contact-label">Code</span>
            <a href="https://github.com/averypark">github/averypark</a>
          </div>
          <div>
            <span className="mgc-contact-label">Network</span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </div>
        </section>

        <section className="mgc-summary" data-print-entry="true">
          <p className="mgc-lede">
            <span className="mgc-dropcap">I</span> build resilient backend systems and the platforms
            that run them. I prefer small, reversible changes and clear interfaces. Software should
            be <em>boring in production</em> and useful to its users.
          </p>
        </section>

        <section className="mgc-section" data-print-entry="true">
          <h2 className="mgc-section-head">
            <span className="mgc-section-num">01</span>
            The Work
          </h2>

          <article className="mgc-entry" data-print-entry="true">
            <header className="mgc-entry-head">
              <h3>Senior Software Engineer</h3>
              <span className="mgc-entry-date">Mar 2024 — Present</span>
            </header>
            <div className="mgc-entry-sub">
              <em>Coral Labs</em>
              <span className="mgc-dot">·</span>
              <span>New York, NY</span>
            </div>
            <ul className="mgc-bullets">
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

          <article className="mgc-entry" data-print-entry="true">
            <header className="mgc-entry-head">
              <h3>Software Engineer 2</h3>
              <span className="mgc-entry-date">Aug 2022 — Mar 2024</span>
            </header>
            <div className="mgc-entry-sub">
              <em>Coral Labs</em>
              <span className="mgc-dot">·</span>
              <span>New York, NY</span>
            </div>
            <ul className="mgc-bullets">
              <li>
                Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
                production.
              </li>
              <li>Built the internal feature-flag service used across forty-plus services.</li>
            </ul>
          </article>

          <article className="mgc-entry" data-print-entry="true">
            <header className="mgc-entry-head">
              <h3>Software Engineer</h3>
              <span className="mgc-entry-date">Jan 2020 — Jul 2022</span>
            </header>
            <div className="mgc-entry-sub">
              <em>Acme Inc</em>
              <span className="mgc-dot">·</span>
              <span>Remote</span>
            </div>
            <ul className="mgc-bullets">
              <li>
                Shipped the company&apos;s first public API with rate limiting, OAuth2, and SDKs in
                three languages.
              </li>
              <li>Cut average build times from eleven minutes to ninety seconds.</li>
            </ul>
          </article>

          <article className="mgc-entry" data-print-entry="true">
            <header className="mgc-entry-head">
              <h3>Software Engineer Intern</h3>
              <span className="mgc-entry-date">May — Aug 2018</span>
            </header>
            <div className="mgc-entry-sub">
              <em>Bytework</em>
              <span className="mgc-dot">·</span>
              <span>Remote</span>
            </div>
            <ul className="mgc-bullets">
              <li>
                Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
              </li>
            </ul>
          </article>
        </section>

        <section className="mgc-section mgc-twocol" data-print-entry="true">
          <div>
            <h2 className="mgc-section-head">
              <span className="mgc-section-num">02</span>
              Selected Projects
            </h2>
            <article className="mgc-entry mgc-entry-tight" data-print-entry="true">
              <header className="mgc-entry-head">
                <h3>Loomroute</h3>
                <span className="mgc-entry-date">Go · OSS</span>
              </header>
              <p className="mgc-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </article>
            <article className="mgc-entry mgc-entry-tight" data-print-entry="true">
              <header className="mgc-entry-head">
                <h3>Tinytrace</h3>
                <span className="mgc-entry-date">Rust · OSS</span>
              </header>
              <p className="mgc-prose">
                Minimal distributed tracing library — span model, OTLP export, ~3k lines.
              </p>
            </article>
          </div>
          <div>
            <h2 className="mgc-section-head">
              <span className="mgc-section-num">03</span>
              Education &amp; Stack
            </h2>
            <article className="mgc-entry mgc-entry-tight" data-print-entry="true">
              <header className="mgc-entry-head">
                <h3>B.S. Computer Science</h3>
                <span className="mgc-entry-date">2014 — 2018</span>
              </header>
              <div className="mgc-entry-sub">
                <em>Northern State University</em>
              </div>
            </article>
            <dl className="mgc-skills">
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
      </div>
    </PageFrame>
  )
}
