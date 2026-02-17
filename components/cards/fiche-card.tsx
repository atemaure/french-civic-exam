import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { getIconByFicheThemeSlug } from "@/lib/ui/theme-icons"

interface FicheCardProps {
  title: string
  description: string
  slug: string
  theme: string
  themeSlug?: string
}

export function FicheCard({ title, description, slug, theme, themeSlug }: FicheCardProps) {
  const ThemeIcon = getIconByFicheThemeSlug(themeSlug)

  return (
    <Card className="group h-full transition-shadow hover:shadow-md">
      <Link href={`/fiches/${slug}`} className="block h-full">
        <CardContent className="flex h-full flex-col p-5">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ThemeIcon className="h-5 w-5 text-primary" />
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </div>
          <span className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {theme}
          </span>
          <h3 className="mb-2 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Link>
    </Card>
  )
}
