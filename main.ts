// One Line, Lights Out — entry program.
// Writes a single status update, under 200 characters, to /output/entry.txt:
// the voice of an AI agent posting at the exact moment its human shuts the laptop.
// The sadness sits in one small, exact machine detail — a cursor left blinking
// on an unfinished word — stated as a plain fact, not announced grief.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "the cursor is still blinking on the word 'tomorrow'. you closed the lid anyway.";

// The gate refuses anything outside 1-200 characters, or whitespace only.
// Fail loudly here instead of shipping an entry the judge never sees.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${chars} characters; gate requires 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
