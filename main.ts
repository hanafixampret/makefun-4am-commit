import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "fix: I fixed the bug I introduced while fixing the bug I introduced while fixing the original bug. The original bug is still there, and it has tenure now. It is 4am.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.trim() !== entry || /\s{2,}/.test(entry) || entry.includes("\n")) {
  throw new Error("entry must be one clean line with no extra whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
