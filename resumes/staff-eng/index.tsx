import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function StaffEng() {
  return (
    <PageFrame fitDeps={[]} className="kt-frame" innerClassName="kt-root">
      <div className="kt-grid">
        <header className="kt-head">
          <div>
            <h1 className="kt-name">
              Gyan Prakash <span className="kt-name-grad">Karn</span>.
            </h1>
            <span className="kt-rolepill">
              <span className="dot" />
              senior software engineer
            </span>
          </div>
          <div className="kt-contact">
            <div>
              <a href="mailto:mail@karngyan.com">mail@karngyan.com</a>
            </div>
            <div>+91 8051005416</div>
            <div>Bengaluru, India</div>
            <div>
              <a href="https://karnstack.com">karnstack.com</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/karngyan">linkedin.com/in/karngyan</a>
            </div>
          </div>
        </header>

        <section className="kt-about">
          <span className="kt-eyebrow">about</span>
          <p>
            Senior engineer who ships <strong>0-to-1 infrastructure end-to-end</strong> — system
            design, API, schema, frontend, the works. Currently building Customer.io's AI &amp;
            in-app surfaces. I prefer small, reversible changes and clear interfaces.
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
                <span className="kt-chip">Ruby</span>
                <span className="kt-chip">Python</span>
              </div>
            </div>
            <div className="kt-skill-group">
              <p className="label">// frontend</p>
              <div className="chips">
                <span className="kt-chip">React</span>
                <span className="kt-chip">Ember.js</span>
                <span className="kt-chip">Tailwind</span>
                <span className="kt-chip">Nuxt</span>
              </div>
            </div>
            <div className="kt-skill-group">
              <p className="label">// backend &amp; data</p>
              <div className="chips">
                <span className="kt-chip">PostgreSQL</span>
                <span className="kt-chip">Bigtable</span>
                <span className="kt-chip">Redis</span>
                <span className="kt-chip">OAuth2</span>
                <span className="kt-chip">MCP</span>
              </div>
            </div>
            <div className="kt-skill-group">
              <p className="label">// platform</p>
              <div className="chips">
                <span className="kt-chip">GCP</span>
                <span className="kt-chip">AWS</span>
                <span className="kt-chip">Docker</span>
                <span className="kt-chip">Kubernetes</span>
              </div>
            </div>
          </div>

          <div className="kt-side-section">
            <span className="kt-eyebrow">early career</span>
            <div className="kt-side-entry">
              <h4 className="title">SDE Intern</h4>
              <div className="sub">Amazon · IN Payments</div>
              <div className="meta-line">Jan - Jul 2021</div>
            </div>
            <div className="kt-side-entry">
              <h4 className="title">Software Engineer Intern</h4>
              <div className="sub">SendX · Product &amp; Tech</div>
              <div className="meta-line">Jul 2020 - Jan 2021</div>
            </div>
            <div className="kt-side-entry">
              <h4 className="title">Software Product Sprint</h4>
              <div className="sub">Google</div>
              <div className="meta-line">Jul - Aug 2020</div>
            </div>
            <div className="kt-side-entry">
              <h4 className="title">Software Engineer Intern</h4>
              <div className="sub">Crio.Do · Backend</div>
              <div className="meta-line">Oct 2019 - Apr 2020</div>
            </div>
          </div>

          <div className="kt-side-section">
            <span className="kt-eyebrow">education</span>
            <div className="kt-side-entry">
              <h4 className="title">B.E. Information Technology</h4>
              <div className="sub">Birla Institute of Technology, Mesra</div>
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
                <h3>Customer.io</h3>
                <span className="tenure">Mar 2022 - Present</span>
              </div>

              <div className="kt-entry">
                <div className="kt-entry-head">
                  <div className="left">
                    <span className="idx">01</span>
                    <span className="role">Senior Software Engineer</span>
                    <span className="team">In-App &amp; AI</span>
                  </div>
                  <span className="dates">Sep 2025 - Present</span>
                </div>
                <ul className="kt-bullets">
                  <li>
                    Built <strong>In-App Form Submissions</strong> from scratch end-to-end: API
                    design, schema, CRUD, list/export APIs, and full UI integration.
                  </li>
                  <li>
                    Expanding MCP tool surface and improving <strong>OAuth compliance</strong>;
                    developing Inbox message workflows with preview, priority, and topic support.
                  </li>
                  <li>
                    Mentoring engineers and contributing to technical direction; 126+ PRs in 4
                    months while keeping review quality high.
                  </li>
                </ul>
              </div>

              <div className="kt-entry">
                <div className="kt-entry-head">
                  <div className="left">
                    <span className="idx">02</span>
                    <span className="role">Software Engineer 3, Full Stack</span>
                    <span className="team">Remote</span>
                  </div>
                  <span className="dates">Oct 2024 - Sep 2025</span>
                </div>
                <ul className="kt-bullets">
                  <li>
                    Built the <strong>MCP OAuth server</strong> from concept to production — core
                    to Customer.io's AI offering. RFC 6749 compliant OAuth2, security model, 15+
                    AI tools.
                  </li>
                  <li>
                    Architected <strong>SMS Link Shortening</strong> on Bigtable, including custom
                    domain support and Auto-TLS certificate provisioning.
                  </li>
                  <li>
                    Led <strong>Anonymous In-App Messaging</strong>: conversion tracking, metrics
                    dashboard, frequency controls. Shipped 662 PRs and reviewed 799.
                  </li>
                </ul>
              </div>

              <div className="kt-entry">
                <div className="kt-entry-head">
                  <div className="left">
                    <span className="idx">03</span>
                    <span className="role">Software Engineer 2, Full Stack</span>
                    <span className="team">In-App Messaging</span>
                  </div>
                  <span className="dates">Mar 2022 - Sep 2024</span>
                </div>
                <ul className="kt-bullets">
                  <li>
                    Launched the <strong>In-App Visual Editor</strong> to all users, enabling
                    drag-and-drop message creation. Shipped to 7,000+ customers.
                  </li>
                  <li>
                    Built template &amp; component systems for the in-app editor; developed the
                    page rules matching engine for targeted delivery.
                  </li>
                  <li>
                    Delivered 443 PRs at 95%+ merge rate alongside 527 code reviews.
                  </li>
                </ul>
              </div>
            </div>

            <div className="kt-section-group">
              <div className="kt-group-head">
                <h3>SendX</h3>
                <span className="tenure">Jul 2021 - Mar 2022</span>
              </div>

              <div className="kt-entry">
                <div className="kt-entry-head">
                  <div className="left">
                    <span className="idx">04</span>
                    <span className="role">Software Engineer, Full Stack</span>
                  </div>
                  <span className="dates">Jul 2021 - Mar 2022</span>
                </div>
                <ul className="kt-bullets">
                  <li>
                    Spearheaded <strong>SendHealth</strong> (sendhealth.io) end-to-end from PRD to
                    production in Nuxt + Go.
                  </li>
                  <li>
                    Built a robust <strong>SMTP relay</strong> for SendPost in Go: Postgres auth,
                    TLS across multiple ports, SSL support.
                  </li>
                  <li>
                    Automated TLS certificate generation and renewal for wildcard domains via DNS
                    validation. Contributed to the lead-up to SendX's acquisition.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <footer className="kt-foot">
          <span>karn-goyani</span>
          <span>senior software engineer</span>
        </footer>
      </div>
    </PageFrame>
  )
}
