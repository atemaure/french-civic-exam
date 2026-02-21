import { notFound } from "next/navigation"
import Link from "next/link"

import { fiches, getFicheBySlug, getFichesByTheme } from "@/lib/data/fiches"
import { getArticlesByCategory, getLatestArticles } from "@/lib/data/articles"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FicheCard } from "@/components/cards/fiche-card"
import { FicheDownloadActions } from "@/components/fiche-download-actions"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, learningResourceJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"
import { ArrowLeft, BookOpen, CheckCircle, Landmark, Lightbulb, MessageCircle, Star } from "lucide-react"

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
    { name: fiche.theme, url: `/fiches?theme=${fiche.themeSlug}` },
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
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={jsonLd} />
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Fiches", href: "/fiches" },
            { label: fiche.theme, href: `/fiches?theme=${fiche.themeSlug}` },
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

        <header className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-blue-50/70 to-background p-6 shadow-md shadow-black/5 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-slate-100" />
          <div className="absolute right-5 top-5 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white/90 sm:flex">
            <Landmark className="h-5 w-5 text-blue-700" />
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Link
              href={`/fiches?theme=${fiche.themeSlug}`}
              className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {fiche.title}
            </h1>
            <FicheDownloadActions fiche={fiche} className="shrink-0 sm:justify-end" />
          </div>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
            {fiche.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Thématique</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{fiche.theme}</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Points clés</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{fiche.keyPoints.length} à maîtriser</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Priorité</p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {fiche.isEssential ? "Fiche essentielle" : "Fiche complémentaire"}
              </p>
            </div>
          </div>
        </header>

        <Card className="mb-8 border-border/70 bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 id="definition" className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <BookOpen className="h-5 w-5 text-blue-700" />
              Définition
            </h2>
            <p className="text-sm leading-relaxed text-foreground/85">{fiche.definition}</p>
          </CardContent>
        </Card>

        <div className="mb-8 rounded-xl border border-border/70 bg-white p-6 shadow-sm">
          <h2 id="points-cles" className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <CheckCircle className="h-5 w-5 text-blue-700" />
            Points clés à retenir
          </h2>
          <ul className="space-y-3">
            {fiche.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-secondary/20 px-3 py-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                {point.includes(":") ? (
                  <span className="text-sm leading-relaxed text-foreground/85">
                    <strong className="font-semibold text-foreground">{point.split(":")[0]}:</strong>{" "}
                    {point.split(":").slice(1).join(":").trim()}
                  </span>
                ) : (
                  <span className="text-sm leading-relaxed text-foreground/85">{point}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Card className="mb-8 border-border/70 bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 id="exemple" className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Lightbulb className="h-5 w-5 text-blue-700" />
              Exemple concret
            </h2>
            <p className="text-sm leading-relaxed text-foreground/85">{fiche.example}</p>
          </CardContent>
        </Card>

        <Card className="mb-10 border-blue-200 bg-blue-50/50 shadow-sm">
          <CardContent className="p-6">
            <h2 id="astuce-oral" className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <MessageCircle className="h-5 w-5 text-blue-700" />
              Astuce pour l'oral
            </h2>
            <p className="text-sm leading-relaxed text-foreground/85">{fiche.oralTip}</p>
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
                  themeSlug={related.themeSlug}
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
                  <Link href={`/fiches?theme=${fiche.themeSlug}`}>Voir la thématique</Link>
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
