import { notFound } from "next/navigation"
import Link from "next/link"

import { themes, getThemeBySlug, getFichesByTheme } from "@/lib/data/fiches"
import { getArticlesByCategory, getLatestArticles } from "@/lib/data/articles"
import { FicheCard } from "@/components/cards/fiche-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"

export async function generateStaticParams() {
  return themes.map((theme) => ({ slug: theme.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const theme = getThemeBySlug(slug)

  if (!theme) {
    return createMetadata({
      title: "Thématique non trouvée",
      description: "Cette thématique n'existe pas ou a été déplacée.",
      path: "/themes",
      noIndex: true,
    })
  }

  return createMetadata({
    title: `Thématique : ${theme.name}`,
    description: theme.description,
    path: `/themes/${theme.slug}`,
  })
}

const themeToCategory: Record<string, string> = {
  valeurs: "Valeurs",
  droits: "Droits",
  institutions: "Institutions",
  histoire: "Histoire",
  europe: "Valeurs",
  vivre: "Conseils",
}

export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const theme = getThemeBySlug(slug)

  if (!theme) {
    notFound()
  }

  const fiches = getFichesByTheme(theme.slug)
  const category = themeToCategory[theme.slug]
  const articles = category ? getArticlesByCategory(category).slice(0, 3) : getLatestArticles(3)

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Accueil", url: "/" },
      { name: "Thématiques", url: "/themes" },
      { name: theme.name, url: `/themes/${theme.slug}` },
    ]),
    itemListJsonLd({
      name: `Fiches - ${theme.name}`,
      description: theme.description,
      url: `/themes/${theme.slug}`,
      items: fiches.map((fiche) => ({
        name: fiche.title,
        url: `/fiches/${fiche.slug}`,
      })),
    }),
  ]

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={jsonLd} />
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Thématiques", href: "/themes" },
            { label: theme.name },
          ]}
        />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {theme.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{theme.description}</p>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-xl font-semibold text-foreground">Fiches disponibles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fiches.map((fiche) => (
              <FicheCard
                key={fiche.slug}
                title={fiche.title}
                description={fiche.description}
                slug={fiche.slug}
                theme={fiche.theme}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Articles liés</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Approfondissez la thématique avec nos articles pédagogiques.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {articles.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/articles/${article.slug}`} className="hover:text-primary">
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Préparez votre oral</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Suivez notre méthode en 4 étapes et révisez les fiches essentielles.
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" asChild className="bg-transparent">
                    <Link href="/methode">Voir la méthode</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/fiches?essential=true">Fiches essentielles</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
