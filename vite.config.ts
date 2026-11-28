import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

import { SITE_URL } from './src/config/site.ts';
import { categories, getAllCalculators } from './src/data/calculatorsData.ts';

export default defineConfig(() => {
  const cleanSiteUrl = SITE_URL.replace(/\/+$/, '');
  const totalCalculators = getAllCalculators().length;
  const totalCategories = categories.length;
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: null,
        manifestFilename: 'manifest.webmanifest',
        includeAssets: [
          'favicon.svg',
          'apple-touch-icon.png',
          'pwa-192x192.png',
          'pwa-512x512.png',
          'pwa-maskable-512x512.png',
        ],
        manifest: false,
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
          globIgnores: ['**/sitemap.xml', '**/robots.txt', '**/_headers'],
          navigateFallback: '/index.html',
          navigateFallbackDenylist: [
            /^\/sitemap\.xml$/i,
            /^\/robots\.txt$/i,
            /^\/manifest\.webmanifest$/i,
            /^\/sw\.js$/i,
          ],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
        },
        devOptions: {
          enabled: process.env.DISABLE_HMR !== 'true',
          type: 'module',
        },
      }),
      // Injects dynamic calculator/category counts and canonical URL into index.html and manifest.webmanifest.
      {
        name: 'sync-site-url-in-html',
        configureServer(server) {
          server.middlewares.use('/manifest.webmanifest', (_req, res, next) => {
            const manifestPath = path.resolve(import.meta.dirname, 'public/manifest.webmanifest');
            if (!fs.existsSync(manifestPath)) return next();
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
            manifest.description = `${getAllCalculators().length} Free Online Calculators`;
            res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
            res.end(JSON.stringify(manifest, null, 2));
          });
        },
        transformIndexHtml: {
          order: 'post',
          handler(html: string): string {
            let out = html
              .replaceAll('%TOTAL_CALCULATORS%', String(totalCalculators))
              .replaceAll('%TOTAL_CATEGORIES%', String(totalCategories))
              .replace(
                '<!-- canonical-link -->',
                `<link rel="canonical" href="${cleanSiteUrl}/" />`
              );
            if (!cleanSiteUrl) return out;
            return out
              .replace('<meta property="og:url" content="/" />', `<meta property="og:url" content="${cleanSiteUrl}/" />`)
              .replaceAll('"@id": "/#', `"@id": "${cleanSiteUrl}/#`)
              .replaceAll('"url": "/"', `"url": "${cleanSiteUrl}/"`)
              .replaceAll('"target": "/?q=', `"target": "${cleanSiteUrl}/?q=`);
          },
        },
        closeBundle(error?: Error): void {
          if (error) return;
          const distManifest = path.resolve(import.meta.dirname, 'dist/manifest.webmanifest');
          if (fs.existsSync(distManifest)) {
            const manifest = JSON.parse(fs.readFileSync(distManifest, 'utf-8'));
            manifest.description = `${totalCalculators} Free Online Calculators`;
            fs.writeFileSync(distManifest, `${JSON.stringify(manifest, null, 2)}\n`);
          }
        },
      },
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(import.meta.dirname, 'dist');
          const srcAssets = path.resolve(import.meta.dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
