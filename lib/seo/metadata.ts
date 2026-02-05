import type { Metadata } from "next"

import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  SHOULD_INDEX,
  SITE_LANGUAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "./config"

const getFullTitle = (title?: string) => (title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE)

type MetadataInput = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: "website" | "article"
  noIndex?: boolean
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    images: [
      {
        url: OG_IMAGE,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        type: "image/png",
      },
      {
        url: "/icon-dark-32x32.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: SHOULD_INDEX,
    follow: SHOULD_INDEX,
    googleBot: {
      index: SHOULD_INDEX,
      follow: SHOULD_INDEX,
    },
  },
}

export function createMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noIndex,
}: MetadataInput): Metadata {
  const resolvedTitle = getFullTitle(title)
  const resolvedDescription = description ?? DEFAULT_DESCRIPTION
  const canonical = path ?? "/"
  const resolvedImage = image ?? OG_IMAGE
  const indexable = noIndex ? false : SHOULD_INDEX

  return {
    title,
    description: resolvedDescription,
    alternates: {
      canonical,
      languages: {
        "fr-FR": canonical,
      },
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      type,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      images: [
        {
          url: resolvedImage,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [resolvedImage],
    },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    other: {
      "content-language": SITE_LANGUAGE,
    },
  }
}
