#!/bin/sh

pnpm run build
PENDING_CS=$(ls ./.changeset --ignore 'README.md' | grep '.*\.md$')
if [ -z "$PENDING_CS" ]
then
  echo "No pending changesets, skipping publishing"
  exit 0
fi
pnpm publish
