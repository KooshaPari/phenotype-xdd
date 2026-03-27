# Functional Requirements — phenotype-xdd

**Version:** 1.0.0
**Traces to:** PRD epics E1–E2

---

## FR-XDD-001 — Practices Unique IDs
**SHALL** assign a unique numeric ID to every documented engineering practice (e.g., PRAC-001).
**Traces to:** E1.1

## FR-XDD-002 — Machine-Readable Practices Index
**SHALL** maintain a YAML or JSON index at `docs/engineering/practices-index.yaml` mapping
practice IDs to section anchors, enabling agent tooling to look up practices programmatically.
**Traces to:** E1.1

## FR-XDD-003 — Wrap Decision Tree
**SHALL** document a decision tree for wrap-over-handroll choices: (1) does an OSS library
exist? (2) is it well-maintained (last commit <6 months)? (3) does it meet the interface
contract? If all yes → wrap; else → evaluate fork vs implement.
**Traces to:** E1.2

## FR-XDD-004 — Wrap Documentation Requirement
**SHALL** require all wrapped OSS deps to carry a `// wraps: <lib> <version>` comment in the
consuming code and a registry entry in `docs/engineering/wrap-registry.yaml`.
**Traces to:** E1.2

## FR-XDD-005 — Language-Specific Hex Architecture Examples
**SHALL** provide a working hexagonal architecture skeleton for each of: Go, Python, TypeScript,
Rust, and Zig, demonstrating ports, adapters, and domain layer separation.
**Traces to:** E2.1

## FR-XDD-006 — Repo Layout Enforcement
**SHALL** define the canonical top-level directory structure and provide a linting script that
verifies conformance on CI.
**Traces to:** E2.2

## FR-XDD-007 — ADR Lifecycle
**SHALL** define ADR lifecycle states (Proposed → Accepted → Deprecated → Superseded) and
require all status transitions to be recorded with date and rationale.
**Traces to:** E2.2
