import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  BookOpen, 
  Heart, 
  Target, 
  Users,
  ArrowRight,
  CheckCircle,
  Shield
} from "lucide-react"

export const metadata = {
  title: "À propos | Préparation QuizCitoyen",
  description: "Découvrez notre mission : accompagner les candidats à la naturalisation française avec une approche pédagogique simple et rassurante.",
}

const values = [
  {
    icon: BookOpen,
    title: "Pédagogie",
    description: "Des explications claires et accessibles, sans jargon juridique. Notre objectif est que chacun comprenne les valeurs de la République.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Un ton rassurant et encourageant. L'examen civique n'est pas un obstacle, c'est une étape vers un nouveau chapitre de votre vie.",
  },
  {
    icon: Target,
    title: "Efficacité",
    description: "Des contenus structurés et ciblés. Nous allons à l'essentiel pour vous faire gagner du temps dans votre préparation.",
  },
  {
    icon: Users,
    title: "Accessibilité",
    description: "Un site gratuit et ouvert à tous. Parce que l'accès à l'information ne devrait pas être un privilège.",
  },
]

const commitments = [
  "Des informations vérifiées et à jour",
  "Une approche respectueuse de tous les parcours",
  "Un contenu inspiré des sources officielles françaises",
  "Aucune collecte de données personnelles inutile",
  "Un site gratuit et sans publicité intrusive",
]

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            À propos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Un site conçu pour accompagner les candidats à la naturalisation française 
            avec une approche simple, pédagogique et rassurante.
          </p>
        </div>

        {/* Mission */}
        <div className="mx-auto mt-16 max-w-3xl">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Notre mission</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Devenir français, c'est rejoindre une communauté nationale fondée sur des valeurs 
                partagées : la liberté, l'égalité, la fraternité, la laïcité et la démocratie.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                L'examen civique et l'entretien de naturalisation sont des étapes importantes 
                de ce parcours. Ils permettent de vérifier que vous connaissez et adhérez 
                aux valeurs de la République française.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Notre mission est de vous accompagner dans cette préparation avec des contenus 
                clairs, structurés et accessibles. Nous croyons que comprendre les valeurs 
                de la France est plus important que les réciter par cœur.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">
            Nos valeurs
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div className="mx-auto mt-16 max-w-2xl">
          <Card>
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Nos engagements</h2>
              </div>
              <ul className="space-y-3">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {commitment}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-lg border border-border bg-secondary/30 p-6">
            <h3 className="mb-3 font-semibold text-foreground">Important</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ce site est un outil pédagogique indépendant. Il n'est pas affilié au 
              gouvernement français ni à aucune administration. Les informations sont 
              fournies à titre indicatif et ne remplacent pas les sources officielles. 
              Pour toute démarche administrative, consultez les sites officiels comme 
              service-public.fr.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Commencez votre préparation
          </h2>
          <p className="mb-6 text-muted-foreground">
            Découvrez nos fiches pratiques et notre méthode de préparation.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/fiches">
                Voir les fiches
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-transparent">
              <Link href="/methode">Découvrir la méthode</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
