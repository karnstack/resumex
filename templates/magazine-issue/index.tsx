import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MagazineIssue() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-magazine-issue">
      <header className="mgi-masthead">
        <div className="mgi-mast-row">
          <div className="mgi-issue">
            <span className="mgi-issue-num">Issue №07</span>
            <span className="mgi-issue-sep">·</span>
            <span>Vol. XII</span>
          </div>
          <div className="mgi-mast-rule" aria-hidden="true" />
          <div className="mgi-date">
            <div className="mgi-date-day">02</div>
            <div className="mgi-date-month">May 2026</div>
          </div>
        </div>
        <h1 className="mgi-name">Avery Park</h1>
        <div className="mgi-deck-row">
          <div className="mgi-deck">
            On building resilient backend systems &amp; the platforms that quietly run them.
          </div>
          <div className="mgi-byline">
            <div className="mgi-byline-label">By the desk of</div>
            <div className="mgi-byline-role">Senior Software Engineer · Platform</div>
            <div className="mgi-byline-loc">New York, NY</div>
          </div>
        </div>
        <div className="mgi-mast-bottom" aria-hidden="true" />
      </header>

      <section className="mgi-summary" data-print-entry="true">
        <div className="mgi-section-num">№ 01 — Profile</div>
        <p className="mgi-lede">
          <span className="mgi-dropcap">I</span> build resilient backend systems and the platforms
          that run them. I prefer small, reversible changes and clear interfaces. Software should be{' '}
          <em>boring in production</em> and useful to its users.
        </p>
      </section>

      <section className="mgi-section" data-print-entry="true">
        <div className="mgi-section-num">№ 02 — Experience</div>

        <article className="mgi-entry" data-print-entry="true">
          <header className="mgi-entry-head">
            <div>
              <h3>Senior Software Engineer</h3>
              <div className="mgi-entry-sub">
                <em>Coral Labs</em>
                <span className="mgi-dot">·</span>
                <span>New York, NY</span>
              </div>
            </div>
            <span className="mgi-entry-date">Mar 2024 — Present</span>
          </header>
          <ul className="mgi-bullets">
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

        <article className="mgi-entry" data-print-entry="true">
          <header className="mgi-entry-head">
            <div>
              <h3>Software Engineer 2</h3>
              <div className="mgi-entry-sub">
                <em>Coral Labs</em>
                <span className="mgi-dot">·</span>
                <span>New York, NY</span>
              </div>
            </div>
            <span className="mgi-entry-date">Aug 2022 — Mar 2024</span>
          </header>
          <ul className="mgi-bullets">
            <li>
              Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="mgi-entry" data-print-entry="true">
          <header className="mgi-entry-head">
            <div>
              <h3>Software Engineer</h3>
              <div className="mgi-entry-sub">
                <em>Acme Inc</em>
                <span className="mgi-dot">·</span>
                <span>Remote</span>
              </div>
            </div>
            <span className="mgi-entry-date">Jan 2020 — Jul 2022</span>
          </header>
          <ul className="mgi-bullets">
            <li>
              Shipped the company&apos;s first public API with rate limiting, OAuth2, and SDKs in
              three languages.
            </li>
            <li>Cut average build times from eleven minutes to ninety seconds.</li>
          </ul>
        </article>

        <article className="mgi-entry" data-print-entry="true">
          <header className="mgi-entry-head">
            <div>
              <h3>Software Engineer Intern</h3>
              <div className="mgi-entry-sub">
                <em>Bytework</em>
                <span className="mgi-dot">·</span>
                <span>Remote</span>
              </div>
            </div>
            <span className="mgi-entry-date">May — Aug 2018</span>
          </header>
          <ul className="mgi-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="mgi-section mgi-twocol" data-print-entry="true">
        <div>
          <div className="mgi-section-num">№ 03 — Projects</div>
          <article className="mgi-entry mgi-entry-tight" data-print-entry="true">
            <h3>Loomroute</h3>
            <div className="mgi-entry-sub">
              <em>loomroute.dev</em>
              <span className="mgi-dot">·</span>
              <span>Go · OSS</span>
            </div>
            <p className="mgi-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </article>
          <article className="mgi-entry mgi-entry-tight" data-print-entry="true">
            <h3>Tinytrace</h3>
            <div className="mgi-entry-sub">
              <em>github.com/averypark/tinytrace</em>
              <span className="mgi-dot">·</span>
              <span>Rust · OSS</span>
            </div>
            <p className="mgi-prose">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </p>
          </article>
        </div>
        <div>
          <div className="mgi-section-num">№ 04 — Education &amp; Stack</div>
          <article className="mgi-entry mgi-entry-tight" data-print-entry="true">
            <h3>B.S. Computer Science</h3>
            <div className="mgi-entry-sub">
              <em>Northern State University</em>
              <span className="mgi-dot">·</span>
              <span>2014 — 2018</span>
            </div>
          </article>
          <dl className="mgi-skills">
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

      <footer className="mgi-foot" aria-hidden="true">
        <span className="mgi-folio">001</span>
        <span className="mgi-foot-text">Avery Park · Issue №07 · Vol. XII · May 2026</span>
        <span className="mgi-folio">001</span>
      </footer>
    </PageFrame>
  )
}
