import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function DisplayNoir() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-display-noir">
      <div className="dpn-blackbar">
        <span className="dpn-bar-key">DOSSIER</span>
        <span className="dpn-bar-id">N° 0407</span>
        <span className="dpn-bar-date">MMXXVI</span>
      </div>

      <header className="dpn-head">
        <h1 className="dpn-name">Avery Park</h1>
        <div className="dpn-role-strip">
          <span className="dpn-role-label">Role</span>
          <span className="dpn-role-val">Senior Software Engineer · Platform</span>
        </div>
        <p className="dpn-tag">
          Resilient backends and the platforms that run them. Small, reversible changes. Boring in
          production, useful to its users.
        </p>
        <div className="dpn-contact">
          <div className="dpn-c-row">
            <span className="dpn-c-key">E</span>
            <a href="mailto:avery@example.com">avery@example.com</a>
          </div>
          <div className="dpn-c-row">
            <span className="dpn-c-key">W</span>
            <a href="https://averypark.dev">averypark.dev</a>
          </div>
          <div className="dpn-c-row">
            <span className="dpn-c-key">G</span>
            <a href="https://github.com/averypark">github.com/averypark</a>
          </div>
          <div className="dpn-c-row">
            <span className="dpn-c-key">L</span>
            <span>New York, NY</span>
          </div>
        </div>
      </header>

      <section className="dpn-section" data-print-entry="true">
        <h2 className="dpn-h2">
          <span className="dpn-h2-num">I</span>
          <span>Profile</span>
        </h2>
        <p className="dpn-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces.
        </p>
      </section>

      <section className="dpn-section" data-print-entry="true">
        <h2 className="dpn-h2">
          <span className="dpn-h2-num">II</span>
          <span>Experience</span>
        </h2>

        <div className="dpn-entry" data-print-entry="true">
          <div className="dpn-entry-head">
            <div className="dpn-role">Senior Software Engineer</div>
            <div className="dpn-dates">2024 — Present</div>
          </div>
          <div className="dpn-org">Coral Labs · New York, NY</div>
          <ul className="dpn-bullets">
            <li>Sharded the events Kafka cluster. Cut p99 latency by three.</li>
            <li>Owned platform on-call across two quarters. Pages down 60%.</li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </div>

        <div className="dpn-entry" data-print-entry="true">
          <div className="dpn-entry-head">
            <div className="dpn-role">Software Engineer 2</div>
            <div className="dpn-dates">2022 — 2024</div>
          </div>
          <div className="dpn-org">Coral Labs · New York, NY</div>
          <ul className="dpn-bullets">
            <li>Built the billing pipeline — 12M events / day on Kafka and Postgres.</li>
            <li>Shipped the feature-flag service used across forty-plus services.</li>
          </ul>
        </div>

        <div className="dpn-entry" data-print-entry="true">
          <div className="dpn-entry-head">
            <div className="dpn-role">Software Engineer</div>
            <div className="dpn-dates">2020 — 2022</div>
          </div>
          <div className="dpn-org">Acme Inc · Remote</div>
          <ul className="dpn-bullets">
            <li>Shipped the company's first public API — rate limits, OAuth2, three SDKs.</li>
            <li>Extracted auth into a standalone identity service. Unblocked SSO.</li>
            <li>Cut average build time from eleven minutes to ninety seconds.</li>
          </ul>
        </div>

        <div className="dpn-entry" data-print-entry="true">
          <div className="dpn-entry-head">
            <div className="dpn-role">Software Engineer Intern</div>
            <div className="dpn-dates">2018</div>
          </div>
          <div className="dpn-org">Bytework · Remote</div>
          <ul className="dpn-bullets">
            <li>Built an internal log aggregator in Go on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="dpn-section" data-print-entry="true">
        <h2 className="dpn-h2">
          <span className="dpn-h2-num">III</span>
          <span>Projects</span>
        </h2>
        <div className="dpn-entry" data-print-entry="true">
          <div className="dpn-entry-head">
            <div className="dpn-role">Loomroute</div>
            <div className="dpn-dates">Go · OSS</div>
          </div>
          <div className="dpn-org">URL routing library used by ~200 small SaaS apps.</div>
        </div>
        <div className="dpn-entry" data-print-entry="true">
          <div className="dpn-entry-head">
            <div className="dpn-role">Tinytrace</div>
            <div className="dpn-dates">Rust · OSS</div>
          </div>
          <div className="dpn-org">Minimal distributed tracing — span model, OTLP, ~3k lines.</div>
        </div>
      </section>

      <section className="dpn-section" data-print-entry="true">
        <h2 className="dpn-h2">
          <span className="dpn-h2-num">IV</span>
          <span>Education &amp; Skills</span>
        </h2>
        <div className="dpn-entry" data-print-entry="true">
          <div className="dpn-entry-head">
            <div className="dpn-role">B.S. Computer Science</div>
            <div className="dpn-dates">2014 — 2018</div>
          </div>
          <div className="dpn-org">Northern State University</div>
        </div>
        <dl className="dpn-skills">
          <div className="dpn-skill-row">
            <dt>Languages</dt>
            <dd>Go · TypeScript · Python · Rust</dd>
          </div>
          <div className="dpn-skill-row">
            <dt>Backend</dt>
            <dd>Postgres · Redis · Kafka · gRPC</dd>
          </div>
          <div className="dpn-skill-row">
            <dt>Frontend</dt>
            <dd>React · Next.js · Tailwind · Vite</dd>
          </div>
          <div className="dpn-skill-row">
            <dt>Platform</dt>
            <dd>AWS · Kubernetes · Docker · Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
