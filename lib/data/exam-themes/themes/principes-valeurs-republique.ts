import type { ExamTheme } from "../types"

export const theme: ExamTheme = {
  slug: "principes-valeurs-republique",
  title: "Principes et valeurs de la République",
  description: "Les fondements civiques qui encadrent la vie collective en France.",
  details: [
    "Socle républicain : cadre des libertés, égalité devant la loi et vie démocratique.",
    "Devise à maîtriser : Liberté, Égalité, Fraternité.",
    "Liberté : s'exerce dans le respect des lois et des droits d'autrui.",
    "Égalité : garantit le même traitement pour tous et le refus des discriminations.",
    "Fraternité : favorise la solidarité et la cohésion sociale.",
    "Symboles à connaître : drapeau tricolore, Marianne, Marseillaise.",
    "À l'entretien : expliquer avec des exemples concrets, pas seulement réciter.",
    "Objectif évalué : compréhension réelle, adhésion aux valeurs, argumentation claire.",
  ],
  prepTime: "20-30 min",
  interviewImportance: [
    "Ce thème est très fréquemment abordé à l'entretien civique.",
    "Les questions portent souvent sur la devise, la laïcité et les symboles républicains.",
    "L'examinateur attend des réponses concrètes, reliées à la vie quotidienne en France.",
  ],
  examinerEvaluates: [
    "Compréhension réelle des principes républicains",
    "Capacité à illustrer avec un exemple concret",
    "Adhésion aux valeurs de la République",
    "Clarté d'expression et cohérence des réponses",
  ],
  revisionTips: [
    "Révisez d'abord la devise et son sens concret (liberté, égalité, fraternité).",
    "Préparez 2 exemples personnels montrant le respect des valeurs républicaines.",
    "Entraînez-vous à expliquer la laïcité avec des mots simples.",
  ],
  fichesHref: "/fiches?theme=valeurs",
  subThemes: [
    {
      slug: "devise-symboles",
      name: "Devise et symboles",
      info: "Liberté, Égalité, Fraternité, drapeau tricolore, Marianne, Marseillaise.",
      details: [
        "Vous devez connaître les symboles de la République et leur signification.",
        "Les questions portent souvent sur la devise, le drapeau et l'hymne national.",
      ],
    },
    {
      slug: "laicite",
      name: "Laïcité",
      info: "Neutralité de l'État, liberté de conscience et respect de toutes les convictions.",
      details: [
        "La laïcité garantit la liberté de croire ou de ne pas croire.",
        "L'État reste neutre et traite tous les citoyens de manière égale.",
      ],
    },
  ],
}
