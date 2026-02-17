# Content Guide - QuizCitoyen

Date: 2026-02-17

## 1) Purpose
This guide standardizes how to create and update:
- articles
- fiches
- exam themes
- exam sub-themes

Goal: make content consistent, maintainable, and directly usable by any contributor or AI.

## 2) Content sources
- Articles: `lib/data/articles/*`
- Fiches: `lib/data/fiches/*`
- Themes/sub-themes: `lib/data/exam-themes/themes/*`

Never store canonical content directly in route files.

## 3) Slugs and naming
Rules:
1. Lowercase only.
2. Words separated by `-`.
3. No accents.
4. Slug must be unique in its collection.
5. Filename should match slug.

Examples:
- `role-premier-ministre`
- `principes-valeurs-republique`
- `devise-symboles`

## 4) Date and ordering rules

### Articles
- `date` is required and must be parseable by existing helper logic (`toISODate`).
- Listings must show newest first (descending date).

### Fiches
- If `date` is present, sorting should also keep newest first.
- If no date is present, existing fallback behavior applies.

## 5) Article schema
Type: `lib/data/articles/types.ts`

Required fields:
- `slug`
- `title`
- `excerpt`
- `content`
- `date`
- `category` (allowed set below)
- `readingTime` (format like `5 min`)
- `keyPoints` (3 to 5 recommended)

Optional:
- `oralTip`

Allowed categories (case-sensitive in data):
- `Valeurs`
- `Droits`
- `Institutions`
- `Histoire`
- `Conseils`

## 6) Article markdown constraints
Parser is custom in `app/articles/[slug]/page.tsx`.
Supported:
- `##` headings
- `###` headings
- `- item`
- `- **Label**: text`
- `1. **Label**: text`
- plain paragraph lines

Do not use:
- nested lists
- HTML blocks
- multi-line paragraphs for a single logical paragraph

## 7) Fiche schema
Type: `lib/data/fiches/types.ts`

Required fields:
- `slug`
- `title`
- `description`
- `theme`
- `themeSlug`
- `definition`
- `keyPoints`
- `example`
- `oralTip`

Optional:
- `date`
- `isEssential`

## 8) Theme and sub-theme schema
Type: `lib/data/exam-themes/types.ts`

Theme fields:
- `slug`
- `title`
- `description`
- `details`
- `prepTime`
- `interviewImportance`
- `examinerEvaluates`
- `revisionTips`
- `fichesHref`
- `subThemes`

Sub-theme fields:
- `slug`
- `name`
- `info`
- `details`

## 9) Tone and writing standards
- Educational, direct, practical.
- Prefer short sentences.
- Avoid unnecessary legal complexity.
- Explain with concrete examples when possible.
- Write for oral interview preparation, not academic style.

## 10) Icon consistency rule
Theme/category icon consistency is mandatory.

Use:
- `lib/ui/theme-icons.ts`

Do not duplicate icon mapping in content or route files.

## 11) Pre-publication checklist
1. Slug is unique.
2. Data schema is respected.
3. Date is valid and intentional.
4. Category/theme mapping is correct.
5. New content appears in the correct listing order.
6. Related links resolve correctly.
7. Build passes: `npm run build`.

## 12) If adding a new content family
If a new content type is introduced:
1. Create a dedicated data folder in `lib/data`.
2. Define explicit TypeScript type.
3. Add helper functions (get by slug, list, filters, sorting).
4. Update docs:
   - `PROJECT_CONTEXT.md`
   - `CONTENT_GUIDE.md`
   - `DESIGN_SYSTEM.md` (if new visual pattern)
