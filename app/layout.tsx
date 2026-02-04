import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Préparation QuizCitoyen | Naturalisation Française',
  description: 'Préparez l\'examen civique français simplement et efficacement. Fiches claires, conseils quotidiens et méthode simple pour réussir l\'entretien de naturalisation.',
  generator: 'v0.app',
  metadataBase: new URL('https://www.quizcitoyen.fr'),
  openGraph: {
    type: 'website',
    url: 'https://www.quizcitoyen.fr',
    title: 'Préparation QuizCitoyen | Naturalisation Française',
    description: 'Préparez l\'examen civique français simplement et efficacement. Fiches claires, conseils quotidiens et méthode simple pour réussir l\'entretien de naturalisation.',
    siteName: 'QuizCitoyen',
    locale: 'fr_FR',
    images: [
      {
        url: '/logo.png',
        alt: 'QuizCitoyen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Préparation QuizCitoyen | Naturalisation Française',
    description: 'Préparez l\'examen civique français simplement et efficacement. Fiches claires, conseils quotidiens et méthode simple pour réussir l\'entretien de naturalisation.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
