import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

function RunHead({ section, num }: { section: string; num: string }) {
  return (
    <div className="pdr-runhead" aria-hidden="true">
      <span className="pdr-runhead-name">Avery Park</span>
      <span className="pdr-runhead-sep">/</span>
      <span className="pdr-runhead-section">{section}</span>
      <span className="pdr-runhead-spacer" />
      <span className="pdr-runhead-pub">Engineering Quarterly · Vol XII · Issue 03</span>
      <span className="pdr-runhead-sep">/</span>
      <span className="pdr-runhead-num">{num}</span>
    </div>
  )
}

export default function PeriodicalRunning() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-periodical-running">
      <header className="pdr-masthead">
        <RunHead section="Cover" num="00" />
        <div className="pdr-masthead-body">
          <div className="pdr-eyebrow">A Quarterly Curriculum Vitae</div>
          <h1 className="pdr-name">Avery Park</h1>
          <div className="pdr-strap">
            Senior Software Engineer · Platform — building resilient backend systems and the
            platforms that run them.
          </div>
          <div className="pdr-contact">
            <a href="mailto:avery@example.com">avery@example.com</a>
            <span>·</span>
            <span>New York, NY</span>
            <span>·</span>
            <a href="https://averypark.dev">averypark.dev</a>
            <span>·</span>
            <a href="https://github.com/averypark">github.com/averypark</a>
            <span>·</span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </div>
        </div>
      </header>

      <section className="pdr-section" data-print-entry="true">
        <RunHead section="Profile" num="01" />
        <div className="pdr-section-body">
          <p className="pdr-summary">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
      </section>

      <section className="pdr-section" data-print-entry="true">
        <RunHead section="Experience" num="02" />
        <div className="pdr-section-body">
          <article className="pdr-entry" data-print-entry="true">
            <div className="pdr-entry-head">
              <h2 className="pdr-role">Senior Software Engineer</h2>
              <div className="pdr-dates">Mar 2024 — Present</div>
            </div>
            <div className="pdr-org-line">
              <span className="pdr-org">Coral Labs</span>
              <span>·</span>
              <span>New York, NY</span>
            </div>
            <ul className="pdr-bullets">
              <li>
                Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99
                latency by three.
              </li>
              <li>
                Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
                and runbooks.
              </li>
              <li>Mentored four engineers through L4 to L5 promotions.</li>
            </ul>
          </article>

          <article className="pdr-entry" data-print-entry="true">
            <div className="pdr-entry-head">
              <h2 className="pdr-role">Software Engineer 2</h2>
              <div className="pdr-dates">Aug 2022 — Mar 2024</div>
            </div>
            <div className="pdr-org-line">
              <span className="pdr-org">Coral Labs</span>
              <span>·</span>
              <span>New York, NY</span>
            </div>
            <ul className="pdr-bullets">
              <li>
                Designed the billing pipeline (12M events/day on Kafka and Postgres) from spec to
                production.
              </li>
              <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            </ul>
          </article>

          <article className="pdr-entry" data-print-entry="true">
            <div className="pdr-entry-head">
              <h2 className="pdr-role">Software Engineer</h2>
              <div className="pdr-dates">Jan 2020 — Jul 2022</div>
            </div>
            <div className="pdr-org-line">
              <span className="pdr-org">Acme Inc</span>
              <span>·</span>
              <span>Remote</span>
            </div>
            <ul className="pdr-bullets">
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

          <article className="pdr-entry" data-print-entry="true">
            <div className="pdr-entry-head">
              <h2 className="pdr-role">Software Engineer Intern</h2>
              <div className="pdr-dates">May 2018 — Aug 2018</div>
            </div>
            <div className="pdr-org-line">
              <span className="pdr-org">Bytework</span>
              <span>·</span>
              <span>Remote</span>
            </div>
            <ul className="pdr-bullets">
              <li>
                Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="pdr-section" data-print-entry="true">
        <RunHead section="Projects" num="03" />
        <div className="pdr-section-body">
          <article className="pdr-entry" data-print-entry="true">
            <div className="pdr-entry-head">
              <h2 className="pdr-role">Loomroute</h2>
              <div className="pdr-dates">Live since 2024</div>
            </div>
            <div className="pdr-org-line">
              <span className="pdr-org">loomroute.dev</span>
              <span>·</span>
              <span>Go · OSS</span>
            </div>
            <p className="pdr-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </article>
          <article className="pdr-entry" data-print-entry="true">
            <div className="pdr-entry-head">
              <h2 className="pdr-role">Tinytrace</h2>
              <div className="pdr-dates">2023 — present</div>
            </div>
            <div className="pdr-org-line">
              <span className="pdr-org">github.com/averypark/tinytrace</span>
              <span>·</span>
              <span>Rust · OSS</span>
            </div>
            <p className="pdr-prose">
              Minimal distributed tracing — span model, OTLP export, ~3k lines.
            </p>
          </article>
        </div>
      </section>

      <section className="pdr-section" data-print-entry="true">
        <RunHead section="Education" num="04" />
        <div className="pdr-section-body">
          <article className="pdr-entry" data-print-entry="true">
            <div className="pdr-entry-head">
              <h2 className="pdr-role">B.S. Computer Science</h2>
              <div className="pdr-dates">2014 — 2018</div>
            </div>
            <div className="pdr-org-line">
              <span className="pdr-org">Northern State University</span>
            </div>
          </article>
        </div>
      </section>

      <section className="pdr-section" data-print-entry="true">
        <RunHead section="Skills" num="05" />
        <div className="pdr-section-body">
          <dl className="pdr-skills">
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
