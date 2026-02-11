import { notFound } from "next/navigation"
import Link from "next/link"

import { articles, getArticleBySlug, getArticlesByCategory, getLatestArticles, toISODate } from "@/lib/data/articles"
import { getFichesByTheme } from "@/lib/data/fiches"
import { Button } from "@/components/ui/button"
import { FicheCard } from "@/components/cards/fiche-card"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"
import { slugifyHeading } from "@/lib/seo/slugify"
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  CheckCircle,
  MessageCircle,
  BookOpen,
  ArrowRight,
  List,
} from "lucide-react"

type ListItem = {
  type: "label" | "plain"
  label?: string
  text: string
  number?: number
}

type ContentBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul" | "ol"; items: ListItem[] }

function parseArticleContent(content: string): ContentBlock[] {
  const blocks: ContentBlock[] = []
  const lines = content.split("\n")
  let currentList: { type: "ul" | "ol"; items: ListItem[] } | null = null

  const flushList = () => {
    if (currentList) {
      blocks.push(currentList)
      currentList = null
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) {
      flushList()
      continue
    }

    if (line.startsWith("## ")) {
      flushList()
      blocks.push({ type: "h2", text: line.replace("## ", "") })
      continue
    }

    if (line.startsWith("### ")) {
      flushList()
      blocks.push({ type: "h3", text: line.replace("### ", "") })
      continue
    }

    const labeledBulletMatch = line.match(/^- \*\*(.+?)\*\*\s*:\s*(.+)/)
    if (labeledBulletMatch) {
      if (!currentList || currentList.type !== "ul") {
        flushList()
        currentList = { type: "ul", items: [] }
      }
      currentList.items.push({
        type: "label",
        label: labeledBulletMatch[1],
        text: labeledBulletMatch[2],
      })
      continue
    }

    const bulletMatch = line.match(/^- (.+)/)
    if (bulletMatch) {
      if (!currentList || currentList.type !== "ul") {
        flushList()
        currentList = { type: "ul", items: [] }
      }
      currentList.items.push({
        type: "plain",
        text: bulletMatch[1],
      })
      continue
    }

    const numberedMatch = line.match(/^(\d+)\.\s+\*\*(.+?)\*\*\s*:\s*(.+)/)
    if (numberedMatch) {
      if (!currentList || currentList.type !== "ol") {
        flushList()
        currentList = { type: "ol", items: [] }
      }
      currentList.items.push({
        type: "label",
        number: Number(numberedMatch[1]),
        label: numberedMatch[2],
        text: numberedMatch[3],
      })
      continue
    }

    flushList()
    blocks.push({ type: "p", text: line })
  }

  flushList()
  return blocks
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return createMetadata({
      title: "Article non trouve",
      description: "Cet article n'existe pas ou a ete deplace.",
      path: "/articles",
      noIndex: true,
    })
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/articles/${article.slug}`,
    type: "article",
  })
}

const categoryToTheme: Record<string, string> = {
  Valeurs: "valeurs",
  Droits: "droits",
  Institutions: "institutions",
  Histoire: "histoire",
  Conseils: "vivre",
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const dateIso = toISODate(article.date) ?? article.date
  const blocks = parseArticleContent(article.content)

  const headingCounts = new Map<string, number>()
  const headingIds = new Map<number, string>()
  const toc: Array<{ id: string; text: string; level: "h2" | "h3" }> = []

  blocks.forEach((block, index) => {
    if (block.type === "h2" || block.type === "h3") {
      const base = slugifyHeading(block.text)
      const count = (headingCounts.get(base) ?? 0) + 1
      headingCounts.set(base, count)
      const id = count > 1 ? `${base}-${count}` : base
      headingIds.set(index, id)
      toc.push({ id, text: block.text, level: block.type })
    }
  })

  const category = article.category
  const themeSlug = categoryToTheme[category]
  const relatedFiches = themeSlug ? getFichesByTheme(themeSlug).slice(0, 3) : []

  const relatedArticles = getArticlesByCategory(category)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2)

  const fallbackArticles = relatedArticles.length ? relatedArticles : getLatestArticles(2)

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Articles", url: "/articles" },
    { name: article.title, url: `/articles/${article.slug}` },
  ]

  const jsonLd = [
    breadcrumbJsonLd(breadcrumbItems),
    articleJsonLd({
      title: article.title,
      description: article.excerpt,
      url: `/articles/${article.slug}`,
      datePublished: dateIso,
      dateModified: dateIso,
      section: article.category,
      keywords: [article.category, ...article.keyPoints.slice(0, 4)],
    }),
  ]

  return (
    <div className="pb-16 sm:pb-24">
      <JsonLd data={jsonLd} />

      {/* Hero header with colored background */}
      <div className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Articles", href: "/articles" },
              { label: article.title },
            ]}
          />

          <div className="mb-6 mt-4">
            <Button variant="ghost" size="sm" asChild className="gap-2 px-0 text-muted-foreground hover:bg-transparent hover:text-primary">
              <Link href="/articles">
                <ArrowLeft className="h-4 w-4" />
                Retour aux articles
              </Link>
            </Button>
          </div>

          <header>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-primary">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <time dateTime={dateIso}>{article.date}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readingTime} de lecture
                </span>
              </div>
            </div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </header>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Key points section */}
        <section className="-mt-8 mb-12 rounded-2xl border border-primary/20 bg-card p-6 shadow-sm sm:p-8">
          <h2 className="mb-5 flex items-center gap-2.5 text-base font-semibold text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <CheckCircle className="h-4 w-4 text-primary" />
            </span>
            A retenir
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {article.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 rounded-xl bg-secondary/50 p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-sm leading-relaxed text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Table of contents */}
        {toc.length >= 2 && (
          <section className="mb-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="mb-5 flex items-center gap-2.5 text-base font-semibold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <List className="h-4 w-4 text-foreground" />
              </span>
              Sommaire
            </h2>
            <nav aria-label="Table des matieres">
              <ul className="flex flex-col gap-1">
                {toc.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={`flex items-center rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary hover:text-foreground ${
                        item.level === "h3"
                          ? "ml-4 text-muted-foreground"
                          : "font-medium text-foreground"
                      }`}
                    >
                      {item.level === "h2" && (
                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-primary" />
                      )}
                      {item.level === "h3" && (
                        <span className="mr-3 h-1 w-1 rounded-full bg-muted-foreground/40" />
                      )}
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        )}

        {/* Article content */}
        <div className="mb-12">
          {blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  id={headingIds.get(index)}
                  className="mb-4 mt-14 border-b border-border pb-3 text-2xl font-bold tracking-tight text-foreground first:mt-0"
                >
                  {block.text}
                </h2>
              )
            }
            if (block.type === "h3") {
              return (
                <h3
                  key={index}
                  id={headingIds.get(index)}
                  className="mb-3 mt-10 text-xl font-semibold text-foreground"
                >
                  {block.text}
                </h3>
              )
            }
            if (block.type === "p") {
              return (
                <p key={index} className="mb-5 text-base leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              )
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="mb-6 flex flex-col gap-2.5 pl-1">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-base leading-relaxed">
                        {item.type === "label" ? (
                          <>
                            <strong className="font-semibold text-foreground">{item.label}</strong>
                            <span className="text-muted-foreground"> : {item.text}</span>
                          </>
                        ) : (
                          <span className="text-muted-foreground">{item.text}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              )
            }
            if (block.type === "ol") {
              return (
                <ol key={index} className="mb-6 flex flex-col gap-3 pl-1">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 rounded-xl bg-secondary/40 p-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {item.number ?? itemIndex + 1}
                      </span>
                      <span className="text-base leading-relaxed">
                        {item.type === "label" ? (
                          <>
                            <strong className="font-semibold text-foreground">{item.label}</strong>
                            <span className="text-muted-foreground"> : {item.text}</span>
                          </>
                        ) : (
                          <span className="text-muted-foreground">{item.text}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              )
            }
            return null
          })}
        </div>

        {/* Oral tip */}
        {article.oralTip && (
          <section className="mb-12 rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <h2 className="mb-4 flex items-center gap-2.5 text-base font-semibold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                <MessageCircle className="h-4 w-4 text-accent" />
              </span>
              Astuce pour l'oral
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{article.oralTip}</p>
          </section>
        )}

        {/* Related content */}
        {(relatedFiches.length > 0 || fallbackArticles.length > 0) && (
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="mb-6 flex items-center gap-2.5 text-base font-semibold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <BookOpen className="h-4 w-4 text-foreground" />
              </span>
              A lire aussi
            </h2>

            {relatedFiches.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Fiches associees
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedFiches.map((fiche) => (
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
            )}

            {fallbackArticles.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Articles complementaires
                </h3>
                <div className="flex flex-col gap-2">
                  {fallbackArticles.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/articles/${item.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-border p-4 transition-all hover:border-primary/30 hover:bg-secondary/50"
                    >
                      <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Sources and back link */}
        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">Pour des sources officielles, consultez notre page de references.</p>
            <Link href="/sources" className="text-sm font-medium text-primary hover:underline">
              Voir les sources officielles
            </Link>
          </div>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/articles">Voir tous les articles</Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
