import Link from "next/link"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"

export const metadata = createMetadata({
  title: "FAQ naturalisation",
  description: "Réponses rapides aux questions fréquentes sur l'entretien civique, la préparation et les fiches QuizCitoyen.",
  path: "/faq",
})

const faqItems = [
  {
    question: "Comment se déroule l'entretien civique de naturalisation ?",
    answer:
      "L'entretien est une conversation avec un agent préfectoral. Il évalue votre connaissance de la France, des valeurs républicaines, de vos droits et devoirs, ainsi que votre niveau de français.",
  },
  {
    question: "Combien de temps faut-il pour se préparer ?",
    answer:
      "Une préparation régulière sur 4 à 6 semaines est généralement suffisante. L'essentiel est de comprendre les notions clés plutôt que de tout mémoriser.",
  },
  {
    question: "Quels thèmes sont les plus importants ?",
    answer:
      "Les valeurs de la République, les institutions, l'histoire de France, la laïcité et vos droits et devoirs sont les thèmes les plus souvent abordés.",
  },
  {
    question: "Comment utiliser QuizCitoyen efficacement ?",
    answer:
      "Commencez par les fiches essentielles, puis approfondissez par thématique. Complétez avec les articles et entraînez-vous à expliquer les notions à l'oral.",
  },
  {
    question: "QuizCitoyen est-il un site officiel ?",
    answer:
      "Non. QuizCitoyen est un site pédagogique indépendant. Pour les démarches officielles, référez-vous aux sources gouvernementales listées sur notre page Sources.",
  },
]

export default function FaqPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Accueil", url: "/" },
      { name: "FAQ", url: "/faq" },
    ]),
    faqJsonLd(faqItems),
  ]

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={jsonLd} />
        <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]} />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            FAQ – Entretien civique
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Les réponses essentielles pour préparer sereinement votre entretien de naturalisation.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-xl border border-border bg-secondary/30 p-6">
              <h2 className="text-lg font-semibold text-foreground">{item.question}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Vous ne trouvez pas votre réponse ? Consultez notre page <Link href="/sources" className="text-primary hover:underline">Sources</Link> ou explorez les <Link href="/fiches" className="text-primary hover:underline">fiches pratiques</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
