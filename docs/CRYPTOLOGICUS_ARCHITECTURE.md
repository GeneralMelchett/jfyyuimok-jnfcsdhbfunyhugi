# Cryptologicus — Project Architecture, Intent & Constraints

This document defines the **authoritative architecture, constraints, and intent**
for the Cryptologicus project.

It exists to eliminate ambiguity, prevent design drift, and ensure that all
human and automated contributors (including Codex / Copilot) operate against
a single, explicit mental model.

This document is normative.
If behaviour conflicts with this document, the behaviour is wrong.

---

## 1. Project Purpose

Cryptologicus is a **serious technical publishing platform** focused on:

- Cryptography
- Security engineering
- Randomness and mathematics
- CTF-style walkthroughs
- Deep technical explanation for intelligent readers

It explicitly rejects:
- marketing tone
- shallow “how-to” content
- CMS-driven authoring
- aesthetic-first design decisions

---

## 2. Technology Stack

- **Backend**: Django + Wagtail
- **Frontend styling**: Tailwind CSS (DJANGO_TAILWIND_CSS)
- **Typography**: Tailwind Typography plugin
- **Dynamic interactions**: HTMX (preferred)
- **JavaScript**: Minimal; Alpine.js only where HTMX is insufficient
- **Database**: Wagtail-managed
- **Authoring format**: Markdown
- **Metadata source**: CSV

JavaScript frameworks are explicitly avoided unless there is a strong,
demonstrable need.

---

## 3. Content Model

### 3.1 ArticlePage (Canonical Content Type)

All published articles are represented by a single Wagtail page type:

- `ArticlePage`

This page type supports:
- standalone articles
- multi-part series
- long-form technical writing
- mathematical exposition
- reusable rendering across multiple contexts

Conceptual fields (not all must be direct model fields):

- `content_id` (canonical identifier)
- `slug`
- `title`
- `article_type`
- `article_format`
- `series_key`
- `series_part`
- `is_series_intro`
- `difficulty`
- `persona`
- `tags`
- `status`
- `featured`
- body content rendered from Markdown

This list is not exhaustive.
---

## 4. Article Formats & Templates

### 4.1 Article Formats

Cryptologicus supports **multiple article formats**, selected via an explicit
field (e.g. `article_format`) defined in `article_plan.csv`.

Examples (non-exhaustive):
- `essay`
- `tutorial`
- `lab`
- `walkthrough`
- `concept`
- `reference`

Rules:
- Article format selection is **data-driven**
- No per-article bespoke templates
- Each format maps to a defined rendering template
- Templates may vary layout, sidebar behaviour, or emphasis — not core structure

---

## 5. Mathematical Content & Derivations

### 5.1 Math Mode Support

Cryptologicus explicitly supports **mathematical notation and derivation**.

Math content may include:
- inline mathematical expressions
- block-level equations
- symbolic notation
- pseudo-formal proofs
- worked derivations

Rendering may use:
- MathJax
- KaTeX
- or equivalent deterministic math rendering

The chosen renderer must:
- work with Markdown
- be deterministic
- degrade gracefully when math is absent

---

### 5.2 Formal vs Informal Derivations

Articles may include **both formal and informal derivation styles**.

These are conceptually distinct and must be supported explicitly.

#### Informal derivations:
- narrative explanation
- intuition-building
- stepwise reasoning in prose
- mixed text + light notation

#### Formal derivations:
- symbolic manipulation
- equation sequences
- assumptions explicitly stated
- conclusion clearly marked

The architecture must allow:
- clear visual distinction between formal and informal derivations
- consistent styling across articles
- reuse of derivation blocks

Derivations should be treated as **first-class content blocks**, not ad-hoc HTML.

---

## 6. Publishing Pipeline (Critical)

### 6.1 Canonical Sources of Truth

This is non-negotiable:

- **CSV** is the single source of truth for:
  - metadata
  - taxonomy
  - series structure
  - featured flags
  - publishing status
  - canonical URLs
  - SEO fields
  - article format selection

- **Markdown** is the single source of truth for:
  - article body content
  - headings
  - code blocks
  - mathematical expressions
  - derivations
  - diagrams

Wagtail is a **rendering target**, not an authoring system.

---

### 6.2 File Layout

content/
├── article_plan.csv        # Canonical metadata index
├── posts/
│   ├── prime-predicament/
│   │   ├── prime-predicament-01.md
│   │   ├── prime-predicament-02.md
│   │   └── …
│   ├── passwords/
│   └── randomness/

