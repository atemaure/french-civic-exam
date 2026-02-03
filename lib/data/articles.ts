export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readingTime: string
  keyPoints: string[]
  oralTip?: string
}

const FRENCH_MONTHS: Record<string, string> = {
  janvier: "01",
  février: "02",
  fevrier: "02",
  mars: "03",
  avril: "04",
  mai: "05",
  juin: "06",
  juillet: "07",
  août: "08",
  aout: "08",
  septembre: "09",
  octobre: "10",
  novembre: "11",
  décembre: "12",
  decembre: "12",
}

export function toISODate(date: string): string | undefined {
  const match = date.trim().toLowerCase().match(/^(\d{1,2})\s+([a-zéûîôàèùâäëïöüç-]+)\s+(\d{4})$/)
  if (!match) return undefined
  const [, dayStr, monthStr, year] = match
  const month = FRENCH_MONTHS[monthStr]
  if (!month) return undefined
  const day = dayStr.padStart(2, "0")
  return `${year}-${month}-${day}`
}

export const articles: Article[] = [
  {
    slug: "preparer-entretien-naturalisation",
    title: "Comment bien préparer son entretien de naturalisation",
    excerpt: "Découvrez les conseils essentiels pour aborder sereinement votre entretien avec l'agent préfectoral et répondre aux questions sur les valeurs républicaines.",
    content: `
L'entretien de naturalisation est une étape importante de votre parcours vers la citoyenneté française. Voici comment vous y préparer efficacement.

## Comprendre l'objectif de l'entretien

L'entretien de naturalisation n'est pas un examen au sens strict. L'agent préfectoral cherche à évaluer votre connaissance de la France, des valeurs républicaines, et votre niveau de français. C'est aussi l'occasion de montrer votre attachement à la France et votre volonté de vous intégrer.

## Les thèmes abordés

Durant l'entretien, vous pourrez être interrogé sur :

- **Les valeurs de la République** : Liberté, Égalité, Fraternité, mais aussi la laïcité et la démocratie
- **Les institutions françaises** : le rôle du Président, du Parlement, du Gouvernement
- **L'histoire de France** : les grandes dates et personnages historiques
- **Les symboles de la République** : le drapeau, l'hymne national, la devise
- **Votre parcours personnel** : votre vie en France, votre travail, votre famille

## Conseils pour réussir

1. **Révisez régulièrement** : Plutôt que de tout apprendre la veille, révisez un peu chaque jour
2. **Comprenez, ne mémorisez pas** : L'agent préfectoral veut voir que vous comprenez les valeurs, pas que vous les récitez
3. **Soyez sincère** : Parlez de votre expérience personnelle et de ce que la France représente pour vous
4. **Restez calme** : L'entretien est une conversation, pas un interrogatoire

## Le jour J

- Arrivez en avance
- Apportez tous les documents demandés
- Habillez-vous de manière correcte
- Soyez poli et souriant
- Prenez le temps de réfléchir avant de répondre
    `,
    date: "15 janvier 2026",
    category: "Conseils",
    readingTime: "5 min",
    keyPoints: [
      "L'entretien évalue votre connaissance de la France et votre niveau de français",
      "Comprenez les valeurs plutôt que de les mémoriser",
      "Parlez de votre expérience personnelle",
      "Restez calme et prenez le temps de réfléchir",
    ],
    oralTip: "N'hésitez pas à illustrer vos réponses avec des exemples concrets de votre vie en France. L'agent préfectoral appréciera votre authenticité.",
  },
  {
    slug: "valeurs-fondamentales-republique",
    title: "Les 5 valeurs fondamentales de la République française",
    excerpt: "Liberté, Égalité, Fraternité... mais pas seulement. Découvrez les cinq valeurs qui fondent notre République et comment les expliquer simplement.",
    content: `
La République française repose sur des valeurs fondamentales inscrites dans la Constitution et dans notre quotidien. Voici les cinq valeurs essentielles à connaître.

## 1. La Liberté

La liberté est le premier terme de la devise française. Elle comprend plusieurs dimensions :

- **La liberté individuelle** : chacun est libre de ses choix de vie, de ses opinions, de sa religion
- **La liberté d'expression** : chacun peut exprimer ses idées dans le respect des autres
- **La liberté de circulation** : chacun peut se déplacer librement

La liberté s'arrête là où commence celle des autres.

## 2. L'Égalité

L'égalité signifie que tous les citoyens ont les mêmes droits et les mêmes devoirs :

- **Égalité devant la loi** : la justice est la même pour tous
- **Égalité des chances** : l'école est accessible à tous
- **Égalité homme-femme** : hommes et femmes ont les mêmes droits

## 3. La Fraternité

La fraternité appelle à la solidarité entre les citoyens :

- **Entraide et solidarité** : la protection sociale, l'aide aux plus démunis
- **Cohésion nationale** : vivre ensemble malgré nos différences
- **Respect mutuel** : accepter les autres tels qu'ils sont

## 4. La Laïcité

La laïcité est un principe fondamental de la République française :

- **Séparation de l'État et des religions** : l'État ne favorise aucune religion
- **Liberté de croire ou de ne pas croire** : chacun est libre dans sa foi
- **Neutralité des services publics** : les agents publics ne doivent pas manifester leurs convictions

## 5. La Démocratie

La France est une démocratie où le peuple est souverain :

- **Le vote** : les citoyens élisent leurs représentants
- **La séparation des pouvoirs** : exécutif, législatif, judiciaire sont distincts
- **L'État de droit** : nul n'est au-dessus de la loi
    `,
    date: "12 janvier 2026",
    category: "Valeurs",
    readingTime: "7 min",
    keyPoints: [
      "La devise Liberté, Égalité, Fraternité résume les valeurs essentielles",
      "La laïcité garantit la liberté de conscience pour tous",
      "La démocratie donne le pouvoir au peuple par le vote",
      "Ces valeurs sont inscrites dans la Constitution",
    ],
    oralTip: "Si on vous demande d'expliquer une valeur, donnez d'abord une définition simple, puis un exemple concret. Par exemple : 'L'égalité, c'est le fait que tous les citoyens ont les mêmes droits. Par exemple, tout le monde peut aller à l'école gratuitement.'",
  },
  {
    slug: "role-president-republique",
    title: "Comprendre le rôle du Président de la République",
    excerpt: "Chef de l'État, garant de la Constitution, chef des armées : découvrez les pouvoirs et les responsabilités du Président de la République française.",
    content: `
Le Président de la République est la figure centrale des institutions françaises. Voici tout ce qu'il faut savoir sur son rôle.

## L'élection du Président

Le Président de la République est élu au suffrage universel direct pour un mandat de 5 ans (le quinquennat). Il peut être réélu une fois.

L'élection se déroule en deux tours :
- **Premier tour** : tous les candidats se présentent
- **Second tour** : les deux candidats arrivés en tête s'affrontent

## Les pouvoirs du Président

### Chef de l'État

Le Président représente la France à l'étranger et incarne l'unité nationale. Il préside les cérémonies officielles et accueille les chefs d'État étrangers.

### Garant de la Constitution

Le Président veille au respect de la Constitution. Il peut saisir le Conseil constitutionnel si une loi lui semble contraire à la Constitution.

### Chef des armées

Le Président est le chef suprême des armées françaises. Il est le seul à pouvoir décider de l'utilisation de l'arme nucléaire.

### Autres pouvoirs

- **Nomination du Premier ministre** : le Président choisit le Premier ministre
- **Dissolution de l'Assemblée nationale** : il peut dissoudre l'Assemblée et provoquer de nouvelles élections
- **Droit de grâce** : il peut gracier des personnes condamnées
- **Référendum** : il peut organiser un référendum sur certains sujets

## Le Président actuel

En 2026, le Président de la République française est Emmanuel Macron, élu pour la première fois en 2017 et réélu en 2022.
    `,
    date: "10 janvier 2026",
    category: "Institutions",
    readingTime: "6 min",
    keyPoints: [
      "Le Président est élu pour 5 ans au suffrage universel direct",
      "Il est chef de l'État, garant de la Constitution et chef des armées",
      "Il nomme le Premier ministre",
      "Il peut dissoudre l'Assemblée nationale",
    ],
    oralTip: "On vous demandera probablement qui est le Président actuel. Assurez-vous de connaître son nom et la date approximative de son élection.",
  },
  {
    slug: "symboles-republique-francaise",
    title: "Les symboles de la République française",
    excerpt: "Drapeau tricolore, Marianne, La Marseillaise : découvrez les symboles qui représentent la France et leur signification.",
    content: `
Les symboles de la République française sont présents partout dans notre quotidien. Voici leur histoire et leur signification.

## Le drapeau tricolore

Le drapeau français est composé de trois bandes verticales : bleu, blanc, rouge.

- **Le bleu et le rouge** sont les couleurs de Paris
- **Le blanc** était la couleur de la monarchie

Ce drapeau symbolise l'union de la monarchie et du peuple pendant la Révolution française. Il est adopté définitivement en 1794.

## La devise : Liberté, Égalité, Fraternité

Cette devise apparaît pendant la Révolution française et devient la devise officielle de la République en 1848. Elle est inscrite sur les bâtiments publics.

## La Marseillaise

L'hymne national français s'appelle La Marseillaise. Il a été composé en 1792 par Rouget de Lisle pour encourager les soldats français.

Il doit son nom aux volontaires marseillais qui le chantaient en marchant vers Paris. Il devient l'hymne national en 1879.

## Marianne

Marianne est le visage de la République française. Cette femme coiffée d'un bonnet phrygien symbolise la liberté et la République.

On trouve son buste dans toutes les mairies de France. Ses traits ont parfois été inspirés par des personnalités célèbres.

## Le 14 juillet

La fête nationale française commémore la prise de la Bastille le 14 juillet 1789, symbole de la fin de la monarchie absolue.

## Le coq gaulois

Le coq est un symbole ancien de la France. Il représente la fierté et la vigilance. On le retrouve sur les maillots des équipes de France.
    `,
    date: "8 janvier 2026",
    category: "Histoire",
    readingTime: "5 min",
    keyPoints: [
      "Le drapeau tricolore symbolise l'union du peuple et de la monarchie",
      "La Marseillaise est l'hymne national depuis 1879",
      "Marianne représente la République et la liberté",
      "Le 14 juillet commémore la prise de la Bastille",
    ],
    oralTip: "Connaissez au moins le premier couplet de La Marseillaise et sa signification. On ne vous demandera pas de la chanter, mais de montrer que vous la connaissez.",
  },
  {
    slug: "laicite-france-explication",
    title: "La laïcité en France : comprendre ce principe fondamental",
    excerpt: "Qu'est-ce que la laïcité ? Comment s'applique-t-elle au quotidien ? Tout ce qu'il faut savoir sur ce principe essentiel de la République.",
    content: `
La laïcité est un principe fondamental de la République française. Voici comment la comprendre et l'expliquer simplement.

## Qu'est-ce que la laïcité ?

La laïcité repose sur trois principes :

1. **La liberté de conscience** : chacun est libre de croire ou de ne pas croire
2. **La séparation des Églises et de l'État** : l'État ne finance pas les cultes et n'en favorise aucun
3. **L'égalité de tous** : quelle que soit sa religion, chaque citoyen a les mêmes droits

## La loi de 1905

La loi du 9 décembre 1905 établit la séparation des Églises et de l'État. Cette loi fondamentale garantit la liberté de culte tout en affirmant que l'État ne reconnaît ni ne subventionne aucun culte.

## La laïcité au quotidien

### Dans les services publics

Les agents publics (fonctionnaires, enseignants, policiers...) doivent être neutres. Ils ne doivent pas manifester leurs convictions religieuses dans l'exercice de leurs fonctions.

### À l'école

L'école publique est laïque. Les élèves ne peuvent pas porter de signes religieux ostentatoires. L'enseignement est neutre et respecte toutes les croyances.

### Dans l'espace public

Chacun est libre de pratiquer sa religion dans l'espace public, dans le respect de l'ordre public. Les lieux de culte sont autorisés.

## La laïcité n'est pas contre les religions

Il est important de comprendre que la laïcité n'est pas une opposition aux religions. Au contraire, elle les protège en garantissant à chacun la liberté de croire ou de ne pas croire.

La laïcité permet à des personnes de différentes religions et convictions de vivre ensemble dans le respect mutuel.
    `,
    date: "5 janvier 2026",
    category: "Valeurs",
    readingTime: "6 min",
    keyPoints: [
      "La laïcité garantit la liberté de croire ou de ne pas croire",
      "L'État est séparé des religions depuis 1905",
      "Les agents publics doivent être neutres",
      "La laïcité protège toutes les religions",
    ],
    oralTip: "Montrez que vous comprenez que la laïcité n'est pas contre les religions mais qu'elle permet à tous de vivre ensemble. C'est un point important que l'agent préfectoral appréciera.",
  },
  {
    slug: "droits-devoirs-citoyen-francais",
    title: "Droits et devoirs du citoyen français",
    excerpt: "Voter, payer ses impôts, respecter la loi : découvrez les droits et les devoirs qui accompagnent la citoyenneté française.",
    content: `
Devenir citoyen français, c'est acquérir des droits mais aussi accepter des devoirs. Voici ce qu'il faut savoir.

## Les droits du citoyen

### Droits civiques

- **Le droit de vote** : participer aux élections (municipales, législatives, présidentielle, européennes)
- **Le droit d'éligibilité** : se présenter aux élections
- **Le droit d'accès à la fonction publique** : devenir fonctionnaire

### Droits civils

- **La liberté d'expression** : exprimer ses opinions
- **La liberté de réunion** : se rassembler pacifiquement
- **La liberté d'association** : créer ou rejoindre une association
- **La liberté de culte** : pratiquer sa religion

### Droits sociaux

- **Le droit à l'éducation** : l'école est gratuite et obligatoire
- **Le droit à la protection sociale** : sécurité sociale, allocations
- **Le droit au travail** : accès à l'emploi sans discrimination

## Les devoirs du citoyen

### Respecter la loi

Tout citoyen doit respecter les lois de la République. Nul n'est censé ignorer la loi.

### Payer ses impôts

Chacun contribue aux dépenses publiques selon ses moyens. Les impôts financent les services publics (écoles, hôpitaux, routes...).

### Participer à la défense du pays

En cas de menace grave, les citoyens peuvent être appelés à défendre le pays. La Journée Défense et Citoyenneté (JDC) sensibilise les jeunes à ces enjeux.

### Voter

Bien que non obligatoire, le vote est un devoir civique. C'est le moyen d'exprimer sa voix et de participer à la vie démocratique.

### Respecter les valeurs de la République

Le citoyen adhère aux valeurs de liberté, d'égalité, de fraternité et de laïcité.
    `,
    date: "3 janvier 2026",
    category: "Droits",
    readingTime: "6 min",
    keyPoints: [
      "Le citoyen a des droits civiques, civils et sociaux",
      "Respecter la loi et payer ses impôts sont des devoirs",
      "Le vote est un devoir civique important",
      "Le citoyen adhère aux valeurs de la République",
    ],
    oralTip: "On vous demandera peut-être pourquoi vous voulez devenir français. Parlez des droits mais aussi des devoirs que vous êtes prêt à assumer. Cela montre votre engagement.",
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getLatestArticles(count: number = 6): Article[] {
  return articles.slice(0, count)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
}
