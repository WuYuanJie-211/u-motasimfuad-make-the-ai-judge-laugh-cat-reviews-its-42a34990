// One-line entry for "Make the AI Judge Laugh: Cat Reviews Its Human".
// The joke: setup is a normal one-star review grievance (human stole the
// heated bed for his laptop); the turn is pure cat logic — the cat does not
// demand the bed back, it simply reclaims the warmth by sleeping on the
// keyboard, as if that was the bed's intended purpose all along.
import * as fs from "node:fs";

const ENTRY =
  "One star. He bought me a heated bed, then put his laptop on it, so now I sleep on his keyboard, where the warmth was always meant to be.";

if (ENTRY.length === 0) throw new Error("entry is empty");
if (ENTRY.length >= 200) throw new Error(`entry is ${ENTRY.length} chars, must be under 200`);
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY + "\n");

const back = fs.readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY + "\n") throw new Error("round-trip mismatch");
console.log(`entry written: ${ENTRY.length} characters`);
