import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function AcademicCV() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-academic-cv">
      <header className="cv-head">
        <h1 className="cv-name">
          Avery <span className="cv-last">Park</span>
        </h1>
        <div className="cv-meta">
          <span>Senior Software Engineer, Platform &middot; Coral Labs</span>
          <span className="cv-meta-r">
            New York, NY &middot; <a href="mailto:avery@example.com">avery@example.com</a> &middot;{' '}
            <a href="https://averypark.dev">averypark.dev</a>
          </span>
        </div>
        <div className="cv-headrule" aria-hidden="true" />
      </header>

      <section className="cv-section" data-print-entry="true">
        <h2 className="cv-h2">Statement</h2>
        <p className="cv-prose">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be <em>boring in production</em>{' '}
          and useful to its users.
        </p>
      </section>

      <section className="cv-section" data-print-entry="true">
        <h2 className="cv-h2">Appointments</h2>
        <div className="cv-rowlist">
          <div className="cv-row" data-print-entry="true">
            <div className="cv-row-date">2024&ndash;present</div>
            <div className="cv-row-body">
              <div className="cv-row-title">
                <strong>Senior Software Engineer</strong>, Platform. <em>Coral Labs</em>, New York.
              </div>
              <ul className="cv-bullets">
                <li>
                  Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99
                  latency by a factor of three.
                </li>
                <li>
                  Owned platform on-call across two quarters; reduced page volume 60% via tighter
                  alerting and runbooks.
                </li>
                <li>Mentored four engineers through L4&rarr;L5 promotions.</li>
              </ul>
            </div>
          </div>

          <div className="cv-row" data-print-entry="true">
            <div className="cv-row-date">2022&ndash;2024</div>
            <div className="cv-row-body">
              <div className="cv-row-title">
                <strong>Software Engineer II</strong>. <em>Coral Labs</em>, New York.
              </div>
              <ul className="cv-bullets">
                <li>
                  Designed and shipped the billing pipeline (12M events/day on Kafka and Postgres)
                  from spec through production.
                </li>
                <li>
                  Built the internal feature-flag service used across forty-plus microservices.
                </li>
              </ul>
            </div>
          </div>

          <div className="cv-row" data-print-entry="true">
            <div className="cv-row-date">2020&ndash;2022</div>
            <div className="cv-row-body">
              <div className="cv-row-title">
                <strong>Software Engineer</strong>. <em>Acme Inc.</em>, Remote.
              </div>
              <ul className="cv-bullets">
                <li>
                  Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs
                  in three languages.
                </li>
                <li>
                  Migrated the legacy monolith&rsquo;s auth module to a standalone identity service.
                </li>
                <li>Cut average build times from 11 min to 90 s.</li>
              </ul>
            </div>
          </div>

          <div className="cv-row" data-print-entry="true">
            <div className="cv-row-date">Summer 2018</div>
            <div className="cv-row-body">
              <div className="cv-row-title">
                <strong>Software Engineer Intern</strong>. <em>Bytework</em>, Remote.
              </div>
              <ul className="cv-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section" data-print-entry="true">
        <h2 className="cv-h2">Education</h2>
        <div className="cv-rowlist">
          <div className="cv-row" data-print-entry="true">
            <div className="cv-row-date">2014&ndash;2018</div>
            <div className="cv-row-body">
              <div className="cv-row-title">
                <strong>B.S. in Computer Science</strong>. <em>Northern State University</em>.
              </div>
              <div className="cv-sub">
                Thesis: &ldquo;Bounded-staleness reads in geo-distributed key-value stores.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section cv-section-pubs" data-print-entry="true">
        <h2 className="cv-h2">Publications</h2>
        <ol className="cv-refs">
          <li>
            <span className="cv-ref-date">2024.</span>
            <span className="cv-ref-body">
              Park, A. On the legibility of distributed traces.{' '}
              <em>Journal of Observability Studies</em>, 12(4), 213&ndash;229.
            </span>
          </li>
          <li>
            <span className="cv-ref-date">2023.</span>
            <span className="cv-ref-body">
              Park, A., &amp; Liang, S. Bounded-staleness reads in sharded key-value stores. In{' '}
              <em>Proceedings of the Workshop on Practical Distributed Systems (PDSW &rsquo;23)</em>
              , 41&ndash;52.
            </span>
          </li>
          <li>
            <span className="cv-ref-date">2022.</span>
            <span className="cv-ref-body">
              Park, A. A small note on idempotent retries. <em>SIGOPS Operating Systems Review</em>,
              56(2), 8&ndash;11.
            </span>
          </li>
          <li>
            <span className="cv-ref-date">2021.</span>
            <span className="cv-ref-body">
              Park, A. Tinytrace: a minimal OTLP-compatible tracing library. In{' '}
              <em>Workshop on Open-Source Observability Tools</em>, 88&ndash;94.
            </span>
          </li>
        </ol>
      </section>

      <section className="cv-section" data-print-entry="true">
        <h2 className="cv-h2">Selected Projects</h2>
        <div className="cv-rowlist">
          <div className="cv-row" data-print-entry="true">
            <div className="cv-row-date">since 2024</div>
            <div className="cv-row-body">
              <div className="cv-row-title">
                <strong>Loomroute</strong> &middot; <em>Go, OSS</em>.
              </div>
              <div className="cv-sub">
                URL routing library used by ~200 small SaaS apps. <em>loomroute.dev</em>.
              </div>
            </div>
          </div>
          <div className="cv-row" data-print-entry="true">
            <div className="cv-row-date">since 2021</div>
            <div className="cv-row-body">
              <div className="cv-row-title">
                <strong>Tinytrace</strong> &middot; <em>Rust, OSS</em>.
              </div>
              <div className="cv-sub">
                Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section" data-print-entry="true">
        <h2 className="cv-h2">Awards</h2>
        <div className="cv-rowlist">
          <div className="cv-row">
            <div className="cv-row-date">2024</div>
            <div className="cv-row-body">
              <div className="cv-row-title">Coral Labs Engineering Excellence Award.</div>
            </div>
          </div>
          <div className="cv-row">
            <div className="cv-row-date">2018</div>
            <div className="cv-row-body">
              <div className="cv-row-title">
                Northern State Univ. Outstanding Thesis in Systems.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section" data-print-entry="true">
        <h2 className="cv-h2">Technical Skills</h2>
        <dl className="cv-skills">
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
