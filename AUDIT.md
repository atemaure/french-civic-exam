# Audit projet — french-civic-exam

Date: 2026-02-03

## 1) Résumé rapide
Site statique (Next.js App Router) pour préparer l’examen civique français. Le contenu est entièrement hardcodé dans des fichiers TypeScript (`lib/data/*`). Pas d’API, pas de base de données, pas d’auth. Le rendu est surtout statique avec génération de pages par slug (fiches, articles).

## 2) Stack technique
- Next.js 16 (App Router), React 19
- TypeScript (strict), mais **build ignore les erreurs TS**
- Tailwind CSS v4 + variables CSS (design tokens)
- UI kit type shadcn + Radix UI (beaucoup de composants prêts à l’emploi)
- @vercel/analytics

## 3) Structure (vue d’ensemble)
- `app/` : routes Next (pages)
- `components/` : header/footer + cards + UI primitives
- `lib/data/` : contenu fiches & articles (données statiques)
- `lib/utils.ts` : helper `cn`
- `hooks/` : hooks utilitaires
- `public/` : icônes/placeholder
- `styles/` : CSS global alternatif (non utilisé)

## 4) Routes principales
- `/` : page d’accueil
- `/fiches` : liste + filtres
- `/fiches/[slug]` : détail d’une fiche
- `/articles` : liste articles
- `/articles/[slug]` : détail article
- `/methode` : méthode en 4 étapes
- `/a-propos` : mission/valeurs

⚠️ Le footer pointe aussi vers `/mentions-legales` et `/confidentialite` mais **ces pages n’existent pas** (404).

## 5) Données & contenu
### Fiches (source principale)
`lib/data/fiches.ts`
- Types `Fiche` et `Theme`
- Fonctions helpers : `getFicheBySlug`, `getFichesByTheme`, `getEssentialFiches`, `getThemeBySlug`
- Contenu statique (définitions, points clés, exemples, tips)

### Articles
`lib/data/articles/`
- Type `Article`
- Helpers : `getArticleBySlug`, `getLatestArticles`, `getArticlesByCategory`
- Contenu en pseudo-markdown stocké dans `content` + parsing manuel dans `app/articles/[slug]/page.tsx`

⚠️ Données dupliquées :
- La page d’accueil (`app/page.tsx`) re-déclare `latestArticles` et `themes` au lieu d’utiliser `lib/data/*`.

## 6) Composants UI
- `components/site-header.tsx` : navigation + menu mobile
- `components/site-footer.tsx` : navigation + mentions légales (liens non existants)
- `components/cards/*` : cartes pour articles/fiches/thèmes
- `components/ui/*` : kit shadcn complet (beaucoup de composants prêts mais probablement non utilisés)

⚠️ Duplications:
- `hooks/use-toast.ts` et `components/ui/use-toast.ts` sont identiques
- `hooks/use-mobile.ts` et `components/ui/use-mobile.tsx` sont identiques

## 7) Styles & design system
- `app/globals.css` est chargé par `app/layout.tsx`
- `styles/globals.css` existe mais **n’est pas importé**
- Couleurs via CSS variables (OKLCH)
- `Inter` importé dans `layout`, mais la class `inter.className` n’est pas utilisée (font appliquée via `--font-sans`)

## 8) Build & Run
Commandes principales :
- `pnpm install`
- `pnpm dev`
- `pnpm build` / `pnpm start`
- `pnpm lint`

## 9) Points d’attention / risques
1. **Typescript ignoreBuildErrors = true** (`next.config.mjs`) → risque de bugs en prod malgré un build “vert”.
2. **Pages légales absentes** (`/mentions-legales`, `/confidentialite`).
3. **Duplication de contenu** (home vs `lib/data`). Risque d’incohérence.
4. **Parsing article ad-hoc** (split par lignes + heuristiques). Fragile si le format évolue.
5. **UI kit surchargé** : beaucoup de composants + dépendances Radix non utilisés → poids et maintenance.
6. **Deux fichiers de globals CSS** avec thèmes différents → confusion possible.
7. **next-themes** présent mais pas branché dans le layout (ThemeProvider inutilisé).

## 10) Recommandations (priorité)
1. **Activer le typecheck** : supprimer `ignoreBuildErrors` et corriger les erreurs.
2. **Créer les pages légales** ou retirer les liens.
3. **Centraliser le contenu** : utiliser `lib/data` partout (ex. home page).
4. **Nettoyer les doublons** (hooks `use-toast`, `use-mobile`).
5. **Clarifier les styles** : garder un seul `globals.css` et supprimer l’autre.
6. **Évaluer les dépendances inutilisées** (si certains composants ne sont jamais utilisés).
7. **Optionnel** : remplacer le parsing manuel par un vrai rendu Markdown (mdx ou renderer).

## 11) Repères pour contribuer
- Ajouter une fiche : `lib/data/fiches.ts`
- Ajouter un article : `lib/data/articles/`
- Modifier la navigation : `components/site-header.tsx` / `components/site-footer.tsx`
- Thèmes & couleurs : `app/globals.css`

---
Si tu veux, je peux transformer ce fichier en un vrai “CONTRIBUTING” ou “PROJECT_CONTEXT.md” plus opérationnel (avec conventions de nommage, règles de contenu, process d’ajout d’article/fiche, etc.).
