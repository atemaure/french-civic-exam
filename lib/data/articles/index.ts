import { article as preparer_entretien_naturalisation } from "./preparer-entretien-naturalisation"
import { article as valeurs_fondamentales_republique } from "./valeurs-fondamentales-republique"
import { article as role_president_republique } from "./role-president-republique"
import { article as symboles_republique_francaise } from "./symboles-republique-francaise"
import { article as laicite_france_explication } from "./laicite-france-explication"
import { article as droits_devoirs_citoyen_francais } from "./droits-devoirs-citoyen-francais"
import { article as napoleon_premier } from "./napoleon-premier"
import { article as napoleon_trois } from "./napoleon-trois"
import { article as questions_mise_en_situation_entretien_civique } from "./questions-mise-en-situation-entretien-civique"
import { article as role_premier_ministre } from "./role-premier-ministre"
import { article as types_examen_civique_csp_cr_naturalisation } from "./types-examen-civique-csp-cr-naturalisation"
import { article as erreurs_qui_font_echouer_entretien_civique } from "./erreurs-qui-font-echouer-entretien-civique"
import { toISODate } from "./utils"

export type { Article } from "./types"

const baseArticles = [
  questions_mise_en_situation_entretien_civique,
  erreurs_qui_font_echouer_entretien_civique,
  napoleon_trois,
  napoleon_premier,
  role_premier_ministre,
  preparer_entretien_naturalisation,
  valeurs_fondamentales_republique,
  role_president_republique,
  symboles_republique_francaise,
  types_examen_civique_csp_cr_naturalisation,
  laicite_france_explication,
  droits_devoirs_citoyen_francais
]

function getArticleTimestamp(date: string): number {
  const isoDate = toISODate(date)
  const parsed = Date.parse(isoDate ?? date)
  return Number.isNaN(parsed) ? Number.NEGATIVE_INFINITY : parsed
}

export const articles = [...baseArticles].sort((a, b) => getArticleTimestamp(b.date) - getArticleTimestamp(a.date))

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function getLatestArticles(count: number = 6) {
  return articles.slice(0, count)
}

export function getArticlesByCategory(category: string) {
  return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
}

export { toISODate } from "./utils"
