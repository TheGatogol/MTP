#!/usr/bin/env bash
echo "[PRE-COMMIT] Sorting bower."

{
  npx sort-package-json bower.json
  git add bower.json
} || {
  exit
}
