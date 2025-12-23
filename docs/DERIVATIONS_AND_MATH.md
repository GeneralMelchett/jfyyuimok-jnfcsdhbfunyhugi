# Cryptologicus — Mathematical Content, Derivations & Semantics

This document defines the **authoritative rules** for mathematical content
within Cryptologicus articles.

Mathematics is treated as a **first-class citizen**, not an inline embellishment.
Derivations are semantic structures with explicit meaning, not merely styled text.

This document is normative.
If mathematical content violates these rules, it is incorrect.

---

## 1. Scope & Intent

Cryptologicus publishes mathematically informed material, including:

- cryptographic reasoning
- probabilistic arguments
- number theory
- algorithmic analysis
- formal and informal proofs
- worked derivations

The architecture must support:
- clarity of reasoning
- separation of intuition from formality
- visual consistency
- machine-recognisable structure

---

## 2. Math Rendering Model

### 2.1 Math Mode

The platform supports **math mode**, including:

- inline expressions (e.g. variables, symbols)
- block-level equations
- aligned multi-line expressions

Rendering may use:
- MathJax
- KaTeX
- or an equivalent deterministic renderer

Requirements:
- Works with Markdown
- Deterministic output
- No runtime authoring dependency
- Graceful degradation when math is absent

---

## 3. Types of Mathematical Content

Mathematical content is categorised into **three distinct types**:

1. Inline Mathematics
2. Informal Derivations
3. Formal Derivations

These types are **not interchangeable** and must be treated differently.

---

## 4. Inline Mathematics

### 4.1 Definition

Inline mathematics consists of:
- symbols
- short expressions
- variable references

Examples:
- \( p \)
- \( H(X) \)
- \( \log_2 n \)

### 4.2 Rules

- Inline math appears within prose
- It must not contain multi-step reasoning
- It must not encode derivations
- It must not be used for layout or emphasis

Inline math exists to support prose, not replace it.

---

## 5. Informal Derivations

### 5.1 Definition

An **informal derivation** explains *why* something is true, focusing on:

- intuition
- reasoning steps
- conceptual flow

It may include:
- prose
- light notation
- illustrative equations
- explanatory diagrams

It explicitly does **not** claim full formal rigour.

---

### 5.2 Purpose

Informal derivations exist to:
- build intuition
- explain assumptions
- guide the reader’s understanding
- bridge from idea → formalism

They are essential for:
- pedagogy
- accessibility
- intellectual honesty

---

### 5.3 Visual Grammar

Informal derivations must be visually distinct.

Recommended characteristics:
- boxed or callout-style block
- labelled clearly (e.g. “Informal derivation”)
- softer visual emphasis than formal proofs
- prose-first layout

They must never be visually confused with formal derivations.

---

### 5.4 Semantics

Informal derivations are **explanatory**, not authoritative.

Rules:
- Claims must be explicitly caveated
- Leaps of reasoning must be acknowledged
- Approximations must be named
- Assumptions should be stated informally

---

## 6. Formal Derivations

### 6.1 Definition

A **formal derivation** is a structured, symbolic argument intended to show:

- what follows from what
- under which assumptions
- by which transformations

It may resemble:
- algebraic manipulation
- equation chains
- proof sketches
- pseudo-formal proofs

---

### 6.2 Purpose

Formal derivations exist to:
- demonstrate correctness
- remove ambiguity
- expose assumptions
- provide auditability

They are the **authoritative mathematical content** in an article.

---

### 6.3 Visual Grammar

Formal derivations must be unmistakable.

Required characteristics:
- clearly demarcated block
- labelled (e.g. “Formal derivation”)
- structured layout (steps, alignment)
- higher visual weight than informal derivations
- typography optimised for symbols

They must visually signal *rigour*.

---

### 6.4 Semantics

Formal derivations must:
- state assumptions explicitly
- define symbols clearly
- show stepwise progression
- conclude explicitly

They must not:
- rely on narrative intuition
- omit non-trivial steps without comment
- mix prose and symbols ambiguously

---

## 7. Block Semantics & Structure

### 7.1 Derivations as First-Class Blocks

Both informal and formal derivations are **semantic blocks**.

They must:
- be identifiable in Markdown
- be distinguishable in rendering
- be reusable and styleable
- not rely on ad-hoc HTML

Examples of conceptual block types:
- `DERIVATION_INFORMAL`
- `DERIVATION_FORMAL`

The exact syntax may evolve, but the semantics must not.

---

### 7.2 Nesting Rules

- Derivations may not be nested inside one another
- Inline math may appear inside derivations
- Code blocks must not replace derivation blocks

---

## 8. Relationship Between Informal and Formal Content

Articles may include:
- informal derivation only
- formal derivation only
- both, in sequence

Recommended order when both are present:

1. Informal derivation (intuition)
2. Formal derivation (rigour)

This ordering must be explicit.

---

## 9. Styling & Accessibility

- Derivation blocks must be readable in dark and light themes
- Contrast must be sufficient
- Math font must be legible
- Blocks must reflow correctly on mobile

Accessibility is a requirement, not a preference.

---

## 10. Non-Goals (Explicit)

The following are explicitly out of scope:

- Full formal proof systems
- Machine-checked proofs
- Automated theorem proving
- Hidden or implicit derivations
- “Implied” correctness without explanation

---

## 11. Tooling Instructions (For Codex / Agents)

When working with mathematical content:

- Do not collapse informal and formal derivations
- Do not invent derivation structure
- Preserve semantic block boundaries
- Respect visual grammar
- Prefer clarity over compactness

If unsure whether a derivation is formal or informal, **stop and ask**.