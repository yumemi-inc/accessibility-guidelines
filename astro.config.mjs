import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      sidebar: [],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      title: "My Docs",
    }),
  ],
});
