import { notFound } from "next/navigation"
import Link from "next/link"
import { fiches, getFicheBySlug, getFichesByTheme } from "@/lib/data/fiches"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FicheCard } from "@/components/cards/fiche-card"
import { ArrowLeft, BookOpen, CheckCircle, Lightbulb, MessageCircle, Star } from "lucide-react"

export async function generateStaticParams() {
  return fiches.map((fiche) => ({
    slug: fiche.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fiche = getFicheBySlug(slug)

  if (!fiche) {
    return {
      title: "Fiche non trouvée | Préparation QuizCitoyen",
    }
  }

  return {
    title: `${fiche.title} | Préparation QuizCitoyen`,
    description: fiche.description,
    alternates: {
      canonical: `/fiches/${fiche.slug}`,
    },
    openGraph: {
      title: `${fiche.title} | Préparation QuizCitoyen`,
      description: fiche.description,
      url: `/fiches/${fiche.slug}`,
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
      title: `${fiche.title} | Préparation QuizCitoyen`,
      description: fiche.description,
      images: ["/logo.png"],
    },
  }
}

export default async function FichePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fiche = getFicheBySlug(slug)

  if (!fiche) {
    notFound()
  }

  const siteUrl = "https://www.quizcitoyen.fr"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fiche.title,
    description: fiche.description,
    articleSection: fiche.theme,
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
      "@id": `${siteUrl}/fiches/${fiche.slug}`,
    },
  }

  const relatedFiches = getFichesByTheme(fiche.themeSlug)
    .filter((f) => f.slug !== fiche.slug)
    .slice(0, 3)

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Back link */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/fiches">
              <ArrowLeft className="h-4 w-4" />
              Retour aux fiches
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Link
              href={`/fiches?theme=${fiche.themeSlug}`}
              className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/20"
            >
              {fiche.theme}
            </Link>
            {fiche.isEssential && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <Star className="h-3 w-3" />
                Fiche essentielle
              </span>
            )}
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {fiche.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {fiche.description}
          </p>
        </header>

        {/* Definition card */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              Définition
            </h2>
            <p className="text-sm leading-relaxed text-foreground">
              {fiche.definition}
            </p>
          </CardContent>
        </Card>

        {/* Key points */}
        <div className="mb-8">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <CheckCircle className="h-5 w-5 text-primary" />
            Points clés à retenir
          </h2>
          <ul className="space-y-3">
            {fiche.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Example card */}
        <Card className="mb-8 border-secondary bg-secondary/50">
          <CardContent className="p-6">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Lightbulb className="h-5 w-5 text-primary" />
              Exemple concret
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {fiche.example}
            </p>
          </CardContent>
        </Card>

        {/* Oral tip card */}
        <Card className="mb-10 border-accent/30 bg-accent/5">
          <CardContent className="p-6">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <MessageCircle className="h-5 w-5 text-accent" />
              Astuce pour l'oral
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {fiche.oralTip}
            </p>
          </CardContent>
        </Card>

        {/* Related fiches */}
        {relatedFiches.length > 0 && (
          <div className="mt-12 border-t border-border pt-10">
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Fiches de la même thématique
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedFiches.map((related) => (
                <FicheCard
                  key={related.slug}
                  title={related.title}
                  description={related.description}
                  slug={related.slug}
                  theme={related.theme}
                />
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/fiches">Voir toutes les fiches</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
