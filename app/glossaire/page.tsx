import Link from "next/link"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, glossaryJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"

export const metadata = createMetadata({
  title: "Glossaire citoyenneté",
  description: "Définitions simples des notions clés pour l'entretien civique de naturalisation française.",
  path: "/glossaire",
})

const terms = [
  {
    term: "République",
    definition:
      "Forme d'État où le pouvoir appartient au peuple et où les représentants sont élus pour servir l'intérêt général.",
  },
  {
    term: "Laïcité",
    definition:
      "Principe de séparation entre l'État et les religions qui garantit la liberté de conscience et la neutralité des services publics.",
  },
  {
    term: "Citoyenneté",
    definition:
      "Statut juridique qui donne des droits (vote, protection) et des devoirs (loi, impôts) dans une communauté nationale.",
  },
  {
    term: "Entretien de naturalisation",
    definition:
      "Échange avec un agent préfectoral pour évaluer vos connaissances civiques et votre intégration en France.",
  },
  {
    term: "Constitution",
    definition:
      "Texte fondamental qui organise les institutions françaises et garantit les droits et libertés.",
  },
  {
    term: "Suffrage universel",
    definition:
      "Système électoral où tous les citoyens majeurs peuvent voter, sans distinction de fortune ou d'origine.",
  },
  {
    term: "Quinquennat",
    definition:
      "Durée du mandat du Président de la République, fixée à cinq ans.",
  },
  {
    term: "Préfecture",
    definition:
      "Administration locale de l'État qui gère notamment les démarches de naturalisation.",
  },
  {
    term: "Valeurs de la République",
    definition:
      "Ensemble de principes comme la liberté, l'égalité, la fraternité, la laïcité et la solidarité.",
  },
  {
    term: "Droits et devoirs",
    definition:
      "Équilibre entre les libertés accordées aux citoyens et les obligations envers la société et la loi.",
  },
]

export default function GlossairePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Accueil", url: "/" },
      { name: "Glossaire", url: "/glossaire" },
    ]),
    glossaryJsonLd({
      name: "Glossaire QuizCitoyen",
      description: "Notions clés pour l'entretien civique de naturalisation française.",
      terms,
    }),
  ]

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={jsonLd} />
        <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Glossaire" }]} />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Glossaire civique
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Les définitions simples pour comprendre les notions incontournables de l'entretien civique.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {terms.map((item) => (
            <div key={item.term} className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground">{item.term}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.definition}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p>
            Pour aller plus loin, explorez les <Link href="/fiches" className="text-primary hover:underline">fiches pratiques</Link> et la <Link href="/methode" className="text-primary hover:underline">méthode de préparation</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
