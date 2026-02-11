import { article as preparer_entretien_naturalisation } from "./preparer-entretien-naturalisation"
import { article as valeurs_fondamentales_republique } from "./valeurs-fondamentales-republique"
import { article as role_president_republique } from "./role-president-republique"
import { article as symboles_republique_francaise } from "./symboles-republique-francaise"
import { article as laicite_france_explication } from "./laicite-france-explication"
import { article as droits_devoirs_citoyen_francais } from "./droits-devoirs-citoyen-francais"
import { article as napoleon_premier } from "./napoleon-premier"
import { article as napoleon_trois } from "./napoleon-trois"

export type { Article } from "./types"
export { toISODate } from "./utils"

export const articles = [
  napoleon_trois,
  napoleon_premier,
  preparer_entretien_naturalisation,
  valeurs_fondamentales_republique,
  role_president_republique,
  symboles_republique_francaise,
  laicite_france_explication,
  droits_devoirs_citoyen_francais
]

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function getLatestArticles(count: number = 6) {
  return articles.slice(0, count)
}

export function getArticlesByCategory(category: string) {
  return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
}