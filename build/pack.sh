#!/bin/sh

set -e

pnpm run build
mkdir -p .package
pnpm pack --pack-destination .package
