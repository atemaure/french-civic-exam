# Contributing Guide - QuizCitoyen

Date: 2026-02-17

## 1) Goal
This guide defines how to contribute safely and consistently to QuizCitoyen.

## 2) First steps before editing
Read in this order:
1. `PROJECT_CONTEXT.md`
2. `DESIGN_SYSTEM.md`
3. `CONTENT_GUIDE.md` (if content-related task)
4. `README.md` (SEO/env behavior)

## 3) Local commands
- Install: `npm install`
- Dev server: `npm run dev`
- Build check: `npm run build`

Current note:
- Build can pass even with TypeScript issues because `ignoreBuildErrors` is enabled.

## 4) Branch and commit expectations
- Keep commits focused (one intent per commit).
- Avoid mixing refactor + feature + content in one commit.
- Mention impacted routes/components in commit message.

Recommended commit format:
- `feat(themes): add sub-theme visual section`
- `fix(seo): correct robots production behavior`
- `docs(content): update article writing rules`

## 5) Code rules
1. Reuse existing data helpers from `lib/data/*`.
2. Reuse SEO helpers from `lib/seo/*`.
3. Reuse icon mapping from `lib/ui/theme-icons.ts`.
4. Avoid hardcoding data in pages when equivalent exists in `lib/data`.
5. Keep route-level metadata updated via `createMetadata`.

## 6) UI rules
1. Follow `DESIGN_SYSTEM.md`.
2. Keep detail pages visually aligned (hero pattern + structured blocks).
3. Use existing UI primitives in `components/ui/*` when possible.
4. Keep responsive behavior checked on mobile + desktop.

## 7) Content and data rules
- Articles/fiches/themes must be stored in `lib/data/*`.
- Respect slug uniqueness.
- Keep sorting by date descending for listings.
- Prefer explicit, user-facing text over generic placeholders.

## 8) SEO rules
1. Do not force indexing in preview/dev.
2. Keep `robots.ts` behavior consistent with `lib/seo/config.ts`.
3. Keep `sitemap.ts` aligned with real routes.
4. If adding new important routes, evaluate sitemap inclusion.

## 9) QA checklist before merge
1. `npm run build` passes.
2. Route(s) edited render correctly.
3. Metadata title/description are coherent.
4. No broken internal links.
5. Visual coherence with existing sections.
6. If content changed, check date/order behavior.

## 10) Docs update policy
Update docs when you change:
- architecture or route structure -> `PROJECT_CONTEXT.md`
- contribution workflow -> `CONTRIBUTING.md`
- content schema/rules -> `CONTENT_GUIDE.md`
- visual system -> `DESIGN_SYSTEM.md`
- SEO behavior -> `README.md` and/or `SEO_LLMSEO_REPORT.md`
