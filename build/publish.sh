#!/bin/sh

pnpm run build
pnpm changeset version
pnpm publish --access=restricted
