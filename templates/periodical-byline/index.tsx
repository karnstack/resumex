import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

function Byline({ when }: { when: string }) {
  return (
    <div className="pdb-byline">
      <span className="pdb-byline-by">By</span>
      <span className="pdb-byline-author">Avery Park</span>
      <span className="pdb-byline-sep">·</span>
      <span className="pdb-byline-when">{when}</span>
      <span className="pdb-byline-sep">·</span>
      <span className="pdb-byline-pub">Engineering Quarterly · Vol XII · Issue 03</span>
    </div>
  )
}

export default function PeriodicalByline() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-periodical-byline">
      <div className="pdb-runner" aria-hidden="true">
        <span>Engineering Quarterly</span>
        <span className="pdb-dot">·</span>
        <span>Vol XII · Issue 03</span>
        <span className="pdb-runner-spacer" />
        <span>May MMXXVI</span>
      </div>

      <header className="pdb-masthead">
        <div className="pdb-kicker">A Career In Practice</div>
        <h1 className="pdb-name">Avery Park</h1>
        <div className="pdb-deck">
          A senior software engineer's notes on resilient platforms, small reversible changes, and
          the quiet virtue of boring software.
        </div>
        <div className="pdb-byline pdb-byline-lg">
          <span className="pdb-byline-by">By</span>
          <span className="pdb-byline-author">Avery Park</span>
          <span className="pdb-byline-sep">·</span>
          <span className="pdb-byline-when">May 2026, New York</span>
        </div>
        <div className="pdb-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span>·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span>·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span>·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="pdb-section" data-print-entry="true">
        <h2 className="pdb-h2">Profile</h2>
        <Byline when="May 2026" />
        <p className="pdb-summary">
          <span className="pdb-dropcap">I</span> build resilient backend systems and the platforms
          that run them. I prefer small, reversible changes and clear interfaces. Software should be
          boring in production and useful to its users.
        </p>
      </section>

      <section className="pdb-section" data-print-entry="true">
        <h2 className="pdb-h2">Experience</h2>
        <Byline when="2018 — 2026" />

        <article className="pdb-entry" data-print-entry="true">
          <header className="pdb-entry-head">
            <h3 className="pdb-role">Senior Software Engineer</h3>
            <div className="pdb-entry-byline">
              <span className="pdb-org">Coral Labs</span>
              <span className="pdb-byline-sep">·</span>
              <span>New York, NY</span>
              <span className="pdb-byline-sep">·</span>
              <span className="pdb-dates">Mar 2024 — Present</span>
            </div>
          </header>
          <ul className="pdb-bullets">
            <li>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency
              by three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
              and runbooks.
            </li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </article>

        <article className="pdb-entry" data-print-entry="true">
          <header className="pdb-entry-head">
            <h3 className="pdb-role">Software Engineer 2</h3>
            <div className="pdb-entry-byline">
              <span className="pdb-org">Coral Labs</span>
              <span className="pdb-byline-sep">·</span>
              <span>New York, NY</span>
              <span className="pdb-byline-sep">·</span>
              <span className="pdb-dates">Aug 2022 — Mar 2024</span>
            </div>
          </header>
          <ul className="pdb-bullets">
            <li>
              Designed the billing pipeline (12M events/day on Kafka and Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="pdb-entry" data-print-entry="true">
          <header className="pdb-entry-head">
            <h3 className="pdb-role">Software Engineer</h3>
            <div className="pdb-entry-byline">
              <span className="pdb-org">Acme Inc</span>
              <span className="pdb-byline-sep">·</span>
              <span>Remote</span>
              <span className="pdb-byline-sep">·</span>
              <span className="pdb-dates">Jan 2020 — Jul 2022</span>
            </div>
          </header>
          <ul className="pdb-bullets">
            <li>
              Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
              languages.
            </li>
            <li>
              Migrated the legacy monolith's auth module to a standalone identity service,
              unblocking SSO.
            </li>
            <li>Cut average build times from eleven minutes to ninety seconds.</li>
          </ul>
        </article>

        <article className="pdb-entry" data-print-entry="true">
          <header className="pdb-entry-head">
            <h3 className="pdb-role">Software Engineer Intern</h3>
            <div className="pdb-entry-byline">
              <span className="pdb-org">Bytework</span>
              <span className="pdb-byline-sep">·</span>
              <span>Remote</span>
              <span className="pdb-byline-sep">·</span>
              <span className="pdb-dates">May 2018 — Aug 2018</span>
            </div>
          </header>
          <ul className="pdb-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="pdb-section" data-print-entry="true">
        <h2 className="pdb-h2">Projects</h2>
        <Byline when="2023 — 2026" />
        <article className="pdb-entry" data-print-entry="true">
          <header className="pdb-entry-head">
            <h3 className="pdb-role">Loomroute</h3>
            <div className="pdb-entry-byline">
              <span className="pdb-org">loomroute.dev</span>
              <span className="pdb-byline-sep">·</span>
              <span>Go · OSS</span>
              <span className="pdb-byline-sep">·</span>
              <span className="pdb-dates">Live since 2024</span>
            </div>
          </header>
          <p className="pdb-prose">
            URL routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </article>
        <article className="pdb-entry" data-print-entry="true">
          <header className="pdb-entry-head">
            <h3 className="pdb-role">Tinytrace</h3>
            <div className="pdb-entry-byline">
              <span className="pdb-org">github.com/averypark/tinytrace</span>
              <span className="pdb-byline-sep">·</span>
              <span>Rust · OSS</span>
              <span className="pdb-byline-sep">·</span>
              <span className="pdb-dates">2023 — present</span>
            </div>
          </header>
          <p className="pdb-prose">
            Minimal distributed tracing — span model, OTLP export, ~3k lines.
          </p>
        </article>
      </section>

      <section className="pdb-section pdb-twocol" data-print-entry="true">
        <div className="pdb-col">
          <h2 className="pdb-h2 pdb-h2-sm">Education</h2>
          <Byline when="2014 — 2018" />
          <article className="pdb-entry" data-print-entry="true">
            <header className="pdb-entry-head">
              <h3 className="pdb-role">B.S. Computer Science</h3>
              <div className="pdb-entry-byline">
                <span className="pdb-org">Northern State University</span>
                <span className="pdb-byline-sep">·</span>
                <span className="pdb-dates">2014 — 2018</span>
              </div>
            </header>
          </article>
        </div>
        <div className="pdb-col">
          <h2 className="pdb-h2 pdb-h2-sm">Skills</h2>
          <Byline when="Updated May 2026" />
          <dl className="pdb-skills">
            <div>
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div>
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div>
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
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
