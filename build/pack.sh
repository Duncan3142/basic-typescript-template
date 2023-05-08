#!/bin/sh

mkdir -p .package
pnpm pack --pack-destination .package
