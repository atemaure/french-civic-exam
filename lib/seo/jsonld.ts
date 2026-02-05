import {
  absoluteUrl,
  OG_IMAGE,
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_URL,
} from "./config"

type BreadcrumbItem = { name: string; url: string }

type ArticleInput = {
  title: string
  description: string
  url: string
  image?: string
  datePublished?: string
  dateModified?: string
  section?: string
  keywords?: string[]
}

type LearningResourceInput = {
  title: string
  description: string
  url: string
  image?: string
  theme?: string
  keywords?: string[]
  isEssential?: boolean
}

type FAQItem = { question: string; answer: string }

type HowToInput = {
  name: string
  description: string
  totalTime?: string
  steps: Array<{ name: string; text: string }>
}

type GlossaryInput = {
  name: string
  description: string
  terms: Array<{ term: string; definition: string }>
}

type ItemListInput = {
  name: string
  description?: string
  url: string
  items: Array<{ name: string; url: string }>
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(OG_IMAGE),
    },
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: SITE_LANGUAGE,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  }
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  }
}

export function articleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  section,
  keywords,
}: ArticleInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(image ?? OG_IMAGE),
    articleSection: section,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(url),
    },
    keywords,
  }
}

export function learningResourceJsonLd({
  title,
  description,
  url,
  image,
  theme,
  keywords,
  isEssential,
}: LearningResourceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description,
    url: absoluteUrl(url),
    image: absoluteUrl(image ?? OG_IMAGE),
    inLanguage: SITE_LANGUAGE,
    learningResourceType: "Fiche de révision",
    educationalLevel: "Adulte",
    educationalUse: "Révision",
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "Fiches QuizCitoyen",
    },
    about: theme ? { "@type": "Thing", name: theme } : undefined,
    keywords,
    additionalProperty: isEssential
      ? [
          {
            "@type": "PropertyValue",
            name: "Essentielle",
            value: "Oui",
          },
        ]
      : undefined,
  }
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function howToJsonLd({ name, description, totalTime, steps }: HowToInput) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    inLanguage: SITE_LANGUAGE,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

export function glossaryJsonLd({ name, description, terms }: GlossaryInput) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name,
    description,
    inLanguage: SITE_LANGUAGE,
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term,
      description: term.definition,
    })),
  }
}

export function itemListJsonLd({ name, description, url, items }: ItemListInput) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: absoluteUrl(url),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  }
}
