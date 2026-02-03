import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"
import { toISODate } from "@/lib/data/articles"

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  category?: string
}

export function ArticleCard({ title, excerpt, date, slug, category }: ArticleCardProps) {
  const dateIso = toISODate(date) ?? date
  return (
    <Card className="group h-full transition-shadow hover:shadow-md">
      <Link href={`/articles/${slug}`} className="block h-full">
        <CardHeader className="pb-3">
          {category && (
            <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {category}
            </span>
          )}
          <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {excerpt}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" />
            <time dateTime={dateIso}>{date}</time>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
