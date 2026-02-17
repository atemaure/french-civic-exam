export type ExamSubTheme = {
  slug: string
  name: string
  info: string
  details: string[]
}

export type ExamTheme = {
  slug: string
  title: string
  description: string
  details: string[]
  prepTime: string
  interviewImportance: string[]
  examinerEvaluates: string[]
  revisionTips: string[]
  fichesHref: string
  subThemes: ExamSubTheme[]
}
