# PRD — phenotype-xdd

**Version:** 1.0.0
**Stack:** Documentation / Governance (language-agnostic)
**Repo:** `KooshaPari/phenotype-xdd`
**Classification:** Special-purpose governance reference hub

---

## Overview

`phenotype-xdd` is the eXtreme Domain-Driven Design (xDD) methodologies compendium for the
Phenotype organisation. It is not a runtime library; it is an authoritative reference hub that
codifies the 180+ engineering practices, wrap-over-handroll governance, hexagonal architecture
standards, and polyglot conventions adopted across all Phenotype repos.

The hub serves as the single source of truth for architecture decisions, engineering practices,
and methodology documentation consumed by both human contributors and AI agents.

---

## Epics

### E1 — Engineering Practices Compendium
**Goal:** Document all numbered xDD practices so any agent or engineer can look up the canonical
guidance for a pattern.

#### E1.1 Practices Registry
- As a contributing engineer, I want a machine-readable registry of practices so agents can
  cross-reference them in code reviews and PR descriptions.
- **Acceptance:** All practices reachable at `docs/engineering/100-PRACTICES.md` with unique IDs.

#### E1.2 Wrap-and-Roll Governance
- As an agent author, I want explicit wrap-over-handroll rules so I know when to use an OSS
  library versus implement custom code.
- **Acceptance:** `docs/engineering/WRAP_AND_ROLL_GOVERNANCE.md` covers decision tree, exemptions,
  and documentation requirements.

### E2 — Architecture Reference
**Goal:** Provide canonical architecture decision records and hexagonal architecture patterns for
the entire Phenotype platform.

#### E2.1 Hexagonal Architecture Reference
- As a service author, I want a worked example of hexagonal architecture in each supported
  language so I can implement ports and adapters correctly.
- **Acceptance:** Reference architectures exist for Go, Python, TypeScript, Rust, Zig.

#### E2.2 Top-Level Repo Layout Standard
- **Acceptance:** `docs/engineering/TOP_LEVEL_REPO_LAYOUT.md` defines the canonical directory
  structure every Phenotype repo MUST follow.
