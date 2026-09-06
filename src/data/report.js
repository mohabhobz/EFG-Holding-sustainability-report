/**
 * The report's own cover copy, as printed on page 0, and where the PDF lives.
 */
export const cover = {
  line1: 'THE POWER',
  line2: 'OF CLARITY',
  theme: 'TRANSPARENT GOALS, TANGIBLE PROGRESS',
  year: '2025',
  label: 'SUSTAINABILITY\nREPORT',
};

/* The file is served from /public. Swap this for the hosted URL on
 * efgholding.com when the report is published there — the annual report's
 * cover links to its own copy the same way. */
export const reportPdf = `${import.meta.env.BASE_URL}EFG-Holding-Sustainability-Report-2025.pdf`;
