import React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/seo/json-ld"
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonld"
import { baseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [organizationJsonLd(), websiteJsonLd()]

  return (
    <html lang="fr-FR">
      <body className="font-sans antialiased">
        <JsonLd data={structuredData} />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
