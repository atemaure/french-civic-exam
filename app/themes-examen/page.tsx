import Link from "next/link"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { examThemes } from "@/lib/data/exam-themes"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"

export const metadata = createMetadata({
  title: "Thèmes de l'examen civique",
  description: "Vue d'ensemble des 5 grandes catégories de l'examen civique et de leurs sous-thématiques à maîtriser.",
  path: "/themes-examen",
})

export default function ThemesExamenPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Accueil", url: "/" },
            { name: "Thèmes de l'examen", url: "/themes-examen" },
          ])}
        />
        <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Thèmes de l'examen" }]} />

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Thèmes de l'examen civique
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Retrouvez les 5 grandes catégories évaluées à l'examen, avec les sous-thématiques à connaître.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {examThemes.map((theme, index) => (
            <section key={theme.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {index + 1}) {theme.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{theme.description}</p>
                </div>
                <Link
                  href={`/themes-examen/${theme.slug}`}
                  className="inline-flex rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Voir plus
                </Link>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {theme.subThemes.map((subTheme) => (
                  <Link
                    key={subTheme.name}
                    href={`/themes-examen/${theme.slug}/${subTheme.slug}`}
                    className="block rounded-xl border border-border/70 bg-secondary/20 p-4 transition-colors hover:border-primary/40 hover:bg-secondary/30"
                  >
                    <h3 className="text-sm font-semibold text-foreground">{subTheme.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{subTheme.info}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
