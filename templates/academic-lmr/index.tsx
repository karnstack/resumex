import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function AcademicLMR() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-academic-lmr">
      <header className="lmr-head">
        <h1 className="lmr-name">Avery Park</h1>
        <div className="lmr-affil">
          <em>Senior Software Engineer, Platform.</em> Coral Labs, New York, NY.
        </div>
        <div className="lmr-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="lmr-sep">/</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="lmr-sep">/</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="lmr-sep">/</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
        <div className="lmr-toc" aria-label="Section index">
          <span className="lmr-toc-item">
            <span className="lmr-num">i.</span> Statement
          </span>
          <span className="lmr-toc-sep">/</span>
          <span className="lmr-toc-item">
            <span className="lmr-num">ii.</span> Appointments
          </span>
          <span className="lmr-toc-sep">/</span>
          <span className="lmr-toc-item">
            <span className="lmr-num">iii.</span> Education
          </span>
          <span className="lmr-toc-sep">/</span>
          <span className="lmr-toc-item">
            <span className="lmr-num">iv.</span> Publications
          </span>
          <span className="lmr-toc-sep">/</span>
          <span className="lmr-toc-item">
            <span className="lmr-num">v.</span> Talks
          </span>
          <span className="lmr-toc-sep">/</span>
          <span className="lmr-toc-item">
            <span className="lmr-num">vi.</span> Skills
          </span>
        </div>
        <div className="lmr-headrule" aria-hidden="true" />
      </header>

      <section className="lmr-section" data-print-entry="true">
        <h2 className="lmr-h2">
          <span className="lmr-rom">i.</span> Statement
        </h2>
        <p className="lmr-prose">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. <em>Software should be boring in production</em>{' '}
          and useful to its users.
        </p>
      </section>

      <section className="lmr-section" data-print-entry="true">
        <h2 className="lmr-h2">
          <span className="lmr-rom">ii.</span> Appointments
        </h2>

        <div className="lmr-entry" data-print-entry="true">
          <div className="lmr-entry-head">
            <div className="lmr-entry-title">
              <em>Senior Software Engineer</em>, Platform &middot; Coral Labs
            </div>
            <div className="lmr-date">2024&ndash;present</div>
          </div>
          <ul className="lmr-bullets">
            <li>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency
              by a factor of three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced page volume 60% via tighter
              alerting and runbooks.
            </li>
            <li>Mentored four engineers through L4&rarr;L5 promotions.</li>
          </ul>
        </div>

        <div className="lmr-entry" data-print-entry="true">
          <div className="lmr-entry-head">
            <div className="lmr-entry-title">
              <em>Software Engineer II</em> &middot; Coral Labs
            </div>
            <div className="lmr-date">2022&ndash;2024</div>
          </div>
          <ul className="lmr-bullets">
            <li>
              Designed the billing pipeline (12M events/day on Kafka and Postgres) from spec through
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </div>

        <div className="lmr-entry" data-print-entry="true">
          <div className="lmr-entry-head">
            <div className="lmr-entry-title">
              <em>Software Engineer</em> &middot; Acme Inc.
            </div>
            <div className="lmr-date">2020&ndash;2022</div>
          </div>
          <ul className="lmr-bullets">
            <li>
              Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs in
              three languages.
            </li>
            <li>
              Migrated the legacy monolith&rsquo;s auth module to a standalone identity service,
              unblocking SSO.
            </li>
            <li>Cut average build times from 11 min to 90 s.</li>
          </ul>
        </div>

        <div className="lmr-entry" data-print-entry="true">
          <div className="lmr-entry-head">
            <div className="lmr-entry-title">
              <em>Software Engineer Intern</em> &middot; Bytework
            </div>
            <div className="lmr-date">Summer 2018</div>
          </div>
          <ul className="lmr-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="lmr-section" data-print-entry="true">
        <h2 className="lmr-h2">
          <span className="lmr-rom">iii.</span> Education
        </h2>
        <div className="lmr-entry" data-print-entry="true">
          <div className="lmr-entry-head">
            <div className="lmr-entry-title">
              <em>B.S. in Computer Science</em> &middot; Northern State University
            </div>
            <div className="lmr-date">2014&ndash;2018</div>
          </div>
          <div className="lmr-sub">
            Thesis: &ldquo;Bounded-staleness reads in geo-distributed key-value stores.&rdquo;
          </div>
        </div>
      </section>

      <section className="lmr-section" data-print-entry="true">
        <h2 className="lmr-h2">
          <span className="lmr-rom">iv.</span> Publications
        </h2>
        <ol className="lmr-refs">
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
        </ol>
      </section>

      <section className="lmr-section" data-print-entry="true">
        <h2 className="lmr-h2">
          <span className="lmr-rom">v.</span> Invited Talks
        </h2>
        <ul className="lmr-talks">
          <li>
            <em>&ldquo;Boring backends, useful platforms.&rdquo;</em> NYC Backend Engineering
            Meetup. <span className="lmr-mute">Oct 2024.</span>
          </li>
          <li>
            <em>&ldquo;Tracing the trace: lessons from Tinytrace.&rdquo;</em> RustConf observability
            track. <span className="lmr-mute">Sep 2023.</span>
          </li>
        </ul>
      </section>

      <section className="lmr-section" data-print-entry="true">
        <h2 className="lmr-h2">
          <span className="lmr-rom">vi.</span> Technical Skills
        </h2>
        <dl className="lmr-skills">
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
