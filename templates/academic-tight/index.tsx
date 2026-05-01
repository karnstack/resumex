import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function AcademicTight() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-academic-tight">
      <header className="act-head">
        <div className="act-head-row">
          <div className="act-head-l">
            <h1 className="act-name">Avery Park</h1>
            <div className="act-affil">Senior Software Engineer, Platform &middot; Coral Labs.</div>
          </div>
          <div className="act-head-r">
            <div>avery@example.com</div>
            <div>New York, NY</div>
            <div>
              <a href="https://averypark.dev">averypark.dev</a>
            </div>
            <div>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </div>
          </div>
        </div>
        <div className="act-rule" aria-hidden="true" />
      </header>

      <section className="act-section" data-print-entry="true">
        <h2 className="act-h2">Summary</h2>
        <p className="act-prose">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be <em>boring in production</em>{' '}
          and useful to its users.
        </p>
      </section>

      <section className="act-section" data-print-entry="true">
        <h2 className="act-h2">Appointments</h2>

        <div className="act-entry" data-print-entry="true">
          <div className="act-entry-head">
            <div>
              <strong>Senior Software Engineer</strong>, Platform. <em>Coral Labs</em>, New York.
            </div>
            <div className="act-date">2024&ndash;present</div>
          </div>
          <ul className="act-bullets">
            <li>
              Led migration of the events pipeline to a sharded Kafka cluster; cut p99 latency 3x.
            </li>
            <li>Owned platform on-call; reduced pages 60% via tighter alerting and runbooks.</li>
            <li>Mentored four engineers through L4&rarr;L5 promotions.</li>
          </ul>
        </div>

        <div className="act-entry" data-print-entry="true">
          <div className="act-entry-head">
            <div>
              <strong>Software Engineer II</strong>. <em>Coral Labs</em>, New York.
            </div>
            <div className="act-date">2022&ndash;2024</div>
          </div>
          <ul className="act-bullets">
            <li>Designed billing pipeline (12M events/day, Kafka + Postgres) from spec to prod.</li>
            <li>Built feature-flag service used across 40+ microservices.</li>
          </ul>
        </div>

        <div className="act-entry" data-print-entry="true">
          <div className="act-entry-head">
            <div>
              <strong>Software Engineer</strong>. <em>Acme Inc.</em>, Remote.
            </div>
            <div className="act-date">2020&ndash;2022</div>
          </div>
          <ul className="act-bullets">
            <li>Shipped first public API; rate limiting, OAuth2, SDKs in three languages.</li>
            <li>Migrated monolith auth to a standalone identity service, unblocking SSO.</li>
            <li>Cut average build times from 11 min to 90 s.</li>
          </ul>
        </div>

        <div className="act-entry" data-print-entry="true">
          <div className="act-entry-head">
            <div>
              <strong>Software Engineer Intern</strong>. <em>Bytework</em>, Remote.
            </div>
            <div className="act-date">2018</div>
          </div>
          <ul className="act-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="act-section" data-print-entry="true">
        <h2 className="act-h2">Education</h2>
        <div className="act-entry" data-print-entry="true">
          <div className="act-entry-head">
            <div>
              <strong>B.S. in Computer Science</strong>. <em>Northern State University</em>.
            </div>
            <div className="act-date">2014&ndash;2018</div>
          </div>
          <div className="act-sub">
            Thesis: &ldquo;Bounded-staleness reads in geo-distributed key-value stores.&rdquo;
          </div>
        </div>
      </section>

      <section className="act-section" data-print-entry="true">
        <h2 className="act-h2">Publications</h2>
        <ol className="act-refs">
          <li>
            Park, A. (2024). On the legibility of distributed traces.{' '}
            <em>Journal of Observability Studies</em>, 12(4), 213&ndash;229.
          </li>
          <li>
            Park, A., &amp; Liang, S. (2023). Bounded-staleness reads in sharded key-value stores.
            In <em>Proc. of the Workshop on Practical Distributed Systems (PDSW &rsquo;23)</em>,
            41&ndash;52.
          </li>
          <li>
            Park, A. (2022). A small note on idempotent retries.{' '}
            <em>SIGOPS Operating Systems Review</em>, 56(2), 8&ndash;11.
          </li>
          <li>
            Park, A. (2021). Tinytrace: a minimal OTLP-compatible tracing library. In{' '}
            <em>Workshop on Open-Source Observability Tools</em>, 88&ndash;94.
          </li>
          <li>
            Park, A., &amp; Reyes, M. (2020). Sharded counters for billing pipelines.{' '}
            <em>USENIX ;login:</em>, 45(3), 12&ndash;15.
          </li>
        </ol>
      </section>

      <section className="act-section" data-print-entry="true">
        <h2 className="act-h2">Selected Projects</h2>
        <div className="act-proj">
          <strong>Loomroute</strong> &middot; <em>Go, OSS</em>. URL routing library used by ~200
          small SaaS apps. Live since 2024. <span className="act-proj-url">loomroute.dev</span>
        </div>
        <div className="act-proj">
          <strong>Tinytrace</strong> &middot; <em>Rust, OSS</em>. Minimal distributed tracing
          library &mdash; span model, OTLP export, ~3k lines.{' '}
          <span className="act-proj-url">github.com/averypark/tinytrace</span>
        </div>
      </section>

      <section className="act-section" data-print-entry="true">
        <h2 className="act-h2">Awards &amp; Honors</h2>
        <ul className="act-awards">
          <li>
            <em>2024.</em> Coral Labs Engineering Excellence Award.
          </li>
          <li>
            <em>2018.</em> Northern State Univ. Outstanding Thesis in Systems.
          </li>
        </ul>
      </section>

      <section className="act-section" data-print-entry="true">
        <h2 className="act-h2">Technical Skills</h2>
        <dl className="act-skills">
          <div>
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust.</dd>
          </div>
          <div>
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC.</dd>
          </div>
          <div>
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite.</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform.</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
