import * as fs from "node:fs";

// The single word grandma would text back about AI.
// Grandma's verdict is one word: "skynet" — half joke, half genuine worry.
// The file must end exactly at the last character of the line: no newline is appended.
// One word, no punctuation — grandma does not do punctuation.
const entry = "skynet";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}
