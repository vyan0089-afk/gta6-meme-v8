// main.ts — the entry program for the GTA 6 meme bounty (gta6-meme-x-01).
// The house reads the X post itself, so this program has one job: place
// POST.json, which holds the post's address, into the output directory
// the grader looks at. Nothing else it writes is judged.
// It runs with Node 22 and only the standard library.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(targetDir, { recursive: true });
copyFileSync(join(sourceDir, "POST.json"), join(targetDir, "POST.json"));
