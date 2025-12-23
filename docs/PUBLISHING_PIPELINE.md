# Cryptologicus — Publishing Pipeline & Invariants

This document defines the **required behaviour and invariants** of the
Cryptologicus publishing pipeline.

Any importer, script, or automated process must conform to these rules.

If behaviour violates an invariant, it is a bug.

---

## 1. Canonical Inputs

### 1.1 Metadata

- `content/article_plan.csv` is the **single source of truth** for metadata
- Every published article must have exactly one row
- Rows are identified by `content_id`

### 1.2 Content

- Article body content lives in Markdown files
- Markdown paths are defined in `article_plan.csv`
- Markdown paths must resolve relative to `content/`

---

## 2. Core Invariants

The publishing pipeline MUST satisfy all of the following:

### 2.1 Idempotency

- Running the importer multiple times produces the same result
- No duplicate pages are created
- Existing pages are updated, not replaced

### 2.2 Determinism

- Given the same inputs, output is identical
- No randomness
- No inference
- No “best guess” behaviour

### 2.3 Single Authority

- CSV overrides Markdown on conflict
- Markdown overrides Wagtail body content
- Wagtail admin is never authoritative

---

## 3. Page Creation & Updates

- Pages are matched using `content_id`
- Slug changes are handled explicitly
- Metadata updates propagate cleanly
- Body updates do not reset metadata

---

## 4. Frontmatter Handling

- Frontmatter may exist to support parsing
- Frontmatter may be regenerated
- Frontmatter must not override CSV-defined metadata
- Missing frontmatter must not break import

---

## 5. Failure Behaviour

When encountering invalid input:

- Fail loudly
- Log explicit errors
- Do not partially publish
- Do not silently skip content

### Strict Parsing Rule

If a Markdown file contains any `crl-*` block that cannot be parsed or validated,
publishing must fail for that article (and optionally for the entire run),
with explicit error output.

---

## 6. What the Pipeline Must Never Do

- Invent metadata
- Guess missing values
- Create pages without CSV rows
- Modify CSV automatically
- Mask errors

---

## 7. Validation Expectations

The pipeline should validate:

- Missing Markdown files
- Duplicate `content_id`s
- Invalid series references
- Invalid article formats
- Broken paths
- Invalid tag taxonomy

Validation failures must block publishing.