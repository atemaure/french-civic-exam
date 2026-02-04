import type { FicheInput } from "./types"

export const droits: FicheInput[] = [
  // --- FICHES FOURNIES (inchangées) ---
  {
    slug: "droit-vote",
    title: "Le droit de vote",
    description: "Tout citoyen français majeur peut voter aux élections.",
    definition:
      "Le droit de vote est le droit de participer aux élections pour choisir ses représentants. En France, il est accordé à tous les citoyens de 18 ans et plus.",
    keyPoints: [
      "Suffrage universel : tous les citoyens peuvent voter",
      "Vote secret : personne ne peut voir votre vote",
      "Élections : présidentielle, législatives, municipales, européennes",
      "Le vote est un droit et un devoir civique"
    ],
    example: "En mai 2022, les Français ont voté pour choisir leur Président de la République.",
    oralTip: "Dites que vous êtes impatient de pouvoir voter et participer aux choix de votre pays.",
    isEssential: true
  },
  {
    slug: "droits-fondamentaux",
    title: "Les droits fondamentaux",
    description: "Les libertés essentielles garanties à toute personne en France.",
    definition:
      "Les droits fondamentaux regroupent les libertés et droits essentiels reconnus à toute personne et protégés par la loi.",
    keyPoints: ["Liberté d’expression", "Liberté de conscience", "Droit à l’éducation", "Respect de la vie privée"],
    example: "En France, chacun peut exprimer ses opinions dans le respect de la loi.",
    oralTip: "Citez quelques droits fondamentaux et précisez qu’ils sont protégés par la loi.",
    isEssential: true
  },
  {
    slug: "egalite-des-droits",
    title: "L’égalité des droits",
    description: "Tous les citoyens ont les mêmes droits devant la loi.",
    definition: "L’égalité des droits signifie que la loi s’applique de la même manière à tous, sans discrimination.",
    keyPoints: ["Égalité devant la loi", "Interdiction des discriminations", "Égalité femmes-hommes"],
    example: "Un riche et un pauvre sont jugés de la même manière devant un tribunal.",
    oralTip: "Donnez un exemple concret d’égalité observé en France.",
    isEssential: true
  },
  {
    slug: "payer-impots",
    title: "Payer ses impôts",
    description: "Chaque citoyen contribue aux dépenses de l'État selon ses moyens.",
    definition:
      "Payer ses impôts est un devoir civique. L'impôt finance les services publics et la solidarité nationale.",
    keyPoints: [
      "L'impôt finance les services publics",
      "Chacun paie selon ses revenus",
      "Impôt sur le revenu, TVA, taxes locales",
      "La fraude fiscale est un délit"
    ],
    example: "Les impôts financent les écoles, les hôpitaux et la police.",
    oralTip: "Montrez que vous comprenez l'utilité des impôts.",
    isEssential: true
  },
  {
    slug: "respect-de-la-loi",
    title: "Le respect de la loi",
    description: "Tout citoyen doit respecter les lois de la République.",
    definition:
      "Respecter la loi est une obligation pour tout citoyen. Les lois s'appliquent à tous de manière égale.",
    keyPoints: [
      "Nul n'est censé ignorer la loi",
      "La loi s'applique à tous",
      "Les lois sont votées par le Parlement",
      "La justice sanctionne les infractions"
    ],
    example: "Le Code de la route s'applique à tous les conducteurs.",
    oralTip: "Montrez que vous respectez les lois françaises.",
    isEssential: true
  },
  {
    slug: "droit-education",
    title: "Le droit à l’éducation",
    description: "Tous les enfants ont droit à l’instruction.",
    definition: "Le droit à l’éducation garantit l’accès à une école gratuite et laïque pour tous les enfants.",
    keyPoints: ["École gratuite et laïque", "Instruction obligatoire jusqu’à 16 ans", "Égalité des chances"],
    example: "Tous les enfants peuvent aller à l’école publique gratuitement.",
    oralTip: "Expliquez que l’école est un pilier de la République.",
    isEssential: true
  },
  {
    slug: "respect-des-autres",
    title: "Le respect des autres",
    description: "Une règle essentielle pour vivre en société.",
    definition: "Le respect des autres implique de ne pas porter atteinte à leur dignité, à leurs droits ou à leur liberté.",
    keyPoints: ["Respect des personnes", "Refus des insultes et violences", "Respect des différences"],
    example: "Respecter ses voisins et éviter les nuisances sonores.",
    oralTip: "Donnez un exemple concret de respect au quotidien.",
    isEssential: true
  },
  {
    slug: "defense-de-la-nation",
    title: "La défense de la Nation",
    description: "Les citoyens peuvent être appelés à défendre leur pays.",
    definition: "La défense de la Nation repose sur l’armée et l’engagement civique des citoyens.",
    keyPoints: ["La défense est l'affaire de tous", "Journée Défense et Citoyenneté", "Armée professionnelle"],
    example: "Les jeunes participent à la Journée Défense et Citoyenneté.",
    oralTip: "Dites que vous seriez prêt à défendre la France si nécessaire.",
    isEssential: true
  },
  {
    slug: "droit-au-travail",
    title: "Le droit au travail",
    description: "Le droit d’exercer une activité professionnelle.",
    definition: "Le droit au travail permet à chacun de travailler dans le respect du droit du travail.",
    keyPoints: ["Contrat de travail", "Droits et devoirs du salarié", "Protection du salarié"],
    example: "Un salarié signe un contrat de travail.",
    oralTip: "Expliquez que le travail implique des obligations."
  },
  {
    slug: "droit-a-la-protection-sociale",
    title: "Le droit à la protection sociale",
    description: "Une protection face aux risques de la vie.",
    definition: "La protection sociale aide les personnes en cas de maladie, de chômage ou de vieillesse.",
    keyPoints: ["Sécurité sociale", "Solidarité nationale", "Aides sociales"],
    example: "La sécurité sociale rembourse les soins.",
    oralTip: "Reliez ce droit à la solidarité."
  },
  {
    slug: "droit-a-la-justice",
    title: "Le droit à la justice",
    description: "La possibilité de défendre ses droits.",
    definition: "Le droit à la justice permet à chacun de saisir un tribunal pour faire valoir ses droits.",
    keyPoints: ["Justice indépendante", "Procès équitable", "Accès pour tous"],
    example: "Porter plainte en cas de litige.",
    oralTip: "Expliquez que la justice protège les citoyens."
  },
  {
    slug: "participation-civique",
    title: "La participation civique",
    description: "S’impliquer dans la vie démocratique.",
    definition: "La participation civique inclut le vote, l’engagement associatif et la vie locale.",
    keyPoints: ["Vote", "Engagement associatif", "Vie locale"],
    example: "Participer à une association.",
    oralTip: "Parlez de votre engagement ou de votre volonté de participer."
  },

  // --- NOUVELLES FICHES (droits & devoirs) ---
  {
    slug: "obligation-scolarite",
    title: "L’obligation scolaire et l’assiduité",
    description: "L’instruction est obligatoire pour les enfants.",
    definition:
      "L’instruction est obligatoire pour les enfants. Les familles doivent veiller à la scolarité et à l’assiduité, car l’éducation est un pilier républicain.",
    keyPoints: [
      "Instruction obligatoire",
      "École publique gratuite et laïque",
      "Assiduité : présence régulière aux cours",
      "Rôle des parents : accompagner la scolarité"
    ],
    example: "Les parents doivent s’assurer que leur enfant va à l’école et respecte les horaires.",
    oralTip: "Montrez que vous connaissez l’importance de l’école et du respect des règles.",
    isEssential: true
  },
  {
    slug: "droits-et-devoirs-salarie",
    title: "Droits et devoirs du salarié",
    description: "Travailler en respectant les règles, et être protégé par le droit du travail.",
    definition:
      "Le salarié a des droits (salaire, repos, sécurité, protection contre les abus) et des devoirs (respect du contrat, horaires, règles de l’entreprise).",
    keyPoints: [
      "Contrat : fixe les missions et conditions",
      "Salaire et protection (sécurité, santé au travail)",
      "Temps de travail, repos et congés",
      "Devoir de respecter les règles internes et la hiérarchie"
    ],
    example: "Un salarié doit respecter ses horaires, et l’employeur doit garantir la sécurité au travail.",
    oralTip: "Expliquez que le travail implique des droits ET des responsabilités."
  },
  {
    slug: "liberte-circulation",
    title: "La liberté de circulation",
    description: "Se déplacer librement, avec des règles communes.",
    definition:
      "La liberté de circulation permet de se déplacer sur le territoire. Elle s’exerce dans le respect des lois (identité, sécurité, code de la route).",
    keyPoints: [
      "Droit de se déplacer librement",
      "Respect des règles de sécurité et du Code de la route",
      "Contrôles possibles dans un cadre légal",
      "Responsabilité individuelle (comportement, assurance, etc.)"
    ],
    example: "Je peux me déplacer librement, mais je dois respecter les limitations de vitesse.",
    oralTip: "Montrez que vous comprenez : liberté oui, mais avec des règles pour protéger tous."
  },
  {
    slug: "solidarite-nationale",
    title: "La solidarité nationale",
    description: "Aider les plus fragiles grâce à un effort collectif.",
    definition:
      "La solidarité nationale repose sur la contribution de tous (impôts, cotisations) pour financer la santé, l’aide sociale, le chômage et les retraites.",
    keyPoints: [
      "Protection sociale : maladie, chômage, vieillesse",
      "Financement par impôts et cotisations",
      "Aides selon les besoins, dans un cadre légal",
      "Idée de cohésion : personne n’est laissé de côté"
    ],
    example: "Les cotisations et impôts financent la sécurité sociale et les aides en cas de difficulté.",
    oralTip: "Expliquez que la solidarité est une valeur forte : chacun contribue selon ses moyens.",
    isEssential: true
  },
  {
    slug: "service-public",
    title: "Les services publics",
    description: "Des services essentiels accessibles à tous.",
    definition:
      "Les services publics assurent des missions d’intérêt général (éducation, santé, justice, sécurité, transports, etc.) et doivent traiter les usagers de manière égale.",
    keyPoints: [
      "Intérêt général : répondre aux besoins collectifs",
      "Égalité d’accès et continuité du service",
      "Neutralité : pas de discrimination",
      "Financement principalement par l’impôt"
    ],
    example: "L’école publique et l’hôpital public sont des services publics essentiels.",
    oralTip: "Citez 2–3 services publics concrets et leur utilité au quotidien."
  },
  {
    slug: "droit-propriete",
    title: "Le droit de propriété",
    description: "Posséder et utiliser ses biens, dans le respect de la loi.",
    definition:
      "Le droit de propriété est un droit fondamental : chacun peut posséder, utiliser et transmettre ses biens, avec des limites prévues par la loi (ordre public, règles d’urbanisme, etc.).",
    keyPoints: [
      "Droit de posséder et d’utiliser ses biens",
      "Protection par la loi",
      "Limites possibles pour l’intérêt général",
      "Respect de la propriété d’autrui"
    ],
    example: "Vous pouvez être propriétaire d’un logement, mais devez respecter les règles (copropriété, urbanisme).",
    oralTip: "Soulignez que ce droit va avec un devoir : respecter les biens des autres."
  },
  {
    slug: "droit-vie-privee-donnees",
    title: "La vie privée et les données personnelles",
    description: "Protéger ses informations et respecter celles des autres.",
    definition:
      "La vie privée est protégée : chacun a droit au respect de sa vie personnelle. Les données personnelles doivent être collectées et utilisées de manière encadrée et légale.",
    keyPoints: [
      "Respect de la vie privée",
      "Protection des données personnelles",
      "Droits : accès, rectification (selon les procédures)",
      "Responsabilité : ne pas diffuser des infos d’autrui"
    ],
    example: "Publier la photo ou l’adresse de quelqu’un sans son accord peut poser un problème légal.",
    oralTip: "Expliquez simplement : “la loi protège la vie privée, y compris sur internet”."
  },
  {
    slug: "droit-sante",
    title: "Le droit à la santé",
    description: "Accéder aux soins et être protégé en cas de maladie.",
    definition:
      "Le droit à la santé signifie pouvoir accéder aux soins. En France, la protection sociale (Sécurité sociale, complémentaire) aide au remboursement et à la prise en charge.",
    keyPoints: [
      "Accès aux soins",
      "Sécurité sociale : remboursement partiel des soins",
      "Prévention et suivi médical",
      "Solidarité : aide aux personnes vulnérables"
    ],
    example: "Consulter un médecin et être remboursé en partie par l’assurance maladie.",
    oralTip: "Reliez santé et solidarité : “la collectivité aide à se soigner”."
  },
  {
    slug: "responsabilite-penale-civile",
    title: "La responsabilité : civile et pénale",
    description: "Répondre de ses actes et réparer un dommage.",
    definition:
      "La responsabilité civile concerne la réparation d’un dommage causé à autrui. La responsabilité pénale concerne les infractions sanctionnées par la justice.",
    keyPoints: [
      "Civile : réparer (souvent via assurance)",
      "Pénale : sanctionner une infraction (amende, peine, etc.)",
      "La loi s’applique à tous",
      "Conséquences possibles même pour des faits en ligne"
    ],
    example: "Casser le téléphone de quelqu’un : réparation (civile) + possible infraction selon le cas (pénale).",
    oralTip: "Dites que vous savez qu’en France, on est responsable de ses actes."
  }
]
