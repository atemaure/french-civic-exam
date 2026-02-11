import Link from "next/link"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd } from "@/lib/seo/jsonld"
import { createMetadata } from "@/lib/seo/metadata"

export const metadata = createMetadata({
  title: "Sources officielles",
  description: "Les sources officielles et références utilisées pour préparer l'entretien civique de naturalisation française.",
  path: "/sources",
})

const sources = [
  {
    name: "Service-Public.fr",
    description: "Démarches administratives, naturalisation et obligations civiques.",
    url: "https://www.service-public.fr",
  },
  {
    name: "Vie-publique.fr",
    description: "Explications sur les institutions françaises et la citoyenneté.",
    url: "https://www.vie-publique.fr",
  },
  {
    name: "Assemblée nationale",
    description: "Rôle du Parlement, lois et institutions.",
    url: "https://www.assemblee-nationale.fr",
  },
  {
    name: "Sénat",
    description: "Fonctionnement de la seconde chambre parlementaire.",
    url: "https://www.senat.fr",
  },
  {
    name: "Élysée",
    description: "Présidence de la République et rôle du chef de l'État.",
    url: "https://www.elysee.fr",
  },
  {
    name: "Conseil constitutionnel",
    description: "Constitution, droits fondamentaux et jurisprudence.",
    url: "https://www.conseil-constitutionnel.fr",
  },
]

export default function SourcesPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Accueil", url: "/" },
            { name: "Sources", url: "/sources" },
          ])}
        />
        <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Sources" }]} />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sources officielles
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Nous nous appuyons sur des sources institutionnelles pour garantir la fiabilité des contenus.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Mise à jour : 5 février 2026.</p>
        </div>

        <div className="mt-12 space-y-4">
          {sources.map((source) => (
            <div key={source.name} className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground">{source.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{source.description}</p>
              <Link
                href={source.url}
                className="mt-3 inline-flex text-sm font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulter le site officiel
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-secondary/30 p-6 text-sm text-muted-foreground">
          <p>
            QuizCitoyen est un site pédagogique indépendant. Les informations proposées ne remplacent pas
            les sources officielles. Pour une démarche de naturalisation, vérifiez toujours les consignes de
            votre préfecture.
          </p>
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p>
            Besoin d'un résumé rapide ? Consultez la <Link href="/faq" className="text-primary hover:underline">FAQ</Link> ou le <Link href="/glossaire" className="text-primary hover:underline">glossaire</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
