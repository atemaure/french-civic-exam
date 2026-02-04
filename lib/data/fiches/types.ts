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

export type FicheInput = Omit<Fiche, "theme" | "themeSlug">
