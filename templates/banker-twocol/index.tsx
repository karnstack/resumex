import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function BankerTwocol() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-banker-twocol">
      <header className="bkt-head">
        <div className="bkt-rule bkt-rule-top" aria-hidden="true" />
        <h1 className="bkt-name">Avery Park</h1>
        <div className="bkt-title">Senior Software Engineer &mdash; Platform</div>
        <div className="bkt-rule bkt-rule-bot" aria-hidden="true" />
      </header>

      <div className="bkt-grid">
        <aside className="bkt-side">
          <section className="bkt-side-section" data-print-entry="true">
            <h3 className="bkt-side-title">Contact</h3>
            <ul className="bkt-meta-list">
              <li>
                <span className="bkt-meta-label">Address</span>
                <span>New York, NY</span>
              </li>
              <li>
                <span className="bkt-meta-label">Email</span>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </li>
              <li>
                <span className="bkt-meta-label">Web</span>
                <a href="https://averypark.dev">averypark.dev</a>
              </li>
              <li>
                <span className="bkt-meta-label">GitHub</span>
                <a href="https://github.com/averypark">github.com/averypark</a>
              </li>
              <li>
                <span className="bkt-meta-label">LinkedIn</span>
                <a href="https://linkedin.com/in/averypark">in/averypark</a>
              </li>
            </ul>
          </section>

          <section className="bkt-side-section" data-print-entry="true">
            <h3 className="bkt-side-title">Education</h3>
            <div className="bkt-side-entry">
              <div className="bkt-side-role">B.S. Computer Science</div>
              <div className="bkt-side-firm">Northern State University</div>
              <div className="bkt-side-dates">2014 &ndash; 2018</div>
            </div>
          </section>

          <section className="bkt-side-section" data-print-entry="true">
            <h3 className="bkt-side-title">Competencies</h3>
            <dl className="bkt-skills">
              <div className="bkt-skill">
                <dt>Languages</dt>
                <dd>Go, TypeScript, Python, Rust</dd>
              </div>
              <div className="bkt-skill">
                <dt>Backend</dt>
                <dd>Postgres, Redis, Kafka, gRPC</dd>
              </div>
              <div className="bkt-skill">
                <dt>Frontend</dt>
                <dd>React, Next.js, Tailwind, Vite</dd>
              </div>
              <div className="bkt-skill">
                <dt>Platform</dt>
                <dd>AWS, Kubernetes, Docker, Terraform</dd>
              </div>
            </dl>
          </section>

          <section className="bkt-side-section" data-print-entry="true">
            <h3 className="bkt-side-title">Selected Projects</h3>
            <div className="bkt-side-entry">
              <div className="bkt-side-role">Loomroute</div>
              <div className="bkt-side-firm">URL routing, Go</div>
              <p className="bkt-side-prose">
                Used by approximately two hundred small SaaS applications.
              </p>
            </div>
            <div className="bkt-side-entry">
              <div className="bkt-side-role">Tinytrace</div>
              <div className="bkt-side-firm">Distributed tracing, Rust</div>
              <p className="bkt-side-prose">
                Minimal span model with OTLP export, three thousand lines.
              </p>
            </div>
          </section>
        </aside>

        <main className="bkt-main">
          <section className="bkt-section" data-print-entry="true">
            <h2 className="bkt-section-title">Profile</h2>
            <p className="bkt-lede">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software ought to be boring in production and
              useful to its users.
            </p>
          </section>

          <section className="bkt-section" data-print-entry="true">
            <h2 className="bkt-section-title">Professional Experience</h2>

            <article className="bkt-entry" data-print-entry="true">
              <div className="bkt-entry-head">
                <div className="bkt-entry-role">
                  <span className="bkt-role">Senior Software Engineer</span>
                  <span className="bkt-comma">,&nbsp;</span>
                  <span className="bkt-firm">Coral Labs</span>
                </div>
                <div className="bkt-entry-meta">
                  <span className="bkt-dates">Mar 2024 &ndash; Present</span>
                </div>
              </div>
              <div className="bkt-entry-loc">New York, NY</div>
              <ul className="bkt-bullets">
                <li>
                  Directed the migration of the events pipeline to a horizontally-sharded Kafka
                  cluster, reducing p99 latency by a factor of three.
                </li>
                <li>
                  Owned platform on-call across two consecutive quarters; reduced incident pages by
                  60&#37; through disciplined alerting and runbook revision.
                </li>
                <li>Mentored four engineers through promotion from L4 to L5.</li>
              </ul>
            </article>

            <article className="bkt-entry" data-print-entry="true">
              <div className="bkt-entry-head">
                <div className="bkt-entry-role">
                  <span className="bkt-role">Software Engineer II</span>
                  <span className="bkt-comma">,&nbsp;</span>
                  <span className="bkt-firm">Coral Labs</span>
                </div>
                <div className="bkt-entry-meta">
                  <span className="bkt-dates">Aug 2022 &ndash; Mar 2024</span>
                </div>
              </div>
              <div className="bkt-entry-loc">New York, NY</div>
              <ul className="bkt-bullets">
                <li>
                  Designed and delivered the billing pipeline (twelve million events per day on
                  Kafka and Postgres).
                </li>
                <li>
                  Established the internal feature-flag service, subsequently adopted across forty
                  services.
                </li>
              </ul>
            </article>

            <article className="bkt-entry" data-print-entry="true">
              <div className="bkt-entry-head">
                <div className="bkt-entry-role">
                  <span className="bkt-role">Software Engineer</span>
                  <span className="bkt-comma">,&nbsp;</span>
                  <span className="bkt-firm">Acme Inc.</span>
                </div>
                <div className="bkt-entry-meta">
                  <span className="bkt-dates">Jan 2020 &ndash; Jul 2022</span>
                </div>
              </div>
              <div className="bkt-entry-loc">Remote</div>
              <ul className="bkt-bullets">
                <li>
                  Shipped the firm&rsquo;s first public API: rate-limiting, OAuth&nbsp;2.0, and
                  client SDKs in three languages.
                </li>
                <li>
                  Migrated the monolith&rsquo;s authentication module to a standalone identity
                  service, unblocking SSO for enterprise clients.
                </li>
                <li>Reduced mean build time from eleven minutes to ninety seconds.</li>
              </ul>
            </article>

            <article className="bkt-entry" data-print-entry="true">
              <div className="bkt-entry-head">
                <div className="bkt-entry-role">
                  <span className="bkt-role">Software Engineer Intern</span>
                  <span className="bkt-comma">,&nbsp;</span>
                  <span className="bkt-firm">Bytework</span>
                </div>
                <div className="bkt-entry-meta">
                  <span className="bkt-dates">May 2018 &ndash; Aug 2018</span>
                </div>
              </div>
              <div className="bkt-entry-loc">Remote</div>
              <ul className="bkt-bullets">
                <li>
                  Authored an internal log aggregator in Go atop Kafka. Earned a return offer for a
                  full-time engineering role.
                </li>
              </ul>
            </article>
          </section>
        </main>
      </div>
    </PageFrame>
  )
}
