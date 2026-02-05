import Link from "next/link"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"

export const metadata = createMetadata({
  title: "Méthodologie QuizCitoyen",
  description: "Notre approche pédagogique pour réussir l'entretien civique de naturalisation française.",
  path: "/methodologie",
})

const pillars = [
  {
    title: "Comprendre avant de mémoriser",
    description: "Nous expliquons chaque notion simplement pour que vous puissiez la reformuler avec vos mots.",
  },
  {
    title: "Structurer l'apprentissage",
    description: "Les fiches suivent un format clair : définition, points clés, exemple, astuce orale.",
  },
  {
    title: "S'entraîner à l'oral",
    description: "Des conseils pratiques pour répondre naturellement lors de l'entretien.",
  },
  {
    title: "S'appuyer sur des sources fiables",
    description: "Chaque contenu est aligné avec les sources institutionnelles françaises.",
  },
]

export default function MethodologiePage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Accueil", url: "/" },
            { name: "Méthodologie", url: "/methodologie" },
          ])}
        />
        <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Méthodologie" }]} />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Méthodologie QuizCitoyen
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Une approche pédagogique claire pour comprendre les valeurs de la République et réussir l'entretien civique.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground">{pillar.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-secondary/30 p-6 text-sm text-muted-foreground">
          <h2 className="mb-2 text-lg font-semibold text-foreground">Notre promesse</h2>
          <p>
            Vous donner des contenus fiables, structurés et faciles à réviser. Le but est de vous aider à exprimer
            clairement votre attachement aux valeurs républicaines, avec confiance et authenticité.
          </p>
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p>
            Pour le détail des étapes, consultez la <Link href="/methode" className="text-primary hover:underline">méthode de préparation</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
