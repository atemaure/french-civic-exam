import type { ExamTheme } from "../types"

export const theme: ExamTheme = {
  slug: "systeme-institutionnel-politique",
  title: "Système institutionnel et politique",
  description: "Le fonctionnement démocratique de la France et ses institutions.",
  details: [
    "Repère institutionnel : distinguer clairement les rôles du Président, du Premier ministre et du Parlement.",
    "Logique démocratique : comprendre le vote, la représentation et la légitimité politique.",
    "Organisation des pouvoirs : exécutif, législatif, judiciaire et leur équilibre.",
    "Niveau européen : identifier les institutions de l'UE et leur rôle général.",
    "À l'entretien : savoir expliquer qui décide quoi et comment les lois s'appliquent.",
    "Objectif évalué : compréhension structurée du fonctionnement politique français.",
  ],
  prepTime: "25-35 min",
  interviewImportance: [
    "Ce thème revient souvent dans les questions sur les institutions françaises.",
    "L'entretien vérifie votre capacité à expliquer simplement le fonctionnement démocratique.",
    "Les examinateurs attendent des réponses claires sur les rôles des institutions.",
  ],
  examinerEvaluates: [
    "Compréhension du rôle des institutions",
    "Capacité à distinguer les niveaux de décision (État, Parlement, UE)",
    "Cohérence des explications à l'oral",
    "Maîtrise du vocabulaire civique de base",
  ],
  revisionTips: [
    "Faites une fiche synthèse des institutions (mission principale + exemple concret).",
    "Révisez les notions de suffrage universel, majorité et séparation des pouvoirs.",
    "Entraînez-vous à répondre en 30-45 secondes à 'Quel est le rôle de... ?'",
  ],
  fichesHref: "/fiches?theme=institutions",
  subThemes: [
    {
      slug: "democratie-droit-vote",
      name: "Démocratie et droit de vote",
      info: "Suffrage universel, élections, représentation politique et participation citoyenne.",
      details: [
        "Vous devez comprendre le principe du suffrage universel et son rôle dans la démocratie.",
        "Les questions peuvent porter sur les scrutins, le rôle des élus et la participation.",
      ],
    },
    {
      slug: "organisation-republique-francaise",
      name: "Organisation de la République française",
      info: "Président, Premier ministre, Parlement, Gouvernement, collectivités.",
      details: [
        "Vous devez distinguer les missions des principales institutions françaises.",
        "Les questions évaluent la séparation des pouvoirs et le rôle de chaque acteur.",
      ],
    },
    {
      slug: "institutions-europeennes",
      name: "Institutions européennes",
      info: "Union européenne, institutions majeures et articulation avec la France.",
      details: [
        "Vous devez connaître les institutions clés de l'UE et leurs fonctions générales.",
        "L'accent est mis sur les droits liés à la citoyenneté européenne.",
      ],
    },
  ],
}
