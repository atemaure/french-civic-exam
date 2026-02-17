import React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/seo/json-ld"
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonld"
import { baseMetadata } from "@/lib/seo/metadata"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [organizationJsonLd(), websiteJsonLd()]

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TBGRPCSJ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBGRPCSJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
          <Analytics />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){'use strict';document.addEventListener('contextmenu',function(e){e.preventDefault()});document.addEventListener('keydown',function(e){var k=e.key.toLowerCase();var isF12=e.key==='F12';var isCtrlShiftI=e.ctrlKey&&e.shiftKey&&k==='i';var isCtrlShiftJ=e.ctrlKey&&e.shiftKey&&k==='j';var isCtrlU=e.ctrlKey&&k==='u';var isCtrlS=e.ctrlKey&&k==='s';if(isF12||isCtrlShiftI||isCtrlShiftJ||isCtrlU||isCtrlS){e.preventDefault();e.stopPropagation()}})})();`,
          }}
        />
      </body>
    </html>
  )
}
