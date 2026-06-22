#!/usr/bin/env bash
# Launch Speculos in headless mode with the REST API and APDU TCP server exposed.
#
# Usage:
#   ./run.sh [path/to/app.elf]
#
# With no argument it runs the demo app shipped in the repository
# (apps/boil.elf).
set -euo pipefail

APP="${1:-apps/boil.elf}"

ARGS=(--display headless --api-port 5000 --apdu-port 9999)

echo "Launching Speculos on $APP"
echo "  REST API : http://127.0.0.1:5000   (and web UI at the same address)"
echo "  APDU TCP : 127.0.0.1:9999"
exec speculos "${ARGS[@]}" "$APP"
