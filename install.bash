#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
destination="${CODEX_HOME:-$HOME/.codex}/skills/app-mockups"

if [[ -e "$destination" ]]; then
  echo "Skill already exists: $destination" >&2
  exit 1
fi

mkdir -p "$(dirname "$destination")"
cp -R "$repo_dir/skills/app-mockups" "$destination"
echo "Installed skill: $destination"
