import Link from "next/link"
import { createMetadata } from "@/lib/seo/metadata"
import { Button } from "@/components/ui/button"
import { ArticleCard } from "@/components/cards/article-card"
import { ThemeCard } from "@/components/cards/theme-card"
import { CheckCircle, BookOpen, MessageCircle, ArrowRight, Users, FileText, Lightbulb } from "lucide-react"

export const metadata = createMetadata({
  title: "Préparation à l'entretien civique",
  description: "Préparez l'examen civique français simplement et efficacement. Fiches claires, conseils quotidiens et méthode simple pour réussir l'entretien de naturalisation.",
  path: "/",
})

// Sample data - replace with actual data fetching
const latestArticles = [
  {
    title: "Comment bien préparer son entretien de naturalisation",
    excerpt: "Découvrez les conseils essentiels pour aborder sereinement votre entretien avec l'agent préfectoral et répondre aux questions sur les valeurs républicaines.",
    date: "15 janvier 2026",
    slug: "preparer-entretien-naturalisation",
    category: "Conseils",
  },
  {
    title: "Les 5 valeurs fondamentales de la République française",
    excerpt: "Liberté, Égalité, Fraternité... mais pas seulement. Découvrez les cinq valeurs qui fondent notre République et comment les expliquer simplement.",
    date: "12 janvier 2026",
    slug: "valeurs-fondamentales-republique",
    category: "Valeurs",
  },
  {
    title: "Comprendre le rôle du Président de la République",
    excerpt: "Chef de l'État, garant de la Constitution, chef des armées : découvrez les pouvoirs et les responsabilités du Président de la République française.",
    date: "10 janvier 2026",
    slug: "role-president-republique",
    category: "Institutions",
  },
]

const themes = [
  {
    title: "Principes et valeurs",
    description: "Liberté, Égalité, Fraternité et les valeurs fondamentales de la République française.",
    slug: "valeurs",
    ficheCount: 12,
  },
  {
    title: "Droits et devoirs",
    description: "Les droits fondamentaux des citoyens et leurs devoirs envers la République.",
    slug: "droits",
    ficheCount: 8,
  },
  {
    title: "Institutions françaises",
    description: "Le fonctionnement de l'État, le Parlement, le Gouvernement et les collectivités.",
    slug: "institutions",
    ficheCount: 15,
  },
  {
    title: "Histoire et symboles",
    description: "Les grandes dates de l'histoire de France et les symboles de la République.",
    slug: "histoire",
    ficheCount: 10,
  },
  {
    title: "Vivre en France",
    description: "La vie quotidienne, la laïcité et les principes du vivre-ensemble.",
    slug: "vivre",
    ficheCount: 7,
  },
]

const audienceItems = [
  {
    icon: Users,
    title: "Candidats à la naturalisation",
    description: "Vous préparez votre demande de nationalité française et souhaitez réussir l'examen civique.",
  },
  {
    icon: FileText,
    title: "Résidents étrangers en France",
    description: "Vous vivez en France et souhaitez mieux comprendre les valeurs et institutions françaises.",
  },
  {
    icon: Lightbulb,
    title: "Curieux de la République",
    description: "Vous souhaitez simplement approfondir vos connaissances sur la France et ses institutions.",
  },
]

const benefitsItems = [
  {
    icon: FileText,
    title: "Fiches pratiques par thématique",
    description: "Des fiches claires et structurées pour chaque sujet de l'examen civique.",
  },
  {
    icon: BookOpen,
    title: "Articles et conseils quotidiens",
    description: "Des conseils pratiques et des explications simples pour progresser chaque jour.",
  },
  {
    icon: MessageCircle,
    title: "Méthode pour l'oral",
    description: "Une méthode claire pour savoir comment répondre aux questions de l'entretien.",
  },
]

export default function HomePage() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.quizcitoyen.fr"
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Préparez l'examen civique français simplement et efficacement
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Fiches claires, conseils quotidiens et méthode simple pour réussir 
              l'entretien de naturalisation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/fiches">
                  Commencer la préparation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent">
                <Link href="/fiches?essential=true">
                  Voir les fiches essentielles
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                <Link href={appUrl} target="_blank" rel="noopener noreferrer">
                  Accéder à l'app QuizCitoyen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              À qui s'adresse ce site
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un accompagnement adapté à votre parcours
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {audienceItems.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ce que vous trouverez ici
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tous les outils pour réussir votre préparation
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefitsItems.map((item) => (
              <div 
                key={item.title} 
                className="rounded-xl bg-background p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Accès gratuit
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Les grandes thématiques de l'examen civique
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explorez les cinq domaines essentiels à maîtriser
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme) => (
              <ThemeCard key={theme.slug} {...theme} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/fiches">
                Voir toutes les fiches
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Derniers articles
            </h2>
            <p className="mt-4 text-muted-foreground">
              Conseils et explications pour progresser chaque jour
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/articles">
                Voir tous les articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                Commencez votre préparation dès aujourd'hui
              </h2>
              <p className="mt-2 text-primary-foreground/80">
                Accédez gratuitement à toutes nos fiches et ressources
              </p>
            </div>
            <Button 
              size="lg" 
              variant="secondary" 
              asChild 
              className="shrink-0"
            >
              <Link href="/fiches">
                Voir les fiches
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
