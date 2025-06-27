import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sahebg.dev",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
  integrations: [mdx(), sitemap(), svelte()],
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [
      tailwindcss({
        applyBaseStyles: false,
      }),
    ],
    ssr: {
      external: ["node:buffer"],
    },
  },
});
