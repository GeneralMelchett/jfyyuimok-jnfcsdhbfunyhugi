# Cryptologicus — Markdown Block Syntax Specification

This document defines the **canonical Markdown block syntax** used by Cryptologicus.

Goals:
- Deterministic parsing
- Human-writable Markdown
- Clear semantic intent
- Minimal syntax surface area
- No ad-hoc HTML in author content

This syntax is used to express **semantic blocks** that map to rendering components.

---

## Strictness Requirement

Unknown `crl-*` block types are **errors**.
The parser/importer must fail loudly with a clear message identifying:
- the unknown block type
- the file path
- the line number (if available)

Silent skipping is not permitted.

## 1. General Rules

1. All custom blocks use **fenced code-block style syntax**:
   - triple backticks
   - a language tag beginning with `crl-`
2. Blocks may contain an optional **YAML header** followed by content.
3. Parsers must fail loudly on invalid block headers.
4. Blocks must not be nested inside other custom blocks.

---

## 2. Block Structure

Canonical structure:
```
crl-<block-type>
---
<optional-yaml-header>
---
<block-body>
```
Notes:
- The YAML header is optional.
- If a YAML header is present, it must be bounded by `---` on its own lines.
- The body is raw text interpreted according to block type.

---

## 3. Derivation Blocks

### 3.1 Informal Derivation

```text
crl-derivation-informal
---
title: "Why the birthday problem explodes"
assumptions:
  - "Uniform hashing"
  - "Independent draws"
---
```
Explain the intuition in prose. Light notation is allowed.

Inline math: \( p \approx 1 - e^{-k(k-1)/2n} \)

Optional small equations may appear as display math:

\[
p \approx 1 - \exp\left(-\frac{k(k-1)}{2n}\right)
\]

Semantics:
- intuition-first
- prose-first
- may include light maths
- not authoritative rigour

Required fields: none  
Optional fields:
- `title` (string)
- `assumptions` (list of strings)
- `notes` (string)

---

### 3.2 Formal Derivation

```text
crl-derivation-formal
---
title: "Collision probability approximation"
assumptions:
  - "k << sqrt(n)"
symbols:
  n: "number of buckets"
  k: "number of draws"
---
```
We derive:

\[
P(\text{no collision}) =
\frac{n}{n}\cdot\frac{n-1}{n}\cdot\ldots\cdot\frac{n-k+1}{n}
\]

Then:

\[
\ln P(\text{no collision}) =
\sum_{i=0}^{k-1}\ln\left(1-\frac{i}{n}\right)
\approx -\sum_{i=0}^{k-1}\frac{i}{n}
= -\frac{k(k-1)}{2n}
\]

Therefore:

\[
P(\text{collision}) \approx 1 - e^{-k(k-1)/2n}
\]

Semantics:
- rigour-first
- stepwise symbolic flow
- explicit assumptions and symbols encouraged

Required fields: none  
Optional fields:
- `title` (string)
- `assumptions` (list)
- `symbols` (map)
- `conclusion` (string)

---

## 4. Callouts

### 4.1 Note / Warning / Tip

```text
crl-callout
---
kind: note   # one of: note, tip, warning, danger
title: "A common misconception"
---
```
This is a note callout. It renders with consistent styling and iconography.

Required fields:
- `kind` (note|tip|warning|danger)

Optional:
- `title`

---

## 5. Cards (Semantic)

Cards are not hard-coded HTML; they are semantic references.

### 5.1 Article Card List

```text
crl-cardlist
---
source: latest_articles   # backend context key, or a named query
limit: 6
layout: grid              # grid|list|carousel
---
```

Semantics:
- The backend supplies the articles.
- Markdown only declares intent.

Required fields:
- `source`

Optional:
- `limit`, `layout`

---

## 6. Code Blocks (Normal Markdown)

Normal code blocks remain normal:

```python
print("hello")
```

No custom processing unless explicitly documented elsewhere.

---

## 7. Parser Requirements

A compliant parser must:
- detect `crl-*` fenced blocks
- parse optional YAML headers
- validate fields per block type
- convert each block to an internal semantic representation
- fail loudly on unknown block types (unless configured to ignore)

---

## 8. Backwards Compatibility

If legacy syntax exists (older markers), it may be supported temporarily,
but this document defines the forward standard.