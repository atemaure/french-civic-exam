# Project Context - QuizCitoyen

Date: 2026-02-17

## 1) Product scope
QuizCitoyen is a pedagogical website to prepare users for the French civic exam and oral interview.

Main content types:
- Fiches (practical sheets)
- Articles
- Exam themes
- Exam sub-themes

Project goal:
- Deliver clear, structured, SEO-friendly educational content.
- Keep a coherent visual identity across all key page types.

## 2) Tech stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React icons

Important current constraint:
- `next.config.mjs` has `typescript.ignoreBuildErrors = true`.

## 3) Source of truth (content)

### Fiches
- Data folder: `lib/data/fiches/*`
- Entry point: `lib/data/fiches/index.ts`
- List page: `app/fiches/page.tsx`
- Detail page: `app/fiches/[slug]/page.tsx`
- Detail page includes image export action via `components/fiche-download-actions.tsx` (PNG only).

### Articles
- Data folder: `lib/data/articles/*`
- Entry point: `lib/data/articles/index.ts`
- List page: `app/articles/page.tsx`
- Detail page: `app/articles/[slug]/page.tsx`

### Exam themes
- Data folder: `lib/data/exam-themes/*`
- Entry point: `lib/data/exam-themes/index.ts`
- List page: `app/themes-examen/page.tsx`
- Theme detail: `app/themes-examen/[themeSlug]/page.tsx`
- Sub-theme detail: `app/themes-examen/[themeSlug]/[subThemeSlug]/page.tsx`

## 4) Route map (core)
- `/`
- `/fiches`
- `/fiches/[slug]`
- `/articles`
- `/articles/[slug]`
- `/themes-examen`
- `/themes-examen/[themeSlug]`
- `/themes-examen/[themeSlug]/[subThemeSlug]`
- `/methode`
- `/a-propos`
- `/faq`
- `/sources`
- `/glossaire`
- `/methodologie`
- `/robots.txt`
- `/sitemap.xml`

## 5) SEO architecture
- Robots: `app/robots.ts`
- Sitemap: `app/sitemap.ts`
- SEO config: `lib/seo/config.ts`
- Metadata helpers: `lib/seo/metadata.ts`
- JSON-LD helpers: `lib/seo/jsonld.ts`

Current behavior:
- Index only in production.
- Preview/dev default to blocked crawling.
- Canonical URL driven by `NEXT_PUBLIC_SITE_URL`.

## 6) Visual system and icon system
- Design rules: `DESIGN_SYSTEM.md`
- Shared icon mapping: `lib/ui/theme-icons.ts`

Rule:
- Do not define local icon mappings in pages/components if mapping already exists in `lib/ui/theme-icons.ts`.

## 7) Known technical debt
1. Home page (`app/page.tsx`) still uses hardcoded `latestArticles` sample-like data instead of fully relying on `lib/data/articles`.
2. Duplicate mobile hook exists:
   - `hooks/use-mobile.ts`
   - `components/ui/use-mobile.tsx`
3. Build ignores TS errors (`ignoreBuildErrors: true`).

## 8) Non-negotiable consistency rules
1. Keep content-driven pages SSG-ready.
2. Keep newest content first (date sort) for article/fiche listings.
3. Keep theme icon consistency via `lib/ui/theme-icons.ts`.
4. Keep visual pattern aligned with `DESIGN_SYSTEM.md` for:
   - themes
   - sub-themes
   - fiche detail
   - article detail

## 9) Quick recovery checklist for a new AI
1. Read:
   - `PROJECT_CONTEXT.md`
   - `CONTRIBUTING.md`
   - `CONTENT_GUIDE.md`
   - `DESIGN_SYSTEM.md`
2. Validate routing assumptions in `app/`.
3. Validate data model assumptions in `lib/data/*`.
4. Run:
   - `npm run build`
5. Only then start edits.
