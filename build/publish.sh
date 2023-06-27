#!/bin/sh

set -e

pnpm run build
pnpm changeset version
pnpm publish --access=restricted
