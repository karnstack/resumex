import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Banker() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-banker">
      <header className="bk-head">
        <div className="bk-rule bk-rule-top" aria-hidden="true" />
        <h1 className="bk-name">Avery Park</h1>
        <div className="bk-title">Senior Software Engineer &mdash; Platform</div>
        <div className="bk-contact">
          <span>New York, NY</span>
          <span className="bk-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="bk-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="bk-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="bk-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
        <div className="bk-rule bk-rule-bot" aria-hidden="true" />
      </header>

      <section className="bk-section" data-print-entry="true">
        <h2 className="bk-section-title">Profile</h2>
        <p className="bk-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software ought to be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="bk-section" data-print-entry="true">
        <h2 className="bk-section-title">Professional Experience</h2>

        <article className="bk-entry" data-print-entry="true">
          <div className="bk-entry-head">
            <div className="bk-entry-role">
              <span className="bk-role">Senior Software Engineer</span>
              <span className="bk-comma">,&nbsp;</span>
              <span className="bk-firm">Coral Labs</span>
            </div>
            <div className="bk-entry-meta">
              <span className="bk-loc">New York, NY</span>
              <span className="bk-dates">Mar 2024 &ndash; Present</span>
            </div>
          </div>
          <ul className="bk-bullets">
            <li>
              Directed the migration of the events pipeline to a horizontally-sharded Kafka cluster,
              reducing p99 latency by a factor of three.
            </li>
            <li>
              Owned platform on-call across two consecutive quarters; reduced incident pages by
              60&#37; through disciplined alerting and runbook revision.
            </li>
            <li>
              Mentored four engineers through promotion from L4 to L5, contributing to documentation
              standards across the platform organisation.
            </li>
          </ul>
        </article>

        <article className="bk-entry" data-print-entry="true">
          <div className="bk-entry-head">
            <div className="bk-entry-role">
              <span className="bk-role">Software Engineer II</span>
              <span className="bk-comma">,&nbsp;</span>
              <span className="bk-firm">Coral Labs</span>
            </div>
            <div className="bk-entry-meta">
              <span className="bk-loc">New York, NY</span>
              <span className="bk-dates">Aug 2022 &ndash; Mar 2024</span>
            </div>
          </div>
          <ul className="bk-bullets">
            <li>
              Designed and delivered the billing pipeline (twelve million events per day on Kafka
              and Postgres) from specification through to production.
            </li>
            <li>
              Established the internal feature-flag service subsequently adopted by more than forty
              services across the firm.
            </li>
          </ul>
        </article>

        <article className="bk-entry" data-print-entry="true">
          <div className="bk-entry-head">
            <div className="bk-entry-role">
              <span className="bk-role">Software Engineer</span>
              <span className="bk-comma">,&nbsp;</span>
              <span className="bk-firm">Acme Inc.</span>
            </div>
            <div className="bk-entry-meta">
              <span className="bk-loc">Remote</span>
              <span className="bk-dates">Jan 2020 &ndash; Jul 2022</span>
            </div>
          </div>
          <ul className="bk-bullets">
            <li>
              Shipped the firm&rsquo;s first public API, including rate-limiting, OAuth&nbsp;2.0
              authentication, and client SDKs in three languages.
            </li>
            <li>
              Migrated the monolith&rsquo;s authentication module to a standalone identity service,
              unblocking single sign-on for enterprise clients.
            </li>
            <li>
              Reduced mean build time from eleven minutes to ninety seconds by parallelising the
              test matrix.
            </li>
          </ul>
        </article>

        <article className="bk-entry" data-print-entry="true">
          <div className="bk-entry-head">
            <div className="bk-entry-role">
              <span className="bk-role">Software Engineer Intern</span>
              <span className="bk-comma">,&nbsp;</span>
              <span className="bk-firm">Bytework</span>
            </div>
            <div className="bk-entry-meta">
              <span className="bk-loc">Remote</span>
              <span className="bk-dates">May 2018 &ndash; Aug 2018</span>
            </div>
          </div>
          <ul className="bk-bullets">
            <li>
              Authored an internal log aggregator in Go atop Kafka. Earned a return offer for a
              full-time engineering role.
            </li>
          </ul>
        </article>
      </section>

      <section className="bk-section" data-print-entry="true">
        <h2 className="bk-section-title">Selected Projects</h2>
        <article className="bk-entry bk-entry-tight" data-print-entry="true">
          <div className="bk-entry-head">
            <div className="bk-entry-role">
              <span className="bk-role">Loomroute</span>
              <span className="bk-comma">,&nbsp;</span>
              <span className="bk-firm">URL routing library</span>
            </div>
            <div className="bk-entry-meta">
              <span className="bk-loc">Go &middot; Open Source</span>
              <span className="bk-dates">2024 &ndash; Present</span>
            </div>
          </div>
          <p className="bk-prose">
            Lightweight routing library, in production at approximately two hundred small SaaS
            applications.
          </p>
        </article>
        <article className="bk-entry bk-entry-tight" data-print-entry="true">
          <div className="bk-entry-head">
            <div className="bk-entry-role">
              <span className="bk-role">Tinytrace</span>
              <span className="bk-comma">,&nbsp;</span>
              <span className="bk-firm">Distributed tracing library</span>
            </div>
            <div className="bk-entry-meta">
              <span className="bk-loc">Rust &middot; Open Source</span>
              <span className="bk-dates">2023</span>
            </div>
          </div>
          <p className="bk-prose">
            Minimal span-model implementation with OTLP export; approximately three thousand lines.
          </p>
        </article>
      </section>

      <section className="bk-section" data-print-entry="true">
        <h2 className="bk-section-title">Education</h2>
        <article className="bk-entry bk-entry-tight" data-print-entry="true">
          <div className="bk-entry-head">
            <div className="bk-entry-role">
              <span className="bk-role">B.S. Computer Science</span>
              <span className="bk-comma">,&nbsp;</span>
              <span className="bk-firm">Northern State University</span>
            </div>
            <div className="bk-entry-meta">
              <span className="bk-dates">2014 &ndash; 2018</span>
            </div>
          </div>
        </article>
      </section>

      <section className="bk-section" data-print-entry="true">
        <h2 className="bk-section-title">Technical Competencies</h2>
        <dl className="bk-skills">
          <div className="bk-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="bk-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="bk-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="bk-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
