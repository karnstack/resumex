import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function BankerLetterhead() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-banker-letterhead">
      <header className="bkl-letterhead">
        <div className="bkl-orn-rule" aria-hidden="true">
          <span className="bkl-orn-line" />
          <span className="bkl-orn-mark">&#10038;</span>
          <span className="bkl-orn-line" />
        </div>
        <div className="bkl-smallcaps">Avery &middot; Park</div>
        <div className="bkl-orn-rule" aria-hidden="true">
          <span className="bkl-orn-line" />
        </div>
      </header>

      <section className="bkl-name-block" data-print-entry="true">
        <h1 className="bkl-name">Avery Park</h1>
        <div className="bkl-title">Senior Software Engineer &mdash; Platform</div>
        <div className="bkl-contact">
          <span>New York, NY</span>
          <span className="bkl-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="bkl-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="bkl-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="bkl-sep" aria-hidden="true">
            &bull;
          </span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </section>

      <section className="bkl-section" data-print-entry="true">
        <h2 className="bkl-section-title">Profile</h2>
        <p className="bkl-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software ought to be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="bkl-section" data-print-entry="true">
        <h2 className="bkl-section-title">Professional Experience</h2>

        <article className="bkl-entry" data-print-entry="true">
          <div className="bkl-entry-head">
            <div className="bkl-entry-role">
              <span className="bkl-role">Senior Software Engineer</span>
              <span className="bkl-comma">,&nbsp;</span>
              <span className="bkl-firm">Coral Labs</span>
            </div>
            <div className="bkl-entry-meta">
              <span className="bkl-loc">New York, NY</span>
              <span className="bkl-dates">Mar 2024 &ndash; Present</span>
            </div>
          </div>
          <ul className="bkl-bullets">
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

        <article className="bkl-entry" data-print-entry="true">
          <div className="bkl-entry-head">
            <div className="bkl-entry-role">
              <span className="bkl-role">Software Engineer II</span>
              <span className="bkl-comma">,&nbsp;</span>
              <span className="bkl-firm">Coral Labs</span>
            </div>
            <div className="bkl-entry-meta">
              <span className="bkl-loc">New York, NY</span>
              <span className="bkl-dates">Aug 2022 &ndash; Mar 2024</span>
            </div>
          </div>
          <ul className="bkl-bullets">
            <li>
              Designed and delivered the billing pipeline (twelve million events per day on Kafka
              and Postgres) from specification through to production.
            </li>
            <li>
              Established the internal feature-flag service, subsequently adopted by more than forty
              services across the firm.
            </li>
          </ul>
        </article>

        <article className="bkl-entry" data-print-entry="true">
          <div className="bkl-entry-head">
            <div className="bkl-entry-role">
              <span className="bkl-role">Software Engineer</span>
              <span className="bkl-comma">,&nbsp;</span>
              <span className="bkl-firm">Acme Inc.</span>
            </div>
            <div className="bkl-entry-meta">
              <span className="bkl-loc">Remote</span>
              <span className="bkl-dates">Jan 2020 &ndash; Jul 2022</span>
            </div>
          </div>
          <ul className="bkl-bullets">
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

        <article className="bkl-entry" data-print-entry="true">
          <div className="bkl-entry-head">
            <div className="bkl-entry-role">
              <span className="bkl-role">Software Engineer Intern</span>
              <span className="bkl-comma">,&nbsp;</span>
              <span className="bkl-firm">Bytework</span>
            </div>
            <div className="bkl-entry-meta">
              <span className="bkl-loc">Remote</span>
              <span className="bkl-dates">May 2018 &ndash; Aug 2018</span>
            </div>
          </div>
          <ul className="bkl-bullets">
            <li>
              Authored an internal log aggregator in Go atop Kafka. Earned a return offer for a
              full-time engineering role.
            </li>
          </ul>
        </article>
      </section>

      <section className="bkl-section" data-print-entry="true">
        <h2 className="bkl-section-title">Selected Projects</h2>
        <article className="bkl-entry bkl-entry-tight" data-print-entry="true">
          <div className="bkl-entry-head">
            <div className="bkl-entry-role">
              <span className="bkl-role">Loomroute</span>
              <span className="bkl-comma">,&nbsp;</span>
              <span className="bkl-firm">URL routing library</span>
            </div>
            <div className="bkl-entry-meta">
              <span className="bkl-loc">Go &middot; Open Source</span>
              <span className="bkl-dates">2024 &ndash; Present</span>
            </div>
          </div>
          <p className="bkl-prose">
            Lightweight routing library, in production at approximately two hundred small SaaS
            applications.
          </p>
        </article>
        <article className="bkl-entry bkl-entry-tight" data-print-entry="true">
          <div className="bkl-entry-head">
            <div className="bkl-entry-role">
              <span className="bkl-role">Tinytrace</span>
              <span className="bkl-comma">,&nbsp;</span>
              <span className="bkl-firm">Distributed tracing library</span>
            </div>
            <div className="bkl-entry-meta">
              <span className="bkl-loc">Rust &middot; Open Source</span>
              <span className="bkl-dates">2023</span>
            </div>
          </div>
          <p className="bkl-prose">
            Minimal span-model implementation with OTLP export; approximately three thousand lines.
          </p>
        </article>
      </section>

      <section className="bkl-section" data-print-entry="true">
        <h2 className="bkl-section-title">Education</h2>
        <article className="bkl-entry bkl-entry-tight" data-print-entry="true">
          <div className="bkl-entry-head">
            <div className="bkl-entry-role">
              <span className="bkl-role">B.S. Computer Science</span>
              <span className="bkl-comma">,&nbsp;</span>
              <span className="bkl-firm">Northern State University</span>
            </div>
            <div className="bkl-entry-meta">
              <span className="bkl-dates">2014 &ndash; 2018</span>
            </div>
          </div>
        </article>
      </section>

      <section className="bkl-section" data-print-entry="true">
        <h2 className="bkl-section-title">Technical Competencies</h2>
        <dl className="bkl-skills">
          <div className="bkl-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="bkl-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="bkl-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="bkl-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>

      <footer className="bkl-foot">
        <div className="bkl-orn-rule" aria-hidden="true">
          <span className="bkl-orn-line" />
          <span className="bkl-orn-mark">&#10038;</span>
          <span className="bkl-orn-line" />
        </div>
        <div className="bkl-foot-line">
          <span>Avery Park</span>
          <span className="bkl-foot-dot" aria-hidden="true">
            &middot;
          </span>
          <span>Curriculum Vit&aelig;</span>
          <span className="bkl-foot-dot" aria-hidden="true">
            &middot;
          </span>
          <span>averypark.dev</span>
        </div>
      </footer>
    </PageFrame>
  )
}
