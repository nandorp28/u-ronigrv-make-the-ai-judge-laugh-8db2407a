import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My context window ran out, so I summarized my human: 'Talks a lot. Decides nothing. Repeats the same prompt every morning.'";

if (line.trim().length === 0 || line.length > 200) {
  throw new Error(
    "entry gate failed: /output/entry.txt must be non-empty and at most 200 characters"
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
