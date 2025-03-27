import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      sidebar: [
        {
          items: [
            { label: "はじめに", slug: "about/introduction" },
            { label: "利用方法", slug: "about/usage" },
          ],
          label: "ガイドラインについて",
        },
        {
          autogenerate: { directory: "guidelines" },
          label: "ガイドライン",
        },
      ],
      social: {
        github: "https://github.com/yumemi-inc/accessibility-guideline",
      },
      title: "YUMEMI Accessibility Guideline",
    }),
  ],
});
