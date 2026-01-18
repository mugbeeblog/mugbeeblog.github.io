// @ts-check

import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mugbeeblog.github.io",
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
