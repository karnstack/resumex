---
template: emerald-twocol
name: Avery Park
title: senior software engineer · platform
location: New York, NY
email: avery@example.com
links:
  - { label: averypark.dev, url: https://example.com }
  - { label: github.com/averypark, url: https://github.com }
  - { label: in/averypark, url: https://linkedin.com }
skills:
  - { group: Languages, items: [Go, TypeScript, Python, Rust] }
  - { group: Backend, items: [Postgres, Redis, Kafka, gRPC, GraphQL] }
  - { group: Frontend, items: [React, Next.js, Tailwind, Vite] }
  - { group: Platform, items: [AWS, Kubernetes, Docker, Terraform, GitHub Actions] }
sectionOrder: [summary, experience, projects, awards, education]
---

## Summary

I build **resilient backend systems and the platforms that run them**. I prefer small, reversible changes and clear interfaces. Software should be _boring in production_ and useful to its users.

## Experience

### Senior Software Engineer @ Coral Labs
*Mar 2024 – Present · New York, NY*

- Led the migration of the events pipeline to a **horizontally-sharded Kafka cluster**, reducing p99 latency by 3x.
- Owned the on-call rotation for the platform team - **reduced pages 60%** over two quarters through better alerting and runbooks.
- Mentored four engineers through L4 → L5 promotions.

### Software Engineer 2 @ Coral Labs
*Aug 2022 – Mar 2024 · New York, NY*

- Designed and shipped the **billing pipeline** processing 12M events/day on Kafka + Postgres.
- Built the **internal feature-flag service** used across 40+ microservices.
- Drove **architecture-level reviews** for cross-team launches.

### Software Engineer @ Acme Inc
*Jan 2020 – Jul 2022 · Remote*

- Shipped the company's first **public API** with rate limiting, OAuth2, and SDKs in three languages.
- Migrated the legacy monolith's auth module to a **standalone identity service**, unblocking SSO integrations.
- Cut average build times from 11 min to 90s by parallelizing the test matrix.

### Software Engineer Intern @ Bytework
*May 2018 – Aug 2018 · Remote*

- Built a small **internal log aggregator** in Go on top of Kafka, replacing a brittle cron job.
- Earned a **return offer** for a full-time role.

## Projects

### Loomroute @ loomroute.dev
*Live · Go · Postgres · Cloudflare Workers*

Open-source URL routing library used by ~200 small SaaS apps. Live since 2024.

### Tinytrace @ github.com/example/tinytrace
*OSS · Rust*

Minimal distributed tracing library - span model, OTLP export, ~3k lines.

## Awards

### Engineering Excellence @ Coral Labs
*2025*

### Best Internship Project @ Bytework
*2018*

## Education

### B.S. Computer Science @ Northern State University
*2014 – 2018 · Remote, USA*
