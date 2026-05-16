#!/usr/bin/env bash
set -e

mkdir -p src/shared/types

npx supabase gen types \
  --lang=typescript \
  --local \
  > src/shared/types/database.ts
