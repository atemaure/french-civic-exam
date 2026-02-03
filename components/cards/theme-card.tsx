import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Landmark, BookOpen, Heart, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const themeIcons: Record<string, LucideIcon> = {
  valeurs: Heart,
  droits: Scale,
  institutions: Landmark,
  histoire: BookOpen,
  vivre: Users,
}

interface ThemeCardProps {
  title: string
  description: string
  slug: string
  ficheCount?: number
}

export function ThemeCard({ title, description, slug, ficheCount }: ThemeCardProps) {
  const Icon = themeIcons[slug] || BookOpen

  return (
    <Card className="group h-full transition-shadow hover:shadow-md">
      <Link href={`/fiches?theme=${slug}`} className="block h-full">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-4 flex-grow text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          {ficheCount !== undefined && (
            <span className="text-xs font-medium text-primary">
              {ficheCount} fiches disponibles
            </span>
          )}
        </CardContent>
      </Link>
    </Card>
  )
}
