import type { ExamTheme } from "../types"

export const theme: ExamTheme = {
  slug: "histoire-geographie-culture",
  title: "Histoire, géographie et culture",
  description: "Les repères historiques, territoriaux et culturels essentiels.",
  details: [
    "Repères historiques : connaître les périodes et événements qui structurent l'histoire de France.",
    "Repères territoriaux : comprendre l'organisation du territoire entre métropole et outre-mer.",
    "Repères culturels : identifier les symboles et références communes.",
    "Mémoire collective : relier les grands événements aux valeurs républicaines actuelles.",
    "À l'entretien : l'objectif n'est pas de tout réciter, mais de situer les repères majeurs.",
    "Objectif évalué : culture civique de base et compréhension du contexte français.",
  ],
  prepTime: "20-30 min",
  interviewImportance: [
    "Ce thème apparaît régulièrement pour vérifier vos repères historiques et culturels.",
    "Les questions visent surtout les grands jalons, pas les détails universitaires.",
    "Une bonne maîtrise renforce la cohérence de vos réponses sur les valeurs républicaines.",
  ],
  examinerEvaluates: [
    "Connaissance des repères essentiels",
    "Capacité à situer un événement ou un symbole",
    "Compréhension de l'unité et de la diversité du territoire",
    "Expression claire sans confusion chronologique majeure",
  ],
  revisionTips: [
    "Créez une frise simple avec 8 à 10 dates-clés.",
    "Révisez une carte mentale du territoire (métropole, outre-mer, niveaux administratifs).",
    "Associez chaque symbole culturel à son sens civique.",
  ],
  fichesHref: "/fiches?theme=histoire",
  subThemes: [
    {
      slug: "principales-periodes-historiques",
      name: "Principales périodes historiques",
      info: "Repères chronologiques, événements fondateurs et évolution des institutions.",
      details: [
        "Vous devez connaître les grandes périodes et quelques dates structurantes.",
        "Les questions visent la compréhension globale de l'évolution de la République.",
      ],
    },
    {
      slug: "territoires-geographie",
      name: "Territoires et géographie",
      info: "Organisation du territoire, métropole, outre-mer et collectivités.",
      details: [
        "Vous devez situer les principaux repères géographiques français.",
        "L'examen peut aborder l'organisation territoriale et administrative.",
      ],
    },
    {
      slug: "patrimoine-culture",
      name: "Patrimoine et culture",
      info: "Patrimoine matériel et immatériel, mémoire et références culturelles.",
      details: [
        "Vous devez connaître quelques symboles culturels et patrimoniaux majeurs.",
        "Les questions portent sur les repères communs qui structurent la mémoire nationale.",
      ],
    },
  ],
}
