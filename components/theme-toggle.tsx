"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-2.5 py-1.5 backdrop-blur">
      <Sun className="h-3.5 w-3.5 text-muted-foreground" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Activer le mode sombre"
      />
      <Moon className="h-3.5 w-3.5 text-muted-foreground" />
    </div>
  )
}
