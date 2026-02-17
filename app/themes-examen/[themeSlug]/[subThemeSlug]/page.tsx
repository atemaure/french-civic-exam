import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock3, ShieldCheck, Target } from "lucide-react"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { examThemes, getExamSubThemeBySlug, getExamThemeBySlug } from "@/lib/data/exam-themes"
import { getFichesByTheme } from "@/lib/data/fiches"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"
import { getIconByExamThemeSlug } from "@/lib/ui/theme-icons"

type PageProps = {
  params: Promise<{ themeSlug: string; subThemeSlug: string }>
}

export async function generateStaticParams() {
  return examThemes.flatMap((theme) =>
    theme.subThemes.map((subTheme) => ({
      themeSlug: theme.slug,
      subThemeSlug: subTheme.slug,
    }))
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { themeSlug, subThemeSlug } = await params
  const theme = getExamThemeBySlug(themeSlug)
  const subTheme = theme ? getExamSubThemeBySlug(theme, subThemeSlug) : undefined

  if (!theme || !subTheme) {
    return createMetadata({
      title: "Sous-thème introuvable",
      description: "Ce sous-thème d'examen n'existe pas.",
      path: "/themes-examen",
      noIndex: true,
    })
  }

  return createMetadata({
    title: `${subTheme.name} | ${theme.title}`,
    description: subTheme.info,
    path: `/themes-examen/${theme.slug}/${subTheme.slug}`,
  })
}

export default async function SubThemeDetailPage({ params }: PageProps) {
  const { themeSlug, subThemeSlug } = await params
  const theme = getExamThemeBySlug(themeSlug)
  const subTheme = theme ? getExamSubThemeBySlug(theme, subThemeSlug) : undefined

  if (!theme || !subTheme) {
    notFound()
  }

  const introLines = [
    `Ce sous-thème fait partie des notions importantes de "${theme.title}".`,
    "Les questions attendent des réponses claires, concrètes et adaptées à l'entretien civique.",
    "L'objectif est de comprendre, d'expliquer simplement et d'illustrer avec un exemple.",
  ]

  const linkedThemeSlug = new URLSearchParams(theme.fichesHref.split("?")[1] ?? "").get("theme")
  const linkedFichesCount = linkedThemeSlug ? getFichesByTheme(linkedThemeSlug).length : 0
  const ThemeIcon = getIconByExamThemeSlug(theme.slug)

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Accueil", url: "/" },
            { name: "Thèmes de l'examen", url: "/themes-examen" },
            { name: theme.title, url: `/themes-examen/${theme.slug}` },
            { name: subTheme.name, url: `/themes-examen/${theme.slug}/${subTheme.slug}` },
          ])}
        />
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Thèmes de l'examen", href: "/themes-examen" },
            { label: theme.title, href: `/themes-examen/${theme.slug}` },
            { label: subTheme.name },
          ]}
        />

        <article className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-blue-50/70 to-background p-6 shadow-md shadow-black/5 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-slate-100" />
          <div className="absolute right-5 top-5 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white/90 sm:flex">
            <ThemeIcon className="h-5 w-5 text-blue-700" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{theme.title}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{subTheme.name}</h1>
          <p className="mt-3 text-base font-semibold text-foreground">{subTheme.info}</p>

          <div className="mt-4 space-y-1.5">
            {introLines.map((line) => (
              <p key={line} className="text-sm text-foreground/80 sm:text-base">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <Clock3 className="h-3.5 w-3.5 text-blue-600" />
                Temps de révision
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">{theme.prepTime} pour le thème complet</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <Target className="h-3.5 w-3.5 text-blue-600" />
                Fiches liées
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {linkedFichesCount > 0 ? `${linkedFichesCount} fiches disponibles` : "Voir les fiches du thème"}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-border/70 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">Points clés du sous-thème</h2>
            <ul className="mt-3 space-y-3">
              {subTheme.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  {detail.includes(":") ? (
                    <span className="text-sm text-foreground/85 sm:text-base">
                      <strong className="font-semibold text-foreground">{detail.split(":")[0]}:</strong>{" "}
                      {detail.split(":").slice(1).join(":").trim()}
                    </span>
                  ) : (
                    <span className="text-sm text-foreground/85 sm:text-base">{detail}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50/50 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">Conseil pour l'entretien</h2>
            <p className="mt-3 text-sm text-foreground/85 sm:text-base">
              Préparez une réponse courte (30 à 45 secondes), définissez la notion, puis donnez un exemple concret.
              C'est le meilleur format pour montrer une vraie compréhension à l'oral.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={theme.fichesHref}
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Voir les fiches liées
            </Link>
            <Link
              href={`/themes-examen/${theme.slug}`}
              className="inline-flex rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Retour au thème
            </Link>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Maîtrisez ce sous-thème pour gagner en précision et en confiance pendant l'entretien.
          </p>
        </article>
      </div>
    </div>
  )
}
