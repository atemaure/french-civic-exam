# Design System - QuizCitoyen

Date: 2026-02-17

## 1) Objectif
Ce document definit les regles visuelles et UX du site QuizCitoyen pour garder une interface coherente entre:
- fiches
- articles
- themes d'examen
- sous-themes

La source de verite des tokens est `app/globals.css`.

## 2) Principes
- Clarte: structure simple, hierarchie lisible.
- Pedagogie: contenu scannable (blocs, listes, points cles).
- Coherence: memes patterns sur themes/fiches/articles.
- Sobriete: visuel propre, pas surcharge decorative.

## 3) Fondations visuelles

### 3.1 Couleurs (tokens)
Utiliser uniquement les tokens Tailwind relies a `app/globals.css`:
- `background`, `foreground`
- `primary`, `primary-foreground`
- `secondary`, `secondary-foreground`
- `muted`, `muted-foreground`
- `accent`, `accent-foreground`
- `border`, `ring`, `destructive`

Guideline:
- CTA principal: `bg-primary text-primary-foreground`.
- Fonds neutres: `bg-white` ou `bg-secondary/20`.
- Texte secondaire: `text-muted-foreground` ou `text-foreground/80`.

### 3.2 Typographie
Police principale: Inter (voir `app/globals.css`).

Echelle recommandee:
- H1 page detail: `text-3xl sm:text-4xl font-bold`
- H2 section: `text-lg` a `text-xl font-semibold`
- H3 bloc: `text-sm` a `text-base font-semibold`
- Texte courant: `text-sm sm:text-base`
- Meta/labels: `text-xs uppercase tracking-wide`

### 3.3 Espacements et containers
- Page wrapper: `py-12 sm:py-16`
- Contenu standard detail: `max-w-4xl` ou `max-w-6xl`
- Liste large: `max-w-6xl` ou `max-w-7xl`
- Grille: `gap-3`, `gap-4`, `gap-6` selon densite

### 3.4 Rayons et ombres
- Card standard: `rounded-xl` ou `rounded-2xl`
- Border: `border border-border/70`
- Ombre douce: `shadow-sm` ou `shadow-md shadow-black/5`

## 4) Pattern de page (obligatoire)

### 4.1 Hero detail (themes, sous-themes, fiches, articles)
Pattern de reference:
- conteneur: `relative overflow-hidden rounded-2xl border ... bg-gradient-to-b from-blue-50/70 to-background`
- bande haute: `absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-slate-100`
- badge icone en haut a droite (desktop)
- titre fort + sous-texte explicatif
- cartes meta (2 ou 3)

### 4.2 Blocs de contenu
Pour les sections denses:
- bloc blanc: `rounded-xl border border-border/70 bg-white p-4 sm:p-5`
- titres de bloc en uppercase pour categories fonctionnelles
- listes avec icones/puces et spacing vertical (`space-y-2.5` ou `space-y-3`)

### 4.3 CTA
- bouton principal plein (`bg-primary`)
- bouton secondaire outline
- ordre: primaire a gauche, retour/navigation a droite

## 5) Systeme d'icones (source unique)
Source unique: `lib/ui/theme-icons.ts`

Ne pas redefinir de mapping d'icones localement dans les pages.

Fonctions a utiliser:
- `getIconByExamThemeSlug(themeSlug)`
- `getIconByFicheThemeSlug(themeSlug)`
- `getArticleThemeSlug(category)`
- `getIconByArticleCategory(category)`

Mapping officiel actuel:
- Principes/valeurs -> `Heart`
- Systeme institutionnel -> `Landmark`
- Droits/devoirs -> `Scale`
- Histoire/geographie/culture -> `BookOpen`
- Vivre en France -> `Users`
- Defaut -> `Globe`

## 6) Composants UI de base
- Boutons: `components/ui/button.tsx`
- Cards: `components/ui/card.tsx`
- Breadcrumbs: `components/seo/breadcrumbs.tsx`

Regle:
- reutiliser ces primitives avant de creer une variante locale.
- eviter le style inline si une classe utilitaire suffit.

## 7) Regles contenu/UX
- Eviter les gros paragraphes: preferer sections courtes + listes.
- Toujours afficher un contexte clair au-dessus des points cles.
- Ajouter des repers visuels sur les elements importants (icone, label, badge).
- Garder un langage simple et oral-friendly.

## 8) Accessibilite minimale
- Contraste suffisant (texte vs fond).
- Liens/boutons avec etat hover/focus visible.
- Hierarchie de titres semantique (`h1` > `h2` > `h3`).
- `aria-label` pour les controles non textuels.

## 9) Checklist avant merge UI
1. Le pattern hero est coherent avec les pages detail existantes.
2. Les tokens de couleur viennent des variables globales.
3. Les icones de theme viennent de `lib/ui/theme-icons.ts`.
4. Aucun bloc de texte trop dense sans structure.
5. Desktop + mobile verifies.
6. Build OK (`npm run build`).

## 10) Hors scope actuel
- Ce document ne couvre pas un mode sombre produit.
- Ce document ne remplace pas les regles SEO (voir `README.md` et `SEO_LLMSEO_REPORT.md`).
