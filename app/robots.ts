import type { MetadataRoute } from "next"

import { SITE_URL, SHOULD_INDEX } from "@/lib/seo/config"

export default function robots(): MetadataRoute.Robots {
  if (!SHOULD_INDEX) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    }
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
