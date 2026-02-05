# SEO + LLMSEO Report — QuizCitoyen

## Audit rapide
- Framework: Next.js 16 (App Router, dossier `app/`).
- Routage: routes statiques + SSG via `generateStaticParams` (articles, fiches, thèmes).
- Données: contenu éditorial en dur dans `lib/data/articles.ts` et `lib/data/fiches/*`.
- SEO existant avant: metadata basique dans `app/layout.tsx` + par page, `app/robots.ts`, `app/sitemap.ts`.
- Génération: SSG pour `articles/[slug]`, `fiches/[slug]`, `themes/[slug]`, reste en statique.

## Changements (rationale)
- Centralisation SEO via helpers `lib/seo/*` pour titres, descriptions, canonicals, OG/Twitter, robots.
- JSON-LD réutilisable pour WebSite/Organization, BreadcrumbList, Article, LearningResource, FAQPage, HowTo, Glossaire.
- Breadcrumbs UI + JSON-LD sur pages clés.
- Ajout des pages LLMSEO stables: `/faq`, `/sources`, `/glossaire`, `/methodologie`.
- Suppression des pages thématiques `/themes` (retour sur `/fiches?theme=...`).
- Table des matières automatique sur les articles.
- Sitemap + robots mis à jour et sensibles à l’environnement (`SHOULD_INDEX`).

## Fichiers ajoutés
- `app/faq/page.tsx`
- `app/glossaire/page.tsx`
- `app/methodologie/page.tsx`
- `app/sources/page.tsx`
- (supprimés) `app/themes/page.tsx`
- (supprimés) `app/themes/[slug]/page.tsx`
- `components/seo/breadcrumbs.tsx`
- `components/seo/json-ld.tsx`
- `lib/seo/config.ts`
- `lib/seo/jsonld.ts`
- `lib/seo/metadata.ts`
- `lib/seo/slugify.ts`

## Fichiers modifiés
- `app/layout.tsx`
- `app/page.tsx`
- `app/fiches/page.tsx`
- `app/fiches/[slug]/page.tsx`
- `app/articles/page.tsx`
- `app/articles/[slug]/page.tsx`
- `app/methode/page.tsx`
- `app/a-propos/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/articles/page.tsx` (filtrage par `?category=...`, H1 dynamique, `noindex`)
- `components/cards/theme-card.tsx`
- `components/site-header.tsx`
- `components/site-footer.tsx`

## Checklist validation
- `npm install` ✅
- `npm run lint` ❌ (`eslint` introuvable)
- `npm run build` ✅

## Suggestions de contenu (FAQ / sources / glossaire)
- FAQ: ajouter “Quel est le niveau de français attendu ?”, “Quels documents apporter ?”, “Combien de temps dure l’entretien ?”.
- Sources: compléter avec `legifrance.gouv.fr` (textes juridiques), `interieur.gouv.fr` (naturalisation).
- Glossaire: ajouter “Déclaration des droits de l’homme et du citoyen”, “Séparation des pouvoirs”, “Décentralisation”.

## Notes d’implémentation
- Indexation contrôlée par `SHOULD_INDEX` (prod vs preview). Configurez `NEXT_PUBLIC_SITE_URL` en production.
- JSON-LD injecté globalement dans le layout + par type de page.
- Les liens thématiques utilisent `/fiches?theme=...` (plus de pages `/themes`).
- Filtrage articles: pages `?category=...` non indexées pour éviter le duplicate content.
