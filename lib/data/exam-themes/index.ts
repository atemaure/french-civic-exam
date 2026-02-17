import { theme as droitsDevoirsTheme } from "./themes/droits-devoirs"
import { theme as histoireGeographieCultureTheme } from "./themes/histoire-geographie-culture"
import { theme as principesValeursTheme } from "./themes/principes-valeurs-republique"
import { theme as systemeInstitutionnelTheme } from "./themes/systeme-institutionnel-politique"
import { theme as vivreSocieteFrancaiseTheme } from "./themes/vivre-societe-francaise"
import type { ExamSubTheme, ExamTheme } from "./types"

export const examThemes: ExamTheme[] = [
  principesValeursTheme,
  systemeInstitutionnelTheme,
  droitsDevoirsTheme,
  histoireGeographieCultureTheme,
  vivreSocieteFrancaiseTheme,
]

export function getExamThemeBySlug(slug: string): ExamTheme | undefined {
  return examThemes.find((theme) => theme.slug === slug)
}

export function getExamSubThemeBySlug(theme: ExamTheme, subThemeSlug: string): ExamSubTheme | undefined {
  return theme.subThemes.find((subTheme) => subTheme.slug === subThemeSlug)
}

export type { ExamTheme, ExamSubTheme } from "./types"
