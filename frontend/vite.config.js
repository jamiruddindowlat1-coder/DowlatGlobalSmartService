import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { SITEMAP_PATHS } from './src/seoData.js'
import { DEFAULT_SITE_URL } from './src/siteConstants.js'

function seoFilesPlugin(siteUrl) {
  return {
    name: 'generate-seo-files',
    async writeBundle({ dir }) {
      const outputDir = resolve(dir || 'dist');
      await mkdir(outputDir, { recursive: true });

      const sitemap = siteUrl
        ? `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${SITEMAP_PATHS.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}\n</urlset>\n`
        : null;
      const robots = `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ''}`;

      await writeFile(resolve(outputDir, 'robots.txt'), robots, 'utf8');
      if (sitemap) {
        await writeFile(resolve(outputDir, 'sitemap.xml'), sitemap, 'utf8');
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), '');
  const siteUrl = env.VITE_SITE_URL?.trim().replace(/\/+$/, '') || DEFAULT_SITE_URL;

  if (siteUrl && !/^https:\/\/[^/]+$/i.test(siteUrl)) {
    throw new Error('VITE_SITE_URL must be the real HTTPS site origin, for example https://example.com');
  }

  return {
    plugins: [react(), seoFilesPlugin(siteUrl)],
    server: {
      host: 'localhost',
      port: 5173,
      cors: true,
      headers: {
        'X-Frame-Options': 'ALLOWALL',
        'Content-Security-Policy': 'frame-ancestors *',
      },
    },
    build: {
      outDir: 'dist',
    },
  };
});