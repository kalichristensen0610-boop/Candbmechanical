import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const exportDir = join(root, "out");
const nextDir = join(root, ".next");

if (!existsSync(join(exportDir, "index.html"))) {
  throw new Error(
    "Static export failed: out/index.html was not created. Hostinger should run `npm install && npm run build` from the project root.",
  );
}

mkdirSync(nextDir, { recursive: true });
cpSync(exportDir, nextDir, { recursive: true });

writeFileSync(
  join(nextDir, "HOSTINGER_STATIC_EXPORT.txt"),
  [
    "C&B static export prepared for Hostinger.",
    "If Hostinger only offers `.next` as the output directory, this folder now contains the exported static site.",
    "Preferred output directory remains `out` when Hostinger allows it.",
    "",
  ].join("\n"),
);

console.log("Hostinger static export ready in both out and .next.");
