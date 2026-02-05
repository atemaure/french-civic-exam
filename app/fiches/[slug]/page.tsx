import { notFound } from "next/navigation"
import Link from "next/link"

import { fiches, getFicheBySlug, getFichesByTheme } from "@/lib/data/fiches"
import { getArticlesByCategory, getLatestArticles } from "@/lib/data/articles"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FicheCard } from "@/components/cards/fiche-card"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, learningResourceJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"
import { ArrowLeft, BookOpen, CheckCircle, Lightbulb, MessageCircle, Star } from "lucide-react"

export async function generateStaticParams() {
  return fiches.map((fiche) => ({
    slug: fiche.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fiche = getFicheBySlug(slug)

  if (!fiche) {
    return createMetadata({
      title: "Fiche non trouvée",
      description: "Cette fiche n'existe pas ou a été déplacée.",
      path: "/fiches",
      noIndex: true,
    })
  }

  return createMetadata({
    title: fiche.title,
    description: fiche.description,
    path: `/fiches/${fiche.slug}`,
    type: "article",
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

export default async function FichePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fiche = getFicheBySlug(slug)

  if (!fiche) {
    notFound()
  }

  const relatedFiches = getFichesByTheme(fiche.themeSlug)
    .filter((f) => f.slug !== fiche.slug)
    .slice(0, 3)

  const category = themeToCategory[fiche.themeSlug]
  const relatedArticles = category
    ? getArticlesByCategory(category).slice(0, 2)
    : getLatestArticles(2)

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Fiches", url: "/fiches" },
    { name: fiche.theme, url: `/themes/${fiche.themeSlug}` },
    { name: fiche.title, url: `/fiches/${fiche.slug}` },
  ]

  const jsonLd = [
    breadcrumbJsonLd(breadcrumbItems),
    learningResourceJsonLd({
      title: fiche.title,
      description: fiche.description,
      url: `/fiches/${fiche.slug}`,
      theme: fiche.theme,
      keywords: [fiche.theme, ...fiche.keyPoints.slice(0, 4)],
      isEssential: fiche.isEssential,
    }),
  ]

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={jsonLd} />
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Fiches", href: "/fiches" },
            { label: fiche.theme, href: `/themes/${fiche.themeSlug}` },
            { label: fiche.title },
          ]}
        />
        <div className="mb-8">
          <Button variant="ghost" asChild className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/fiches">
              <ArrowLeft className="h-4 w-4" />
              Retour aux fiches
            </Link>
          </Button>
        </div>

        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Link
              href={`/themes/${fiche.themeSlug}`}
              className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/20"
            >
              {fiche.theme}
            </Link>
            {fiche.isEssential && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <Star className="h-3 w-3" />
                Fiche essentielle
              </span>
            )}
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {fiche.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {fiche.description}
          </p>
        </header>

        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h2 id="definition" className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              Définition
            </h2>
            <p className="text-sm leading-relaxed text-foreground">{fiche.definition}</p>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 id="points-cles" className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <CheckCircle className="h-5 w-5 text-primary" />
            Points clés à retenir
          </h2>
          <ul className="space-y-3">
            {fiche.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <Card className="mb-8 border-secondary bg-secondary/50">
          <CardContent className="p-6">
            <h2 id="exemple" className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Lightbulb className="h-5 w-5 text-primary" />
              Exemple concret
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{fiche.example}</p>
          </CardContent>
        </Card>

        <Card className="mb-10 border-accent/30 bg-accent/5">
          <CardContent className="p-6">
            <h2 id="astuce-oral" className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <MessageCircle className="h-5 w-5 text-accent" />
              Astuce pour l'oral
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{fiche.oralTip}</p>
          </CardContent>
        </Card>

        {relatedFiches.length > 0 && (
          <div className="mt-12 border-t border-border pt-10">
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Fiches de la même thématique
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedFiches.map((related) => (
                <FicheCard
                  key={related.slug}
                  title={related.title}
                  description={related.description}
                  slug={related.slug}
                  theme={related.theme}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 border-t border-border pt-10">
          <h2 className="mb-6 text-xl font-semibold text-foreground">Aller plus loin</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Explorer la thématique</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Retrouvez toutes les fiches liées à {fiche.theme.toLowerCase()} et les repères essentiels.
                </p>
                <Button variant="outline" asChild className="bg-transparent">
                  <Link href={`/themes/${fiche.themeSlug}`}>Voir la thématique</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Articles conseillés</h3>
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  {relatedArticles.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/articles/${article.slug}`} className="hover:text-primary">
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="bg-transparent">
                  <Link href="/articles">Voir tous les articles</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center text-sm text-muted-foreground">
          <p>
            Besoin de sources officielles ? Consultez notre page dédiée pour vérifier les informations.
          </p>
          <Link href="/sources" className="font-medium text-primary hover:underline">
            Voir les sources officielles
          </Link>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/fiches">Voir toutes les fiches</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
