import { copyFileSync, existsSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* Real paths, not hash routes — the report is a document people cite, so a
 * section's URL is /environmental-stewardship. Static hosts only know about
 * index.html, so a copy is written to 404.html for the same fallback reason.
 * `base` comes from PAGES_BASE, defaulting to '/' which is what Vercel wants. */
export default defineConfig({
  base: process.env.PAGES_BASE || '/',
  plugins: [
    react(),
    {
      name: 'spa-404',
      closeBundle() {
        const p = 'dist/index.html';
        if (existsSync(p)) copyFileSync(p, 'dist/404.html');
      },
    },
  ],
  build: { outDir: 'dist', assetsInlineLimit: 0 },
});
