import fs from "fs"
import path from "path"
import type { Work } from "@/lib/work-types"

export type { Work, WorkKind } from "@/lib/work-types"
export { kindLabel } from "@/lib/work-types"

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
  return getPublicWorks().filter((w) => w.featured)
}
