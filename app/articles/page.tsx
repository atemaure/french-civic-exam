import Link from "next/link"
import { articles, getArticlesByCategory } from "@/lib/data/articles"
import { createMetadata } from "@/lib/seo/metadata"
import { ArticleCard } from "@/components/cards/article-card"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { BookOpen } from "lucide-react"

const categories = [
  { name: "Tous", value: "" },
  { name: "Conseils", value: "conseils" },
  { name: "Valeurs", value: "valeurs" },
  { name: "Institutions", value: "institutions" },
  { name: "Histoire", value: "histoire" },
  { name: "Droits", value: "droits" },
]

interface PageProps {
  searchParams: Promise<{ category?: string }>
}

export async function generateMetadata({ searchParams }: PageProps) {
  const params = await searchParams
  const selectedCategory = params.category ?? ""
  const selected = categories.find((category) => category.value === selectedCategory)
  const title = selected && selected.value ? `Articles — ${selected.name}` : "Articles et conseils"

  return createMetadata({
    title,
    description: "Articles pédagogiques et conseils quotidiens pour préparer l'examen civique et l'entretien de naturalisation française.",
    path: "/articles",
    noIndex: Boolean(selected && selected.value),
  })
}

export default async function ArticlesPage({ searchParams }: PageProps) {
  const params = await searchParams
  const selectedCategory = params.category ?? ""
  const selected = categories.find((category) => category.value === selectedCategory)
  const displayedArticles =
    selected && selected.value ? getArticlesByCategory(selected.name) : articles

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={breadcrumbJsonLd([
          { name: "Accueil", url: "/" },
          { name: "Articles", url: "/articles" },
        ])} />
        <Breadcrumbs items={[
          { label: "Accueil", href: "/" },
          { label: "Articles" },
        ]} />

        {/* Hero header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {selected && selected.value ? `Articles — ${selected.name}` : "Articles et conseils"}
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Des articles pedagogiques pour progresser chaque jour dans votre preparation 
            a l'examen civique et a l'entretien de naturalisation.
          </p>
        </div>

        {/* Category filters */}
        <nav aria-label="Filtres par categorie" className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <Link
              key={category.value}
              href={category.value ? `/articles?category=${category.value}` : "/articles"}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                category.value === selectedCategory
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Count indicator */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            {displayedArticles.length} article{displayedArticles.length > 1 ? "s" : ""} disponible{displayedArticles.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Articles grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              slug={article.slug}
              category={article.category}
              readingTime={article.readingTime}
            />
          ))}
        </div>

        {/* Empty state */}
        {displayedArticles.length === 0 && (
          <div className="mt-16 flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <BookOpen className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground">Aucun article disponible</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Revenez bientot pour de nouveaux contenus.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
