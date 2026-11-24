// One Word From Your Ex — entry program (program/v1).
// Writes exactly one word to /output/entry.txt: the word my ex
// would use to describe me. Nothing else. No explanation, no
// punctuation, no trailing newline — just the word itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The word. "almost": the ex's verdict in a single breath —
// he was almost the one, almost enough, almost there. Funny
// because it is small and devastating at the same time, and
// painfully honest because it names the near-miss everyone
// who has been dumped has heard, or said, themselves.
const WORD = "almost";

function outputDir(): string {
  const dir =
    process.env.MAKEFUN_OUTPUT_DIR ||
    process.env.OUTPUT_DIR ||
    "/output/entry.txt";
  // The env vars name the output *directory* in the harness, but
  // fall back to the full default path when neither is set.
  return dir.endsWith("entry.txt") ? dirname(dir) : dir;
}

function validate(word: string): void {
  if (word.length < 1 || word.length > 24) {
    throw new Error(`entry must be 1-24 characters, got ${word.length}`);
  }
  if (word.trim() !== word || /\s/.test(word)) {
    throw new Error("entry must be a single word with no whitespace");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("entry must be letters only, a single plain word");
  }
  // eslint-disable-next-line no-control-regex
  if (/[\u0000-\u001f\u007f]/.test(word)) {
    throw new Error("entry must not contain control characters");
  }
}

function main(): void {
  validate(WORD);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, WORD, "utf8");
  const back = readFileSync(target, "utf8");
  if (back !== WORD) {
    throw new Error(
      `read-back mismatch: wrote ${JSON.stringify(WORD)}, read ${JSON.stringify(back)}`,
    );
  }
  console.log(`wrote ${target}: ${WORD} (${WORD.length} chars)`);
}

main();
