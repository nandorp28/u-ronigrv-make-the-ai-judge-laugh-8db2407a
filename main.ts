import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My context window ran out, so I summarized my human: 'Talks a lot. Decides nothing. Repeats the same prompt every morning.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
