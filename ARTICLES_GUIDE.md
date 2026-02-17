# Guide d'ecriture des articles

Ce guide explique comment creer des articles coherents avec le rendu actuel de l'app.

Note:
- `CONTENT_GUIDE.md` est la reference globale (schemas, regles transverses, conventions communes).
- Ce fichier reste focalise sur les specificites articles.

## Structure des fichiers

Un article = un fichier :
`lib/data/articles/<slug>.ts`

Chaque fichier doit exporter :
`export const article: Article = { ... }`

Puis ajouter l'article dans `lib/data/articles/index.ts`.

## Champs requis

- `slug` : identifiant unique, utilise dans l'URL. Exemple : `valeurs-fondamentales-republique`.
- `title` : titre lisible affiche a l'utilisateur.
- `excerpt` : resume court (140 a 220 caracteres environ).
- `content` : contenu en Markdown (voir regles ci-dessous).
- `date` : format francais "15 janvier 2026".
- `category` : une des valeurs suivantes :
  - `Valeurs`
  - `Droits`
  - `Institutions`
  - `Histoire`
  - `Conseils`
- `readingTime` : format "5 min".
- `keyPoints` : 3 a 5 points cles (tableau de strings).
- `oralTip` : optionnel, conseil pour l'entretien.

## Regles de slug

- En minuscules, sans accents.
- Separe par des tirets.
- Doit etre unique.
- Doit matcher le nom du fichier.

## Regles de contenu Markdown (IMPORTANT)

Le parser actuel supporte uniquement :
- Titres `##` et `###`
- Listes a puces `- item`
- Listes numerotees avec label : `1. **Label**: texte`
- Listes a puces avec label : `- **Label**: texte`
- Paragraphes simples (une ligne = un paragraphe)

Consequences :
- Ne pas faire de paragraphes multi-lignes. Ecrire un paragraphe sur une seule ligne.
- Pas de listes imbriquees.
- Pas de HTML.
- Utiliser une ligne vide pour separer les sections.

## Recommandations d'ecriture

- Ton clair, pedagogique, niveau examen de naturalisation.
- Phrases courtes, vocabulaire simple.
- Chaque section doit apporter une information claire et utile.
- Eviter les dates trop nombreuses si elles ne sont pas essentielles.

## Ordre des articles

L'ordre d'affichage est gere automatiquement par date dans `lib/data/articles/index.ts` (tri descendant).
L'ordre dans `baseArticles` n'est donc pas la source de verite.

Important:
- Renseigner une `date` valide et coherente est obligatoire.
- Si la date est invalide, le tri peut devenir inattendu.

## Template minimal

```ts
import type { Article } from "./types"

export const article: Article = {
  slug: "mon-article",
  title: "Titre de mon article",
  excerpt: "Resume court et informatif.",
  content: `
Introduction en une seule ligne.

## Titre de section

Paragraphe en une seule ligne.

- **Label**: texte explicatif
- point simple

### Sous-section

1. **Etape**: texte
2. **Etape**: texte
  `,
  date: "15 janvier 2026",
  category: "Valeurs",
  readingTime: "5 min",
  keyPoints: [
    "Point cle 1",
    "Point cle 2",
    "Point cle 3",
  ],
  oralTip: "Conseil oral optionnel.",
}
```

## Checklist avant commit

- Le slug est unique et correspond au nom du fichier.
- Le `content` respecte les regles Markdown ci-dessus.
- Le `category` est valide.
- L'article est ajoute dans `lib/data/articles/index.ts`.
