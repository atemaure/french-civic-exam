import type { MetadataRoute } from "next"

import { articles } from "@/lib/data/articles"
import { fiches } from "@/lib/data/fiches"

const baseUrl = "https://www.quizcitoyen.fr"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/fiches",
    "/articles",
    "/methode",
    "/a-propos",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }))

  const ficheRoutes = fiches.map((fiche) => ({
    url: `${baseUrl}/fiches/${fiche.slug}`,
    lastModified: new Date(),
  }))

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...ficheRoutes, ...articleRoutes]
}
