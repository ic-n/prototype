#!/usr/bin/env bash
set -euo pipefail

skill_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
target="${1:-}"

if [[ -z "$target" || ! -f "$target/package.json" || ! -f "$target/styles/globals.css" || ! -f "$target/app/page.tsx" || ! -f "$target/app/layout.tsx" ]]; then
  echo "Usage: bash apply-template.bash <fresh-heroui-app-directory>" >&2
  exit 1
fi

if [[ -e "$target/styles/global.css" ]]; then
  echo "Refusing to overwrite existing mockup styles in $target/styles" >&2
  exit 1
fi

cp "$skill_dir"/assets/styles/*.css "$target/styles/"
printf '@import "./global.css";\n' > "$target/styles/globals.css"
cp "$skill_dir/assets/app/page.tsx" "$target/app/page.tsx"
cp "$skill_dir/assets/app/layout.tsx" "$target/app/layout.tsx"
echo "Installed mockup page and styles in $target"
