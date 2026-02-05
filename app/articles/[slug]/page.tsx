import { notFound } from "next/navigation"
import Link from "next/link"

import { articles, getArticleBySlug, getArticlesByCategory, getLatestArticles, toISODate } from "@/lib/data/articles"
import { getFichesByTheme } from "@/lib/data/fiches"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FicheCard } from "@/components/cards/fiche-card"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"
import { slugifyHeading } from "@/lib/seo/slugify"
import { ArrowLeft, CalendarDays, Clock, CheckCircle, MessageCircle } from "lucide-react"

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
      title: "Article non trouvé",
      description: "Cet article n'existe pas ou a été déplacé.",
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
    <div className="py-12 sm:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={jsonLd} />
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Articles", href: "/articles" },
            { label: article.title },
          ]}
        />
        <div className="mb-8">
          <Button variant="ghost" asChild className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/articles">
              <ArrowLeft className="h-4 w-4" />
              Retour aux articles
            </Link>
          </Button>
        </div>

        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={dateIso}>{article.date}</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{article.readingTime} de lecture</span>
            </div>
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
        </header>

        {toc.length >= 2 && (
          <Card className="mb-10 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Sommaire</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {toc.map((item) => (
                  <li key={item.id} className={item.level === "h3" ? "pl-4" : ""}>
                    <Link href={`#${item.id}`} className="hover:text-primary">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Card className="mb-10 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              À retenir
            </h2>
            <ul className="space-y-3">
              {article.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {index + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          {blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} id={headingIds.get(index)} className="text-foreground">
                  {block.text}
                </h2>
              )
            }
            if (block.type === "h3") {
              return (
                <h3 key={index} id={headingIds.get(index)} className="text-foreground">
                  {block.text}
                </h3>
              )
            }
            if (block.type === "p") {
              return <p key={index}>{block.text}</p>
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="space-y-2">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <p className="m-0">
                        {item.type === "label" ? (
                          <>
                            <strong className="text-foreground">{item.label}</strong>
                            <span className="text-muted-foreground"> : {item.text}</span>
                          </>
                        ) : (
                          <span className="text-muted-foreground">{item.text}</span>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              )
            }
            if (block.type === "ol") {
              return (
                <ol key={index} className="space-y-3">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-foreground">
                        {item.number ?? itemIndex + 1}
                      </span>
                      <p className="m-0">
                        {item.type === "label" ? (
                          <>
                            <strong className="text-foreground">{item.label}</strong>
                            <span className="text-muted-foreground"> : {item.text}</span>
                          </>
                        ) : (
                          <span className="text-muted-foreground">{item.text}</span>
                        )}
                      </p>
                    </li>
                  ))}
                </ol>
              )
            }
            return null
          })}
        </div>

        {article.oralTip && (
          <Card className="mt-10 border-accent/30 bg-accent/5">
            <CardContent className="p-6">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                <MessageCircle className="h-5 w-5 text-accent" />
                Astuce pour l'oral
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{article.oralTip}</p>
            </CardContent>
          </Card>
        )}

        {(relatedFiches.length > 0 || fallbackArticles.length > 0) && (
          <div className="mt-12 border-t border-border pt-10">
            <h2 className="mb-6 text-xl font-semibold text-foreground">À lire aussi</h2>
            <div className="space-y-8">
              {relatedFiches.length > 0 && (
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Fiches associées</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
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
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Articles complémentaires</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {fallbackArticles.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/articles/${item.slug}`} className="hover:text-primary">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center text-sm text-muted-foreground">
          <p>Pour des sources officielles, consultez notre page de références.</p>
          <Link href="/sources" className="font-medium text-primary hover:underline">
            Voir les sources officielles
          </Link>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild>
            <Link href="/articles">Voir tous les articles</Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
