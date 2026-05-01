import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function BankerBurgundy() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-banker-burgundy">
      <header className="bkb-head">
        <div className="bkb-rule bkb-rule-top" aria-hidden="true">
          <span className="bkb-orn" aria-hidden="true">
            &sect;
          </span>
        </div>
        <h1 className="bkb-name">Avery Park</h1>
        <div className="bkb-title">Senior Software Engineer &mdash; Platform</div>
        <div className="bkb-contact">
          <span>New York, NY</span>
          <span className="bkb-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="bkb-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="bkb-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="bkb-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
        <div className="bkb-rule bkb-rule-bot" aria-hidden="true" />
      </header>

      <section className="bkb-section" data-print-entry="true">
        <h2 className="bkb-section-title">
          <span className="bkb-stitch" aria-hidden="true" />
          <span>Profile</span>
          <span className="bkb-stitch" aria-hidden="true" />
        </h2>
        <p className="bkb-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software ought to be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="bkb-section" data-print-entry="true">
        <h2 className="bkb-section-title">
          <span className="bkb-stitch" aria-hidden="true" />
          <span>Professional Experience</span>
          <span className="bkb-stitch" aria-hidden="true" />
        </h2>

        <article className="bkb-entry" data-print-entry="true">
          <div className="bkb-entry-head">
            <div className="bkb-entry-role">
              <span className="bkb-role">Senior Software Engineer</span>
              <span className="bkb-comma">,&nbsp;</span>
              <span className="bkb-firm">Coral Labs</span>
            </div>
            <div className="bkb-entry-meta">
              <span className="bkb-loc">New York, NY</span>
              <span className="bkb-dates">Mar 2024 &ndash; Present</span>
            </div>
          </div>
          <ul className="bkb-bullets">
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

        <article className="bkb-entry" data-print-entry="true">
          <div className="bkb-entry-head">
            <div className="bkb-entry-role">
              <span className="bkb-role">Software Engineer II</span>
              <span className="bkb-comma">,&nbsp;</span>
              <span className="bkb-firm">Coral Labs</span>
            </div>
            <div className="bkb-entry-meta">
              <span className="bkb-loc">New York, NY</span>
              <span className="bkb-dates">Aug 2022 &ndash; Mar 2024</span>
            </div>
          </div>
          <ul className="bkb-bullets">
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

        <article className="bkb-entry" data-print-entry="true">
          <div className="bkb-entry-head">
            <div className="bkb-entry-role">
              <span className="bkb-role">Software Engineer</span>
              <span className="bkb-comma">,&nbsp;</span>
              <span className="bkb-firm">Acme Inc.</span>
            </div>
            <div className="bkb-entry-meta">
              <span className="bkb-loc">Remote</span>
              <span className="bkb-dates">Jan 2020 &ndash; Jul 2022</span>
            </div>
          </div>
          <ul className="bkb-bullets">
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

        <article className="bkb-entry" data-print-entry="true">
          <div className="bkb-entry-head">
            <div className="bkb-entry-role">
              <span className="bkb-role">Software Engineer Intern</span>
              <span className="bkb-comma">,&nbsp;</span>
              <span className="bkb-firm">Bytework</span>
            </div>
            <div className="bkb-entry-meta">
              <span className="bkb-loc">Remote</span>
              <span className="bkb-dates">May 2018 &ndash; Aug 2018</span>
            </div>
          </div>
          <ul className="bkb-bullets">
            <li>
              Authored an internal log aggregator in Go atop Kafka. Earned a return offer for a
              full-time engineering role.
            </li>
          </ul>
        </article>
      </section>

      <section className="bkb-section" data-print-entry="true">
        <h2 className="bkb-section-title">
          <span className="bkb-stitch" aria-hidden="true" />
          <span>Selected Projects</span>
          <span className="bkb-stitch" aria-hidden="true" />
        </h2>
        <article className="bkb-entry bkb-entry-tight" data-print-entry="true">
          <div className="bkb-entry-head">
            <div className="bkb-entry-role">
              <span className="bkb-role">Loomroute</span>
              <span className="bkb-comma">,&nbsp;</span>
              <span className="bkb-firm">URL routing library</span>
            </div>
            <div className="bkb-entry-meta">
              <span className="bkb-loc">Go &middot; Open Source</span>
              <span className="bkb-dates">2024 &ndash; Present</span>
            </div>
          </div>
          <p className="bkb-prose">
            Lightweight routing library, in production at approximately two hundred small SaaS
            applications.
          </p>
        </article>
        <article className="bkb-entry bkb-entry-tight" data-print-entry="true">
          <div className="bkb-entry-head">
            <div className="bkb-entry-role">
              <span className="bkb-role">Tinytrace</span>
              <span className="bkb-comma">,&nbsp;</span>
              <span className="bkb-firm">Distributed tracing library</span>
            </div>
            <div className="bkb-entry-meta">
              <span className="bkb-loc">Rust &middot; Open Source</span>
              <span className="bkb-dates">2023</span>
            </div>
          </div>
          <p className="bkb-prose">
            Minimal span-model implementation with OTLP export; approximately three thousand lines.
          </p>
        </article>
      </section>

      <section className="bkb-section" data-print-entry="true">
        <h2 className="bkb-section-title">
          <span className="bkb-stitch" aria-hidden="true" />
          <span>Education</span>
          <span className="bkb-stitch" aria-hidden="true" />
        </h2>
        <article className="bkb-entry bkb-entry-tight" data-print-entry="true">
          <div className="bkb-entry-head">
            <div className="bkb-entry-role">
              <span className="bkb-role">B.S. Computer Science</span>
              <span className="bkb-comma">,&nbsp;</span>
              <span className="bkb-firm">Northern State University</span>
            </div>
            <div className="bkb-entry-meta">
              <span className="bkb-dates">2014 &ndash; 2018</span>
            </div>
          </div>
        </article>
      </section>

      <section className="bkb-section" data-print-entry="true">
        <h2 className="bkb-section-title">
          <span className="bkb-stitch" aria-hidden="true" />
          <span>Technical Competencies</span>
          <span className="bkb-stitch" aria-hidden="true" />
        </h2>
        <dl className="bkb-skills">
          <div className="bkb-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="bkb-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="bkb-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="bkb-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
