import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  site: 'https://iamsahebgiri.vercel.app',
  integrations: [mdx(), sitemap(), tailwind(), react()]
});