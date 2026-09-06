/* Render each printed page as the site renders it, alone, at print size. */
import { chromium } from 'playwright';
import fs from 'node:fs';
const nums = process.argv.slice(2).map(Number);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1191, height: 1684 }, deviceScaleFactor: 1 });
await p.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: '.hdr{display:none!important}.sheets{padding:0!important;gap:0!important;background:#fff!important}.pg{max-width:1190.55px!important;box-shadow:none!important}' });
fs.mkdirSync('/tmp/fid', { recursive: true });
for (const n of nums) {
  const svg = await (await fetch(`http://127.0.0.1:4173/pages/p${String(n).padStart(3,'0')}.svg`)).text();
  await p.evaluate((html) => {
    document.body.innerHTML = `<div class="sheets"><div class="pg"><div>${html}</div></div></div>`;
  }, svg.replaceAll('ART/', '/pageart/'));
  await p.waitForTimeout(500);
  await p.evaluate(() => Promise.all([...document.images].map(i => i.complete ? 1 : new Promise(r => { i.onload = i.onerror = r; }))));
  await p.waitForTimeout(250);
  await p.screenshot({ path: `/tmp/fid/site-${n}.png`, clip: { x: 0, y: 0, width: 1191, height: 1684 } });
}
await b.close();
console.log('captured', nums.length);
