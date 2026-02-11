const FRENCH_MONTHS: Record<string, string> = {
  janvier: "01",
  février: "02",
  fevrier: "02",
  mars: "03",
  avril: "04",
  mai: "05",
  juin: "06",
  juillet: "07",
  août: "08",
  aout: "08",
  septembre: "09",
  octobre: "10",
  novembre: "11",
  décembre: "12",
  decembre: "12",
}

export function toISODate(date: string): string | undefined {
  const match = date.trim().toLowerCase().match(/^(\d{1,2})\s+([a-zéûîôàèùâäëïöüç-]+)\s+(\d{4})$/)
  if (!match) return undefined
  const [, dayStr, monthStr, year] = match
  const month = FRENCH_MONTHS[monthStr]
  if (!month) return undefined
  const day = dayStr.padStart(2, "0")
  return `${year}-${month}-${day}`
}
