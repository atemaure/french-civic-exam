import type { MetadataRoute } from "next"

import { articles, toISODate } from "@/lib/data/articles"
import { fiches } from "@/lib/data/fiches"
import { SITE_URL } from "@/lib/seo/config"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/fiches",
    "/articles",
    "/methode",
    "/a-propos",
    "/faq",
    "/sources",
    "/glossaire",
    "/methodologie",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }))

  const ficheRoutes = fiches.map((fiche) => ({
    url: `${SITE_URL}/fiches/${fiche.slug}`,
    changeFrequency: "monthly",
    priority: fiche.isEssential ? 0.8 : 0.6,
  }))

  const articleRoutes = articles.map((article) => {
    const dateIso = toISODate(article.date)
    return {
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: dateIso ? new Date(dateIso) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }
  })

  return [...staticRoutes, ...ficheRoutes, ...articleRoutes]
}
