import { notFound } from "next/navigation"
import Link from "next/link"

import { articles, getArticleBySlug, getArticlesByCategory, getLatestArticles, toISODate } from "@/lib/data/articles"
import { getFichesByTheme, sortFichesByDate } from "@/lib/data/fiches"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FicheCard } from "@/components/cards/fiche-card"
import { AppCtaButton } from "@/components/app-cta-button"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"
import { slugifyHeading } from "@/lib/seo/slugify"
import { getArticleThemeSlug, getIconByArticleCategory } from "@/lib/ui/theme-icons"
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  CheckCircle,
  CircleCheckBig,
  MessageCircle,
  BookOpen,
  ArrowRight,
  List,
} from "lucide-react"

/* ── Inline-markdown renderer ─────────────────────────────────── */
/* Converts **bold** fragments inside a string into <strong> tags */
function renderInlineMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  if (parts.length === 1) return text
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

type ListItem = {
  type: "label" | "plain"
  label?: string
  text: string
  number?: number
}

type ContentBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul" | "ol"; items: ListItem[] }
  | { type: "cta"; label: string; href: string }

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

    /* Standalone bold-label paragraph: **Label** : text */
    const boldLabelParagraph = line.match(/^\*\*(.+?)\*\*\s*:\s*(.+)/)
    if (boldLabelParagraph) {
      flushList()
      blocks.push({ type: "p", text: line })
      continue
    }

    if (line.startsWith("<a") && line.includes('data-slot="button"')) {
      const hrefMatch = line.match(/href="([^"]+)"/i)
      const labelMatch = line.match(/>([^<>]+)<\/a>$/i)
      const href = hrefMatch?.[1] ?? "https://app.quizcitoyen.fr"
      const label = labelMatch?.[1]?.trim() ?? "Accéder à l'app QuizCitoyen"
      flushList()
      blocks.push({
        type: "cta",
        href,
        label,
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
  const themeSlug = getArticleThemeSlug(category)
  const ThemeIcon = getIconByArticleCategory(category)
  const relatedFiches = themeSlug ? sortFichesByDate(getFichesByTheme(themeSlug)).slice(0, 3) : []

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
    <div className="py-12 sm:py-16">
      <JsonLd data={jsonLd} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Articles", href: "/articles" },
              { label: article.title },
            ]}
          />

          <div className="mt-3">
            <Button variant="ghost" size="sm" asChild className="gap-1.5 px-0 text-muted-foreground hover:bg-transparent hover:text-primary">
              <Link href="/articles">
                <ArrowLeft className="h-3.5 w-3.5" />
                <span className="text-xs">Retour aux articles</span>
              </Link>
            </Button>
          </div>
        </div>

        <header className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-blue-50/70 to-background p-6 shadow-md shadow-black/5 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-slate-100" />
          <div className="absolute right-5 top-5 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white/90 sm:flex">
            <ThemeIcon className="h-5 w-5 text-blue-700" />
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
              <ThemeIcon className="h-3.5 w-3.5" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
              <CalendarDays className="h-3 w-3" />
              <time dateTime={dateIso}>{article.date}</time>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
              <Clock className="h-3 w-3" />
              {article.readingTime} de lecture
            </span>
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
            {article.excerpt}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Publié le</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{article.date}</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Lecture</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{article.readingTime}</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Rubrique</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{article.category}</p>
            </div>
          </div>
        </header>

        <article>
          <section className="mb-8 rounded-xl border border-border/70 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <CheckCircle className="h-5 w-5 text-blue-700" />
              A retenir
            </h2>
            <ul className="space-y-3">
              {article.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-secondary/20 px-3 py-3">
                  <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  <span className="text-sm leading-relaxed text-foreground/85">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {toc.length >= 2 && (
            <section className="mb-8 overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm">
              <div className="border-b border-border/70 bg-secondary/30 px-5 py-3 sm:px-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <List className="h-4 w-4 text-blue-700" />
                  Sommaire
                </h2>
              </div>
              <div className="px-5 py-3 sm:px-6">
                <nav aria-label="Table des matieres">
                  <ul className="flex flex-col">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`#${item.id}`}
                          className={`flex items-center rounded-md px-2.5 py-1.5 text-[0.813rem] transition-colors hover:bg-secondary/60 hover:text-foreground ${
                            item.level === "h3"
                              ? "ml-4 text-muted-foreground"
                              : "font-medium text-foreground"
                          }`}
                        >
                          {item.level === "h2" && (
                            <span className="mr-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                          )}
                          {item.level === "h3" && (
                            <span className="mr-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/30" />
                          )}
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </section>
          )}

          <Card className="mb-8 border-border/70 bg-white shadow-sm">
            <CardContent className="p-6 sm:p-8">
              {blocks.map((block, index) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={index}
                      id={headingIds.get(index)}
                      className="mb-2 mt-8 flex items-center gap-2.5 text-lg font-bold tracking-tight text-foreground first:mt-0 sm:text-xl"
                    >
                      <span className="h-5 w-1 rounded-full bg-blue-700" aria-hidden="true" />
                      {renderInlineMarkdown(block.text)}
                    </h2>
                  )
                }
                if (block.type === "h3") {
                  return (
                    <h3
                      key={index}
                      id={headingIds.get(index)}
                      className="mb-2 mt-5 text-base font-semibold text-foreground"
                    >
                      {renderInlineMarkdown(block.text)}
                    </h3>
                  )
                }
                if (block.type === "p") {
                  return (
                    <p key={index} className="mb-3 text-sm leading-relaxed text-foreground/85">
                      {renderInlineMarkdown(block.text)}
                    </p>
                  )
                }
                if (block.type === "ul") {
                  return (
                    <ul key={index} className="mb-4 space-y-2 pl-1">
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2.5 rounded-md border border-border/50 bg-secondary/20 px-3 py-2.5">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                          <span className="text-sm leading-relaxed">
                            {item.type === "label" ? (
                              <>
                                <strong className="font-semibold text-foreground">{item.label}</strong>
                                <span className="text-foreground/85"> : {renderInlineMarkdown(item.text)}</span>
                              </>
                            ) : (
                              <span className="text-foreground/85">{renderInlineMarkdown(item.text)}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                if (block.type === "ol") {
                  return (
                    <ol key={index} className="mb-4 flex flex-col gap-2 pl-1">
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-secondary/10 px-3 py-2.5">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-blue-700 text-[0.65rem] font-bold text-white">
                            {item.number ?? itemIndex + 1}
                          </span>
                          <span className="text-sm leading-relaxed">
                            {item.type === "label" ? (
                              <>
                                <strong className="font-semibold text-foreground">{item.label}</strong>
                                <span className="text-foreground/85"> : {renderInlineMarkdown(item.text)}</span>
                              </>
                            ) : (
                              <span className="text-foreground/85">{renderInlineMarkdown(item.text)}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ol>
                  )
                }
                if (block.type === "cta") {
                  return (
                    <div key={index} className="my-5 flex justify-start">
                      <AppCtaButton label={block.label} href={block.href} size="default" openInNewTab />
                    </div>
                  )
                }
                return null
              })}
            </CardContent>
          </Card>

          {article.oralTip && (
            <Card className="mb-8 border-blue-200 bg-blue-50/50 shadow-sm">
              <CardContent className="p-6">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                  <MessageCircle className="h-5 w-5 text-blue-700" />
                  Astuce pour l'oral
                </h2>
                <p className="text-sm leading-relaxed text-foreground/85">{article.oralTip}</p>
              </CardContent>
            </Card>
          )}

          {(relatedFiches.length > 0 || fallbackArticles.length > 0) && (
            <section className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm">
              <div className="border-b border-border/70 bg-secondary/30 px-5 py-3 sm:px-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <BookOpen className="h-4 w-4 text-blue-700" />
                  A lire aussi
                </h2>
              </div>
              <div className="p-5 sm:p-6">

                {relatedFiches.length > 0 && (
                  <div className="mb-4">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Fiches associees
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {relatedFiches.map((fiche) => (
                        <FicheCard
                          key={fiche.slug}
                          title={fiche.title}
                          description={fiche.description}
                          slug={fiche.slug}
                          theme={fiche.theme}
                          themeSlug={fiche.themeSlug}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {fallbackArticles.length > 0 && (
                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Articles complementaires
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      {fallbackArticles.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/articles/${item.slug}`}
                          className="group flex items-center justify-between rounded-lg border border-border px-3 py-2.5 transition-all hover:border-primary/30 hover:bg-secondary/40"
                        >
                          <span className="text-[0.813rem] font-medium text-foreground transition-colors group-hover:text-primary">
                            {item.title}
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <p className="text-xs text-muted-foreground">Pour des sources officielles, consultez notre page de references.</p>
              <Link href="/sources" className="text-xs font-medium text-primary hover:underline">
                Voir les sources officielles
              </Link>
            </div>
            <Button asChild size="default" className="rounded-full px-6">
              <Link href="/articles">Voir tous les articles</Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
