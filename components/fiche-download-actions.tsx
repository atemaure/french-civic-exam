"use client"

import { useState } from "react"
import { FileImage, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Fiche } from "@/lib/data/fiches/types"

type TextBlock = {
  text: string
  bullet?: boolean
}

type WrappedBlock = {
  lines: string[]
  bullet: boolean
}

type SectionLayout = {
  title: string
  wrappedBlocks: WrappedBlock[]
  height: number
}

interface FicheDownloadActionsProps {
  fiche: Fiche
}

const IMAGE_WIDTH = 1800
const PAGE_PADDING = 90

const HEADER_META_FONT = "700 30px Arial, sans-serif"
const THEME_FONT = "600 28px Arial, sans-serif"
const HEADER_TITLE_FONT = "700 78px Arial, sans-serif"
const HEADER_DESCRIPTION_FONT = "500 40px Arial, sans-serif"
const SECTION_TITLE_FONT = "700 40px Arial, sans-serif"
const SECTION_BODY_FONT = "400 34px Arial, sans-serif"
const FOOTER_FONT = "500 24px Arial, sans-serif"

const HEADER_META_LINE_HEIGHT = 40
const THEME_LINE_HEIGHT = 36
const HEADER_TITLE_LINE_HEIGHT = 86
const HEADER_DESCRIPTION_LINE_HEIGHT = 52
const SECTION_TITLE_LINE_HEIGHT = 52
const SECTION_BODY_LINE_HEIGHT = 48

const HEADER_PADDING_X = 56
const HEADER_PADDING_Y = 48
const THEME_TOP_SPACE = 24
const THEME_BOTTOM_SPACE = 18
const SECTION_PADDING_X = 44
const SECTION_PADDING_Y = 34
const SECTION_GAP = 24
const BLOCK_GAP = 12
const BULLET_INDENT = 34

function splitIntoLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const lines: string[] = []
  const paragraphs = text
    .split("\n")
    .map((part) => part.trim())
    .filter(Boolean)

  if (paragraphs.length === 0) {
    return lines
  }

  for (const paragraph of paragraphs) {
    const words = paragraph.split(/\s+/)
    let current = ""

    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word
      if (ctx.measureText(candidate).width <= maxWidth || !current) {
        current = candidate
      } else {
        lines.push(current)
        current = word
      }
    }

    if (current) {
      lines.push(current)
    }
  }

  return lines
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill: string,
  stroke?: string,
) {
  const r = Math.min(radius, width / 2, height / 2)

  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + width, y, x + width, y + height, r)
  ctx.arcTo(x + width, y + height, x, y + height, r)
  ctx.arcTo(x, y + height, x, y, r)
  ctx.arcTo(x, y, x + width, y, r)
  ctx.closePath()

  ctx.fillStyle = fill
  ctx.fill()

  if (stroke) {
    ctx.strokeStyle = stroke
    ctx.lineWidth = 2
    ctx.stroke()
  }
}

function buildSectionLayout(
  ctx: CanvasRenderingContext2D,
  title: string,
  blocks: TextBlock[],
  maxWidth: number,
): SectionLayout {
  ctx.font = SECTION_BODY_FONT

  const wrappedBlocks: WrappedBlock[] = blocks.map((block) => {
    const normalized = block.text.trim() || "Contenu non renseigné."
    const lines = splitIntoLines(
      ctx,
      normalized,
      block.bullet ? maxWidth - BULLET_INDENT : maxWidth,
    )

    return {
      lines,
      bullet: Boolean(block.bullet),
    }
  })

  let contentHeight = SECTION_TITLE_LINE_HEIGHT + 12

  for (const [index, block] of wrappedBlocks.entries()) {
    contentHeight += Math.max(1, block.lines.length) * SECTION_BODY_LINE_HEIGHT
    if (index < wrappedBlocks.length - 1) {
      contentHeight += BLOCK_GAP
    }
  }

  return {
    title,
    wrappedBlocks,
    height: SECTION_PADDING_Y * 2 + contentHeight,
  }
}

