#!/usr/bin/env bash
set -e

mkdir -p src/shared/types

npx supabase gen types \
  --lang=typescript \
  --project-id "$PROJECT_REF" \
  > src/shared/types/database.ts
