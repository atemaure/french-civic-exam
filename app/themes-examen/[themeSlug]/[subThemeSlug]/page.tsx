import Link from "next/link"
import { notFound } from "next/navigation"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { examThemes, getExamSubThemeBySlug, getExamThemeBySlug } from "@/lib/data/exam-themes"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"

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

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{theme.title}</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{subTheme.name}</h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subTheme.info}</p>

          <div className="mt-6 space-y-3">
            {subTheme.details.map((detail) => (
              <p key={detail} className="text-sm text-muted-foreground sm:text-base">
                {detail}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={theme.fichesHref}
              className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
        </article>
      </div>
    </div>
  )
}
