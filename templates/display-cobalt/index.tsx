import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function DisplayCobalt() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-display-cobalt">
      <header className="dpc-head">
        <div className="dpc-eyebrow">
          <span className="dpc-eyebrow-block" />
          <span>Senior software engineer · platform · NYC</span>
        </div>
        <h1 className="dpc-name">Avery Park</h1>
        <div className="dpc-tag">Boring backends. Useful platforms. Small reversible changes.</div>
        <div className="dpc-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <a href="https://averypark.dev">averypark.dev</a>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="dpc-section" data-print-entry="true">
        <h2 className="dpc-h2">Profile</h2>
        <p className="dpc-lede">
          Resilient backend systems and the platforms that run them. Clear interfaces. Software
          should be boring in production and useful to its users.
        </p>
      </section>

      <section className="dpc-section" data-print-entry="true">
        <h2 className="dpc-h2">Experience</h2>

        <div className="dpc-entry" data-print-entry="true">
          <div className="dpc-entry-head">
            <div className="dpc-role">Senior Software Engineer</div>
            <div className="dpc-dates">2024 — Now</div>
          </div>
          <div className="dpc-org">Coral Labs · NYC</div>
          <ul className="dpc-bullets">
            <li>Sharded the events Kafka cluster. Cut p99 by three.</li>
            <li>Owned platform on-call. Pages down 60% in two quarters.</li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </div>

        <div className="dpc-entry" data-print-entry="true">
          <div className="dpc-entry-head">
            <div className="dpc-role">Software Engineer 2</div>
            <div className="dpc-dates">2022 — 2024</div>
          </div>
          <div className="dpc-org">Coral Labs · NYC</div>
          <ul className="dpc-bullets">
            <li>Designed the billing pipeline — 12M events / day on Kafka and Postgres.</li>
            <li>Built the feature-flag service used across forty-plus microservices.</li>
          </ul>
        </div>

        <div className="dpc-entry" data-print-entry="true">
          <div className="dpc-entry-head">
            <div className="dpc-role">Software Engineer</div>
            <div className="dpc-dates">2020 — 2022</div>
          </div>
          <div className="dpc-org">Acme Inc · Remote</div>
          <ul className="dpc-bullets">
            <li>Shipped the company's first public API. Rate limits, OAuth2, three SDKs.</li>
            <li>Extracted auth into a standalone identity service. Unblocked SSO.</li>
            <li>Cut average build time from eleven minutes to ninety seconds.</li>
          </ul>
        </div>

        <div className="dpc-entry" data-print-entry="true">
          <div className="dpc-entry-head">
            <div className="dpc-role">Software Engineer Intern</div>
            <div className="dpc-dates">2018</div>
          </div>
          <div className="dpc-org">Bytework · Remote</div>
          <ul className="dpc-bullets">
            <li>Built an internal log aggregator in Go on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="dpc-section" data-print-entry="true">
        <h2 className="dpc-h2">Projects</h2>
        <div className="dpc-entry" data-print-entry="true">
          <div className="dpc-entry-head">
            <div className="dpc-role">Loomroute</div>
            <div className="dpc-dates">Go · OSS</div>
          </div>
          <div className="dpc-org">URL routing library used by ~200 small SaaS apps.</div>
        </div>
        <div className="dpc-entry" data-print-entry="true">
          <div className="dpc-entry-head">
            <div className="dpc-role">Tinytrace</div>
            <div className="dpc-dates">Rust · OSS</div>
          </div>
          <div className="dpc-org">Minimal distributed tracing — span model, OTLP export.</div>
        </div>
      </section>

      <section className="dpc-section" data-print-entry="true">
        <h2 className="dpc-h2">Education</h2>
        <div className="dpc-entry" data-print-entry="true">
          <div className="dpc-entry-head">
            <div className="dpc-role">B.S. Computer Science</div>
            <div className="dpc-dates">2014 — 2018</div>
          </div>
          <div className="dpc-org">Northern State University</div>
        </div>
      </section>

      <section className="dpc-section" data-print-entry="true">
        <h2 className="dpc-h2">Skills</h2>
        <dl className="dpc-skills">
          <div className="dpc-skill-row">
            <dt>Languages</dt>
            <dd>Go · TypeScript · Python · Rust</dd>
          </div>
          <div className="dpc-skill-row">
            <dt>Backend</dt>
            <dd>Postgres · Redis · Kafka · gRPC</dd>
          </div>
          <div className="dpc-skill-row">
            <dt>Frontend</dt>
            <dd>React · Next.js · Tailwind · Vite</dd>
          </div>
          <div className="dpc-skill-row">
            <dt>Platform</dt>
            <dd>AWS · Kubernetes · Docker · Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
