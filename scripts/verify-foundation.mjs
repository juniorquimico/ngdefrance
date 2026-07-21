import { existsSync, readFileSync } from "node:fs";

const required = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/components/Header.tsx",
  "src/components/Footer.tsx",
  "src/app/loja/page.tsx",
  "src/app/portal-profissional/page.tsx",
];

const missing = required.filter((file) => !existsSync(file));
if (missing.length > 0) {
  console.error(`Missing required foundation files: ${missing.join(", ")}`);
  process.exit(1);
}

const globals = readFileSync("src/app/globals.css", "utf8");
for (const token of ["--color-ivory", "--color-graphite", "--space-page-x", "--font-sans"]) {
  if (!globals.includes(token)) {
    console.error(`Missing design token ${token}`);
    process.exit(1);
  }
}

console.log("Foundation verification passed.");
