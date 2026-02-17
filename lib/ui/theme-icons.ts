import { BookOpen, Globe, Heart, Landmark, Scale, type LucideIcon, Users } from "lucide-react"

const DEFAULT_THEME_ICON = Globe

const EXAM_THEME_ICONS: Record<string, LucideIcon> = {
  "principes-valeurs-republique": Heart,
  "systeme-institutionnel-politique": Landmark,
  "droits-devoirs": Scale,
  "histoire-geographie-culture": BookOpen,
  "vivre-societe-francaise": Users,
}

const FICHE_THEME_ICONS: Record<string, LucideIcon> = {
  valeurs: Heart,
  droits: Scale,
  institutions: Landmark,
  histoire: BookOpen,
  vivre: Users,
  europe: Globe,
}

const ARTICLE_CATEGORY_TO_FICHE_THEME: Record<string, string> = {
  valeurs: "valeurs",
  droits: "droits",
  institutions: "institutions",
  histoire: "histoire",
  conseils: "vivre",
}

function normalize(value: string): string {
  return value.trim().toLowerCase()
}

export function getIconByExamThemeSlug(themeSlug?: string): LucideIcon {
  if (!themeSlug) return DEFAULT_THEME_ICON
  return EXAM_THEME_ICONS[themeSlug] ?? DEFAULT_THEME_ICON
}

export function getIconByFicheThemeSlug(themeSlug?: string): LucideIcon {
  if (!themeSlug) return DEFAULT_THEME_ICON
  return FICHE_THEME_ICONS[themeSlug] ?? DEFAULT_THEME_ICON
}

export function getArticleThemeSlug(category?: string): string | undefined {
  if (!category) return undefined
  return ARTICLE_CATEGORY_TO_FICHE_THEME[normalize(category)]
}

export function getIconByArticleCategory(category?: string): LucideIcon {
  const themeSlug = getArticleThemeSlug(category)
  return getIconByFicheThemeSlug(themeSlug)
}
