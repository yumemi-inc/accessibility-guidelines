import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      sidebar: [
        {
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
          label: "Guides",
        },
        {
          autogenerate: { directory: "reference" },
          label: "Reference",
        },
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      title: "My Docs",
    }),
  ],
});
