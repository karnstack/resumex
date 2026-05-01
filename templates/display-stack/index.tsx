import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function DisplayStack() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-display-stack">
      <div className="dps-grid">
        <header className="dps-head">
          <div className="dps-eyebrow">
            <span className="dps-eb-line" />
            <span>2026 / NYC</span>
          </div>
          <h1 className="dps-name">
            <span className="dps-name-line">AVERY</span>
            <span className="dps-name-line">PARK</span>
          </h1>
          <div className="dps-role">Senior Software Engineer · Platform</div>
          <div className="dps-tag">
            Resilient backends. Boring in production. Useful to its users.
          </div>

          <div className="dps-contact">
            <div className="dps-c-block">
              <div className="dps-c-label">Mail</div>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </div>
            <div className="dps-c-block">
              <div className="dps-c-label">Web</div>
              <a href="https://averypark.dev">averypark.dev</a>
            </div>
            <div className="dps-c-block">
              <div className="dps-c-label">Code</div>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </div>
            <div className="dps-c-block">
              <div className="dps-c-label">In</div>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </div>
            <div className="dps-c-block">
              <div className="dps-c-label">Loc</div>
              <span>New York, NY</span>
            </div>
          </div>

          <div className="dps-skills">
            <h3 className="dps-side-h">Skills</h3>
            <div className="dps-skill-row">
              <div className="dps-skill-key">Languages</div>
              <div>Go · TypeScript · Python · Rust</div>
            </div>
            <div className="dps-skill-row">
              <div className="dps-skill-key">Backend</div>
              <div>Postgres · Redis · Kafka · gRPC</div>
            </div>
            <div className="dps-skill-row">
              <div className="dps-skill-key">Frontend</div>
              <div>React · Next.js · Tailwind · Vite</div>
            </div>
            <div className="dps-skill-row">
              <div className="dps-skill-key">Platform</div>
              <div>AWS · Kubernetes · Docker · Terraform</div>
            </div>
          </div>
        </header>

        <main className="dps-main">
          <section className="dps-section" data-print-entry="true">
            <h2 className="dps-h2">Profile</h2>
            <p className="dps-lede">
              I build resilient backend systems and the platforms that run them. Small, reversible
              changes. Clear interfaces.
            </p>
          </section>

          <section className="dps-section" data-print-entry="true">
            <h2 className="dps-h2">Experience</h2>

            <div className="dps-entry" data-print-entry="true">
              <div className="dps-dates">2024 — Now</div>
              <div className="dps-role-line">Senior Software Engineer</div>
              <div className="dps-org">Coral Labs · New York, NY</div>
              <ul className="dps-bullets">
                <li>Sharded the events Kafka cluster. Cut p99 by three.</li>
                <li>Owned platform on-call. Pages down 60% over two quarters.</li>
                <li>Mentored four engineers through L4 to L5.</li>
              </ul>
            </div>

            <div className="dps-entry" data-print-entry="true">
              <div className="dps-dates">2022 — 2024</div>
              <div className="dps-role-line">Software Engineer 2</div>
              <div className="dps-org">Coral Labs · New York, NY</div>
              <ul className="dps-bullets">
                <li>Built the billing pipeline — 12M events / day on Kafka and Postgres.</li>
                <li>Shipped the feature-flag service used across forty services.</li>
              </ul>
            </div>

            <div className="dps-entry" data-print-entry="true">
              <div className="dps-dates">2020 — 2022</div>
              <div className="dps-role-line">Software Engineer</div>
              <div className="dps-org">Acme Inc · Remote</div>
              <ul className="dps-bullets">
                <li>Shipped the company's first public API. OAuth2, three SDKs.</li>
                <li>Extracted auth into a standalone identity service.</li>
                <li>Cut build time from eleven minutes to ninety seconds.</li>
              </ul>
            </div>

            <div className="dps-entry" data-print-entry="true">
              <div className="dps-dates">2018</div>
              <div className="dps-role-line">Software Engineer Intern</div>
              <div className="dps-org">Bytework · Remote</div>
              <ul className="dps-bullets">
                <li>Internal log aggregator on Kafka. Earned a return offer.</li>
              </ul>
            </div>
          </section>

          <section className="dps-section" data-print-entry="true">
            <h2 className="dps-h2">Projects</h2>
            <div className="dps-entry" data-print-entry="true">
              <div className="dps-dates">Go · OSS</div>
              <div className="dps-role-line">Loomroute</div>
              <div className="dps-org">URL routing library used by ~200 SaaS apps.</div>
            </div>
            <div className="dps-entry" data-print-entry="true">
              <div className="dps-dates">Rust · OSS</div>
              <div className="dps-role-line">Tinytrace</div>
              <div className="dps-org">Minimal distributed tracing — span model, OTLP.</div>
            </div>
          </section>

          <section className="dps-section" data-print-entry="true">
            <h2 className="dps-h2">Education</h2>
            <div className="dps-entry" data-print-entry="true">
              <div className="dps-dates">2014 — 2018</div>
              <div className="dps-role-line">B.S. Computer Science</div>
              <div className="dps-org">Northern State University</div>
            </div>
          </section>
        </main>
      </div>
    </PageFrame>
  )
}
