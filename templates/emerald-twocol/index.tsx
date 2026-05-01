import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function EmeraldTwocol() {
  return (
    <PageFrame fitDeps={[]} className="kt-frame" innerClassName="kt-root">
      <div className="kt-grid">
        <header className="kt-head">
          <div>
            <h1 className="kt-name">
              Avery <span className="kt-name-grad">Park</span>.
            </h1>
            <span className="kt-rolepill">
              <span className="dot" />
              senior software engineer · platform
            </span>
          </div>
          <div className="kt-contact">
            <div>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </div>
            <div>New York, NY</div>
            <div>
              <a href="https://example.com">example.com</a>
            </div>
            <div>
              <a href="https://github.com">github.com</a>
            </div>
            <div>
              <a href="https://linkedin.com">linkedin.com</a>
            </div>
          </div>
        </header>

        <section className="kt-about">
          <span className="kt-eyebrow">about</span>
          <p>
            I build <strong>resilient backend systems and the platforms that run them</strong>. I
            prefer small, reversible changes and clear interfaces. Software should be{' '}
            <em>boring in production</em> and useful to its users.
          </p>
        </section>

        <aside className="kt-side">
          <div className="kt-side-section">
            <span className="kt-eyebrow">stack</span>
            <div className="kt-skill-group">
              <p className="label">// languages</p>
              <div className="chips">
                <span className="kt-chip">Go</span>
                <span className="kt-chip">TypeScript</span>
                <span className="kt-chip">Python</span>
                <span className="kt-chip">Rust</span>
              </div>
            </div>
            <div className="kt-skill-group">
              <p className="label">// backend</p>
              <div className="chips">
                <span className="kt-chip">Postgres</span>
                <span className="kt-chip">Redis</span>
                <span className="kt-chip">Kafka</span>
                <span className="kt-chip">gRPC</span>
                <span className="kt-chip">GraphQL</span>
              </div>
            </div>
            <div className="kt-skill-group">
              <p className="label">// frontend</p>
              <div className="chips">
                <span className="kt-chip">React</span>
                <span className="kt-chip">Next.js</span>
                <span className="kt-chip">Tailwind</span>
                <span className="kt-chip">Vite</span>
              </div>
            </div>
            <div className="kt-skill-group">
              <p className="label">// platform</p>
              <div className="chips">
                <span className="kt-chip">AWS</span>
                <span className="kt-chip">Kubernetes</span>
                <span className="kt-chip">Docker</span>
                <span className="kt-chip">Terraform</span>
                <span className="kt-chip">GitHub Actions</span>
              </div>
            </div>
          </div>

          <div className="kt-side-section">
            <span className="kt-eyebrow">projects</span>
            <div className="kt-side-entry">
              <h4 className="title">Loomroute</h4>
              <div className="sub">loomroute.dev</div>
              <div className="kt-side-entry-body">
                <p>
                  Open-source URL routing library used by ~200 small SaaS apps. Live since 2024.
                </p>
              </div>
              <div className="meta-line">Live · Go · Postgres · Cloudflare Workers</div>
            </div>
            <div className="kt-side-entry">
              <h4 className="title">Tinytrace</h4>
              <div className="sub">github.com/example/tinytrace</div>
              <div className="kt-side-entry-body">
                <p>Minimal distributed tracing library - span model, OTLP export, ~3k lines.</p>
              </div>
              <div className="meta-line">OSS · Rust</div>
            </div>
          </div>

          <div className="kt-side-section">
            <span className="kt-eyebrow">awards</span>
            <div className="kt-side-entry">
              <h4 className="title">Engineering Excellence</h4>
              <div className="sub">Coral Labs</div>
              <div className="meta-line">2025</div>
            </div>
            <div className="kt-side-entry">
              <h4 className="title">Best Internship Project</h4>
              <div className="sub">Bytework</div>
              <div className="meta-line">2018</div>
            </div>
          </div>

          <div className="kt-side-section">
            <span className="kt-eyebrow">education</span>
            <div className="kt-side-entry">
              <h4 className="title">B.S. Computer Science</h4>
              <div className="sub">Northern State University</div>
              <div className="meta-line">2014 - 2018</div>
            </div>
          </div>
        </aside>

        <main className="kt-main">
          <div className="kt-section">
            <div className="kt-section-title">
              <span className="kt-eyebrow">experience</span>
            </div>

            <div className="kt-section-group">
              <div className="kt-group-head">
                <h3>Coral Labs</h3>
                <span className="tenure">Aug 2022 - Present</span>
              </div>

              <div className="kt-entry">
                <div className="kt-entry-head">
                  <div className="left">
                    <span className="idx">01</span>
                    <span className="role">Senior Software Engineer</span>
                    <span className="team">New York, NY</span>
                  </div>
                  <span className="dates">Mar 2024 - Present</span>
                </div>
                <ul className="kt-bullets">
                  <li>
                    Led the migration of the events pipeline to a{' '}
                    <strong>horizontally-sharded Kafka cluster</strong>, reducing p99 latency by 3x.
                  </li>
                  <li>
                    Owned the on-call rotation for the platform team -{' '}
                    <strong>reduced pages 60%</strong> over two quarters through better alerting and
                    runbooks.
                  </li>
                  <li>Mentored four engineers through L4 → L5 promotions.</li>
                </ul>
              </div>

              <div className="kt-entry">
                <div className="kt-entry-head">
                  <div className="left">
                    <span className="idx">02</span>
                    <span className="role">Software Engineer 2</span>
                    <span className="team">New York, NY</span>
                  </div>
                  <span className="dates">Aug 2022 - Mar 2024</span>
                </div>
                <ul className="kt-bullets">
                  <li>
                    Designed and shipped the <strong>billing pipeline</strong> processing 12M
                    events/day on Kafka + Postgres.
                  </li>
                  <li>
                    Built the <strong>internal feature-flag service</strong> used across 40+
                    microservices.
                  </li>
                  <li>
                    Drove <strong>architecture-level reviews</strong> for cross-team launches.
                  </li>
                </ul>
              </div>
            </div>

            <div className="kt-section-group">
              <div className="kt-group-head">
                <h3>Acme Inc</h3>
                <span className="tenure">Jan 2020 - Jul 2022</span>
              </div>

              <div className="kt-entry">
                <div className="kt-entry-head">
                  <div className="left">
                    <span className="idx">03</span>
                    <span className="role">Software Engineer</span>
                    <span className="team">Remote</span>
                  </div>
                  <span className="dates">Jan 2020 - Jul 2022</span>
                </div>
                <ul className="kt-bullets">
                  <li>
                    Shipped the company's first <strong>public API</strong> with rate limiting,
                    OAuth2, and SDKs in three languages.
                  </li>
                  <li>
                    Migrated the legacy monolith's auth module to a{' '}
                    <strong>standalone identity service</strong>, unblocking SSO integrations.
                  </li>
                  <li>
                    Cut average build times from 11 min to 90s by parallelizing the test matrix.
                  </li>
                </ul>
              </div>
            </div>

            <div className="kt-section-group">
              <div className="kt-group-head">
                <h3>Bytework</h3>
                <span className="tenure">May 2018 - Aug 2018</span>
              </div>

              <div className="kt-entry">
                <div className="kt-entry-head">
                  <div className="left">
                    <span className="idx">04</span>
                    <span className="role">Software Engineer Intern</span>
                    <span className="team">Remote</span>
                  </div>
                  <span className="dates">May 2018 - Aug 2018</span>
                </div>
                <ul className="kt-bullets">
                  <li>
                    Built a small <strong>internal log aggregator</strong> in Go on top of Kafka,
                    replacing a brittle cron job.
                  </li>
                  <li>
                    Earned a <strong>return offer</strong> for a full-time role.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <footer className="kt-foot">
          <span>avery-park</span>
          <span>senior software engineer · platform</span>
        </footer>
      </div>
    </PageFrame>
  )
}
