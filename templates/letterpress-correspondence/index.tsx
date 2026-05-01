import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function LetterpressCorrespondence() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-letterpress-correspondence">
      <header className="lpx-letterhead">
        <div className="lpx-mark" aria-hidden="true">
          &sect;
        </div>
        <div className="lpx-name">Avery Park</div>
        <div className="lpx-tag">Senior Software Engineer &middot; Platform</div>
        <dl className="lpx-address">
          <div className="lpx-addr-row">
            <dt>Correspondence</dt>
            <dd>avery@example.com</dd>
          </div>
          <div className="lpx-addr-row">
            <dt>Residence</dt>
            <dd>New York, New York</dd>
          </div>
          <div className="lpx-addr-row">
            <dt>On the web</dt>
            <dd>averypark.dev &middot; github.com/averypark &middot; in/averypark</dd>
          </div>
        </dl>
      </header>

      <div className="lpx-dateline">
        <span>New York</span>
        <span className="lpx-date-sep">,&nbsp;</span>
        <em>the second of May, 2026</em>
      </div>

      <div className="lpx-salutation">To whom it may concern,</div>

      <section className="lpx-section" data-print-entry="true">
        <p className="lpx-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software, in my view, ought to be quietly
          dependable in production and genuinely useful to the people it serves. What follows is a
          brief account of my work, in case it should prove useful.
        </p>
      </section>

      <hr className="lpx-hair" />

      <section className="lpx-section" data-print-entry="true">
        <h2 className="lpx-section-label">On Experience</h2>

        <article className="lpx-entry" data-print-entry="true">
          <header className="lpx-entry-head">
            <div className="lpx-entry-title">
              Senior Software Engineer, <em className="lpx-org">Coral Labs</em>
            </div>
            <div className="lpx-entry-meta">
              <em>March 2024 &mdash; Present</em>
              <span>New York, NY</span>
            </div>
          </header>
          <ul className="lpx-bullets">
            <li>
              Led migration of the events pipeline to a horizontally-sharded Kafka cluster, cutting
              p99 latency by a factor of three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages by sixty percent through
              sharper alerting and well-kept runbooks.
            </li>
            <li>Mentored four engineers through promotion to senior.</li>
          </ul>
        </article>

        <article className="lpx-entry" data-print-entry="true">
          <header className="lpx-entry-head">
            <div className="lpx-entry-title">
              Software Engineer II, <em className="lpx-org">Coral Labs</em>
            </div>
            <div className="lpx-entry-meta">
              <em>August 2022 &mdash; March 2024</em>
              <span>New York, NY</span>
            </div>
          </header>
          <ul className="lpx-bullets">
            <li>
              Designed the billing pipeline (twelve million events per day on Kafka and Postgres)
              from specification to production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="lpx-entry" data-print-entry="true">
          <header className="lpx-entry-head">
            <div className="lpx-entry-title">
              Software Engineer, <em className="lpx-org">Acme Inc.</em>
            </div>
            <div className="lpx-entry-meta">
              <em>January 2020 &mdash; July 2022</em>
              <span>Remote</span>
            </div>
          </header>
          <ul className="lpx-bullets">
            <li>
              Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs in
              three languages.
            </li>
            <li>
              Migrated the legacy monolith&rsquo;s authentication module to a standalone identity
              service, unblocking single sign-on.
            </li>
            <li>Reduced average build times from eleven minutes to ninety seconds.</li>
          </ul>
        </article>

        <article className="lpx-entry" data-print-entry="true">
          <header className="lpx-entry-head">
            <div className="lpx-entry-title">
              Software Engineer, Intern &middot; <em className="lpx-org">Bytework</em>
            </div>
            <div className="lpx-entry-meta">
              <em>May 2018 &mdash; August 2018</em>
              <span>Remote</span>
            </div>
          </header>
          <ul className="lpx-bullets">
            <li>
              Built an internal log aggregator in Go atop Kafka; earned a return offer for full-time
              employment.
            </li>
          </ul>
        </article>
      </section>

      <hr className="lpx-hair" />

      <section className="lpx-section" data-print-entry="true">
        <h2 className="lpx-section-label">Sundry Works</h2>
        <article className="lpx-entry" data-print-entry="true">
          <header className="lpx-entry-head">
            <div className="lpx-entry-title">
              Loomroute &mdash; <em>URL routing library, Go</em>
            </div>
            <div className="lpx-entry-meta">
              <em>loomroute.dev</em>
            </div>
          </header>
          <p className="lpx-prose">
            An open-source URL routing library used by roughly two hundred small SaaS applications.
            Live since 2024.
          </p>
        </article>
        <article className="lpx-entry" data-print-entry="true">
          <header className="lpx-entry-head">
            <div className="lpx-entry-title">
              Tinytrace &mdash; <em>Distributed tracing, Rust</em>
            </div>
            <div className="lpx-entry-meta">
              <em>github.com/averypark/tinytrace</em>
            </div>
          </header>
          <p className="lpx-prose">
            A minimal distributed tracing library: span model, OTLP export, approximately three
            thousand lines.
          </p>
        </article>
      </section>

      <hr className="lpx-hair" />

      <section className="lpx-section" data-print-entry="true">
        <h2 className="lpx-section-label">Earlier Schooling</h2>
        <article className="lpx-entry" data-print-entry="true">
          <header className="lpx-entry-head">
            <div className="lpx-entry-title">
              B.S. Computer Science, <em className="lpx-org">Northern State University</em>
            </div>
            <div className="lpx-entry-meta">
              <em>2014 &mdash; 2018</em>
            </div>
          </header>
        </article>
      </section>

      <hr className="lpx-hair" />

      <section className="lpx-section" data-print-entry="true">
        <h2 className="lpx-section-label">Familiar Tools</h2>
        <dl className="lpx-skills">
          <div className="lpx-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="lpx-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="lpx-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="lpx-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>

      <footer className="lpx-foot">
        <div className="lpx-valediction">With kind regards,</div>
        <div className="lpx-signature">&mdash; Avery Park</div>
      </footer>
    </PageFrame>
  )
}
