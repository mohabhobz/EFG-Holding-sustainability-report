# Reviewing this locally

**Double-click `start-local.command`.** A Terminal window opens, installs what
the project needs the first time (about a minute), starts the server and opens
the report in your browser at `http://localhost:5173`.

Keep that Terminal window open while you review — closing it stops the server.
Ctrl+C in that window when you are done.

If macOS blocks it the first time — *"cannot be opened because it is from an
unidentified developer"* — right-click the file → **Open** → **Open**. That is
only needed once.

If it says Node.js is missing, install the LTS build from
[nodejs.org](https://nodejs.org) and double-click again.

## Doing it by hand instead

```bash
cd "~/Desktop/Claude Work Projects/EFG SR 2026/Web portal/efg-sr-2025"
npm install
npm run dev
```

## What to look at

Every route is reachable from **Contents** in the top-right of any page, or from
the section links in the header on a wide window.

| | |
|---|---|
| `/` | the contents page |
| `/introduction` … `/stakeholder-engagement` | the five numbered sections |
| `/chairpersons-foreword`, `/ceo-note` | front matter |
| `/from-clarity-to-impact`, `/appendix-carbon`, `/abbreviations` | back matter |

**The dashed boxes are meant to be there.** They mark the 40 images still to
come — each is labelled with the key the file needs to be named. Everything
else is real, final content.

Worth checking on a phone too: open the same address on your phone using your
Mac's local IP (the Terminal prints a `Network:` line for it), with both on the
same Wi-Fi.

## Changing things

The text of every page is data, not markup — `src/content/<route>.js`. Edit a
string there and the browser updates instantly, no restart. Colours and type
sizes are all in `src/styles/tokens.css`, each one annotated with the printed
page it was measured from.
