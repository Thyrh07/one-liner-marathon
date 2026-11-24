// One-Liner Marathon — make.fun entry.
// One funny line, at most 280 characters, any subject.
// The program writes the line to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one funny line. Setup names an everyday truth (a phone that
// tracks everything you do), the turn lands at the end — the report itself
// stages an intervention and asks you to name a single non-scrolling thing.
// Why it works: the report is the straight man, the phone is the therapist,
// and the punchline makes the reader the patient.
const MAX_CHARS = 280;
const OUTPUT =
  "My screen time report staged an intervention: it printed itself out, sat me down, and asked me to name one thing I did today that wasn't scrolling.";

// Gate: mirror the sealed scorer — UTF-8 text of 1 to MAX_CHARS characters,
// a single line, no surrounding whitespace. Refuse to write an invalid entry.
function validate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (line.includes("\n") || line !== line.trim()) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
}

validate(OUTPUT);
console.log(`entry OK: ${[...OUTPUT].length} characters, single line`);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT, "utf8");
