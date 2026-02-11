import Link from "next/link"
import { createMetadata } from "@/lib/seo/metadata"
import { fiches, themes, getEssentialFiches, getFichesByTheme } from "@/lib/data/fiches"
import { FicheCard } from "@/components/cards/fiche-card"
import { ThemeCard } from "@/components/cards/theme-card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { Star } from "lucide-react"

export const metadata = createMetadata({
  title: "Fiches pratiques",
  description: "Fiches pratiques organisées par thématique pour préparer l'examen civique et l'entretien de naturalisation française.",
  path: "/fiches",
})

interface PageProps {
  searchParams: Promise<{ theme?: string; essential?: string }>
}

export default async function FichesPage({ searchParams }: PageProps) {
  const params = await searchParams
  const selectedTheme = params.theme
  const showEssential = params.essential === "true"

  const displayedFiches = showEssential
    ? getEssentialFiches()
    : selectedTheme
      ? getFichesByTheme(selectedTheme)
      : fiches

  const pageTitle = showEssential
    ? "Fiches essentielles"
    : selectedTheme
      ? themes.find((t) => t.slug === selectedTheme)?.name || "Fiches pratiques"
      : "Fiches pratiques"

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={breadcrumbJsonLd([
          { name: "Accueil", url: "/" },
          { name: "Fiches", url: "/fiches" },
        ])} />
        <Breadcrumbs items={[
          { label: "Accueil", href: "/" },
          { label: "Fiches" },
        ]} />
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {pageTitle}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {showEssential
              ? "Les fiches incontournables pour votre préparation à l'examen civique."
              : selectedTheme
                ? `Découvrez toutes les fiches de la catégorie ${pageTitle.toLowerCase()}.`
                : "Des fiches claires et structurées pour chaque thématique de l'examen civique."}
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <Link
            href="/fiches"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !selectedTheme && !showEssential
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Toutes
          </Link>
          <Link
            href="/fiches?essential=true"
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              showEssential
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <Star className="h-3.5 w-3.5" />
            Essentielles
          </Link>
          {themes.map((theme) => (
            <Link
              key={theme.slug}
              href={`/fiches?theme=${theme.slug}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedTheme === theme.slug
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {theme.name}
            </Link>
          ))}
        </div>

        {/* Theme cards when no filter */}
        {!selectedTheme && !showEssential && (
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Explorer par thématique
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {themes.map((theme) => (
                <ThemeCard
                  key={theme.slug}
                  title={theme.name}
                  description={theme.description}
                  slug={theme.slug}
                  ficheCount={theme.ficheCount}
                />
              ))}
            </div>
          </div>
        )}

        {/* Fiches grid */}
        <div className="mt-12">
          {!selectedTheme && !showEssential && (
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Toutes les fiches
            </h2>
          )}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedFiches.map((fiche) => (
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

        {/* Empty state */}
        {displayedFiches.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Aucune fiche disponible pour cette catégorie.
            </p>
            <Button variant="outline" asChild className="mt-4 bg-transparent">
              <Link href="/fiches">Voir toutes les fiches</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
