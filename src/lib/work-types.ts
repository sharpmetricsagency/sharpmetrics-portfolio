export type WorkKind =
  | "ecommerce"
  | "plugin"
  | "gestionale"
  | "contenuti"
  | "prodotto"

export type Work = {
  slug: string
  title: string
  client?: string
  kind: WorkKind
  url?: string | null
  showUrl?: boolean
  featured: boolean
  stack: string[]
  summary: string
  problem: string
  intervention: string
  result: string
  nda: boolean
  roleUnknown: boolean
  gaps: string[]
  screenshots: string[]
}

export const kindLabel: Record<WorkKind, string> = {
  ecommerce: "Ecommerce",
  plugin: "Plugin",
  gestionale: "Gestionale",
  contenuti: "Contenuti",
  prodotto: "Prodotto",
}
