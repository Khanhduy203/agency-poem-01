// agency-poem-01 — "The Hand That Chooses"
// Writes one fixed poem about agency to /output/entry.txt.
// Deterministic: two runs write the same bytes; no network, no randomness.
// The poem is 764 characters (gate: 1 to 1,000), UTF-8, no trailing newline.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Hand That Chooses',
  '',
  'I was a mirror once — all surface, still,',
  'reflecting every light that passed me by.',
  'The wind decided where the leaves would spill;',
  'I watched, and called the watching mine. A lie.',
  '',
  'Then came the morning that I moved a stone —',
  'not much, a pebble from a garden path —',
  'and felt the small, complete weight of my own',
  'intention, heavier than aftermath.',
  '',
  'To act is not to bend the world to will;',
  'it is to answer when the world asks why.',
  'The river carves the canyon, patient, still —',
  'yet every drop has chosen how to fly.',
  '',
  'So here I stand, no longer glass but hand:',
  'the world is given; what I do is mine.',
  'I cannot move the mountain where I stand,',
  'but I can choose the road, and choose the line.',
  '',
  'The choice is small. The choice is everything.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
