export const institutions = [
  // --- FICHES FOURNIES (inchangées) ---
  {
    slug: "president-republique",
    title: "Le Président de la République",
    description: "Chef de l'État, élu au suffrage universel direct pour 5 ans.",
    definition:
      "Le Président de la République est le chef de l'État français. Il est élu au suffrage universel direct pour un mandat de 5 ans, renouvelable une fois.",
    keyPoints: [
      "Chef de l'État et chef des armées",
      "Garant de la Constitution",
      "Nomme le Premier ministre",
      "Peut dissoudre l'Assemblée nationale"
    ],
    example: "Emmanuel Macron est le Président de la République française depuis 2017. Il a été réélu en 2022.",
    oralTip: "Connaissez le nom du Président actuel et les grandes lignes de ses pouvoirs.",
    isEssential: true
  },
  {
    slug: "premier-ministre",
    title: "Le Premier ministre",
    description: "Chef du Gouvernement, nommé par le Président de la République.",
    definition:
      "Le Premier ministre est le chef du Gouvernement. Il est nommé par le Président de la République et dirige l'action du Gouvernement.",
    keyPoints: [
      "Chef du Gouvernement",
      "Nommé par le Président de la République",
      "Dirige l'action du Gouvernement",
      "Responsable devant l'Assemblée nationale"
    ],
    example: "Le Premier ministre coordonne le travail des ministres et présente les projets de loi devant le Parlement.",
    oralTip: "Connaissez le rôle du Premier ministre et sa relation avec le Président.",
    isEssential: true
  },
  {
    slug: "assemblee-nationale",
    title: "L’Assemblée nationale",
    description: "Les députés votent les lois et contrôlent le Gouvernement.",
    definition:
      "L'Assemblée nationale est composée de 577 députés élus au suffrage universel direct. Elle vote les lois et peut renverser le Gouvernement.",
    keyPoints: [
      "577 députés élus pour 5 ans",
      "Vote les lois",
      "Contrôle l'action du Gouvernement",
      "Peut voter une motion de censure"
    ],
    example: "Les députés discutent et votent les projets de loi.",
    oralTip: "Expliquez que les députés représentent le peuple.",
    isEssential: true
  },
  {
    slug: "senat",
    title: "Le Sénat",
    description: "Les sénateurs représentent les collectivités territoriales.",
    definition:
      "Le Sénat est composé de sénateurs élus au suffrage indirect. Il représente les collectivités territoriales et participe au vote des lois.",
    keyPoints: [
      "Sénateurs élus au suffrage indirect",
      "Représente les collectivités territoriales",
      "Participe au vote des lois",
      "Ne peut pas renverser le Gouvernement"
    ],
    example: "Le Sénat examine les lois après l'Assemblée nationale.",
    oralTip: "Sachez que le Parlement est composé de deux chambres.",
    isEssential: true
  },
  {
    slug: "conseil-constitutionnel",
    title: "Le Conseil constitutionnel",
    description: "Vérifie que les lois respectent la Constitution.",
    definition:
      "Le Conseil constitutionnel contrôle la conformité des lois à la Constitution et veille au respect des principes constitutionnels.",
    keyPoints: [
      "9 membres nommés pour 9 ans",
      "Contrôle la constitutionnalité des lois",
      "Valide les élections nationales",
      "Gardien de la Constitution"
    ],
    example: "Une loi peut être annulée si elle est contraire à la Constitution.",
    oralTip: "Retenez que le Conseil constitutionnel protège la Constitution.",
    isEssential: true
  },
  {
    slug: "parlement",
    title: "Le Parlement",
    description: "L'institution qui vote les lois en France.",
    definition:
      "Le Parlement est composé de l’Assemblée nationale et du Sénat. Il vote les lois et contrôle l’action du Gouvernement.",
    keyPoints: ["Deux chambres", "Vote les lois", "Contrôle le Gouvernement"],
    example: "Un projet de loi est débattu au Parlement.",
    oralTip: "Expliquez simplement le rôle du Parlement."
  },
  {
    slug: "gouvernement",
    title: "Le Gouvernement",
    description: "L'organe chargé de diriger la politique de la Nation.",
    definition:
      "Le Gouvernement détermine et conduit la politique de la Nation sous l’autorité du Premier ministre.",
    keyPoints: [
      "Dirige la politique nationale",
      "Composé du Premier ministre et des ministres",
      "Responsable devant l’Assemblée nationale"
    ],
    example: "Le Gouvernement propose des projets de loi.",
    oralTip: "Distinguez bien le Gouvernement du Président."
  },
  {
    slug: "pouvoir-executif",
    title: "Le pouvoir exécutif",
    description: "Le pouvoir chargé d’appliquer les lois.",
    definition: "Le pouvoir exécutif est exercé par le Président de la République et le Gouvernement.",
    keyPoints: ["Président + Gouvernement", "Applique les lois", "Dirige l’administration"],
    example: "Le Gouvernement met en œuvre une loi votée par le Parlement.",
    oralTip: "Expliquez la séparation des pouvoirs."
  },
  {
    slug: "pouvoir-legislatif",
    title: "Le pouvoir législatif",
    description: "Le pouvoir chargé de voter les lois.",
    definition: "Le pouvoir législatif est exercé par le Parlement.",
    keyPoints: ["Vote les lois", "Contrôle le Gouvernement", "Deux chambres"],
    example: "Les députés votent une loi à l’Assemblée nationale.",
    oralTip: "Reliez ce pouvoir au Parlement."
  },
  {
    slug: "pouvoir-judiciaire",
    title: "Le pouvoir judiciaire",
    description: "Le pouvoir chargé de rendre la justice.",
    definition: "Le pouvoir judiciaire est exercé par les tribunaux et les juges, de manière indépendante.",
    keyPoints: ["Justice indépendante", "Applique la loi", "Sanctionne les infractions"],
    example: "Un juge rend une décision de justice.",
    oralTip: "Expliquez que la justice est indépendante."
  },
  {
    slug: "separation-des-pouvoirs",
    title: "La séparation des pouvoirs",
    description: "Un principe fondamental de la démocratie.",
    definition:
      "La séparation des pouvoirs vise à éviter la concentration du pouvoir en distinguant l’exécutif, le législatif et le judiciaire.",
    keyPoints: ["Trois pouvoirs distincts", "Équilibre des institutions", "Garantie des libertés"],
    example: "Le Parlement vote la loi, le Gouvernement l’applique, la justice la contrôle.",
    oralTip: "Citez les trois pouvoirs et leur rôle."
  },

  // --- NOUVELLES FICHES (institutions & démocratie) ---
  {
    slug: "elections",
    title: "Les élections en France",
    description: "Choisir ses représentants à différents niveaux.",
    definition:
      "Les élections permettent aux citoyens de choisir leurs représentants (au niveau national, local et européen) selon des règles fixées par la loi.",
    keyPoints: [
      "Présidentielle : élire le Président",
      "Législatives : élire les députés",
      "Municipales : élire le conseil municipal",
      "Européennes : élire les députés européens"
    ],
    example: "Les élections législatives servent à élire les députés qui siègent à l’Assemblée nationale.",
    oralTip: "Citez 2 élections et ce qu’elles permettent d’élire.",
    isEssential: true
  },
  {
    slug: "suffrage-universel",
    title: "Le suffrage universel",
    description: "Le principe : une personne, une voix.",
    definition:
      "Le suffrage universel signifie que tous les citoyens majeurs disposant de leurs droits civiques peuvent voter, sans distinction.",
    keyPoints: [
      "Droit de vote à partir de 18 ans (pour les citoyens)",
      "Égalité du vote : chaque voix compte",
      "Vote secret",
      "Conditions fixées par la loi (inscription, droits civiques)"
    ],
    example: "En France, les citoyens votent au suffrage universel direct pour la présidentielle.",
    oralTip: "Dites : “la démocratie repose sur le suffrage universel”.",
    isEssential: true
  },
  {
    slug: "referendum",
    title: "Le référendum",
    description: "Quand le peuple est consulté directement.",
    definition:
      "Le référendum est une consultation directe des citoyens sur un texte ou une question importante. Le résultat dépend des règles prévues par la Constitution et la loi.",
    keyPoints: [
      "Vote direct des citoyens",
      "Porte sur une question/texte",
      "Complète la démocratie représentative",
      "Encadré par des règles précises"
    ],
    example: "Les citoyens peuvent être appelés à répondre “oui” ou “non” à une question nationale.",
    oralTip: "Expliquez simplement : “c’est le peuple qui décide directement”."
  },
  {
    slug: "commune-maire",
    title: "La commune et le maire",
    description: "L’échelon de proximité de la République.",
    definition:
      "La commune est la collectivité territoriale de base. Le maire dirige la commune et applique les décisions du conseil municipal.",
    keyPoints: [
      "Le conseil municipal est élu aux municipales",
      "Le maire gère la vie locale (services, écoles, état civil)",
      "Proximité : décisions au plus près des habitants",
      "Le maire représente aussi l’État pour certaines missions"
    ],
    example: "La mairie délivre des actes d’état civil (naissance, mariage, décès).",
    oralTip: "Donnez un exemple concret de service rendu par la mairie."
  },
  {
    slug: "departement-region",
    title: "Département et région",
    description: "Deux niveaux de collectivités territoriales.",
    definition:
      "Le département et la région sont des collectivités territoriales qui gèrent des compétences publiques (social, transports, développement…).",
    keyPoints: [
      "Département : action sociale, collèges, routes (selon compétences)",
      "Région : lycées, transports régionaux, développement économique",
      "Conseils élus (départemental et régional)",
      "Objectif : organiser l’action publique sur le territoire"
    ],
    example: "La région organise des transports régionaux et gère les lycées.",
    oralTip: "Citez une compétence du département et une de la région."
  },
  {
    slug: "initiative-loi",
    title: "Comment une loi est adoptée",
    description: "Du projet/proposition à la promulgation.",
    definition:
      "Une loi est discutée et votée par le Parlement. Elle peut venir du Gouvernement (projet de loi) ou des parlementaires (proposition de loi).",
    keyPoints: [
      "Texte examiné à l’Assemblée nationale et au Sénat",
      "Débats, amendements, votes",
      "Contrôle possible de constitutionnalité",
      "Promulgation puis publication"
    ],
    example: "Un texte est débattu, amendé, puis voté avant d’entrer en vigueur.",
    oralTip: "Retenez : “Parlement vote, Gouvernement propose souvent, Président promulgue”."
  },
  {
    slug: "conseil-etat",
    title: "Le Conseil d’État",
    description: "Conseiller du Gouvernement et juge administratif suprême.",
    definition:
      "Le Conseil d’État conseille le Gouvernement sur certains textes et est la plus haute juridiction de l’ordre administratif.",
    keyPoints: [
      "Conseil juridique au Gouvernement",
      "Juge suprême de l’administration",
      "Traite les litiges contre l’administration",
      "Garant du respect du droit administratif"
    ],
    example: "Un citoyen peut contester une décision administrative selon les voies prévues.",
    oralTip: "Dites simplement : “c’est la plus haute juridiction administrative”."
  },
  {
    slug: "cour-cassation",
    title: "La Cour de cassation",
    description: "La plus haute juridiction de l’ordre judiciaire.",
    definition:
      "La Cour de cassation vérifie si la loi a été correctement appliquée par les tribunaux. Elle ne rejoue pas le procès : elle contrôle le droit.",
    keyPoints: [
      "Sommet de l’ordre judiciaire",
      "Contrôle l’application du droit",
      "Peut casser une décision et renvoyer l’affaire",
      "Garantit l’unité d’interprétation des règles"
    ],
    example: "Elle peut annuler une décision si la règle de droit a été mal appliquée.",
    oralTip: "Expliquez : “elle contrôle la bonne application de la loi”."
  },
  {
    slug: "cour-des-comptes",
    title: "La Cour des comptes",
    description: "Contrôle l’utilisation de l’argent public.",
    definition:
      "La Cour des comptes contrôle la gestion des finances publiques et informe les citoyens (rapports, analyses).",
    keyPoints: [
      "Contrôle des dépenses publiques",
      "Évalue l’efficacité de certaines politiques",
      "Publie des rapports",
      "Renforce la transparence"
    ],
    example: "Elle peut publier un rapport sur la gestion d’un service public.",
    oralTip: "Dites : “elle veille au bon usage de l’argent public”."
  },
  {
    slug: "union-europeenne",
    title: "La France et l’Union européenne",
    description: "Un espace de coopération politique et économique.",
    definition:
      "La France est un État membre de l’Union européenne. Certaines décisions sont prises au niveau européen, selon des compétences partagées ou propres.",
    keyPoints: [
      "Citoyenneté européenne (en plus de la nationalité)",
      "Élections européennes : députés au Parlement européen",
      "Règles communes dans certains domaines",
      "Coopération entre États membres"
    ],
    example: "Les citoyens votent pour élire leurs représentants au Parlement européen.",
    oralTip: "Expliquez que l’UE complète l’action des États, selon des domaines."
  }
]

