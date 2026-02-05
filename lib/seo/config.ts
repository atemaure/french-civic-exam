export const SITE_NAME = "QuizCitoyen"
export const SITE_LOCALE = "fr_FR"
export const SITE_LANGUAGE = "fr-FR"

const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "development"
export const IS_PRODUCTION = env === "production"

const fallbackUrl = IS_PRODUCTION ? "https://www.quizcitoyen.fr" : "http://localhost:3000"
const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : fallbackUrl

export const SITE_URL = envUrl.replace(/\/$/, "")
export const DEFAULT_TITLE = "QuizCitoyen | Préparation à l'entretien civique"
export const DEFAULT_DESCRIPTION = "Préparez l'entretien civique de naturalisation française avec des fiches claires, des articles pédagogiques et une méthode en 4 étapes."
export const OG_IMAGE = "/logo.png"
export const ORGANIZATION_SAME_AS: string[] = []
export const SHOULD_INDEX = IS_PRODUCTION && SITE_URL.includes("quizcitoyen.fr")

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }
  if (!path.startsWith("/")) {
    return `${SITE_URL}/${path}`
  }
  return `${SITE_URL}${path}`
}
