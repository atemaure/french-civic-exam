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
  conclusionNote?: string
  conclusionCtaLabel?: string
  conclusionCtaHref?: string
}