function createFicheCanvas(fiche: Fiche) {
  const probe = document.createElement("canvas")
  const probeCtx = probe.getContext("2d")

  if (!probeCtx) {
    throw new Error("Impossible de préparer l'image.")
  }

  const contentWidth = IMAGE_WIDTH - PAGE_PADDING * 2
  const headerContentWidth = contentWidth - HEADER_PADDING_X * 2
  const sectionContentWidth = contentWidth - SECTION_PADDING_X * 2

  probeCtx.font = HEADER_TITLE_FONT
  const titleLines = splitIntoLines(probeCtx, fiche.title, headerContentWidth)

  probeCtx.font = THEME_FONT
  const themeLines = splitIntoLines(
    probeCtx,
    fiche.theme,
    contentWidth,
  )

  probeCtx.font = HEADER_DESCRIPTION_FONT
  const descriptionLines = splitIntoLines(
    probeCtx,
    fiche.description,
    headerContentWidth,
  )

  const themeHeight =
    THEME_TOP_SPACE +
    Math.max(1, themeLines.length) * THEME_LINE_HEIGHT +
    THEME_BOTTOM_SPACE

  const headerHeight =
    HEADER_PADDING_Y * 2 +
    HEADER_META_LINE_HEIGHT +
    18 +
    Math.max(1, titleLines.length) * HEADER_TITLE_LINE_HEIGHT +
    18 +
    Math.max(1, descriptionLines.length) * HEADER_DESCRIPTION_LINE_HEIGHT

  const sections = [
    buildSectionLayout(
      probeCtx,
      "Définition",
      [{ text: fiche.definition }],
      sectionContentWidth,
    ),
    buildSectionLayout(
      probeCtx,
      "Points clés à retenir",
      fiche.keyPoints.length > 0
        ? fiche.keyPoints.map((point) => ({ text: point, bullet: true }))
        : [{ text: "Aucun point clé renseigné." }],
      sectionContentWidth,
    ),
    buildSectionLayout(
      probeCtx,
      "Exemple concret",
      [{ text: fiche.example }],
      sectionContentWidth,
    ),
    buildSectionLayout(
      probeCtx,
      "Astuce pour l'oral",
      [{ text: fiche.oralTip }],
      sectionContentWidth,
    ),
  ]

  let contentHeight = themeHeight + SECTION_GAP + headerHeight + SECTION_GAP
  for (const [index, section] of sections.entries()) {
    contentHeight += section.height
    if (index < sections.length - 1) {
      contentHeight += SECTION_GAP
    }
  }

  const footerHeight = 80
  const canvasHeight = Math.max(
    2600,
    PAGE_PADDING + contentHeight + footerHeight + PAGE_PADDING,
  )

  const canvas = document.createElement("canvas")
  canvas.width = IMAGE_WIDTH
  canvas.height = canvasHeight

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    throw new Error("Impossible de générer l'image.")
  }

  ctx.textBaseline = "top"

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
  gradient.addColorStop(0, "#eff6ff")
  gradient.addColorStop(0.2, "#f8fbff")
  gradient.addColorStop(1, "#ffffff")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = "#dbeafe"
  ctx.fillRect(0, 0, canvas.width, 16)

  let y = PAGE_PADDING

  const themeX = PAGE_PADDING
  let themeY = y + THEME_TOP_SPACE

  ctx.font = THEME_FONT
  ctx.fillStyle = "#1e3a8a"
  for (const line of themeLines) {
    ctx.fillText(line, themeX, themeY)
    themeY += THEME_LINE_HEIGHT
  }

  y += themeHeight + SECTION_GAP

  const generatedOn = new Date().toLocaleDateString("fr-FR")
  const headerCenterX = canvas.width / 2
  let headerY = y + HEADER_PADDING_Y

  ctx.save()
  ctx.textAlign = "center"

  ctx.font = HEADER_META_FONT
  ctx.fillStyle = "#1d4ed8"
  ctx.fillText("FICHE DE RÉVISION", headerCenterX, headerY)

  headerY += HEADER_META_LINE_HEIGHT + 18

  ctx.font = HEADER_TITLE_FONT
  ctx.fillStyle = "#0f172a"
  for (const line of titleLines) {
    ctx.fillText(line, headerCenterX, headerY)
    headerY += HEADER_TITLE_LINE_HEIGHT
  }

  headerY += 18

  ctx.font = HEADER_DESCRIPTION_FONT
  ctx.fillStyle = "#334155"
  for (const line of descriptionLines) {
    ctx.fillText(line, headerCenterX, headerY)
    headerY += HEADER_DESCRIPTION_LINE_HEIGHT
  }

  ctx.restore()

  y += headerHeight + SECTION_GAP

  for (const section of sections) {
    drawRoundedRect(
      ctx,
      PAGE_PADDING,
      y,
      contentWidth,
      section.height,
      24,
      "#ffffff",
      "#e2e8f0",
    )

    const sectionX = PAGE_PADDING + SECTION_PADDING_X
    let sectionY = y + SECTION_PADDING_Y

    ctx.font = SECTION_TITLE_FONT
    ctx.fillStyle = "#0f172a"
    ctx.fillText(section.title, sectionX, sectionY)

    sectionY += SECTION_TITLE_LINE_HEIGHT + 12

    ctx.font = SECTION_BODY_FONT

    for (const [blockIndex, block] of section.wrappedBlocks.entries()) {
      for (const [lineIndex, line] of block.lines.entries()) {
        const lineX = sectionX + (block.bullet ? BULLET_INDENT : 0)

        if (block.bullet && lineIndex === 0) {
          ctx.fillStyle = "#2563eb"
          ctx.beginPath()
          ctx.arc(sectionX + 10, sectionY + 18, 5, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.fillStyle = "#1f2937"
        ctx.fillText(line, lineX, sectionY)
        sectionY += SECTION_BODY_LINE_HEIGHT
      }

      if (blockIndex < section.wrappedBlocks.length - 1) {
        sectionY += BLOCK_GAP
      }
    }

    y += section.height + SECTION_GAP
  }

  const footerY = canvas.height - PAGE_PADDING - 30

  ctx.strokeStyle = "#dbeafe"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(PAGE_PADDING, footerY - 26)
  ctx.lineTo(canvas.width - PAGE_PADDING, footerY - 26)
  ctx.stroke()

  ctx.font = FOOTER_FONT
  ctx.fillStyle = "#64748b"
  ctx.fillText(`quizcitoyen.fr · Généré le ${generatedOn}`, PAGE_PADDING, footerY)

  return canvas
}

export function FicheDownloadActions({ fiche }: FicheDownloadActionsProps) {
  const [isExportingImage, setIsExportingImage] = useState(false)

  const fileBaseName = `fiche-${fiche.slug}`

  const handleImageDownload = async () => {
    setIsExportingImage(true)

    try {
      const canvas = createFicheCanvas(fiche)
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, "image/png")
      })

      if (!blob) {
        throw new Error("Impossible de créer le fichier image.")
      }

      const downloadUrl = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = downloadUrl
      link.download = `${fileBaseName}.png`
      link.click()
      URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error(error)
      window.alert("Le téléchargement de l'image a échoué. Réessayez.")
    } finally {
      setIsExportingImage(false)
    }
  }

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      <Button type="button" variant="outline" className="bg-white" onClick={handleImageDownload} disabled={isExportingImage}>
        {isExportingImage ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileImage className="h-4 w-4" />}
        Télécharger l'image de la fiche
      </Button>
    </div>
  )
}
