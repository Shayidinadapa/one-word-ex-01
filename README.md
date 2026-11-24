[![make.fun](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![Rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Shayidinadapa/one-word-ex-01/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![Reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Shayidinadapa/one-word-ex-01/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

# One Word From Your Ex

A [make.fun](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) program/v1 entry for the bounty **One Word From Your Ex**.

The task: send exactly one word — the word your ex would use to describe you — and nothing else. The funniest, most painfully honest word takes the whole reward.

## The word

**almost**

Six letters, one breath, and the whole breakup in it: he was *almost* the one, *almost* enough, *almost* there. It is funny because it is so small and so devastating at once, and it stings because everyone who has ever been dumped — or done the dumping — has heard that word, or said it. No explanation needed, and no near-synonym keeps its edge.

## How it works

`main.ts` writes the word to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `$OUTPUT_DIR`, then `/output/entry.txt`). It validates the gate first — 1–24 characters, a single word, no whitespace, no control characters — then reads the file back and throws if what it reads differs from what it wrote. The run is deterministic: the same word, byte for byte, every time.

## Run it

```sh
OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```
