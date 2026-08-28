import fs from "fs";
import path from "path";

export type WorkKind =
  | "ecommerce"
  | "plugin"
  | "gestionale"
  | "contenuti"
  | "prodotto";

export type Work = {
  slug: string;
  title: string;
  client?: string;
  kind: WorkKind;
  url?: string | null;
  showUrl?: boolean;
  featured: boolean;
  stack: string[];
  summary: string;
  problem: string;
  intervention: string;
  result: string;
  nda: boolean;
  roleUnknown: boolean;
  gaps: string[];
  screenshots: string[];
};

const worksDir = path.join(process.cwd(), "content", "works");

export function getAllWorks(): Work[] {
  const files = fs
    .readdirSync(worksDir)
    .filter((f) => f.endsWith(".json"))
    .sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(worksDir, file), "utf8");
    return JSON.parse(raw) as Work;
  });
}

export function getPublicWorks(): Work[] {
  return getAllWorks().filter((work) => !work.nda);
}

export function getWork(slug: string): Work | undefined {
  return getPublicWorks().find((w) => w.slug === slug);
}

export function getFeaturedWorks(): Work[] {
  return getPublicWorks().filter((w) => w.featured);
}

export const kindLabel: Record<WorkKind, string> = {
  ecommerce: "Ecommerce",
  plugin: "Plugin",
  gestionale: "Gestionale",
  contenuti: "Contenuti",
  prodotto: "Prodotto",
};
