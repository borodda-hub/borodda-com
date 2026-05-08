// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// Keystatic admin (/keystatic) only loads during `astro dev`.
// Production builds stay pure static — no server adapter needed.
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://borodda.com',
  integrations: [
    mdx(),
    sitemap(),
    react(),
    ...(isDev ? [keystatic()] : []),
  ],
});
