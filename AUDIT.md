# Audit projet — french-civic-exam

Date: 2026-02-17

## 1) Résumé rapide
Application Next.js (App Router) orientée préparation à l'examen civique (fiches, articles, thèmes et sous-thèmes). Le contenu est majoritairement statique (TypeScript), avec génération SSG pour les pages par slug.

## 2) Stack technique
- Next.js 16 (App Router), React 19
- TypeScript (strict), mais le build ignore encore les erreurs TS (`ignoreBuildErrors: true`)
- Tailwind CSS v4
- Lucide React (icônes)

## 3) Structure principale
- `app/` : routes pages
- `components/` : UI et cartes
- `lib/data/articles/` : contenu articles
- `lib/data/fiches/` : contenu fiches
- `lib/data/exam-themes/` : thèmes et sous-thèmes d'examen
- `lib/seo/` : config et helpers SEO
- `lib/ui/theme-icons.ts` : mapping central des icônes par thème/catégorie

## 4) Routes clés
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

## 5) Données et rendu
- Fiches: `lib/data/fiches/*` avec helpers centralisés dans `lib/data/fiches/index.ts`.
- Articles: `lib/data/articles/*` + tri par date dans `lib/data/articles/index.ts`.
- Thèmes d'examen: `lib/data/exam-themes/themes/*`.
- Les pages détail (fiches/articles/thèmes/sous-thèmes) sont en SSG via `generateStaticParams`.

## 6) SEO (état actuel)
- `app/robots.ts`: indexation autorisée seulement si `SHOULD_INDEX=true`.
  - Sinon: `Disallow: /`
  - En indexation: `Allow: /`, `Disallow: /api/`, `Sitemap: <SITE_URL>/sitemap.xml`
- `lib/seo/config.ts`:
  - `SITE_URL` depuis `NEXT_PUBLIC_SITE_URL` (fallback Vercel/local)
  - `SHOULD_INDEX = IS_PRODUCTION` (fail-closed hors prod)
- `app/sitemap.ts` inclut pages statiques + fiches + articles + thèmes + sous-thèmes.

## 7) UI / Design system
- Style harmonisé entre thèmes, sous-thèmes, fiches et articles.
- Mapping d'icônes désormais centralisé dans `lib/ui/theme-icons.ts` et réutilisé dans:
  - `app/themes-examen/*`
  - `components/cards/theme-card.tsx`
  - `components/cards/fiche-card.tsx`
  - `components/cards/article-card.tsx`
  - `app/articles/[slug]/page.tsx`

## 8) Points d'attention
1. `ignoreBuildErrors: true` masque les erreurs TypeScript en build.
2. `app/page.tsx` contient encore des articles en dur (`latestArticles`) au lieu d'utiliser `lib/data/articles`.
3. Duplication technique restante: `useIsMobile` existe dans `hooks/use-mobile.ts` et `components/ui/use-mobile.tsx`.

## 9) Recommandations prioritaires
1. Désactiver `ignoreBuildErrors` et corriger les erreurs TS bloquantes.
2. Brancher la home sur les données centralisées (`getLatestArticles`, etc.) pour éviter les incohérences.
3. Supprimer la duplication `useIsMobile` et garder une seule source.
4. Garder `lib/ui/theme-icons.ts` comme point unique de mapping des icônes (pas de mapping local dans les pages).
