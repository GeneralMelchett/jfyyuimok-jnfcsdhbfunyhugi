# Cryptologicus — Article Formats

This document defines the **supported article formats** used by Cryptologicus.

Article formats control **layout, emphasis, navigation, and sidebar behaviour**.
They do not alter the core content model.

Article formats are selected via an explicit field (e.g. `article_format`)
defined in `content/article_plan.csv`.

No article may invent its own format.
No bespoke per-article templates are permitted.

---

## 1. Shared Principles (All Formats)

All article formats:

- Use the same `ArticlePage` model
- Render body content from Markdown
- Use Tailwind Typography for prose
- Support math mode and derivations
- Support dark and light themes
- May optionally include a sidebar
- Are fully data-driven

Differences between formats are **layout and emphasis only**.

---

## 2. Essay

**Purpose**  
Long-form analytical or argumentative writing.

**Typical use cases**
- Philosophy of security
- Conceptual essays
- Historical or theoretical analysis

**Layout characteristics**
- Wide prose column
- Minimal sidebar (optional)
- Emphasis on reading flow

**Sidebar behaviour**
- Optional
- May include related essays or series navigation

---

## 3. Tutorial

**Purpose**  
Step-by-step instructional content.

**Typical use cases**
- Introductions
- How-things-work explanations
- Guided learning sequences

**Layout characteristics**
- Clear section hierarchy
- Emphasis on headings and lists
- Frequent inline code blocks

**Sidebar behaviour**
- Optional
- May include:
  - prerequisites
  - links to next tutorials
  - related foundational material

---

## 4. Lab

**Purpose**  
Exploratory or experimental technical work.

**Typical use cases**
- Cryptographic experiments
- Security investigations
- Mathematical exploration

**Layout characteristics**
- Dense technical content
- Frequent code blocks
- Frequent derivations

**Sidebar behaviour**
- Recommended
- Often includes:
  - series navigation
  - related labs
  - reference links

---

## 5. Walkthrough

**Purpose**  
Guided, sequential problem-solving.

**Typical use cases**
- CTF write-ups
- Multi-stage challenges
- Case studies

**Layout characteristics**
- Strong narrative progression
- Clearly demarcated stages
- Interleaved explanation and results

**Sidebar behaviour**
- Recommended
- Usually includes:
  - series navigation
  - progress indicators
  - links to previous/next parts

---

## 6. Concept

**Purpose**  
Explanation of a single idea or concept.

**Typical use cases**
- Mathematical ideas
- Cryptographic primitives
- Security concepts

**Layout characteristics**
- Compact but precise
- Heavy use of informal derivations
- Minimal narrative fluff

**Sidebar behaviour**
- Optional
- Often includes related concepts

---

## 7. Reference

**Purpose**  
Authoritative reference material.

**Typical use cases**
- Definitions
- Tables
- Summaries
- Canonical explanations

**Layout characteristics**
- Structured sections
- Tables and lists
- Minimal prose

**Sidebar behaviour**
- Optional
- Often includes navigation within the reference set

---

## 8. Rules for Extension

- New article formats must be added to this document
- New formats require:
  - explicit purpose
  - layout description
  - sidebar behaviour definition
- No “implicit” formats are allowed