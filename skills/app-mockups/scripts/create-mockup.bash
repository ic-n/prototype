#!/usr/bin/env bash
set -euo pipefail

skill_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
project_name="${1:-my-mockup}"

if [[ ! "$project_name" =~ ^[a-z0-9][a-z0-9._-]*$ ]]; then
  echo "Project name must be a single lowercase directory name." >&2
  exit 1
fi

target="$PWD/$project_name"
if [[ -e "$target" ]]; then
  echo "Target already exists: $target" >&2
  exit 1
fi

npx --yes heroui-cli@latest init "$project_name" -t app -p npm
npm --prefix "$target" install
bash "$skill_dir/scripts/apply-template.bash" "$target"

echo "Mockup ready: $target"
