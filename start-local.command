#!/bin/bash
# =============================================================================
# EFG Sustainability Report 2025 — start the local review server
# -----------------------------------------------------------------------------
# Double-click this file in Finder. It installs what the project needs the first
# time, then starts the dev server and opens it in your browser.
#
# Leave the Terminal window OPEN while you review — closing it stops the server.
# Press Ctrl+C in that window when you are done.
# =============================================================================
set -u
cd "$(dirname "$0")" || exit 1

GREEN=$'\033[0;32m'; RED=$'\033[0;31m'; DIM=$'\033[2m'; OFF=$'\033[0m'
say()  { printf "%s\n" "$1"; }
ok()   { printf "%s✓%s %s\n" "$GREEN" "$OFF" "$1"; }
fail() { printf "%s✗%s %s\n" "$RED" "$OFF" "$1"; }

say ""
say "  EFG Holding — Sustainability Report 2025"
say "  ${DIM}local review server${OFF}"
say ""

# --- Node -------------------------------------------------------------------
# Finder launches this with a bare PATH, so the usual install locations for
# Node are added by hand before giving up on it.
export PATH="/opt/homebrew/bin:/usr/local/bin:/opt/local/bin:$PATH"
if [ -s "$HOME/.nvm/nvm.sh" ]; then . "$HOME/.nvm/nvm.sh" >/dev/null 2>&1; fi

if ! command -v node >/dev/null 2>&1; then
  fail "Node.js is not installed on this Mac."
  say ""
  say "  Install it once, then double-click this file again:"
  say "    • download the LTS installer from  ${DIM}https://nodejs.org${OFF}"
  say "    • or, with Homebrew:  ${DIM}brew install node${OFF}"
  say ""
  say "  Press any key to close."
  read -r -n 1 -s
  exit 1
fi

NODE_MAJOR=$(node -p "process.versions.node.split('.')[0]")
if [ "$NODE_MAJOR" -lt 18 ]; then
  fail "Node $(node -v) is too old — this project needs 18 or newer."
  say "  Update from https://nodejs.org and try again."
  say ""
  say "  Press any key to close."
  read -r -n 1 -s
  exit 1
fi
ok "Node $(node -v)"

# --- Dependencies ------------------------------------------------------------
# The project ships without node_modules. The lockfile was written on Linux, so
# if npm trips over a platform-specific package the whole tree is thrown away
# and resolved again for macOS — that is the one failure worth self-healing,
# because it is the only one a reviewer will ever hit here.
if [ ! -d node_modules ]; then
  say ""
  say "  First run — installing dependencies. This takes a minute."
  say ""
  if ! npm install --no-audit --no-fund; then
    say ""
    say "  ${DIM}Retrying with a clean resolve for macOS…${OFF}"
    rm -rf node_modules package-lock.json
    if ! npm install --no-audit --no-fund; then
      say ""
      fail "Install failed. Send the messages above and I'll sort it out."
      say ""
      say "  Press any key to close."
      read -r -n 1 -s
      exit 1
    fi
  fi
  say ""
  ok "Dependencies installed"
else
  ok "Dependencies already installed"
fi

# --- Go ----------------------------------------------------------------------
say ""
say "  Starting…  ${DIM}the browser opens by itself in a moment${OFF}"
say "  ${DIM}Keep this window open. Ctrl+C here stops the server.${OFF}"
say ""
exec npm run dev -- --open
