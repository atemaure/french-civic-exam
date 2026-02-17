import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Clock3, ShieldCheck, Target } from "lucide-react"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { examThemes, getExamThemeBySlug } from "@/lib/data/exam-themes"
import { getFichesByTheme } from "@/lib/data/fiches"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"
import { getIconByExamThemeSlug } from "@/lib/ui/theme-icons"

type PageProps = {
  params: Promise<{ themeSlug: string }>
}

export async function generateStaticParams() {
  return examThemes.map((theme) => ({
    themeSlug: theme.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { themeSlug } = await params
  const theme = getExamThemeBySlug(themeSlug)

  if (!theme) {
    return createMetadata({
      title: "Thème introuvable",
      description: "Ce thème d'examen n'existe pas.",
      path: "/themes-examen",
      noIndex: true,
    })
  }

  return createMetadata({
    title: `${theme.title} | Thèmes de l'examen`,
    description: theme.description,
    path: `/themes-examen/${theme.slug}`,
  })
}

export default async function ThemeDetailPage({ params }: PageProps) {
  const { themeSlug } = await params
  const theme = getExamThemeBySlug(themeSlug)

  if (!theme) {
    notFound()
  }

  const introLines = [
    `Ce thème fait partie des connaissances incontournables de l'examen civique.`,
    `Il vous aide à comprendre ${theme.title.toLowerCase()} avec des repères concrets et utiles à l'oral.`,
    "L'objectif est de savoir expliquer clairement ces notions, et pas seulement les réciter.",
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
          ])}
        />
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Thèmes de l'examen", href: "/themes-examen" },
            { label: theme.title },
          ]}
        />

        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-blue-50/70 to-background p-6 shadow-md shadow-black/5 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-slate-100" />
          <div className="absolute right-5 top-5 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white/90 sm:flex">
            <ThemeIcon className="h-5 w-5 text-blue-700" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{theme.title}</h1>
          <p className="mt-3 text-base font-semibold text-foreground">{theme.description}</p>
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
              <p className="mt-1 text-sm font-semibold text-foreground">{theme.prepTime}</p>
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

          <div className="mt-6 rounded-xl border border-border/70 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Pourquoi ce thème est important à l'entretien
            </h2>
            <ul className="mt-3 space-y-2.5">
              {theme.interviewImportance.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                  <span className="text-sm text-foreground/80 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-border/70 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Ce que l'examinateur évalue
            </h2>
            <ul className="mt-3 space-y-2.5">
              {theme.examinerEvaluates.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  <span className="text-sm text-foreground/85 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-border/70 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">Points clés</h2>
            <ul className="mt-3 space-y-3">
              {theme.details.map((detail) => (
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

          <div className="mt-5 rounded-xl border border-border/70 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Comment bien réviser ce thème
            </h2>
            <ul className="mt-3 space-y-2.5">
              {theme.revisionTips.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                  <span className="text-sm text-foreground/80 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={theme.fichesHref}
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Voir les fiches liées
            </Link>
            <Link
              href="/themes-examen"
              className="inline-flex rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Retour aux thèmes
            </Link>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Approfondissez ce thème pour arriver à l'entretien avec des réponses claires et convaincantes.
          </p>
        </div>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Sous-thèmes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {theme.subThemes.map((subTheme) => (
              <article key={subTheme.slug} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <ThemeIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  <h3 className="text-base font-semibold text-foreground">{subTheme.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{subTheme.info}</p>
                <Link
                  href={`/themes-examen/${theme.slug}/${subTheme.slug}`}
                  className="mt-4 inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Voir plus
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
