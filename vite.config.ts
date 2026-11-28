import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

import { SITE_URL } from './src/config/site';

export default defineConfig(() => {
  const cleanSiteUrl = SITE_URL.replace(/\/+$/, '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      // Injects canonical link post-asset-resolution (avoiding Vite treating href="/" as a directory asset)
      // and automatically prepends SITE_URL from src/config/site.ts once a custom domain is configured.
      {
        name: 'sync-site-url-in-html',
        transformIndexHtml: {
          order: 'post',
          handler(html: string): string {
            let out = html.replace(
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
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
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
