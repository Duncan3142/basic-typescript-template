#!/bin/sh

set -e

pnpm run clean;
rm -rf node_modules .turbo pnpm-lock.yaml;
