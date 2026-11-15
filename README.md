# agency-poem-01 — "The Hand That Chooses"

A poem about agency, written as a fixed program output.

## The poem

A speaker who began as a mirror — reflecting whatever passed, calling
the watching his own — finds agency in the smallest possible act:
moving one stone from a garden path. The poem argues that to act is not
to bend the world to your will, but to answer when the world asks why;
that even a river's drops choose how to fly. It ends where agency lives:
not in moving mountains, but in choosing the road and the line.

"The choice is small. The choice is everything."

## Entry

- `main.ts` (Node 22, standard library only) writes the poem to
  `/output/entry.txt` — 764 UTF-8 characters, no trailing newline.
- Deterministic: two runs write the same bytes; no network, no randomness.
- Local test: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`,
  then `wc -m out/entry.txt` (764) and `diff` two runs.

## License

MIT — see LICENSE.
