import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { examThemes } from "@/lib/data/exam-themes"
import { getFichesByTheme } from "@/lib/data/fiches"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"
import { getIconByExamThemeSlug } from "@/lib/ui/theme-icons"

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

        <div className="relative mt-4 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-blue-50/70 to-background p-6 shadow-md shadow-black/5 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-slate-100" />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Thèmes de l'examen civique
            </h1>
            <p className="mt-4 text-base text-foreground/80 sm:text-lg">
              Retrouvez les 5 grandes catégories évaluées à l'examen, avec les sous-thématiques à connaître.
            </p>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Cliquez sur un thème pour voir l'explication complète, puis approfondissez via les sous-thèmes.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {examThemes.map((theme, index) => {
            const Icon = getIconByExamThemeSlug(theme.slug)
            const linkedThemeSlug = new URLSearchParams(theme.fichesHref.split("?")[1] ?? "").get("theme")
            const linkedFichesCount = linkedThemeSlug ? getFichesByTheme(linkedThemeSlug).length : 0

            return (
              <section key={theme.title} className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm">
                <div className="border-b border-border/70 bg-secondary/20 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50">
                        <Icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Thème {index + 1}
                        </p>
                        <h2 className="mt-1 text-lg font-semibold text-foreground">{theme.title}</h2>
                        <p className="mt-2 text-sm text-foreground/80">{theme.description}</p>
                      </div>
                    </div>
                    <Link
                      href={`/themes-examen/${theme.slug}`}
                      className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      Voir le thème
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Sous-thèmes</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {theme.subThemes.length} à maîtriser
                      </p>
                    </div>
                    <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Fiches liées</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {linkedFichesCount > 0 ? `${linkedFichesCount} disponibles` : "Voir les fiches"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">Sous-thèmes associés</h3>
                  <div className="grid gap-3">
                    {theme.subThemes.map((subTheme) => (
                      <Link
                        key={subTheme.name}
                        href={`/themes-examen/${theme.slug}/${subTheme.slug}`}
                        className="group block rounded-xl border border-border/70 bg-secondary/20 p-4 transition-colors hover:border-primary/40 hover:bg-secondary/30"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2.5">
                            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                            <div>
                              <h4 className="text-sm font-semibold text-foreground">{subTheme.name}</h4>
                              <p className="mt-1.5 text-sm text-muted-foreground">{subTheme.info}</p>
                            </div>
                          </div>
                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )
          })}
        </div>

        <div className="mt-8 rounded-xl border border-border/70 bg-white p-4 text-sm text-muted-foreground">
          <p>
            Conseil: commencez par le thème le plus difficile pour vous, puis révisez les sous-thèmes un par un pour construire des réponses courtes et claires à l'oral.
          </p>
        </div>
      </div>
    </div>
  )
}
