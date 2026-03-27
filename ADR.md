# Architecture Decision Records — phenotype-xdd

---

## ADR-001 — Hub-Only Repository (No Runtime Artefacts)

**Date:** 2025-10-01
**Status:** Accepted

### Context
Early designs considered publishing xDD tooling as a runtime library that tools could import.
This created versioning friction and forced all consumers to update when docs changed.

### Decision
`phenotype-xdd` is documentation-only. No Go modules, no Python packages, no published
artefacts. Consumers reference it via URLs or git submodule in their own doc toolchains.

### Consequences
- Zero dependency management burden.
- Docs can evolve without semver constraints.
- Agents use `gh api` to fetch content rather than importing a package.

---

## ADR-002 — Markdown as Canonical Format

**Date:** 2025-10-05
**Status:** Accepted

### Context
Alternatives considered: AsciiDoc (better structure), reStructuredText (Sphinx ecosystem),
custom DSL. Markdown was chosen for universal tooling support.

### Decision
All practices, governance, and reference docs are plain CommonMark Markdown. Mermaid diagrams
are embedded for architecture flows.

### Consequences
- Any Markdown renderer (GitHub, VitePress, Obsidian) can display content without plugins.
- Mermaid diagrams render natively on GitHub and in VitePress.

---

## ADR-003 — Practices Numbered from 100

**Date:** 2025-10-10
**Status:** Accepted

### Context
A flat numeric sequence from 1 would exhaust readable ranges quickly. Practices are grouped
by category.

### Decision
Practice IDs are three-digit numbers starting at 100, grouped in decades by category
(100–109: foundations, 110–119: hexagonal, 120–129: testing, etc.).

### Consequences
- New practices slot into the correct category range.
- References like PRAC-112 are unambiguous and stable.
