export interface Fiche {
  slug: string
  title: string
  description: string
  theme: string
  themeSlug: string
  definition: string
  keyPoints: string[]
  example: string
  oralTip: string
  isEssential?: boolean
}

export interface Theme {
  slug: string
  name: string
  description: string
  ficheCount: number
}

export const themes: Theme[] = [
  {
    slug: "valeurs",
    name: "Principes et valeurs",
    description: "Liberté, Égalité, Fraternité et les valeurs fondamentales de la République française.",
    ficheCount: 5,
  },
  {
    slug: "droits",
    name: "Droits et devoirs",
    description: "Les droits fondamentaux des citoyens et leurs devoirs envers la République.",
    ficheCount: 4,
  },
  {
    slug: "institutions",
    name: "Institutions françaises",
    description: "Le fonctionnement de l'État, le Parlement, le Gouvernement et les collectivités.",
    ficheCount: 5,
  },
  {
    slug: "histoire",
    name: "Histoire et symboles",
    description: "Les grandes dates de l'histoire de France et les symboles de la République.",
    ficheCount: 4,
  },
  {
    slug: "vivre",
    name: "Vivre en France",
    description: "La vie quotidienne, la laïcité et les principes du vivre-ensemble.",
    ficheCount: 3,
  },
]

export const fiches: Fiche[] = [
  // Valeurs
  {
    slug: "liberte",
    title: "La Liberté",
    description: "Premier terme de la devise française, la liberté est un droit fondamental.",
    theme: "Principes et valeurs",
    themeSlug: "valeurs",
    definition: "La liberté est le droit de faire tout ce qui ne nuit pas à autrui. Elle comprend la liberté d'expression, de circulation, de culte et d'opinion.",
    keyPoints: [
      "La liberté individuelle est garantie par la Constitution",
      "La liberté d'expression permet de dire ses opinions dans le respect des autres",
      "La liberté de culte permet de pratiquer sa religion",
      "Ma liberté s'arrête là où commence celle des autres",
    ],
    example: "En France, je peux exprimer mon opinion sur la politique, choisir ma religion, me déplacer librement et choisir mon métier.",
    oralTip: "Montrez que vous comprenez que la liberté a des limites : elle ne permet pas de nuire aux autres.",
    isEssential: true,
  },
  {
    slug: "egalite",
    title: "L'Égalité",
    description: "Tous les citoyens ont les mêmes droits et les mêmes devoirs.",
    theme: "Principes et valeurs",
    themeSlug: "valeurs",
    definition: "L'égalité signifie que tous les citoyens français ont les mêmes droits et les mêmes devoirs, sans distinction d'origine, de sexe ou de religion.",
    keyPoints: [
      "Égalité devant la loi : la justice est la même pour tous",
      "Égalité des chances : l'école est accessible à tous gratuitement",
      "Égalité homme-femme : mêmes droits et mêmes salaires",
      "Égalité d'accès aux services publics",
    ],
    example: "Un riche et un pauvre seront jugés de la même manière devant un tribunal. Tous les enfants peuvent aller à l'école publique gratuitement.",
    oralTip: "Donnez un exemple concret d'égalité que vous avez observé en France (école gratuite, hôpital pour tous...).",
    isEssential: true,
  },
  {
    slug: "fraternite",
    title: "La Fraternité",
    description: "La solidarité entre tous les citoyens français.",
    theme: "Principes et valeurs",
    themeSlug: "valeurs",
    definition: "La fraternité est le lien de solidarité qui unit tous les citoyens. Elle se manifeste par l'entraide, le respect mutuel et la cohésion sociale.",
    keyPoints: [
      "La solidarité nationale : aider les plus démunis",
      "La protection sociale : sécurité sociale, allocations",
      "L'entraide entre citoyens",
      "Le respect des différences",
    ],
    example: "La Sécurité sociale permet à tous d'être soignés. Les impôts financent les aides pour les personnes en difficulté.",
    oralTip: "Parlez d'un exemple de solidarité que vous avez vécu ou observé en France.",
    isEssential: true,
  },
  {
    slug: "laicite",
    title: "La Laïcité",
    description: "Séparation de l'État et des religions, liberté de conscience pour tous.",
    theme: "Principes et valeurs",
    themeSlug: "valeurs",
    definition: "La laïcité est le principe de séparation de l'État et des religions. L'État ne favorise aucune religion et garantit la liberté de croire ou de ne pas croire.",
    keyPoints: [
      "Séparation de l'État et des religions depuis 1905",
      "Liberté de croire ou de ne pas croire",
      "Neutralité des agents publics",
      "Respect de toutes les religions",
    ],
    example: "À l'école publique, les enseignants ne portent pas de signes religieux. Mais chacun est libre de pratiquer sa religion chez lui ou dans un lieu de culte.",
    oralTip: "Montrez que la laïcité n'est pas contre les religions mais qu'elle les protège toutes également.",
    isEssential: true,
  },
  {
    slug: "democratie",
    title: "La Démocratie",
    description: "Le pouvoir appartient au peuple qui s'exprime par le vote.",
    theme: "Principes et valeurs",
    themeSlug: "valeurs",
    definition: "La démocratie est le régime politique dans lequel le pouvoir appartient au peuple. En France, les citoyens élisent leurs représentants au suffrage universel.",
    keyPoints: [
      "Le peuple est souverain",
      "Le vote permet de choisir ses représentants",
      "Séparation des pouvoirs (exécutif, législatif, judiciaire)",
      "L'État de droit : nul n'est au-dessus de la loi",
    ],
    example: "Tous les 5 ans, les Français élisent leur Président de la République. Tous les citoyens majeurs peuvent voter.",
    oralTip: "Expliquez pourquoi le vote est important et dites que vous souhaitez participer à la vie démocratique.",
    isEssential: true,
  },

  // Droits et devoirs
  {
    slug: "droit-vote",
    title: "Le droit de vote",
    description: "Tout citoyen français majeur peut voter aux élections.",
    theme: "Droits et devoirs",
    themeSlug: "droits",
    definition: "Le droit de vote est le droit de participer aux élections pour choisir ses représentants. En France, il est accordé à tous les citoyens de 18 ans et plus.",
    keyPoints: [
      "Suffrage universel : tous les citoyens peuvent voter",
      "Vote secret : personne ne peut voir votre vote",
      "Élections : présidentielle, législatives, municipales, européennes",
      "Le vote est un droit et un devoir civique",
    ],
    example: "En mai 2022, les Français ont voté pour choisir leur Président de la République entre Emmanuel Macron et Marine Le Pen.",
    oralTip: "Dites que vous êtes impatient de pouvoir voter et participer aux choix de votre pays.",
    isEssential: true,
  },
  {
    slug: "payer-impots",
    title: "Payer ses impôts",
    description: "Chaque citoyen contribue aux dépenses de l'État selon ses moyens.",
    theme: "Droits et devoirs",
    themeSlug: "droits",
    definition: "Payer ses impôts est un devoir civique. L'impôt finance les services publics (écoles, hôpitaux, routes, police) et la solidarité nationale.",
    keyPoints: [
      "L'impôt finance les services publics",
      "Chacun paie selon ses revenus",
      "Impôt sur le revenu, TVA, taxes locales",
      "La fraude fiscale est un délit",
    ],
    example: "L'impôt sur le revenu permet de payer les enseignants, les infirmiers et les policiers. La TVA est incluse dans le prix des produits.",
    oralTip: "Montrez que vous comprenez l'utilité des impôts : ils financent les services dont tout le monde profite.",
  },
  {
    slug: "respecter-loi",
    title: "Respecter la loi",
    description: "Tout citoyen doit respecter les lois de la République.",
    theme: "Droits et devoirs",
    themeSlug: "droits",
    definition: "Respecter la loi est une obligation pour tout citoyen. Les lois sont votées par le Parlement et s'appliquent à tous de manière égale.",
    keyPoints: [
      "Nul n'est censé ignorer la loi",
      "La loi s'applique à tous de manière égale",
      "Les lois sont votées par le Parlement",
      "La justice sanctionne ceux qui ne respectent pas la loi",
    ],
    example: "Le Code de la route s'applique à tous les conducteurs. Si je commets une infraction, je suis sanctionné comme tout le monde.",
    oralTip: "Montrez que vous connaissez et respectez les lois françaises, même celles qui peuvent être différentes de votre pays d'origine.",
  },
  {
    slug: "defense-nation",
    title: "La défense de la nation",
    description: "Les citoyens peuvent être appelés à défendre leur pays.",
    theme: "Droits et devoirs",
    themeSlug: "droits",
    definition: "En cas de menace grave, les citoyens français peuvent être appelés à participer à la défense du pays. La Journée Défense et Citoyenneté sensibilise les jeunes.",
    keyPoints: [
      "La défense est l'affaire de tous les citoyens",
      "La JDC est obligatoire pour les jeunes de 16 à 25 ans",
      "Le service militaire a été suspendu en 1997",
      "L'armée française est professionnelle",
    ],
    example: "Les jeunes Français participent à la Journée Défense et Citoyenneté où ils découvrent le fonctionnement de la défense nationale.",
    oralTip: "Si on vous demande, dites que vous seriez prêt à défendre la France si nécessaire.",
  },

  // Institutions
  {
    slug: "president-republique",
    title: "Le Président de la République",
    description: "Chef de l'État, élu au suffrage universel direct pour 5 ans.",
    theme: "Institutions françaises",
    themeSlug: "institutions",
    definition: "Le Président de la République est le chef de l'État français. Il est élu au suffrage universel direct pour un mandat de 5 ans, renouvelable une fois.",
    keyPoints: [
      "Chef de l'État et chef des armées",
      "Garant de la Constitution",
      "Nomme le Premier ministre",
      "Peut dissoudre l'Assemblée nationale",
    ],
    example: "Emmanuel Macron est le Président de la République française depuis 2017. Il a été réélu en 2022.",
    oralTip: "Connaissez le nom du Président actuel et les grandes lignes de ses pouvoirs.",
    isEssential: true,
  },
  {
    slug: "premier-ministre",
    title: "Le Premier ministre",
    description: "Chef du Gouvernement, nommé par le Président de la République.",
    theme: "Institutions françaises",
    themeSlug: "institutions",
    definition: "Le Premier ministre est le chef du Gouvernement. Il est nommé par le Président de la République et dirige l'action du Gouvernement.",
    keyPoints: [
      "Chef du Gouvernement",
      "Nommé par le Président de la République",
      "Dirige l'action du Gouvernement",
      "Responsable devant l'Assemblée nationale",
    ],
    example: "Le Premier ministre coordonne le travail des ministres et présente les projets de loi devant le Parlement.",
    oralTip: "Connaissez le nom du Premier ministre actuel et la différence entre son rôle et celui du Président.",
  },
  {
    slug: "assemblee-nationale",
    title: "L'Assemblée nationale",
    description: "Les députés votent les lois et contrôlent le Gouvernement.",
    theme: "Institutions françaises",
    themeSlug: "institutions",
    definition: "L'Assemblée nationale est composée de 577 députés élus au suffrage universel direct. Elle vote les lois et peut renverser le Gouvernement.",
    keyPoints: [
      "577 députés élus pour 5 ans",
      "Vote les lois",
      "Contrôle l'action du Gouvernement",
      "Peut voter une motion de censure",
    ],
    example: "Les députés discutent et votent les projets de loi proposés par le Gouvernement ou par eux-mêmes.",
    oralTip: "Expliquez simplement que les députés représentent le peuple et votent les lois.",
    isEssential: true,
  },
  {
    slug: "senat",
    title: "Le Sénat",
    description: "Les sénateurs représentent les collectivités territoriales.",
    theme: "Institutions françaises",
    themeSlug: "institutions",
    definition: "Le Sénat est composé de 348 sénateurs élus au suffrage indirect. Il représente les collectivités territoriales et participe au vote des lois.",
    keyPoints: [
      "348 sénateurs élus pour 6 ans",
      "Représente les collectivités territoriales",
      "Participe au vote des lois",
      "Ne peut pas renverser le Gouvernement",
    ],
    example: "Le Sénat examine les lois après l'Assemblée nationale. En cas de désaccord, l'Assemblée a le dernier mot.",
    oralTip: "Sachez que le Parlement est composé de deux chambres : l'Assemblée nationale et le Sénat.",
  },
  {
    slug: "conseil-constitutionnel",
    title: "Le Conseil constitutionnel",
    description: "Vérifie que les lois respectent la Constitution.",
    theme: "Institutions françaises",
    themeSlug: "institutions",
    definition: "Le Conseil constitutionnel vérifie que les lois votées par le Parlement sont conformes à la Constitution. Il peut annuler une loi inconstitutionnelle.",
    keyPoints: [
      "9 membres nommés pour 9 ans",
      "Vérifie la conformité des lois à la Constitution",
      "Valide les élections présidentielles",
      "Les anciens Présidents en sont membres de droit",
    ],
    example: "Si une loi ne respecte pas les droits garantis par la Constitution, le Conseil constitutionnel peut l'annuler.",
    oralTip: "Retenez que le Conseil constitutionnel est le gardien de la Constitution.",
  },

  // Histoire et symboles
  {
    slug: "drapeau-tricolore",
    title: "Le drapeau tricolore",
    description: "Bleu, blanc, rouge : les couleurs de la France.",
    theme: "Histoire et symboles",
    themeSlug: "histoire",
    definition: "Le drapeau français est composé de trois bandes verticales bleu, blanc et rouge. Il symbolise l'union du peuple et de la monarchie pendant la Révolution.",
    keyPoints: [
      "Trois couleurs : bleu, blanc, rouge",
      "Bleu et rouge : couleurs de Paris",
      "Blanc : couleur de la monarchie",
      "Adopté définitivement en 1794",
    ],
    example: "Le drapeau tricolore flotte sur tous les bâtiments publics et représente la France dans le monde entier.",
    oralTip: "Connaissez les trois couleurs et leur ordre (bleu-blanc-rouge de gauche à droite).",
    isEssential: true,
  },
  {
    slug: "marseillaise",
    title: "La Marseillaise",
    description: "L'hymne national français, composé en 1792.",
    theme: "Histoire et symboles",
    themeSlug: "histoire",
    definition: "La Marseillaise est l'hymne national français. Composée par Rouget de Lisle en 1792, elle est devenue l'hymne officiel en 1879.",
    keyPoints: [
      "Composée en 1792 par Rouget de Lisle",
      "Chantée par les volontaires marseillais",
      "Hymne national depuis 1879",
      "Jouée lors des cérémonies officielles",
    ],
    example: "La Marseillaise est jouée avant les matchs de football de l'équipe de France et lors des cérémonies officielles.",
    oralTip: "Connaissez au moins les premiers mots : 'Allons enfants de la Patrie, le jour de gloire est arrivé'.",
    isEssential: true,
  },
  {
    slug: "marianne",
    title: "Marianne",
    description: "Le visage de la République française.",
    theme: "Histoire et symboles",
    themeSlug: "histoire",
    definition: "Marianne est la figure allégorique de la République française. Coiffée d'un bonnet phrygien, elle symbolise la liberté et la République.",
    keyPoints: [
      "Symbole de la République et de la liberté",
      "Coiffée d'un bonnet phrygien",
      "Présente dans toutes les mairies",
      "Ses traits sont parfois inspirés par des célébrités",
    ],
    example: "Le buste de Marianne est présent dans toutes les mairies de France et figure sur les timbres.",
    oralTip: "Marianne représente la République. Si vous avez vu son buste en mairie, mentionnez-le.",
  },
  {
    slug: "14-juillet",
    title: "Le 14 juillet",
    description: "La fête nationale française.",
    theme: "Histoire et symboles",
    themeSlug: "histoire",
    definition: "Le 14 juillet est la fête nationale française. Elle commémore la prise de la Bastille en 1789, symbole de la fin de la monarchie absolue.",
    keyPoints: [
      "Fête nationale depuis 1880",
      "Commémore la prise de la Bastille (1789)",
      "Défilé militaire sur les Champs-Élysées",
      "Feux d'artifice dans toute la France",
    ],
    example: "Le 14 juillet, les Français assistent aux feux d'artifice et au défilé militaire. C'est un jour férié.",
    oralTip: "Parlez du 14 juillet que vous avez vécu en France si c'est le cas.",
  },

  // Vivre en France
  {
    slug: "ecole-obligatoire",
    title: "L'école obligatoire",
    description: "L'instruction est obligatoire de 3 à 16 ans en France.",
    theme: "Vivre en France",
    themeSlug: "vivre",
    definition: "En France, l'instruction est obligatoire pour tous les enfants de 3 à 16 ans. L'école publique est gratuite et laïque.",
    keyPoints: [
      "Instruction obligatoire de 3 à 16 ans",
      "École publique gratuite et laïque",
      "École maternelle, primaire, collège, lycée",
      "Mixité garçons-filles",
    ],
    example: "Tous les enfants doivent aller à l'école, qu'ils soient français ou étrangers. L'école leur apprend à lire, écrire et compter.",
    oralTip: "Si vous avez des enfants scolarisés en France, parlez de leur expérience à l'école.",
  },
  {
    slug: "protection-sociale",
    title: "La protection sociale",
    description: "Le système français de sécurité sociale et d'aides.",
    theme: "Vivre en France",
    themeSlug: "vivre",
    definition: "La protection sociale française comprend la Sécurité sociale (maladie, retraite, famille) et les aides sociales pour les personnes en difficulté.",
    keyPoints: [
      "Sécurité sociale : maladie, retraite, famille",
      "Remboursement des soins médicaux",
      "Allocations familiales",
      "Aides sociales (RSA, APL...)",
    ],
    example: "Quand je vais chez le médecin, la Sécurité sociale rembourse une partie de la consultation. Si je perds mon emploi, je peux toucher des allocations.",
    oralTip: "Montrez que vous comprenez le système de solidarité français et que vous y contribuez par vos cotisations.",
  },
  {
    slug: "vivre-ensemble",
    title: "Le vivre-ensemble",
    description: "Les principes de la vie en société en France.",
    theme: "Vivre en France",
    themeSlug: "vivre",
    definition: "Le vivre-ensemble repose sur le respect mutuel, la tolérance et le partage des valeurs républicaines. Il permet à des personnes de cultures différentes de cohabiter.",
    keyPoints: [
      "Respect des différences",
      "Tolérance et ouverture d'esprit",
      "Partage des valeurs républicaines",
      "Participation à la vie de la communauté",
    ],
    example: "Dans mon quartier, des personnes de différentes origines vivent ensemble, respectent leurs différences et partagent des moments communs.",
    oralTip: "Parlez de votre intégration dans votre quartier ou votre ville, des liens que vous avez créés.",
  },
]

export function getFicheBySlug(slug: string): Fiche | undefined {
  return fiches.find((fiche) => fiche.slug === slug)
}

export function getFichesByTheme(themeSlug: string): Fiche[] {
  return fiches.filter((fiche) => fiche.themeSlug === themeSlug)
}

export function getEssentialFiches(): Fiche[] {
  return fiches.filter((fiche) => fiche.isEssential)
}

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((theme) => theme.slug === slug)
}
