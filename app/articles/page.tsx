import Link from "next/link"
import { articles, getArticlesByCategory } from "@/lib/data/articles"
import { createMetadata } from "@/lib/seo/metadata"
import { ArticleCard } from "@/components/cards/article-card"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"

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
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={breadcrumbJsonLd([
          { name: "Accueil", url: "/" },
          { name: "Articles", url: "/articles" },
        ])} />
        <Breadcrumbs items={[
          { label: "Accueil", href: "/" },
          { label: "Articles" },
        ]} />
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {selected && selected.value ? `Articles — ${selected.name}` : "Articles et conseils quotidiens"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Des articles pédagogiques pour progresser chaque jour dans votre préparation 
            à l'examen civique et à l'entretien de naturalisation.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <Link
              key={category.value}
              href={category.value ? `/articles?category=${category.value}` : "/articles"}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category.value === selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Articles grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              slug={article.slug}
              category={article.category}
            />
          ))}
        </div>

        {/* Empty state message if needed */}
        {displayedArticles.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Aucun article disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
