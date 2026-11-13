// make.fun food-picture-01 entry (Node 22, standard library only).
//
// The entry image sits beside this file as entry.png. The program copies it
// to /output/entry.png, where the grader reads it and the judge sees it.
//
// The image: a steaming bowl of ramen — chopsticks lifting glossy noodles,
// a halved soft egg, slices of chashu — shot close so the food fills the
// frame and makes the viewer hungry.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