Paths in `article_plan.csv` are relative to `content/`.

---

### 6.3 Publishing Behaviour

The publishing pipeline must be:

- **Idempotent**
- **Deterministic**
- Safe to re-run repeatedly

Required behaviour:
- Existing pages are updated, not duplicated
- Metadata conflicts resolve predictably
- CSV overrides Markdown where conflicts exist
- No silent overwrites
- No inference or guessing

---

## 7. Frontmatter Policy

Markdown files may include YAML frontmatter.

Rules:
- Frontmatter supports the pipeline; it does not replace CSV
- CSV metadata always wins on conflict
- Frontmatter must not introduce new canonical fields
- Frontmatter may be regenerated automatically

---

## 8. Theming & Typography

### 8.1 Dark / Light Theme

- Site supports **dark and light themes**
- Theme selection may be:
  - user-controlled
  - system-preference-driven
- Theme switching must be global and consistent
- No content-specific theme logic

---

### 8.2 Typography

- All article content uses **Tailwind Typography**
- Typography is applied consistently across formats
- Reading width is constrained (e.g. `max-w-prose`)
- Code blocks, math blocks, lists, tables, and headings are first-class citizens

Typography choices prioritise:
- readability
- long-form comfort
- technical clarity

---

## 9. HTMX & Dynamic Behaviour

### 9.1 HTMX Preference

HTMX is the **preferred mechanism** for client-side interactivity.

HTMX should be used wherever possible to:
- load content dynamically
- paginate lists
- filter articles
- update navigation panels
- progressively enhance pages

JavaScript-heavy frameworks are avoided.

---

### 9.2 HTMX Design Principles

- Server remains the source of truth
- HTML is returned from the server
- Behaviour is declarative
- URLs remain meaningful
- Functionality degrades gracefully without JavaScript

HTMX interactions must not obscure application logic.

---

## 10. Homepage Architecture

The homepage is **fully data-driven**.

No static cards.
No hard-coded articles.

### Required sections (in order):

1. **Hero**
   - Visual emphasis
   - Branding and tone-setting
   - No data dependency

2. **Start Here / Explore Series**
   - Driven by `is_series_intro == true`
   - Entry point for new readers

3. **Featured Content**
   - Driven by `featured == true`
   - Visually calmer than hero

4. **Latest Articles**
   - Chronological ordering
   - Paginated via HTMX if required

---

## 11. Cards & Reusable Blocks

### 11.1 Card Architecture

Cards are **logical blocks**, not hard-coded markup.

Examples:
- Article card
- Series card
- Featured card

Rules:
- Card layout is defined once
- Card content is supplied by backend queries
- Templates render cards generically
- No duplicated card markup across templates

---

## 12. Sidebar & Navigation Panels

### 12.1 Sidebar Behaviour

Articles may display a sidebar containing:

- series navigation
- featured articles
- related articles
- tag/category navigation

Sidebar content is:
- data-driven
- context-aware
- optional per article format
- dynamically updatable via HTMX

---

### 12.2 Series Navigation

Series navigation must support:
- ordered parts
- current part highlighting
- previous / next links
- full series listing

Series behaviour is defined entirely by metadata.

---

### 12.3 Article & Index Navigation

Article listing pages must support:
- pagination
- filtering by tag/category
- ordering (e.g. date, relevance)

Filtering and pagination should prefer HTMX.

---

## 13. Pagination

Pagination is required for:
- article index pages
- large listings
- tag/category views

Pagination must:
- be deterministic
- preserve ordering
- avoid duplication
- prefer HTMX-based progressive loading

---

## 14. Non-Goals (Explicit)

The following are explicitly out of scope:

- Manual article creation in Wagtail admin
- WYSIWYG editing
- CMS-driven taxonomy editing
- Inline HTML authoring
- Per-article bespoke templates
- Guessing when data is missing

---

## 15. Design Philosophy

- Explicit over implicit
- Architecture over aesthetics
- Determinism over convenience
- Readability over cleverness
- Reuse over duplication

Ambiguity is considered a bug.

---

## 16. Tooling Instructions (For Codex / Agents)

When modifying this project:

- Inspect existing code before making changes
- Follow this document as authoritative intent
- Do not invent structure or behaviour
- Prefer small, reviewable changes
- Stop and ask if uncertainty exists