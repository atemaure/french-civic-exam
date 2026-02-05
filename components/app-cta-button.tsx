import Link from "next/link"
import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type AppCtaButtonProps = {
  label?: string
  href?: string
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
  className?: string
  openInNewTab?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export function AppCtaButton({
  label = "Accéder à l'app QuizCitoyen",
  href,
  size = "lg",
  className,
  openInNewTab = true,
  onClick,
}: AppCtaButtonProps) {
  const appUrl = href ?? process.env.NEXT_PUBLIC_APP_URL ?? "https://app.quizcitoyen.fr"
  const target = openInNewTab ? "_blank" : undefined
  const rel = openInNewTab ? "noopener noreferrer" : undefined

  return (
    <Button
      size={size}
      asChild
      className={cn("bg-emerald-600 text-white hover:bg-emerald-700", className)}
    >
      <Link href={appUrl} target={target} rel={rel} onClick={onClick}>
        {label}
      </Link>
    </Button>
  )
}
