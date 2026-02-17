import type { ExamTheme } from "../types"

export const theme: ExamTheme = {
  slug: "vivre-societe-francaise",
  title: "Vivre dans la société française",
  description: "Les repères pratiques pour la vie quotidienne et l'intégration en France.",
  details: [
    "Vie quotidienne : démarches, services publics et repères administratifs essentiels.",
    "Installation : comprendre les documents, les obligations et les interlocuteurs utiles.",
    "Santé : connaître l'accès aux soins et les bases du parcours médical.",
    "Travail : maîtriser les repères clés du droit du travail et de l'insertion professionnelle.",
    "Éducation : comprendre le rôle de l'école et des responsabilités parentales.",
    "Objectif évalué : autonomie pratique et capacité à vivre durablement en France.",
  ],
  prepTime: "25-35 min",
  interviewImportance: [
    "Ce thème est souvent mobilisé via des questions concrètes de mise en situation.",
    "L'entretien vérifie votre capacité à vous orienter dans la vie administrative et sociale française.",
    "Les examinateurs attendent des réponses pratiques, réalistes et applicables au quotidien.",
  ],
  examinerEvaluates: [
    "Autonomie dans les démarches de base",
    "Compréhension du fonctionnement des services publics",
    "Capacité à réagir à des cas concrets",
    "Maîtrise des repères de la vie en France",
  ],
  revisionTips: [
    "Préparez des scénarios concrets (soins, emploi, école, démarches).",
    "Identifiez les organismes clés et leur rôle (mairie, préfecture, CPAM, etc.).",
    "Répondez avec une structure simple : situation, règle, action concrète.",
  ],
  fichesHref: "/fiches?theme=vivre",
  subThemes: [
    {
      slug: "installer-resider-france",
      name: "S'installer et résider en France",
      info: "Démarches de résidence, documents administratifs et cadre de vie.",
      details: [
        "Vous devez comprendre les étapes administratives principales de l'installation.",
        "Les questions peuvent porter sur les documents et obligations de base.",
      ],
    },
    {
      slug: "acces-soins",
      name: "Accès aux soins",
      info: "Système de santé, prévention, parcours de soins et accès aux droits.",
      details: [
        "Vous devez connaître l'organisation générale de l'accès aux soins en France.",
        "L'examen attend des repères pratiques sur le système de santé.",
      ],
    },
    {
      slug: "travailler-france",
      name: "Travailler en France",
      info: "Insertion professionnelle, droits des salariés et cadre du travail.",
      details: [
        "Vous devez identifier les règles de base liées au travail et à l'emploi.",
        "Les questions peuvent porter sur les droits et obligations du salarié.",
      ],
    },
    {
      slug: "education-parentalite",
      name: "Éducation et parentalité",
      info: "École obligatoire, rôle des parents et repères éducatifs.",
      details: [
        "Vous devez connaître les principes de l'école en France et son rôle républicain.",
        "Le thème inclut les responsabilités parentales dans le parcours éducatif.",
      ],
    },
  ],
}
