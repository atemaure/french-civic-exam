import type { ExamTheme } from "../types"

export const theme: ExamTheme = {
  slug: "droits-devoirs",
  title: "Droits et devoirs",
  description: "Les libertés garanties et les obligations civiques qui s'appliquent à tous.",
  details: [
    "Équilibre central : droits garantis et devoirs qui assurent la vie collective.",
    "Droits fondamentaux : libertés publiques, égalité, protection contre les discriminations.",
    "Devoirs civiques : respect de la loi, responsabilité personnelle, solidarité.",
    "Cadre concret : les droits s'exercent dans le respect des autres et de l'ordre public.",
    "À l'entretien : montrer que vous comprenez à la fois vos libertés et vos obligations.",
    "Objectif évalué : maturité civique et compréhension du vivre-ensemble républicain.",
  ],
  prepTime: "20-30 min",
  interviewImportance: [
    "Ce thème est fréquent car il touche directement à la citoyenneté au quotidien.",
    "Les questions portent souvent sur l'égalité, la non-discrimination et le respect des lois.",
    "L'entretien évalue votre compréhension concrète des responsabilités civiques.",
  ],
  examinerEvaluates: [
    "Compréhension des droits fondamentaux",
    "Capacité à relier droits et devoirs",
    "Réponses nuancées sur la vie en société",
    "Clarté et précision des exemples",
  ],
  revisionTips: [
    "Mémorisez 4 droits fondamentaux et 4 devoirs civiques avec un exemple chacun.",
    "Travaillez des mini mises en situation (discrimination, respect de la loi, solidarité).",
    "Structurez vos réponses avec 'droit + limite + exemple'.",
  ],
  fichesHref: "/fiches?theme=droits",
  subThemes: [
    {
      slug: "droits-fondamentaux",
      name: "Droits fondamentaux",
      info: "Libertés publiques, égalité des droits, non-discrimination et protection juridique.",
      details: [
        "Vous devez identifier les libertés essentielles reconnues en France.",
        "Les questions portent souvent sur l'égalité et la protection des personnes.",
      ],
    },
    {
      slug: "obligations-devoirs",
      name: "Obligations et devoirs",
      info: "Respect de la loi, contribution civique et responsabilité individuelle.",
      details: [
        "Le respect des lois est un repère central de l'examen civique.",
        "Il faut aussi connaître les devoirs liés à la vie collective et à la solidarité.",
      ],
    },
  ],
}
