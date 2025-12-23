# Cryptologicus — Homepage Sections & Queries

This document defines **each homepage section**, what data it queries,
and why it exists.

The homepage is fully data-driven.
No static content is permitted.

---

## 1. Hero

**Purpose**
- Establish tone and identity
- Visual impact

**Data source**
- None

**Notes**
- This is the only visually noisy section
- No article cards
- No queries

---

## 2. Start Here / Explore Series

**Purpose**
- Provide entry points for new readers
- Highlight structured learning paths

**Query**
- ArticlePage where `is_series_intro == true`
- Ordered by series relevance

**Why**
- Reduces cognitive load
- Prevents random article discovery

---

## 3. Featured Content

**Purpose**
- Highlight editorially important material

**Query**
- ArticlePage where `featured == true`
- Secondary ordering by publish date

**Why**
- Allows intentional curation
- Separates importance from recency

---

## 4. Latest Articles

**Purpose**
- Show recent activity

**Query**
- ArticlePage ordered by publish date (descending)

**Pagination**
- Enabled when article count exceeds threshold
- Prefer HTMX for progressive loading

**Why**
- Provides freshness signal
- Encourages return visits

---

## 5. General Rules

- All sections reuse the same card components
- Queries live in backend code, not templates
- Sections must degrade gracefully if empty
- Ordering must be explicit