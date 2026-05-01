import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function IndexCardRuled() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-indexcard-ruled">
      <header className="icr-head">
        <div className="icr-head-band" aria-hidden="true">
          <span>RULED CARD · NO. 4729</span>
          <span>SUBJECT FILE</span>
        </div>
        <div className="icr-name-row">
          <h1 className="icr-name">Avery Park</h1>
          <div className="icr-margin-num">№ 01</div>
        </div>
        <div className="icr-rule" aria-hidden="true">
          <span className="icr-rule-mark" />
        </div>
        <div className="icr-title">Senior Software Engineer — Platform</div>
        <dl className="icr-contact">
          <div>
            <dt>EMAIL</dt>
            <dd>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </dd>
          </div>
          <div>
            <dt>LOC.</dt>
            <dd>New York, NY</dd>
          </div>
          <div>
            <dt>SITE</dt>
            <dd>
              <a href="https://averypark.dev">averypark.dev</a>
            </dd>
          </div>
          <div>
            <dt>GH</dt>
            <dd>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </dd>
          </div>
          <div>
            <dt>IN</dt>
            <dd>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </dd>
          </div>
        </dl>
      </header>

      <section className="icr-section" data-print-entry="true">
        <h2 className="icr-section-head">Subject Summary</h2>
        <div className="icr-ruled-block">
          <p>
            Builds resilient backend systems and the platforms that run them. Prefers small,
            reversible changes and clear interfaces.
          </p>
          <p>Software should be boring in production and useful to its users.</p>
        </div>
      </section>

      <section className="icr-section" data-print-entry="true">
        <h2 className="icr-section-head">Experience</h2>

        <div className="icr-entry" data-print-entry="true">
          <div className="icr-entry-row">
            <span className="icr-role">Senior Software Engineer</span>
            <span className="icr-org">Coral Labs · NYC</span>
            <span className="icr-date">2024 — PRES.</span>
          </div>
          <ul className="icr-ruled-list">
            <li>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99 by
              three.
            </li>
            <li>Owned platform on-call across two quarters; reduced pages by sixty percent.</li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </div>

        <div className="icr-entry" data-print-entry="true">
          <div className="icr-entry-row">
            <span className="icr-role">Software Engineer 2</span>
            <span className="icr-org">Coral Labs · NYC</span>
            <span className="icr-date">2022 — 2024</span>
          </div>
          <ul className="icr-ruled-list">
            <li>
              Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </div>

        <div className="icr-entry" data-print-entry="true">
          <div className="icr-entry-row">
            <span className="icr-role">Software Engineer</span>
            <span className="icr-org">Acme Inc · Remote</span>
            <span className="icr-date">2020 — 2022</span>
          </div>
          <ul className="icr-ruled-list">
            <li>
              Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
              languages.
            </li>
            <li>Migrated the legacy monolith's auth module to a standalone identity service.</li>
            <li>Cut average build times from 11 minutes to 90 seconds.</li>
          </ul>
        </div>

        <div className="icr-entry" data-print-entry="true">
          <div className="icr-entry-row">
            <span className="icr-role">Software Engineer Intern</span>
            <span className="icr-org">Bytework · Remote</span>
            <span className="icr-date">2018</span>
          </div>
          <ul className="icr-ruled-list">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="icr-section" data-print-entry="true">
        <h2 className="icr-section-head">Cross-References</h2>
        <div className="icr-entry" data-print-entry="true">
          <div className="icr-entry-row">
            <span className="icr-role">Loomroute</span>
            <span className="icr-org">loomroute.dev</span>
            <span className="icr-date">GO · OSS</span>
          </div>
          <ul className="icr-ruled-list">
            <li>URL routing library used by ~200 small SaaS apps. Live since 2024.</li>
          </ul>
        </div>
        <div className="icr-entry" data-print-entry="true">
          <div className="icr-entry-row">
            <span className="icr-role">Tinytrace</span>
            <span className="icr-org">github.com/averypark/tinytrace</span>
            <span className="icr-date">RUST · OSS</span>
          </div>
          <ul className="icr-ruled-list">
            <li>Minimal distributed tracing library — span model, OTLP export, ~3k lines.</li>
          </ul>
        </div>
      </section>

      <section className="icr-section" data-print-entry="true">
        <h2 className="icr-section-head">Education</h2>
        <div className="icr-entry" data-print-entry="true">
          <div className="icr-entry-row">
            <span className="icr-role">B.S. Computer Science</span>
            <span className="icr-org">Northern State University</span>
            <span className="icr-date">2014 — 2018</span>
          </div>
        </div>
      </section>

      <section className="icr-section" data-print-entry="true">
        <h2 className="icr-section-head">Skills</h2>
        <ul className="icr-ruled-list icr-skills">
          <li>
            <span className="icr-skill-key">LANG</span>
            <span>Go · TypeScript · Python · Rust</span>
          </li>
          <li>
            <span className="icr-skill-key">BACK</span>
            <span>Postgres · Redis · Kafka · gRPC</span>
          </li>
          <li>
            <span className="icr-skill-key">FRONT</span>
            <span>React · Next.js · Tailwind · Vite</span>
          </li>
          <li>
            <span className="icr-skill-key">PLAT</span>
            <span>AWS · Kubernetes · Docker · Terraform</span>
          </li>
        </ul>
      </section>
    </PageFrame>
  )
}
