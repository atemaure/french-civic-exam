import type { MetadataRoute } from "next"

import { SITE_URL, SHOULD_INDEX } from "@/lib/seo/config"

export default function robots(): MetadataRoute.Robots {
  const rules = SHOULD_INDEX
    ? [{ userAgent: "*", allow: "/" }]
    : [{ userAgent: "*", disallow: "/" }]

  return {
    rules,
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
