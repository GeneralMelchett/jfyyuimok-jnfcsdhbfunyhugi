# Cryptologicus — Visual Style Guide (Semantic Blocks → Tailwind)

This document maps semantic block types to Tailwind classes and component behaviours.

Goals:
- Consistent appearance across the site
- Predictable dark/light theme behaviour
- Deterministic rendering
- Minimal per-template duplication

All blocks must render well in both themes.

---

## 1. Global Typography

Article body wrapper should use Tailwind Typography:

- Container: `prose prose-slate max-w-prose`
- Dark mode: `dark:prose-invert`

Recommended wrapper:

- `class="prose prose-slate max-w-prose dark:prose-invert"`

Code blocks should be styled consistently:
- keep monospace readable
- horizontal scroll for overflow

---

## 2. Derivation Blocks

### 2.1 Informal Derivation (`crl-derivation-informal`)

Intent: intuition-first, softer emphasis.

Container classes:
- `my-8 rounded-2xl border border-slate-200 bg-slate-50 p-6`
- `dark:border-slate-700 dark:bg-slate-900/60`

Header (optional):
- title: `text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100`
- label badge: `text-[0.7rem] uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400`

Body:
- keep `prose` styling inside
- ensure equations are readable
- spacing: `mt-3`

Icon (optional):
- use a subtle icon (e.g. lightbulb) consistent across site

---

### 2.2 Formal Derivation (`crl-derivation-formal`)

Intent: rigour-first, higher visual weight.

Container classes:
- `my-8 rounded-2xl border border-slate-300 bg-white p-6 shadow-sm`
- `dark:border-slate-600 dark:bg-slate-900`

Header:
- label badge: `text-[0.7rem] uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400`
- title: `text-sm font-semibold text-slate-900 dark:text-slate-100`

Body:
- allow aligned math
- ensure block equations are not cramped
- spacing: `mt-3`

Optional conclusion row:
- `mt-4 border-t border-slate-200 pt-4 dark:border-slate-700`
- conclusion text: `text-sm font-medium`

---

## 3. Callouts (`crl-callout`)

Base container:
- `my-6 rounded-2xl border p-5`

### 3.1 Note
- `border-slate-200 bg-slate-50`
- `dark:border-slate-700 dark:bg-slate-900/60`

### 3.2 Tip
- `border-emerald-200 bg-emerald-50`
- `dark:border-emerald-700 dark:bg-emerald-900/30`

### 3.3 Warning
- `border-amber-200 bg-amber-50`
- `dark:border-amber-700 dark:bg-amber-900/30`

### 3.4 Danger
- `border-rose-200 bg-rose-50`
- `dark:border-rose-700 dark:bg-rose-900/30`

Title (optional):
- `text-sm font-semibold`

---

## 4. Cards (Article, Series)

Cards are rendered by templates/components, not Markdown HTML.

### 4.1 Article Card

Container:
- `rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden`
- `dark:border-slate-700 dark:bg-slate-900`

Title:
- `font-heading font-semibold text-slate-900 dark:text-slate-100`
- hover accent: `group-hover:text-emerald-600 dark:group-hover:text-emerald-400`

Meta row:
- `text-xs text-slate-500 dark:text-slate-400`

---

### 4.2 Series Card

Container:
- same as article card

Badge:
- `text-[0.7rem] uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400`

Optional progress indicator (e.g. 2 of 5):
- `text-xs text-slate-500 dark:text-slate-400`

---

## 5. Sidebar Panels

Sidebar container:
- `sticky top-24 space-y-6`

Panel card:
- `rounded-2xl border border-slate-200 bg-white p-5 shadow-sm`
- `dark:border-slate-700 dark:bg-slate-900`

Panel title:
- `text-sm font-semibold text-slate-900 dark:text-slate-100`

Links:
- `text-sm text-slate-700 hover:text-emerald-600`
- `dark:text-slate-200 dark:hover:text-emerald-400`

---

## 6. Pagination Controls

Container:
- `mt-10 flex items-center justify-between`

Buttons/links:
- `rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-50`
- `dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800`

Active page indicator:
- `font-semibold`

Pagination should be HTMX-friendly:
- links remain valid URLs
- HTMX enhances, not replaces

---

## 7. HTMX Loading States

When HTMX swaps content:
- keep layout stable (avoid jumps)
- show subtle loading indicator

Recommended:
- add `hx-indicator` elements with:
  - `opacity-0` → `opacity-100` on request
  - `transition-opacity`

---

## 8. Non-Goals

This guide does not define:
- exact colours beyond Tailwind semantic palette usage
- any JS-driven animation framework
- bespoke per-page styles

If a block needs new styling, add it here.