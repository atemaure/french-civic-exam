import type { FicheInput } from "./types"

export const vivre: FicheInput[] = [
  // --- FICHES FOURNIES (inchangées) ---
  {
    slug: "ecole-obligatoire",
    title: "L’école obligatoire",
    description: "L’instruction est obligatoire de 3 à 16 ans en France.",
    definition:
      "En France, l’instruction est obligatoire pour tous les enfants de 3 à 16 ans. L’école publique est gratuite, laïque et mixte.",
    keyPoints: [
      "Instruction obligatoire de 3 à 16 ans",
      "École publique gratuite et laïque",
      "École maternelle, primaire, collège, lycée",
      "Mixité filles-garçons"
    ],
    example: "Tous les enfants vivant en France doivent être scolarisés, quelle que soit leur nationalité.",
    oralTip: "Parlez de la scolarisation de vos enfants ou de votre connaissance du système scolaire français.",
    isEssential: true
  },
  {
    slug: "protection-sociale-france",
    title: "La protection sociale en France",
    description: "Un système de solidarité pour faire face aux risques de la vie.",
    definition:
      "La protection sociale française repose sur la Sécurité sociale et les aides sociales pour protéger les personnes en cas de maladie, chômage, vieillesse ou difficultés.",
    keyPoints: [
      "Sécurité sociale : maladie, famille, retraite",
      "Remboursement des soins médicaux",
      "Allocations et aides sociales",
      "Solidarité nationale"
    ],
    example:
      "La Sécurité sociale rembourse une partie des soins médicaux et verse des allocations familiales.",
    oralTip: "Expliquez que la protection sociale est financée par les cotisations et les impôts.",
    isEssential: true
  },
  {
    slug: "acces-soins",
    title: "L’accès aux soins",
    description: "Se soigner facilement grâce au système de santé français.",
    definition:
      "En France, toute personne résidant légalement peut accéder aux soins médicaux grâce à l’assurance maladie.",
    keyPoints: ["Carte Vitale", "Médecin traitant", "Remboursement des soins", "Hôpitaux publics"],
    example: "Je consulte un médecin et mes soins sont en partie remboursés.",
    oralTip: "Expliquez comment vous accédez aux soins en France.",
    isEssential: true
  },
  {
    slug: "logement",
    title: "Le logement en France",
    description: "Se loger grâce au parc privé et aux aides publiques.",
    definition:
      "Le logement en France peut être privé ou social. Des aides existent pour aider les ménages à payer leur loyer.",
    keyPoints: ["Location ou propriété", "Logement social", "Aides au logement (APL)", "Contrat de location écrit"],
    example: "Les APL peuvent réduire le montant du loyer.",
    oralTip: "Parlez de votre situation de logement en France."
  },
  {
    slug: "travail-france",
    title: "Travailler en France",
    description: "Les règles pour exercer une activité professionnelle.",
    definition:
      "Travailler en France implique de respecter le droit du travail, les horaires, le contrat et les cotisations sociales.",
    keyPoints: ["Contrat de travail", "Salaire minimum (SMIC)", "Cotisations sociales", "Droits et devoirs du salarié"],
    example: "Un salarié signe un contrat et bénéficie de congés payés.",
    oralTip: "Expliquez que le travail donne des droits mais aussi des obligations."
  },
  {
    slug: "impots-france",
    title: "Les impôts en France",
    description: "Contribuer au financement des services publics.",
    definition: "Les impôts permettent de financer les services publics et la solidarité nationale.",
    keyPoints: ["Impôt sur le revenu", "TVA", "Taxes locales", "Financement des services publics"],
    example: "Les impôts financent les écoles, les hôpitaux et les transports.",
    oralTip: "Expliquez pourquoi payer ses impôts est important."
  },
  {
    slug: "services-publics",
    title: "Les services publics",
    description: "Des services accessibles à tous les citoyens.",
    definition: "Les services publics assurent des missions essentielles comme l’éducation, la santé, la sécurité et les transports.",
    keyPoints: ["Éducation", "Santé", "Sécurité", "Transports"],
    example: "L’école et l’hôpital sont des services publics.",
    oralTip: "Citez des services publics que vous utilisez."
  },
  {
    slug: "vie-quotidienne",
    title: "La vie quotidienne en France",
    description: "Les règles et habitudes de la vie de tous les jours.",
    definition:
      "La vie quotidienne en France repose sur le respect des règles communes, la ponctualité et le respect des autres.",
    keyPoints: ["Respect des règles", "Politesse", "Ponctualité", "Respect du voisinage"],
    example: "Dire bonjour, respecter les horaires et le voisinage.",
    oralTip: "Donnez un exemple de votre adaptation à la vie quotidienne en France."
  },
  {
    slug: "integration-france",
    title: "L’intégration en France",
    description: "S’intégrer dans la société française.",
    definition:
      "L’intégration passe par la maîtrise de la langue, le respect des valeurs et la participation à la vie sociale.",
    keyPoints: ["Apprendre le français", "Respecter les valeurs républicaines", "Participer à la vie locale", "Créer des liens sociaux"],
    example: "Participer à une association locale ou à des événements du quartier.",
    oralTip: "Parlez de vos efforts d’intégration en France."
  },
  {
    slug: "administrations-francaises",
    title: "Les administrations françaises",
    description: "Les organismes qui gèrent la vie administrative.",
    definition:
      "Les administrations françaises accompagnent les citoyens dans leurs démarches : état civil, impôts, sécurité sociale.",
    keyPoints: ["Mairie", "Préfecture", "CAF", "Sécurité sociale"],
    example: "La mairie enregistre les naissances et les mariages.",
    oralTip: "Citez une administration que vous avez déjà utilisée."
  },
  {
    slug: "demarches-administratives",
    title: "Les démarches administratives",
    description: "Les formalités de la vie courante.",
    definition:
      "Les démarches administratives permettent d’accéder à des droits et services : logement, travail, santé.",
    keyPoints: ["Documents officiels", "Déclarations obligatoires", "Démarches en ligne"],
    example: "Déclarer ses impôts ou demander une aide au logement.",
    oralTip: "Expliquez que vous savez effectuer vos démarches."
  },
  {
    slug: "vie-associative",
    title: "La vie associative",
    description: "Participer à la vie sociale et locale.",
    definition: "Les associations permettent de s’engager dans la vie sociale, culturelle ou sportive.",
    keyPoints: ["Engagement bénévole", "Lien social", "Intégration locale"],
    example: "S’inscrire dans une association sportive ou culturelle.",
    oralTip: "Parlez d’une association ou d’un engagement personnel."
  },
  {
    slug: "regles-vie-commune",
    title: "Les règles de la vie en commun",
    description: "Les règles pour bien vivre ensemble.",
    definition: "La vie en commun repose sur le respect des règles, des personnes et du voisinage.",
    keyPoints: ["Respect du voisinage", "Règles de copropriété", "Nuisances interdites"],
    example: "Respecter les horaires de silence dans un immeuble.",
    oralTip: "Donnez un exemple de respect des règles collectives."
  },
  {
    slug: "langue-francaise",
    title: "La langue française",
    description: "Un élément clé de la vie en France.",
    definition:
      "La langue française est la langue officielle. Sa maîtrise facilite l’intégration sociale, professionnelle et administrative.",
    keyPoints: ["Langue officielle", "Communication quotidienne", "Intégration professionnelle"],
    example: "Parler français permet de travailler et de faire ses démarches.",
    oralTip: "Expliquez vos efforts pour améliorer votre français."
  },

  // --- NOUVELLES FICHES (vivre en France) ---
  {
    slug: "etat-civil-documents",
    title: "État civil et documents essentiels",
    description: "Des documents indispensables pour vivre et faire ses démarches.",
    definition:
      "L’état civil regroupe les actes officiels (naissance, mariage, décès). En France, certains documents sont essentiels pour la vie quotidienne et administrative.",
    keyPoints: [
      "Actes d’état civil délivrés par la mairie",
      "Pièce d’identité : carte d’identité ou passeport",
      "Justificatif de domicile souvent demandé",
      "Conserver ses documents et copies"
    ],
    example: "Pour une inscription ou un contrat, on demande souvent une pièce d’identité et un justificatif de domicile.",
    oralTip: "Dites que vous savez quels documents garder et où demander un acte (mairie).",
    isEssential: true
  },
  {
    slug: "banque-ibans",
    title: "La banque et les moyens de paiement",
    description: "Ouvrir un compte et gérer ses paiements en France.",
    definition:
      "Un compte bancaire facilite la réception du salaire, le paiement du loyer et les démarches. Les paiements se font souvent par carte, virement ou prélèvement.",
    keyPoints: [
      "Compte bancaire : utile au quotidien",
      "IBAN pour virements et prélèvements",
      "Carte bancaire et paiements sécurisés",
      "Surveiller ses dépenses et éviter les découverts"
    ],
    example: "Le loyer est souvent payé par virement ou prélèvement automatique.",
    oralTip: "Expliquez simplement comment vous payez vos factures (virement, carte)."
  },
  {
    slug: "transports-mobilite",
    title: "Transports et mobilité",
    description: "Se déplacer en respectant les règles communes.",
    definition:
      "En France, la mobilité repose sur les transports publics et l’usage encadré des véhicules. Le respect des règles de sécurité concerne tous les usagers.",
    keyPoints: [
      "Transports publics : bus, métro, train",
      "Respect des règles et des autres usagers",
      "Sécurité routière : ceinture, limitations, alcool",
      "Assurance obligatoire pour les véhicules"
    ],
    example: "Dans les transports publics, on valide son titre et on respecte les règles.",
    oralTip: "Donnez un exemple concret : transport du quotidien et règle respectée."
  },
  {
    slug: "securite-secours",
    title: "Sécurité et numéros d’urgence",
    description: "Savoir réagir en cas de problème.",
    definition:
      "En cas d’urgence, il existe des services publics de secours. Connaître les numéros d’urgence permet de réagir rapidement et de protéger les personnes.",
    keyPoints: [
      "Savoir décrire le lieu et la situation",
      "Rester calme et suivre les consignes",
      "Secours et forces de l’ordre selon le besoin",
      "Ne pas appeler pour de fausses urgences"
    ],
    example: "En cas d’accident, on appelle les secours et on donne l’adresse précise.",
    oralTip: "Dites que vous savez appeler les secours et expliquer clairement la situation.",
    isEssential: true
  },
  {
    slug: "recherche-emploi",
    title: "Chercher un emploi en France",
    description: "Comprendre les bases : CV, entretien, contrat.",
    definition:
      "Chercher un emploi implique souvent un CV, une lettre, des entretiens et la signature d’un contrat de travail. Les droits et obligations s’appliquent ensuite au salarié comme à l’employeur.",
    keyPoints: [
      "CV clair + expériences",
      "Entretien : ponctualité et présentation",
      "Contrat : vérifier poste, salaire, horaires",
      "Déclarations et cotisations sociales"
    ],
    example: "Avant de signer, on lit le contrat (type, durée, rémunération).",
    oralTip: "Dites que vous respectez la ponctualité et que vous lisez toujours le contrat."
  },
  {
    slug: "logement-droits-locataire",
    title: "Logement : droits et devoirs du locataire",
    description: "Comprendre le bail, loyer, charges et état des lieux.",
    definition:
      "Le locataire doit payer le loyer et respecter le logement. Le bail écrit fixe les règles (durée, loyer, charges). L’état des lieux protège les deux parties.",
    keyPoints: [
      "Bail écrit : conditions claires",
      "Payer le loyer et les charges",
      "État des lieux à l’entrée et à la sortie",
      "Respect du voisinage et entretien courant"
    ],
    example: "Faire un état des lieux précis évite des conflits à la fin du bail.",
    oralTip: "Expliquez que vous connaissez l’importance du bail écrit et de l’état des lieux."
  },
  {
    slug: "impots-declaration",
    title: "Déclarer ses impôts",
    description: "Une démarche annuelle importante.",
    definition:
      "La déclaration d’impôts est une démarche obligatoire qui permet de calculer l’impôt et d’ouvrir l’accès à certains droits (aides, justificatifs).",
    keyPoints: [
      "Déclaration annuelle (souvent en ligne)",
      "Impôt calculé selon la situation et les revenus",
      "Conserver les justificatifs",
      "Payer ses impôts finance les services publics"
    ],
    example: "Déclarer ses revenus permet de recevoir un avis d’imposition.",
    oralTip: "Dites que vous faites vos démarches et gardez vos documents."
  },
  {
    slug: "ecole-parents",
    title: "Le rôle des parents à l’école",
    description: "Suivre la scolarité et respecter le cadre scolaire.",
    definition:
      "Les parents ont un rôle essentiel : assurer l’assiduité, suivre la scolarité et coopérer avec l’école. L’école transmet des connaissances et des règles de vie collective.",
    keyPoints: [
      "Assiduité : présence régulière",
      "Relation avec les enseignants",
      "Respect du règlement intérieur",
      "Accompagner l’enfant (devoirs, suivi)"
    ],
    example: "Participer aux réunions parents-professeurs aide à suivre la scolarité.",
    oralTip: "Montrez que vous comprenez l’importance de l’école et de la coopération."
  },
  {
    slug: "vie-locale",
    title: "La vie locale",
    description: "S’impliquer dans sa commune et connaître les services proches.",
    definition:
      "La vie locale regroupe les services et activités de proximité : mairie, associations, médiathèques, événements. Elle facilite l’intégration et le lien social.",
    keyPoints: [
      "Mairie : démarches et informations",
      "Associations : sport, culture, entraide",
      "Équipements publics : médiathèque, centre social",
      "Participer renforce l’intégration"
    ],
    example: "S’inscrire à la médiathèque ou à une association aide à créer des liens.",
    oralTip: "Citez une activité locale que vous faites ou aimeriez faire."
  },
  {
    slug: "respect-espace-public",
    title: "Respect de l’espace public",
    description: "Des règles simples pour vivre ensemble.",
    definition:
      "L’espace public appartient à tous. Le respect de la propreté, des règles et des personnes améliore la qualité de vie et évite les conflits.",
    keyPoints: [
      "Propreté : ne pas jeter, trier si possible",
      "Respect du calme et des autres",
      "Règles communes (transport, files, lieux publics)",
      "Tolérance et courtoisie"
    ],
    example: "Respecter la file d’attente et garder les lieux propres dans un parc.",
    oralTip: "Donnez un exemple concret de geste de civisme au quotidien."
  }
]
