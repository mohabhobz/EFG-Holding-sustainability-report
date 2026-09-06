/**
 * SECTION COVERS
 * --------------
 * The print opens each of the five numbered sections on a two-page spread: a
 * cream page carrying a paper-cut emblem, then a full deep-green page with the
 * section number set enormous behind the title. Those two pages have been
 * taken out of every section and replaced by one cover per section, built on
 * the report's own cover — printed page 0 — so the five read as a set with it.
 *
 * The wording and the weights are the print's, off the divider pages: the
 * number spelled out, the title split across two lines with the first in Book
 * and the second in Bold. Where a title is one word there is no first line and
 * the bold line sits in the middle of the same block.
 *
 * `art` names the photograph for the cover. Drop `<art>.jpg|png|webp` into
 * src/assets/covers/ and it appears — until then the slot draws itself as a
 * labelled placeholder, so a missing image is visible rather than a blank.
 */
export const sectionCovers = {
  introduction: {
    eyebrow: 'SECTION ONE',
    line1: '',
    line2: 'INTRODUCTION',
    art: 'introduction',
  },
  'environmental-stewardship': {
    eyebrow: 'SECTION TWO',
    line1: 'ENVIRONMENTAL',
    line2: 'STEWARDSHIP',
    art: 'environmental-stewardship',
  },
  'social-investment': {
    eyebrow: 'SECTION THREE',
    line1: 'SOCIAL',
    line2: 'INVESTMENT',
    art: 'social-investment',
  },
  'governance-ethics': {
    eyebrow: 'SECTION FOUR',
    line1: 'GOVERNANCE',
    line2: '& ETHICS',
    art: 'governance-ethics',
  },
  'stakeholder-engagement': {
    eyebrow: 'SECTION FIVE',
    line1: 'STAKEHOLDER',
    line2: 'ENGAGEMENT',
    art: 'stakeholder-engagement',
  },
};
