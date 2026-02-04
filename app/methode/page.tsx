import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  BookOpen, 
  Brain, 
  MessageCircle, 
  Target,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Clock
} from "lucide-react"

export const metadata = {
  title: "Méthode de préparation | Préparation QuizCitoyen",
  description: "Découvrez notre méthode en 4 étapes pour préparer efficacement l'examen civique et réussir l'entretien de naturalisation française.",
  alternates: {
    canonical: "/methode",
  },
  openGraph: {
    title: "Méthode de préparation | Préparation QuizCitoyen",
    description: "Découvrez notre méthode en 4 étapes pour préparer efficacement l'examen civique et réussir l'entretien de naturalisation française.",
    url: "/methode",
    type: "website",
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
    title: "Méthode de préparation | Préparation QuizCitoyen",
    description: "Découvrez notre méthode en 4 étapes pour préparer efficacement l'examen civique et réussir l'entretien de naturalisation française.",
    images: ["/logo.png"],
  },
}

const steps = [
  {
    number: 1,
    title: "Comprendre",
    icon: BookOpen,
    description: "Prenez le temps de bien comprendre les concepts fondamentaux. Ne cherchez pas à tout mémoriser immédiatement.",
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
    description: "Une fois que vous avez compris, retenez les éléments clés. Utilisez des techniques simples pour ancrer les informations.",
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
    description: "Testez vos connaissances régulièrement. L'entraînement permet de consolider ce que vous avez appris.",
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
    description: "L'entretien est une conversation. Préparez-vous à répondre de manière naturelle et personnelle.",
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
    description: "Ne révisez pas la veille. Prévoyez au moins 4-6 semaines de préparation.",
  },
  {
    icon: Lightbulb,
    title: "Comprenez, ne récitez pas",
    description: "L'agent préfectoral veut voir que vous comprenez les valeurs, pas que vous les récitez.",
  },
  {
    icon: CheckCircle,
    title: "Soyez vous-même",
    description: "Parlez de votre expérience personnelle. Votre parcours est unique et intéressant.",
  },
]

export default function MethodePage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Méthode de préparation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Une approche en 4 étapes pour préparer efficacement l'examen civique 
            et réussir votre entretien de naturalisation.
          </p>
        </div>

        {/* Key advice */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {keyAdvice.map((advice) => (
              <Card key={advice.title} className="border-primary/10 bg-primary/5">
                <CardContent className="p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <advice.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground">{advice.title}</h3>
                  <p className="text-sm text-muted-foreground">{advice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">
            Les 4 étapes de la méthode
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 hidden h-full w-0.5 bg-border md:block" />
                )}
                
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Step indicator */}
                      <div className="flex items-center gap-4 bg-secondary/50 p-6 md:w-64 md:flex-col md:items-start">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                          {step.number}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <step.icon className="h-5 w-5 text-primary" />
                            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Durée estimée : {step.duration}
                          </p>
                        </div>
                      </div>

                      {/* Step content */}
                      <div className="flex-1 p-6">
                        <p className="mb-4 text-muted-foreground">{step.description}</p>
                        <h4 className="mb-3 font-semibold text-foreground">Conseils pratiques :</h4>
                        <ul className="space-y-2">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className="mx-auto mt-16 max-w-2xl">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Planning recommandé
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Pour une préparation optimale, prévoyez environ 4 à 6 semaines. 
                Voici une répartition possible :
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border/50 pb-2">
                  <span className="text-sm font-medium text-foreground">Semaines 1-2</span>
                  <span className="text-sm text-muted-foreground">Comprendre les concepts</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/50 pb-2">
                  <span className="text-sm font-medium text-foreground">Semaines 3-4</span>
                  <span className="text-sm text-muted-foreground">Mémoriser les points clés</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/50 pb-2">
                  <span className="text-sm font-medium text-foreground">Semaine 5</span>
                  <span className="text-sm text-muted-foreground">S'entraîner et tester</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Semaine 6</span>
                  <span className="text-sm text-muted-foreground">Préparer l'oral</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
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
            <Button variant="outline" size="lg" asChild className="bg-transparent">
              <Link href="/fiches">Toutes les fiches</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
