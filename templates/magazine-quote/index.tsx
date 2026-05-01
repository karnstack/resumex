import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MagazineQuote() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-magazine-quote">
      <header className="mgq-head">
        <div className="mgq-kicker">Feature · Engineer Profile · May 2026</div>
        <h1 className="mgq-name">Avery Park</h1>
        <div className="mgq-byline">
          Senior Software Engineer · Platform
          <span className="mgq-dot">·</span>
          New York, NY
        </div>
      </header>

      <div className="mgq-grid">
        <aside className="mgq-side" data-print-entry="true">
          <div className="mgq-pullquote">
            <span className="mgq-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mgq-quote-text">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
            <div className="mgq-quote-rule" aria-hidden="true" />
            <div className="mgq-quote-attrib">— Avery Park, on craft</div>
          </div>

          <section className="mgq-side-section" data-print-entry="true">
            <h2>Contact</h2>
            <ul className="mgq-contact">
              <li>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </li>
              <li>
                <a href="https://averypark.dev">averypark.dev</a>
              </li>
              <li>
                <a href="https://github.com/averypark">github.com/averypark</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/averypark">linkedin.com/in/averypark</a>
              </li>
              <li>New York, NY</li>
            </ul>
          </section>

          <section className="mgq-side-section" data-print-entry="true">
            <h2>Education</h2>
            <div className="mgq-side-entry">
              <div className="mgq-side-title">B.S. Computer Science</div>
              <div className="mgq-side-sub">Northern State University</div>
              <div className="mgq-side-meta">2014 — 2018</div>
            </div>
          </section>

          <section className="mgq-side-section" data-print-entry="true">
            <h2>Stack</h2>
            <div className="mgq-stack">
              <div>
                <div className="mgq-stack-label">Languages</div>
                Go, TypeScript, Python, Rust
              </div>
              <div>
                <div className="mgq-stack-label">Backend</div>
                Postgres, Redis, Kafka, gRPC
              </div>
              <div>
                <div className="mgq-stack-label">Platform</div>
                AWS, Kubernetes, Docker, Terraform
              </div>
            </div>
          </section>
        </aside>

        <main className="mgq-main">
          <section className="mgq-section" data-print-entry="true">
            <h2 className="mgq-section-head">
              <span className="mgq-section-num">01</span>
              Experience
            </h2>

            <article className="mgq-entry" data-print-entry="true">
              <header className="mgq-entry-head">
                <h3>Senior Software Engineer</h3>
                <span className="mgq-entry-date">Mar 2024 — Present</span>
              </header>
              <div className="mgq-entry-sub">
                <em>Coral Labs</em>
                <span className="mgq-dot">·</span>
                <span>New York, NY</span>
              </div>
              <ul className="mgq-bullets">
                <li>
                  Led the migration of the events pipeline to a horizontally-sharded Kafka cluster,
                  cutting p99 latency by 3×.
                </li>
                <li>
                  Owned platform on-call across two quarters; reduced pages 60% with sharper
                  alerting and runbooks.
                </li>
                <li>Mentored four engineers through L4 → L5 promotions.</li>
              </ul>
            </article>

            <article className="mgq-entry" data-print-entry="true">
              <header className="mgq-entry-head">
                <h3>Software Engineer 2</h3>
                <span className="mgq-entry-date">Aug 2022 — Mar 2024</span>
              </header>
              <div className="mgq-entry-sub">
                <em>Coral Labs</em>
                <span className="mgq-dot">·</span>
                <span>New York, NY</span>
              </div>
              <ul className="mgq-bullets">
                <li>
                  Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
                  production.
                </li>
                <li>Built the internal feature-flag service used across forty-plus services.</li>
              </ul>
            </article>

            <article className="mgq-entry" data-print-entry="true">
              <header className="mgq-entry-head">
                <h3>Software Engineer</h3>
                <span className="mgq-entry-date">Jan 2020 — Jul 2022</span>
              </header>
              <div className="mgq-entry-sub">
                <em>Acme Inc</em>
                <span className="mgq-dot">·</span>
                <span>Remote</span>
              </div>
              <ul className="mgq-bullets">
                <li>
                  Shipped the company&apos;s first public API with rate limiting, OAuth2, and SDKs
                  in three languages.
                </li>
                <li>Cut average build times from eleven minutes to ninety seconds.</li>
              </ul>
            </article>

            <article className="mgq-entry" data-print-entry="true">
              <header className="mgq-entry-head">
                <h3>Software Engineer Intern</h3>
                <span className="mgq-entry-date">May — Aug 2018</span>
              </header>
              <div className="mgq-entry-sub">
                <em>Bytework</em>
                <span className="mgq-dot">·</span>
                <span>Remote</span>
              </div>
              <ul className="mgq-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </article>
          </section>

          <section className="mgq-section" data-print-entry="true">
            <h2 className="mgq-section-head">
              <span className="mgq-section-num">02</span>
              Selected Projects
            </h2>
            <article className="mgq-entry mgq-entry-tight" data-print-entry="true">
              <header className="mgq-entry-head">
                <h3>Loomroute</h3>
                <span className="mgq-entry-date">Go · OSS</span>
              </header>
              <div className="mgq-entry-sub">
                <em>loomroute.dev</em>
              </div>
              <p className="mgq-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </article>
            <article className="mgq-entry mgq-entry-tight" data-print-entry="true">
              <header className="mgq-entry-head">
                <h3>Tinytrace</h3>
                <span className="mgq-entry-date">Rust · OSS</span>
              </header>
              <div className="mgq-entry-sub">
                <em>github.com/averypark/tinytrace</em>
              </div>
              <p className="mgq-prose">
                Minimal distributed tracing library — span model, OTLP export, ~3k lines.
              </p>
            </article>
          </section>
        </main>
      </div>
    </PageFrame>
  )
}
