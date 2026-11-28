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
    base: '/',
    plugins: [
      react(),
      tailwindcss(),
      ...VitePWA({
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
          globIgnores: ['**/sitemap.xml', '**/robots.txt', '**/_headers', '**/.htaccess'],
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
          enabled: false,
        },
      }).filter((plugin) => plugin.name !== 'vite-plugin-pwa:dev-sw'),
      // Injects dynamic calculator/category counts and canonical URL into index.html and manifest.webmanifest.
      {
        name: 'sync-site-url-in-html',
        configureServer(server) {
          server.middlewares.use('/@vite-plugin-pwa/pwa-entry-point-loaded', (_req, res) => {
            res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
            res.setHeader('Cache-Control', 'no-store');
            res.end('export default function registerDevSW() {}\n');
          });
          server.middlewares.use((req, res, next) => {
            const reqPath = (req.url || '').split('?')[0];
            if (reqPath === '/sw.js' || reqPath === '/dev-sw.js') {
              res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
              res.setHeader('Cache-Control', 'no-store');
              res.end(
                "self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',(e)=>{e.waitUntil(caches.keys().then((ks)=>Promise.all(ks.map((k)=>caches.delete(k)))).then(()=>self.registration.unregister()));});\n"
              );
              return;
            }
            next();
          });
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
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'vendor',
                test: /node_modules\/(react|react-dom|scheduler|lucide-react)\//,
                priority: 20,
              },
              {
                name: 'calculators-group-a',
                test: /src\/data\/categories\/(math|finance|business|construction|health|datetime|electrical)\.ts$/,
                priority: 15,
              },
              {
                name: 'calculators-group-b',
                test: /src\/data\/categories\/(education|engineering|realestate|automotive|cooking|statistics|tech)\.ts$/,
                priority: 15,
              },
              {
                name: 'seo-group-a',
                test: /src\/data\/(math|finance|business|construction|health)SeoFull\.ts$/,
                priority: 10,
              },
              {
                name: 'seo-group-b',
                test: /src\/data\/(datetime|electrical|education|engineering|realestate)SeoFull\.ts$/,
                priority: 10,
              },
              {
                name: 'seo-group-c',
                test: /src\/data\/(automotive|cooking|statistics|internet)SeoFull\.ts$/,
                priority: 10,
              },
            ],
          },
        },
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
