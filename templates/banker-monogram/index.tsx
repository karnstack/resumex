import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function BankerMonogram() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-banker-monogram">
      <header className="bkm-head">
        <div className="bkm-mono" aria-hidden="true">
          <span className="bkm-mono-letter">A</span>
          <span className="bkm-mono-dot">&middot;</span>
          <span className="bkm-mono-letter">P</span>
        </div>
        <h1 className="bkm-name">Avery Park</h1>
        <div className="bkm-title">Senior Software Engineer &mdash; Platform</div>
        <div className="bkm-rule" aria-hidden="true" />
        <div className="bkm-contact">
          <span className="bkm-c-row">
            <span className="bkm-c-label">Address</span>
            <span>New York, NY</span>
          </span>
          <span className="bkm-c-row">
            <span className="bkm-c-label">Email</span>
            <a href="mailto:avery@example.com">avery@example.com</a>
          </span>
          <span className="bkm-c-row">
            <span className="bkm-c-label">Web</span>
            <a href="https://averypark.dev">averypark.dev</a>
          </span>
          <span className="bkm-c-row">
            <span className="bkm-c-label">GitHub</span>
            <a href="https://github.com/averypark">github.com/averypark</a>
          </span>
          <span className="bkm-c-row">
            <span className="bkm-c-label">LinkedIn</span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </span>
        </div>
      </header>

      <section className="bkm-section" data-print-entry="true">
        <h2 className="bkm-section-title">Profile</h2>
        <p className="bkm-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software ought to be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="bkm-section" data-print-entry="true">
        <h2 className="bkm-section-title">Professional Experience</h2>

        <article className="bkm-entry" data-print-entry="true">
          <div className="bkm-entry-head">
            <div className="bkm-entry-role">
              <span className="bkm-role">Senior Software Engineer</span>
              <span className="bkm-comma">,&nbsp;</span>
              <span className="bkm-firm">Coral Labs</span>
            </div>
            <div className="bkm-entry-meta">
              <span className="bkm-loc">New York, NY</span>
              <span className="bkm-dates">Mar 2024 &ndash; Present</span>
            </div>
          </div>
          <ul className="bkm-bullets">
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

        <article className="bkm-entry" data-print-entry="true">
          <div className="bkm-entry-head">
            <div className="bkm-entry-role">
              <span className="bkm-role">Software Engineer II</span>
              <span className="bkm-comma">,&nbsp;</span>
              <span className="bkm-firm">Coral Labs</span>
            </div>
            <div className="bkm-entry-meta">
              <span className="bkm-loc">New York, NY</span>
              <span className="bkm-dates">Aug 2022 &ndash; Mar 2024</span>
            </div>
          </div>
          <ul className="bkm-bullets">
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

        <article className="bkm-entry" data-print-entry="true">
          <div className="bkm-entry-head">
            <div className="bkm-entry-role">
              <span className="bkm-role">Software Engineer</span>
              <span className="bkm-comma">,&nbsp;</span>
              <span className="bkm-firm">Acme Inc.</span>
            </div>
            <div className="bkm-entry-meta">
              <span className="bkm-loc">Remote</span>
              <span className="bkm-dates">Jan 2020 &ndash; Jul 2022</span>
            </div>
          </div>
          <ul className="bkm-bullets">
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

        <article className="bkm-entry" data-print-entry="true">
          <div className="bkm-entry-head">
            <div className="bkm-entry-role">
              <span className="bkm-role">Software Engineer Intern</span>
              <span className="bkm-comma">,&nbsp;</span>
              <span className="bkm-firm">Bytework</span>
            </div>
            <div className="bkm-entry-meta">
              <span className="bkm-loc">Remote</span>
              <span className="bkm-dates">May 2018 &ndash; Aug 2018</span>
            </div>
          </div>
          <ul className="bkm-bullets">
            <li>
              Authored an internal log aggregator in Go atop Kafka. Earned a return offer for a
              full-time engineering role.
            </li>
          </ul>
        </article>
      </section>

      <section className="bkm-section" data-print-entry="true">
        <h2 className="bkm-section-title">Selected Projects</h2>
        <article className="bkm-entry bkm-entry-tight" data-print-entry="true">
          <div className="bkm-entry-head">
            <div className="bkm-entry-role">
              <span className="bkm-role">Loomroute</span>
              <span className="bkm-comma">,&nbsp;</span>
              <span className="bkm-firm">URL routing library</span>
            </div>
            <div className="bkm-entry-meta">
              <span className="bkm-loc">Go &middot; Open Source</span>
              <span className="bkm-dates">2024 &ndash; Present</span>
            </div>
          </div>
          <p className="bkm-prose">
            Lightweight routing library, in production at approximately two hundred small SaaS
            applications.
          </p>
        </article>
        <article className="bkm-entry bkm-entry-tight" data-print-entry="true">
          <div className="bkm-entry-head">
            <div className="bkm-entry-role">
              <span className="bkm-role">Tinytrace</span>
              <span className="bkm-comma">,&nbsp;</span>
              <span className="bkm-firm">Distributed tracing library</span>
            </div>
            <div className="bkm-entry-meta">
              <span className="bkm-loc">Rust &middot; Open Source</span>
              <span className="bkm-dates">2023</span>
            </div>
          </div>
          <p className="bkm-prose">
            Minimal span-model implementation with OTLP export; approximately three thousand lines.
          </p>
        </article>
      </section>

      <section className="bkm-section" data-print-entry="true">
        <h2 className="bkm-section-title">Education</h2>
        <article className="bkm-entry bkm-entry-tight" data-print-entry="true">
          <div className="bkm-entry-head">
            <div className="bkm-entry-role">
              <span className="bkm-role">B.S. Computer Science</span>
              <span className="bkm-comma">,&nbsp;</span>
              <span className="bkm-firm">Northern State University</span>
            </div>
            <div className="bkm-entry-meta">
              <span className="bkm-dates">2014 &ndash; 2018</span>
            </div>
          </div>
        </article>
      </section>

      <section className="bkm-section" data-print-entry="true">
        <h2 className="bkm-section-title">Technical Competencies</h2>
        <dl className="bkm-skills">
          <div className="bkm-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="bkm-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="bkm-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="bkm-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
