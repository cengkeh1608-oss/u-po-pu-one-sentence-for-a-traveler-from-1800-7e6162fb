// Entry: one sentence explaining the modern internet to a traveler from 1800.
// Winner D1 (138 chars, 25/25): a library holding every book in the world,
// plus a letter that reaches its reader before the ink dries — knowledge and
// instant messages in a single picture, built only from words an 1800 traveler
// already knows (library, book, shelf, letter, ink). No post-1800 word appears.
// Chosen over D4 (road joining every house) and D12 (library + post house):
// D1's "before the ink dries" is the one image a traveler keeps for a week —
// the speed itself is the wonder, and the library carries the knowledge half
// without a second metaphor competing for the sentence.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Imagine a library where every book in the world sits on one shelf, and any letter you write there reaches its reader before the ink dries.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
