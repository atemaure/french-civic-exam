import { themes } from "@/lib/data/fiches"
import { ThemeCard } from "@/components/cards/theme-card"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"

export const metadata = createMetadata({
  title: "Thématiques",
  description: "Explorez toutes les thématiques de révision pour préparer l'entretien civique de naturalisation française.",
  path: "/themes",
})

export default function ThemesPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Accueil", url: "/" },
      { name: "Thématiques", url: "/themes" },
    ]),
    itemListJsonLd({
      name: "Thématiques QuizCitoyen",
      description: "Thématiques de révision pour l'entretien civique.",
      url: "/themes",
      items: themes.map((theme) => ({
        name: theme.name,
        url: `/themes/${theme.slug}`,
      })),
    }),
  ]

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={jsonLd} />
        <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Thématiques" }]} />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Thématiques de préparation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choisissez une thématique pour accéder aux fiches essentielles et progresser pas à pas.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  )
}
