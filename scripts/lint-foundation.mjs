import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const errors = [];
const extensions = new Set([".ts", ".tsx", ".css", ".md", ".mjs", ".json"]);
const ignored = new Set([".git", "node_modules", ".next"]);

function extensionOf(file) {
  const index = file.lastIndexOf(".");
  return index === -1 ? "" : file.slice(index);
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (ignored.has(entry)) continue;
    const path = join(dir, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) walk(path);
    if (!stats.isFile() || !extensions.has(extensionOf(path))) continue;

    const contents = readFileSync(path, "utf8");
    if (/try\s*{\s*(?:import|require)\(/.test(contents)) {
      errors.push(`${path}: do not wrap imports in try/catch blocks`);
    }
    if (!contents.endsWith("\n")) {
      errors.push(`${path}: missing trailing newline`);
    }
  }
}

walk(process.cwd());

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Foundation lint passed.");
