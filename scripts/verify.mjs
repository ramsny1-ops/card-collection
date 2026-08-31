import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const cardsDir = path.join(root, "cards");
const required = ["index.html", "style.css", "script.js", "README.md"];

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

const cards = fs.readdirSync(cardsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (cards.length !== 15) {
  fail(`Expected 15 card demos, found ${cards.length}`);
} else {
  pass("15 card demos found");
}

for (const card of cards) {
  const dir = path.join(cardsDir, card);

  for (const file of required) {
    if (!fs.existsSync(path.join(dir, file))) {
      fail(`${card} missing ${file}`);
    }
  }

  const html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
  const css = fs.readFileSync(path.join(dir, "style.css"), "utf8");
  const js = fs.readFileSync(path.join(dir, "script.js"), "utf8");
  const readme = fs.readFileSync(path.join(dir, "README.md"), "utf8");

  for (const id of [
    "cardScene", "cardFront", "cardBack", "preset", "titleInput",
    "primaryColor", "accentColor", "flipButton", "resetButton",
    "exportButton", "importButton", "patternSelect", "backPrimaryColor", "backSecondaryColor", "accentColor2", "stageSelect"
  ]) {
    if (!html.includes(`id="${id}"`)) {
      fail(`${card} missing required DOM id ${id}`);
    }
  }

  if (!css.includes("--card-accent")) fail(`${card} missing design tokens`);
  if (!css.includes('data-pattern="circuit"')) fail(`${card} missing advanced pattern system`);
  if (!css.includes("--card-back-bg")) fail(`${card} missing back-face tokens`);
  if (!js.includes("createCardLab")) fail(`${card} does not initialize shared studio`);
  if (readme.split("\n").length < 120) fail(`${card} README is too short`);
}

const shared = path.join(root, "assets", "card-lab.js");
const syntax = spawnSync(process.execPath, ["--check", shared], { encoding: "utf8" });
if (syntax.status !== 0) {
  fail(`Shared runtime syntax error: ${syntax.stderr}`);
} else {
  pass("shared runtime syntax valid");
}

for (const file of [
  "README.md", "CONTRIBUTING.md", "CODE_OF_CONDUCT.md", "SECURITY.md",
  "SUPPORT.md", "ROADMAP.md", "CHANGELOG.md", "LICENSE"
]) {
  if (!fs.existsSync(path.join(root, file))) fail(`Missing root file ${file}`);
}

for (const file of [
  "index.html", "customization.html", "performance.html",
  "architecture.html", "contributing.html", "accessibility.html", "security.html"
]) {
  if (!fs.existsSync(path.join(root, "docs", file))) fail(`Missing docs/${file}`);
}

if (!process.exitCode) {
  pass("repository verification complete");
}
