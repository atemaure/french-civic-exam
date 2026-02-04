import type { FicheInput } from "./types"

export const histoire: FicheInput[] = [
  // --- FICHES FOURNIES (inchangées) ---
  {
    slug: "drapeau-tricolore",
    title: "Le drapeau tricolore",
    description: "Bleu, blanc, rouge : les couleurs de la France.",
    definition:
      "Le drapeau français est composé de trois bandes verticales bleu, blanc et rouge. Il symbolise l'union du peuple et de la monarchie pendant la Révolution.",
    keyPoints: [
      "Trois couleurs : bleu, blanc, rouge",
      "Bleu et rouge : couleurs de Paris",
      "Blanc : couleur de la monarchie",
      "Adopté définitivement en 1794"
    ],
    example:
      "Le drapeau tricolore flotte sur tous les bâtiments publics et représente la France dans le monde entier.",
    oralTip: "Connaissez les trois couleurs et leur ordre (bleu-blanc-rouge de gauche à droite).",
    isEssential: true
  },
  {
    slug: "marseillaise",
    title: "La Marseillaise",
    description: "L'hymne national français, composé en 1792.",
    definition:
      "La Marseillaise est l'hymne national français. Composée par Rouget de Lisle en 1792, elle est devenue l'hymne officiel en 1879.",
    keyPoints: [
      "Composée en 1792 par Rouget de Lisle",
      "Chantée par les volontaires marseillais",
      "Hymne national depuis 1879",
      "Jouée lors des cérémonies officielles"
    ],
    example: "La Marseillaise est jouée lors des cérémonies officielles et des événements sportifs.",
    oralTip: "Connaissez au moins les premiers mots de l'hymne national.",
    isEssential: true
  },
  {
    slug: "marianne",
    title: "Marianne",
    description: "Le symbole de la République française.",
    definition:
      "Marianne est la figure allégorique de la République française. Elle symbolise la liberté, l'égalité et la République.",
    keyPoints: ["Symbole de la République", "Bonnet phrygien", "Présente dans les mairies", "Figure sur des documents officiels"],
    example: "Le buste de Marianne est présent dans les mairies et sur les timbres.",
    oralTip: "Mentionnez Marianne comme symbole officiel de la République.",
    isEssential: true
  },
  {
    slug: "14-juillet",
    title: "Le 14 juillet",
    description: "La fête nationale française.",
    definition: "Le 14 juillet commémore la prise de la Bastille en 1789, symbole de la Révolution française.",
    keyPoints: ["Prise de la Bastille en 1789", "Fête nationale depuis 1880", "Défilé militaire", "Feux d'artifice"],
    example: "Le 14 juillet est un jour férié célébré dans toute la France.",
    oralTip: "Parlez d’une célébration du 14 juillet que vous avez vécue.",
    isEssential: true
  },
  {
    slug: "revolution-francaise",
    title: "La Révolution française",
    description: "Un événement majeur de l’histoire de France.",
    definition:
      "La Révolution française débute en 1789 et met fin à la monarchie absolue. Elle instaure les principes de liberté et d’égalité.",
    keyPoints: ["Débute en 1789", "Fin de la monarchie absolue", "Naissance de la République", "Déclaration des droits de l’Homme"],
    example: "La prise de la Bastille marque le début de la Révolution.",
    oralTip: "Expliquez que la Révolution est à l’origine des valeurs républicaines.",
    isEssential: true
  },
  {
    slug: "declaration-droits-homme",
    title: "La Déclaration des droits de l’Homme et du citoyen",
    description: "Un texte fondamental adopté en 1789.",
    definition: "La Déclaration des droits de l’Homme et du citoyen affirme les libertés et l’égalité des citoyens.",
    keyPoints: ["Adoptée en 1789", "Liberté et égalité", "Souveraineté nationale", "Fondement des droits modernes"],
    example: "Le principe d’égalité devant la loi vient de cette Déclaration.",
    oralTip: "Citez 1789 et les droits fondamentaux.",
    isEssential: true
  },
  {
    slug: "premiere-republique",
    title: "La Première République",
    description: "Le premier régime républicain français.",
    definition: "La Première République est proclamée en 1792 après la chute de la monarchie.",
    keyPoints: ["Proclamée en 1792", "Fin de la monarchie", "Suffrage élargi", "Instabilité politique"],
    example: "La monarchie est abolie en 1792.",
    oralTip: "Retenez l’année 1792.",
    isEssential: false
  },
  {
    slug: "napoleon-bonaparte",
    title: "Napoléon Bonaparte",
    description: "Un personnage majeur de l’histoire de France.",
    definition: "Napoléon Bonaparte devient empereur en 1804 et modernise l’État français.",
    keyPoints: ["Empereur en 1804", "Code civil", "Réformes administratives", "Conquêtes militaires"],
    example: "Le Code civil est encore en vigueur aujourd’hui.",
    oralTip: "Citez Napoléon comme fondateur du Code civil.",
    isEssential: false
  },
  {
    slug: "troisieme-republique",
    title: "La Troisième République",
    description: "Un régime politique durable en France.",
    definition: "La Troisième République est instaurée en 1870 et consolide la démocratie parlementaire.",
    keyPoints: ["Instaurée en 1870", "Durable jusqu’en 1940", "Libertés publiques", "École gratuite et laïque"],
    example: "Les lois scolaires datent de la Troisième République.",
    oralTip: "Mentionnez l’école gratuite et laïque.",
    isEssential: false
  },
  {
    slug: "seconde-guerre-mondiale",
    title: "La Seconde Guerre mondiale",
    description: "Un conflit majeur du XXe siècle.",
    definition: "La Seconde Guerre mondiale a lieu de 1939 à 1945 et marque profondément la France.",
    keyPoints: ["1939-1945", "Occupation allemande", "Résistance française", "Libération en 1944"],
    example: "La France est libérée en 1944.",
    oralTip: "Citez la Résistance et la Libération.",
    isEssential: false
  },
  {
    slug: "construction-europeenne",
    title: "La construction européenne",
    description: "Le rapprochement des pays européens après 1945.",
    definition: "La construction européenne vise à garantir la paix et la coopération entre les pays d’Europe.",
    keyPoints: ["Paix durable", "Union européenne", "Coopération économique", "Citoyenneté européenne"],
    example: "La France est membre de l’Union européenne.",
    oralTip: "Expliquez que l’Europe favorise la paix.",
    isEssential: false
  },

  // --- NOUVELLES FICHES (histoire & symboles) ---
  {
    slug: "devise-republique",
    title: "Liberté, Égalité, Fraternité",
    description: "La devise officielle de la République française.",
    definition:
      "La devise « Liberté, Égalité, Fraternité » résume des valeurs fondamentales de la République. Elle est visible sur de nombreux bâtiments publics.",
    keyPoints: [
      "Devise officielle de la République",
      "Exprime les valeurs républicaines",
      "Inscrite sur des bâtiments publics",
      "Présente dans les documents et cérémonies"
    ],
    example: "On peut lire « Liberté, Égalité, Fraternité » sur des mairies et des écoles.",
    oralTip: "Citez la devise et dites ce qu’elle signifie pour vivre ensemble.",
    isEssential: true
  },
  {
    slug: "symboles-republique",
    title: "Les symboles de la République",
    description: "Des repères communs : drapeau, hymne, Marianne, devise…",
    definition:
      "Les symboles de la République permettent d’identifier la France et ses valeurs. Ils sont utilisés lors des cérémonies et dans les institutions.",
    keyPoints: [
      "Drapeau tricolore",
      "La Marseillaise",
      "Marianne",
      "Devise : Liberté, Égalité, Fraternité"
    ],
    example: "Lors d’une cérémonie officielle, on voit le drapeau et on entend la Marseillaise.",
    oralTip: "Donnez 2 ou 3 symboles et un exemple d’usage (école, mairie, cérémonie).",
    isEssential: true
  },
  {
    slug: "fete-nationale",
    title: "La fête nationale",
    description: "Le 14 juillet : une date symbolique et un moment d’unité.",
    definition:
      "La fête nationale est célébrée le 14 juillet. Elle commémore la Révolution française et la naissance d’un esprit national autour des valeurs républicaines.",
    keyPoints: [
      "Jour férié célébré partout en France",
      "Défilé et cérémonies officielles",
      "Fêtes populaires (feux d’artifice, bals)",
      "Moment d’unité nationale"
    ],
    example: "Beaucoup de villes organisent un feu d’artifice et des festivités le 14 juillet.",
    oralTip: "Dites que c’est une fête qui rassemble autour de la République.",
    isEssential: true
  },
  {
    slug: "bastille-federation",
    title: "Bastille et Fête de la Fédération",
    description: "Deux événements liés au 14 juillet.",
    definition:
      "Le 14 juillet renvoie à la prise de la Bastille (1789) et à la Fête de la Fédération (1790), qui symbolise la réconciliation et l’unité nationale.",
    keyPoints: [
      "1789 : prise de la Bastille",
      "1790 : Fête de la Fédération (unité)",
      "Deux symboles de la Révolution",
      "Commémoration républicaine"
    ],
    example: "La Fête de la Fédération met en avant l’idée d’un pays rassemblé.",
    oralTip: "Si on vous interroge, dites : Bastille (1789) + unité (1790)."
  },
  {
    slug: "chrono-reperes",
    title: "Repères chronologiques essentiels",
    description: "Les grandes dates à connaître pour l’entretien civique.",
    definition:
      "Quelques dates structurantes aident à comprendre l’histoire politique de la France et la construction des valeurs républicaines.",
    keyPoints: [
      "1789 : Révolution française, Déclaration des droits",
      "1792 : proclamation de la Première République",
      "1880 : 14 juillet devient fête nationale",
      "1939-1945 : Seconde Guerre mondiale"
    ],
    example: "Savoir placer 1789 et 1792 aide à expliquer la naissance de la République.",
    oralTip: "Apprenez 4 dates avec 1 idée clé pour chacune.",
    isEssential: true
  },
  {
    slug: "valeurs-republicaines-origine",
    title: "Les valeurs républicaines : d’où viennent-elles ?",
    description: "Liberté et égalité sont issues d’une conquête historique.",
    definition:
      "Les valeurs républicaines se construisent au fil de l’histoire : Révolution française, droits fondamentaux, consolidation démocratique et école républicaine.",
    keyPoints: [
      "1789 : affirmation des droits et libertés",
      "Égalité devant la loi",
      "Souveraineté nationale : le pouvoir vient du peuple",
      "Construction progressive de la démocratie"
    ],
    example: "Les droits proclamés en 1789 inspirent encore les principes actuels.",
    oralTip: "Dites : “ces valeurs viennent de l’histoire, notamment de 1789”."
  },
  {
    slug: "code-civil",
    title: "Le Code civil",
    description: "Un texte juridique majeur, hérité de l’époque napoléonienne.",
    definition:
      "Le Code civil organise une grande partie des règles de la vie civile (famille, propriété, contrats). Il a marqué durablement l’État de droit en France.",
    keyPoints: [
      "Règles de la vie civile (contrats, propriété…)",
      "Héritage historique important",
      "Base du droit civil français",
      "Évolue au fil du temps"
    ],
    example: "Un contrat de location ou de vente s’inscrit dans les règles du droit civil.",
    oralTip: "Expliquez simplement : “c’est un grand texte qui encadre la vie civile”."
  },
  {
    slug: "resistance",
    title: "La Résistance",
    description: "Un engagement pour la liberté pendant l’Occupation.",
    definition:
      "Pendant la Seconde Guerre mondiale, la Résistance regroupe des personnes qui refusent l’Occupation et défendent la liberté et la République.",
    keyPoints: [
      "Refus de l’Occupation",
      "Actions civiles et militaires",
      "Valeurs : liberté, courage, solidarité",
      "Mémoire importante dans l’histoire nationale"
    ],
    example: "La Résistance a joué un rôle dans la Libération de la France.",
    oralTip: "Reliez la Résistance à la défense de la liberté et des valeurs républicaines."
  },
  {
    slug: "memoire-commemoration",
    title: "Mémoire et commémorations",
    description: "Se souvenir pour transmettre l’histoire et les valeurs.",
    definition:
      "Les commémorations rappellent des événements marquants de l’histoire. Elles participent à la transmission de la mémoire collective et des valeurs de la République.",
    keyPoints: [
      "Transmission de l’histoire",
      "Hommage aux victimes et combattants",
      "Renforce la cohésion nationale",
      "Cérémonies officielles (monuments, minutes de silence…)"
    ],
    example: "Des cérémonies ont lieu au monument aux morts dans les communes.",
    oralTip: "Dites que commémorer, c’est se souvenir et transmettre."
  },
  {
    slug: "patrimoine-culture",
    title: "Le patrimoine et la culture en France",
    description: "Une richesse historique et culturelle partagée.",
    definition:
      "Le patrimoine français comprend des monuments, des traditions et des œuvres culturelles. Il participe à l’identité commune et au rayonnement de la France.",
    keyPoints: [
      "Monuments, musées, sites historiques",
      "Langue et culture françaises",
      "Transmission et protection du patrimoine",
      "Ouverture : patrimoine vivant et divers"
    ],
    example: "Des monuments et musées sont protégés et accessibles au public.",
    oralTip: "Citez un exemple (monument, musée, fête) que vous connaissez en France."
  }
]
