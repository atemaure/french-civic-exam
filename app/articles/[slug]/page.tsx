import { notFound } from "next/navigation"
import Link from "next/link"
import { articles, getArticleBySlug, toISODate } from "@/lib/data/articles"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CalendarDays, Clock, CheckCircle, MessageCircle } from "lucide-react"

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
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Préparation QuizCitoyen`,
      description: article.excerpt,
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

  return (
    <div className="py-12 sm:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
          {article.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-foreground">{paragraph.replace('## ', '')}</h2>
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-foreground">{paragraph.replace('### ', '')}</h3>
            }
            if (paragraph.startsWith('- **')) {
              const match = paragraph.match(/- \*\*(.+?)\*\*\s*:\s*(.+)/)
              if (match) {
                return (
                  <div key={index} className="flex items-start gap-2 py-1">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <p className="m-0">
                      <strong className="text-foreground">{match[1]}</strong>
                      <span className="text-muted-foreground"> : {match[2]}</span>
                    </p>
                  </div>
                )
              }
            }
            if (paragraph.startsWith('- ')) {
              return (
                <div key={index} className="flex items-start gap-2 py-1">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="m-0 text-muted-foreground">{paragraph.replace('- ', '')}</p>
                </div>
              )
            }
            if (paragraph.match(/^\d+\.\s+\*\*/)) {
              const match = paragraph.match(/^(\d+)\.\s+\*\*(.+?)\*\*\s*:\s*(.+)/)
              if (match) {
                return (
                  <div key={index} className="flex items-start gap-3 py-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-foreground">
                      {match[1]}
                    </span>
                    <p className="m-0">
                      <strong className="text-foreground">{match[2]}</strong>
                      <span className="text-muted-foreground"> : {match[3]}</span>
                    </p>
                  </div>
                )
              }
            }
            if (paragraph.trim() === '') return null
            return <p key={index}>{paragraph}</p>
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
