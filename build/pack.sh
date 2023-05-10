#!/bin/sh

pnpm run build
mkdir -p .package
pnpm pack --pack-destination .package
