import { notFound } from "next/navigation"
import Link from "next/link"
import { articles, getArticleBySlug, toISODate } from "@/lib/data/articles"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
    return {
      title: "Article non trouvé | Préparation QuizCitoyen",
    }
  }

  return {
    title: `${article.title} | Préparation QuizCitoyen`,
    description: article.excerpt,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Préparation QuizCitoyen`,
      description: article.excerpt,
      url: `/articles/${article.slug}`,
      type: "article",
      siteName: "QuizCitoyen",
      locale: "fr_FR",
      images: [
        {
          url: "/logo.png",
          alt: "QuizCitoyen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Préparation QuizCitoyen`,
      description: article.excerpt,
      images: ["/logo.png"],
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }
  const dateIso = toISODate(article.date) ?? article.date
  const blocks = parseArticleContent(article.content)
  const siteUrl = "https://www.quizcitoyen.fr"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: dateIso,
    dateModified: dateIso,
    image: `${siteUrl}/logo.png`,
    author: {
      "@type": "Organization",
      name: "QuizCitoyen",
    },
    publisher: {
      "@type": "Organization",
      name: "QuizCitoyen",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/articles/${article.slug}`,
    },
  }

  return (
    <div className="py-12 sm:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Back link */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/articles">
              <ArrowLeft className="h-4 w-4" />
              Retour aux articles
            </Link>
          </Button>
        </div>

        {/* Header */}
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

        {/* Key points card */}
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

        {/* Article content */}
        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          {blocks.map((block, index) => {
            if (block.type === "h2") {
              return <h2 key={index} className="text-foreground">{block.text}</h2>
            }
            if (block.type === "h3") {
              return <h3 key={index} className="text-foreground">{block.text}</h3>
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

        {/* Oral tip card */}
        {article.oralTip && (
          <Card className="mt-10 border-accent/30 bg-accent/5">
            <CardContent className="p-6">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                <MessageCircle className="h-5 w-5 text-accent" />
                Astuce pour l'oral
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {article.oralTip}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <Button asChild>
            <Link href="/articles">
              Voir tous les articles
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
