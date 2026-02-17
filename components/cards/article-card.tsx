import Link from "next/link"
import { CalendarDays, ArrowRight, Clock } from "lucide-react"
import { toISODate } from "@/lib/data/articles"
import { getIconByArticleCategory } from "@/lib/ui/theme-icons"

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  category?: string
  readingTime?: string
}

export function ArticleCard({ title, excerpt, date, slug, category, readingTime }: ArticleCardProps) {
  const dateIso = toISODate(date) ?? date
  const CategoryIcon = getIconByArticleCategory(category)

  return (
    <Link
      href={`/articles/${slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-4 flex items-center gap-3">
        {category && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            <CategoryIcon className="h-3.5 w-3.5" />
            {category}
          </span>
        )}
        {readingTime && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {readingTime}
          </span>
        )}
      </div>
      <h3 className="mb-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {title}
      </h3>
      <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {excerpt}
      </p>
      <div className="flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          <time dateTime={dateIso}>{date}</time>
        </div>
        <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Lire
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}
