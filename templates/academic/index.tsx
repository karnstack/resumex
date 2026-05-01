import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Academic() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-academic">
      <header className="ac-head">
        <h1 className="ac-name">Avery Park</h1>
        <div className="ac-affil">
          Senior Software Engineer, Platform &middot; Coral Labs &middot; New York, NY
        </div>
        <div className="ac-contact">
          <span>avery@example.com</span>
          <span className="ac-sep">&middot;</span>
          <span>
            <a href="https://averypark.dev">averypark.dev</a>
          </span>
          <span className="ac-sep">&middot;</span>
          <span>
            <a href="https://github.com/averypark">github.com/averypark</a>
          </span>
          <span className="ac-sep">&middot;</span>
          <span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </span>
        </div>
        <div className="ac-rule" aria-hidden="true" />
      </header>

      <section className="ac-section" data-print-entry="true">
        <h2 className="ac-h2">Research Statement</h2>
        <p className="ac-prose">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be <em>boring in production</em>{' '}
          and useful to its users.
        </p>
      </section>

      <section className="ac-section" data-print-entry="true">
        <h2 className="ac-h2">Appointments</h2>

        <div className="ac-entry" data-print-entry="true">
          <div className="ac-entry-head">
            <div className="ac-entry-title">
              <strong>Senior Software Engineer</strong>, Platform Team
            </div>
            <div className="ac-entry-date">Mar 2024 &ndash; Present</div>
          </div>
          <div className="ac-entry-sub">
            <em>Coral Labs</em>, New York, NY.
          </div>
          <ul className="ac-bullets">
            <li>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster; reduced p99
              latency by a factor of three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced page volume by 60% via tighter
              alerting and runbooks.
            </li>
            <li>Mentored four engineers through L4&rarr;L5 promotions.</li>
          </ul>
        </div>

        <div className="ac-entry" data-print-entry="true">
          <div className="ac-entry-head">
            <div className="ac-entry-title">
              <strong>Software Engineer II</strong>
            </div>
            <div className="ac-entry-date">Aug 2022 &ndash; Mar 2024</div>
          </div>
          <div className="ac-entry-sub">
            <em>Coral Labs</em>, New York, NY.
          </div>
          <ul className="ac-bullets">
            <li>
              Designed and shipped the billing pipeline (12M events/day on Kafka and Postgres) from
              spec through production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </div>

        <div className="ac-entry" data-print-entry="true">
          <div className="ac-entry-head">
            <div className="ac-entry-title">
              <strong>Software Engineer</strong>
            </div>
            <div className="ac-entry-date">Jan 2020 &ndash; Jul 2022</div>
          </div>
          <div className="ac-entry-sub">
            <em>Acme Inc.</em>, Remote.
          </div>
          <ul className="ac-bullets">
            <li>
              Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs in
              three languages.
            </li>
            <li>
              Migrated the legacy monolith&rsquo;s auth module to a standalone identity service,
              unblocking SSO integrations.
            </li>
            <li>Cut average build times from 11 min to 90 s via parallelized test matrices.</li>
          </ul>
        </div>

        <div className="ac-entry" data-print-entry="true">
          <div className="ac-entry-head">
            <div className="ac-entry-title">
              <strong>Software Engineer Intern</strong>
            </div>
            <div className="ac-entry-date">May 2018 &ndash; Aug 2018</div>
          </div>
          <div className="ac-entry-sub">
            <em>Bytework</em>, Remote.
          </div>
          <ul className="ac-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="ac-section" data-print-entry="true">
        <h2 className="ac-h2">Education</h2>
        <div className="ac-entry" data-print-entry="true">
          <div className="ac-entry-head">
            <div className="ac-entry-title">
              <strong>B.S. in Computer Science</strong>
            </div>
            <div className="ac-entry-date">2014 &ndash; 2018</div>
          </div>
          <div className="ac-entry-sub">
            <em>Northern State University</em>. Thesis: &ldquo;Bounded-staleness reads in
            geo-distributed key-value stores.&rdquo;
          </div>
        </div>
      </section>

      <section className="ac-section" data-print-entry="true">
        <h2 className="ac-h2">Publications</h2>
        <ol className="ac-refs">
          <li>
            Park, A. (2024). On the legibility of distributed traces.{' '}
            <em>Journal of Observability Studies</em>, 12(4), 213&ndash;229.
          </li>
          <li>
            Park, A., &amp; Liang, S. (2023). Bounded-staleness reads in sharded key-value stores.
            In{' '}
            <em>Proceedings of the Workshop on Practical Distributed Systems (PDSW &rsquo;23)</em>,
            pp. 41&ndash;52.
          </li>
          <li>
            Park, A. (2022). A small note on idempotent retries.{' '}
            <em>SIGOPS Operating Systems Review</em>, 56(2), 8&ndash;11.
          </li>
        </ol>
      </section>

      <section className="ac-section" data-print-entry="true">
        <h2 className="ac-h2">Selected Projects</h2>
        <div className="ac-proj">
          <div className="ac-proj-head">
            <strong>Loomroute</strong> &middot; <em>Go, OSS</em>
            <span className="ac-proj-meta">loomroute.dev</span>
          </div>
          <p className="ac-prose">
            URL routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </div>
        <div className="ac-proj">
          <div className="ac-proj-head">
            <strong>Tinytrace</strong> &middot; <em>Rust, OSS</em>
            <span className="ac-proj-meta">github.com/averypark/tinytrace</span>
          </div>
          <p className="ac-prose">
            Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
          </p>
        </div>
      </section>

      <section className="ac-section" data-print-entry="true">
        <h2 className="ac-h2">Awards</h2>
        <ul className="ac-awards">
          <li>
            Coral Labs Engineering Excellence Award &mdash; <em>2024</em>.
          </li>
          <li>
            Northern State Univ. Outstanding Thesis in Systems &mdash; <em>2018</em>.
          </li>
        </ul>
      </section>

      <section className="ac-section" data-print-entry="true">
        <h2 className="ac-h2">Technical Skills</h2>
        <dl className="ac-skills">
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
