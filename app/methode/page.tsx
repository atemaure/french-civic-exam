import Link from "next/link"
import { createMetadata } from "@/lib/seo/metadata"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, howToJsonLd } from "@/lib/seo/jsonld"
import {
  BookOpen,
  Brain,
  MessageCircle,
  Target,
  ArrowRight,
  CheckCircle,
  CircleCheckBig,
  Lightbulb,
  Clock,
} from "lucide-react"

export const metadata = createMetadata({
  title: "Méthode de préparation",
  description:
    "Découvrez notre méthode en 4 étapes pour préparer efficacement l'examen civique et réussir l'entretien de naturalisation française.",
  path: "/methode",
})

const steps = [
  {
    number: 1,
    title: "Comprendre",
    icon: BookOpen,
    description:
      "Prenez le temps de bien comprendre les concepts fondamentaux. Ne cherchez pas à tout mémoriser immédiatement.",
    tips: [
      "Lisez les fiches une première fois sans prendre de notes",
      "Identifiez les points que vous ne comprenez pas",
      "Faites le lien avec votre expérience personnelle en France",
      "Posez-vous des questions : pourquoi cette valeur est-elle importante ?",
    ],
    duration: "1-2 semaines",
  },
  {
    number: 2,
    title: "Mémoriser",
    icon: Brain,
    description:
      "Une fois que vous avez compris, retenez les éléments clés. Utilisez des techniques simples pour ancrer les informations.",
    tips: [
      "Relisez les fiches régulièrement (15 min par jour)",
      "Utilisez les points clés à retenir de chaque fiche",
      "Créez des associations : reliez les idées entre elles",
      "Révisez les fiches essentielles en priorité",
    ],
    duration: "2-3 semaines",
  },
  {
    number: 3,
    title: "S'entraîner",
    icon: Target,
    description:
      "Testez vos connaissances régulièrement. L'entraînement permet de consolider ce que vous avez appris.",
    tips: [
      "Essayez d'expliquer chaque concept à quelqu'un",
      "Répondez aux questions sans regarder les fiches",
      "Identifiez vos points faibles et révisez-les",
      "Simulez des situations d'entretien",
    ],
    duration: "1-2 semaines",
  },
  {
    number: 4,
    title: "Répondre à l'oral",
    icon: MessageCircle,
    description:
      "L'entretien est une conversation. Préparez-vous à répondre de manière naturelle et personnelle.",
    tips: [
      "Entraînez-vous à parler à voix haute",
      "Utilisez vos propres mots, pas du par cœur",
      "Illustrez avec des exemples de votre vie",
      "Restez calme et prenez le temps de réfléchir",
    ],
    duration: "1 semaine",
  },
]

const keyAdvice = [
  {
    icon: Clock,
    title: "Commencez tôt",
    description:
      "Ne révisez pas la veille. Prévoyez au moins 4-6 semaines de préparation.",
  },
  {
    icon: Lightbulb,
    title: "Comprenez, ne récitez pas",
    description:
      "L'agent préfectoral veut voir que vous comprenez les valeurs, pas que vous les récitez.",
  },
  {
    icon: CheckCircle,
    title: "Soyez vous-même",
    description:
      "Parlez de votre expérience personnelle. Votre parcours est unique et intéressant.",
  },
]

const planning = [
  { period: "Semaines 1-2", label: "Comprendre les concepts" },
  { period: "Semaines 3-4", label: "Mémoriser les points clés" },
  { period: "Semaine 5", label: "S'entraîner et tester" },
  { period: "Semaine 6", label: "Préparer l'oral" },
]

export default function MethodePage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Accueil", url: "/" },
              { name: "Méthode", url: "/methode" },
            ]),
            howToJsonLd({
              name: "Méthode de préparation à l'entretien civique",
              description:
                "Une approche en 4 étapes pour se préparer sereinement à l'entretien de naturalisation.",
              totalTime: "P6W",
              steps: steps.map((step) => ({
                name: step.title,
                text: step.description,
              })),
            }),
          ]}
        />
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Méthode" },
          ]}
        />

        <div className="relative mt-4 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-blue-50/70 to-background p-6 shadow-md shadow-black/5 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-slate-100" />
          <div className="absolute right-5 top-5 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white/90 sm:flex">
            <Target className="h-5 w-5 text-blue-700" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Méthode de préparation
          </h1>
          <p className="mt-3 text-base font-semibold text-foreground">
            Une approche en 4 étapes pour préparer efficacement l'examen civique et réussir votre entretien de naturalisation.
          </p>
          <div className="mt-4 space-y-1.5">
            <p className="text-sm text-foreground/80 sm:text-base">
              Cette méthode vous aide à structurer votre progression, sans surcharge.
            </p>
            <p className="text-sm text-foreground/80 sm:text-base">
              L'objectif est de comprendre, retenir, puis répondre clairement à l'oral.
            </p>
            <p className="text-sm text-foreground/80 sm:text-base">
              Avancez étape par étape, avec des repères simples et concrets.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-blue-600" />
                Durée totale
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">4 à 6 semaines</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Étapes</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{steps.length} étapes progressives</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Objectif final</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Réussir l'entretien oral</p>
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-xl border border-border/70 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">Conseils fondamentaux</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {keyAdvice.map((advice) => (
              <div key={advice.title} className="rounded-lg border border-border/60 bg-secondary/20 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <advice.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{advice.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{advice.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Les 4 étapes de la méthode</h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <article key={step.number} className="rounded-xl border border-border/70 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2">
                    <step.icon className="h-5 w-5 text-blue-700" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <span className="sm:ml-auto inline-flex rounded-full border border-border bg-secondary/20 px-3 py-1 text-sm text-muted-foreground">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{step.description}</p>
                <ul className="mt-4 space-y-2">
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2.5 rounded-md border border-border/50 bg-secondary/20 px-3 py-2 text-sm text-foreground/85">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-border/70 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Planning recommandé
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Pour une préparation optimale, prévoyez environ 4 à 6 semaines.
          </p>
          <div className="space-y-3">
            {planning.map((item, index) => (
              <div
                key={item.period}
                className={`flex items-center justify-between gap-4 rounded-lg border border-border/50 bg-secondary/20 px-3 py-3 ${index < planning.length - 1 ? "" : ""}`}
              >
                <span className="text-sm font-medium text-foreground">
                  {item.period}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-border/70 bg-gradient-to-b from-blue-50/60 to-background p-6 text-center shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            Prêt à commencer ?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Explorez nos fiches pratiques organisées par thématique.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/fiches?essential=true">
                Fiches essentielles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent"
            >
              <Link href="/fiches">Toutes les fiches</Link>
            </Button>
          </div>
        </section>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Pour en savoir plus sur notre approche, consultez la{" "}
            <Link
              href="/methodologie"
              className="text-primary hover:underline"
            >
              page méthodologie
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
