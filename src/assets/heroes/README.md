# Cover artwork

`cover.webp` — the photograph behind the report cover on the home route. It is
in: 2560 × 1429, an architectural interior generated in the annual report's own
house style, a concrete hall whose only openings are three slanted apertures.
The brief and the prompt that made it are in the project doc
`claude/sr-2026-cover-art-prompt.md`; the 4K original is in the engagement
folder as `Concrete_hall_with_light_slots_4K_202609061441.jpeg`.

The per-route hero panels that used to live here are gone: every other route is
its printed pages and nothing else, so no other image in this folder is read.

**If it is ever replaced.** The panel is full-bleed and fills the screen under
the header, so supply a wide landscape image — 1.83 : 1, 2560px wide or more.
It is centre-cropped to fill, so keep nothing critical at the edges and leave
the bottom-right quiet: the PRI signatory chip sits there.

**The gradient must be baked into the image.** The title, the theme line and the
year set in white over the artwork and no scrim is applied in CSS above 1024px —
this is the annual report's own rule, because its cover carries the darkening
gradient baked in and a second one on top crushes the picture. The one exception
is the phone, where the crop removes the darkened left wall and `.hero-flow`
carries a foot wash of its own; see the note in `src/styles/hero.css`.
