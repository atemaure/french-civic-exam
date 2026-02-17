# SEO + LLMSEO Report — QuizCitoyen

Date: 2026-02-17

## État actuel (synthèse)
- Framework: Next.js 16 (App Router)
- Contenu: statique via `lib/data/articles`, `lib/data/fiches`, `lib/data/exam-themes`
- Pages SEO clés: `/faq`, `/sources`, `/glossaire`, `/methodologie`
- Arborescence thèmes: `/themes-examen`, `/themes-examen/[themeSlug]`, `/themes-examen/[themeSlug]/[subThemeSlug]`
- SSG actif sur articles, fiches, thèmes, sous-thèmes

## Indexation et robots
- `app/robots.ts` applique une stratégie fail-closed:
  - hors prod: `Disallow: /`
  - prod: `Allow: /` + `Disallow: /api/` + `Sitemap`
- `host` n'est pas exposé dans `robots.txt`.
- `lib/seo/config.ts`:
  - `SHOULD_INDEX = IS_PRODUCTION`
  - `SITE_URL` dérivé de `NEXT_PUBLIC_SITE_URL` (fallback Vercel/local)

## Sitemap
- `app/sitemap.ts` inclut:
  - routes statiques
  - fiches `/fiches/[slug]`
  - articles `/articles/[slug]`
  - thèmes `/themes-examen/[themeSlug]`
  - sous-thèmes `/themes-examen/[themeSlug]/[subThemeSlug]`
- Les URLs sont construites avec `SITE_URL`.

## JSON-LD et metadata
- Helpers centralisés dans `lib/seo/*`.
- Breadcrumb JSON-LD sur pages clés.
- Article JSON-LD sur pages article.
- Metadata générées par route via `createMetadata`.

## Changements récents importants
1. Harmonisation visuelle SEO-friendly des pages thèmes/sous-thèmes/fiches/articles (meilleure hiérarchie de contenu).
2. Unification des icônes par thème/catégorie via `lib/ui/theme-icons.ts`.
3. Cohérence des blocs de contenu (points clés, CTA, navigation interne) pour améliorer lisibilité et maillage.

## Vérifications manuelles recommandées
1. `npm run dev`
2. Vérifier:
   - `/robots.txt`
   - `/sitemap.xml`
   - `/themes-examen`
   - `/themes-examen/principes-valeurs-republique`
   - `/themes-examen/principes-valeurs-republique/devise-symboles`
   - `/articles` et une page article
   - `/fiches` et une fiche

## Risques / dette SEO restante
1. `ignoreBuildErrors: true` dans `next.config.mjs` (risque qualité).
2. Home (`app/page.tsx`) a encore des articles en dur (risque d'écart avec les données officielles).
3. Variables d'environnement à valider sur Vercel:
   - `NEXT_PUBLIC_SITE_URL=https://www.quizcitoyen.fr`

## Conclusion
La base SEO est saine pour la production: robots conditionnel, sitemap complet, routes thématiques indexables et structured data. Les prochaines améliorations prioritaires sont la suppression de `ignoreBuildErrors` et l'alignement total des données home avec `lib/data/*`.
