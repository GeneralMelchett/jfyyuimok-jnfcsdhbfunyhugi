# Copilot / Agent instructions — Cryptologicus

This file contains concise, actionable guidance for AI coding agents working in this repository. Keep edits small, explain choices, and stop to ask if anything is ambiguous.

## Big picture
- This is a Wagtail/Django site (top-level apps: `cryptologicus`, `publishing`, `theme`). See `config/settings.py` for app list and `WAGTAIL_SITE_NAME`.
- Content is authored as Markdown under `content/posts/` + an editorial plan in `content/article_plan.csv`. The canonical import pipeline is in `publishing/markdown_parser.py` → `publishing/importer.py` → management command `python manage.py import_content`.
- `content_id` (frontmatter `content_id` or `id`) is the canonical identifier for articles. Do not change it without discussion.

## Key files to read first (in order)
- `docs/DEVELOPMENT_ENVIRONMENT.md` — virtualenv activation and environment policies (activate `.venv/Python` first).
- `publishing/markdown_parser.py` — frontmatter parsing, `load_articles()` behavior, and `synthesise_frontmatter_from_plan()` (mutates markdown files).
- `publishing/importer.py` & `publishing/management/commands/import_content.py` — how ArticleData maps to Wagtail pages (see `managed_from_markdown` flag and `page.body` assignment).
- `docs/MARKDOWN_BLOCK_SYNTAX.md` — canonical `crl-*` block syntax; unknown `crl-*` block types are errors and must fail loudly.
- `docs/CRYPTOLOGICUS_ARCHITECTURE.md` and `docs/DERIVATIONS_AND_MATH.md` — project philosophy and agent-specific rules (stop and ask if uncertain).
- `config/settings.py` — important settings (e.g., `TAILWIND_APP_NAME = 'theme'`, `CONTENT_ROOT`).

## Developer workflows & exact commands
- Activate environment: `source .venv/Python/bin/activate` (required before any Python work).
- Run Django dev server: `python manage.py runserver`.
- Start Tailwind watcher + dev server (recommended): `python manage.py tailwind start` (this uses `TAILWIND_APP_NAME`).
- Build Tailwind CSS for production or one-off: `python manage.py tailwind build` or `python manage.py tailwind install` (see `theme/` and `tailwind` management command). If you need to run watcher alone: use `python manage.py tailwind start`.
- Import articles (safe dry-run): `python manage.py import_content --dry-run` (parses markdown, prints WOULD CREATE/Would UPDATE). To perform changes, run without `--dry-run`.
- Run tests: `python manage.py test` (or `pytest` if preferred). Tests are minimal; run the importer in a fixture/local DB when modifying import behavior.

## Project-specific conventions & gotchas
- Frontmatter is YAML at top of `.md` files. `parse_frontmatter_and_markdown()` is the canonical parser; rely on its behavior when generating or validating frontmatter.
- If a Markdown file lacks frontmatter, `synthesise_frontmatter_from_plan()` will prepend frontmatter using `content/article_plan.csv`. This mutates files—changes must be intentional and small.
- Article import sets `ArticlePage.managed_from_markdown = True`. Pages with that flag are considered managed by the pipeline; take care when editing such pages in the Wagtail admin (the importer can overwrite fields).
- The importer currently stores body as a single `rich_text` block containing `ArticleData.html_body`. If you change the parser to output StreamField structures, update `importer.py` accordingly.
- `content_id` is authoritative: lookups and uniqueness rely on it. Slug generation uses `_ensure_unique_slug()` — tests or code changes that affect slugs must preserve this uniqueness behaviour.
- `docs/MARKDOWN_BLOCK_SYNTAX.md` is the ground truth for custom blocks (e.g., `crl-derivation-formal`). Unknown `crl-*` blocks must raise an error (no silent skipping).
- `summary` → `search_description` is truncated to 255 chars in the importer — respect this limit when changing summarisation logic.

## Code patterns to follow (examples)
- Prefer small, reversible changes. Example: when improving `parse_stream_data_from_markdown()` convert to richer stream output while leaving `ArticleData.html_body` compatibility for the importer.
- When adding metadata keys, update `ArticleData` dataclass in `publishing/markdown_parser.py` and the places that build/use it (e.g., `importer.py`).
- For UI changes, check `cryptologicus/templates/` and `theme/` for Tailwind-driven styling. Tailwind is run using `django-tailwind`/`pytailwindcss` — avoid adding a Node.js-based build unless necessary.

## What to ask (stop & ask checklist)
- If a change mutates source content (frontmatter synthesis, bulk import) — stop and confirm intent.
- If a modification changes `content_id` handling, slug generation, or `managed_from_markdown` semantics — stop and ask.
- If unsure whether a `crl-*` block is formal or informal (derivations) — stop and ask; docs require explicit handling.

## Testing & validation guidance
- Use the `--dry-run` importer to validate changes to parsing logic before committing file writes.
- Add unit tests to `publishing/tests.py` for parsing edge cases (missing frontmatter, malformed YAML, featured coercion) and for `importer.py` behaviours (slug clashes, updates vs creates).
- Run the tailwind build locally after style changes: `python manage.py tailwind build` and verify templates render correctly in `cryptologicus/templates/`.

## Final notes
- The docs under `docs/` are authoritative; prefer them over ad-hoc assumptions.
- Keep PRs small and explain why a behavioural change is needed (especially for importers and content mutations).

---
Please review and tell me which sections need more detail or if there are specific failing workflows you'd like me to document with explicit commands/snippets.