import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://paredroja.com.ar',
  output: 'static',
  build: { format: 'directory' },
  vite: { build: { cssMinify: 'lightningcss' } },
});
