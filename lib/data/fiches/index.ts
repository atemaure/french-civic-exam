import type { Fiche, FicheInput, Theme } from "./types"
import { valeurs } from "./valeurs"
import { droits } from "./droits"
import { institutions } from "./institutions"
import { histoire } from "./histoire"
import { vivre } from "./vivre"
import { europe } from "./europe"

const themeData: Array<{
  slug: Theme["slug"]
  name: Theme["name"]
  description: Theme["description"]
  fiches: FicheInput[]
}> = [
  {
    slug: "valeurs",
    name: "Principes et valeurs",
    description: "Liberté, Égalité, Fraternité et les valeurs fondamentales de la République française.",
    fiches: valeurs,
  },
  {
    slug: "droits",
    name: "Droits et devoirs",
    description: "Les droits fondamentaux des citoyens et leurs devoirs envers la République.",
    fiches: droits,
  },
  {
    slug: "institutions",
    name: "Institutions françaises",
    description: "Le fonctionnement de l'État, le Parlement, le Gouvernement et les collectivités.",
    fiches: institutions,
  },
  {
    slug: "histoire",
    name: "Histoire et symboles",
    description: "Les grandes dates de l'histoire de France et les symboles de la République.",
    fiches: histoire,
  },
  {
    slug: "europe",
    name: "Europe et citoyenneté européenne",
    description: "L'Union européenne, ses institutions et les droits des citoyens européens.",
    fiches: europe,
  },
  {
    slug: "vivre",
    name: "Vivre en France",
    description: "La vie quotidienne, la laïcité et les principes du vivre-ensemble.",
    fiches: vivre,
  },
]

export const themes: Theme[] = themeData.map((theme) => ({
  slug: theme.slug,
  name: theme.name,
  description: theme.description,
  ficheCount: theme.fiches.length,
}))

export const fiches: Fiche[] = themeData.flatMap((theme) =>
  theme.fiches.map((fiche) => ({
    ...fiche,
    theme: theme.name,
    themeSlug: theme.slug,
  }))
)

function assertUniqueFicheSlugs(items: Fiche[]) {
  const seen = new Set<string>()
  for (const item of items) {
    if (seen.has(item.slug)) {
      throw new Error(`Duplicate fiche slug: ${item.slug}`)
    }
    seen.add(item.slug)
  }
}

assertUniqueFicheSlugs(fiches)

export function getFicheBySlug(slug: string): Fiche | undefined {
  return fiches.find((fiche) => fiche.slug === slug)
}

export function getFichesByTheme(themeSlug: string): Fiche[] {
  return fiches.filter((fiche) => fiche.themeSlug === themeSlug)
}

function getFicheTimestamp(fiche: Fiche): number {
  if (!fiche.date) {
    return Number.NEGATIVE_INFINITY
  }

  const parsed = Date.parse(fiche.date)
  return Number.isNaN(parsed) ? Number.NEGATIVE_INFINITY : parsed
}

export function sortFichesByDate(items: Fiche[]): Fiche[] {
  return [...items].sort((a, b) => getFicheTimestamp(b) - getFicheTimestamp(a))
}

export function getEssentialFiches(): Fiche[] {
  return fiches.filter((fiche) => fiche.isEssential)
}

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((theme) => theme.slug === slug)
}

export type { Fiche, Theme } from "./types"
