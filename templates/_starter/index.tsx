import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Starter() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-starter">
      <header>
        <div className="header-row">
          <div>
            <h1>Avery Park</h1>
            <div className="meta">senior software engineer</div>
          </div>
          <div className="links">
            <div>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </div>
            <div>New York, NY</div>
            <div>
              <a href="https://example.com">averypark.dev</a>
            </div>
          </div>
        </div>
      </header>

      <section data-print-entry="true">
        <h2>Summary</h2>
        <p>One-line summary. Replace with your own.</p>
      </section>

      <section data-print-entry="true">
        <h2>Experience</h2>

        <div data-print-entry="true">
          <h3>
            Senior Software Engineer <span>@ Coral Labs</span>
          </h3>
          <div className="meta">Mar 2024 - Present · New York, NY</div>
          <ul>
            <li>Led migration of the events pipeline to a sharded Kafka cluster.</li>
            <li>Owned platform on-call; reduced pages 60% with better alerting.</li>
            <li>Mentored four engineers through promotions.</li>
          </ul>
        </div>

        <div data-print-entry="true">
          <h3>
            Software Engineer 2 <span>@ Coral Labs</span>
          </h3>
          <div className="meta">Aug 2022 - Mar 2024 · New York, NY</div>
          <ul>
            <li>Designed the billing pipeline (12M events/day on Kafka + Postgres).</li>
            <li>Built the internal feature-flag service used across 40+ services.</li>
          </ul>
        </div>
      </section>

      <section data-print-entry="true">
        <h2>Education</h2>
        <div data-print-entry="true">
          <h3>
            B.S. Computer Science <span>@ Northern State University</span>
          </h3>
          <div className="meta">2014 - 2018</div>
        </div>
      </section>

      <section data-print-entry="true">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> Go, TypeScript, Python, Rust
          </li>
          <li>
            <strong>Backend:</strong> Postgres, Redis, Kafka, gRPC
          </li>
          <li>
            <strong>Platform:</strong> AWS, Kubernetes, Docker, Terraform
          </li>
        </ul>
      </section>
    </PageFrame>
  )
}
