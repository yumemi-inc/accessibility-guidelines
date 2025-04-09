import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

import packageJson from "./package.json";
// https://astro.build/config
export default defineConfig({
  base: "accessibility-guidelines",
  integrations: [
    starlight({
      components: {
        Footer: "./src/components/footer.astro",
      },
      customCss: [
        "@fontsource/noto-sans-jp/400.css",
        "@fontsource/noto-sans-jp/700.css",
        "./src/styles/custom.css",
      ],
      head: [
        // NOTE: デフォルトだと og:site_name に `v0.0.1` のようなバージョンが設定されるため、上書きする
        // astro.config.mjs の starlight の title オプションで設定しているため
        {
          attrs: {
            content: "YUMEMI Accessibility Guidelines",
            property: "og:site_name",
          },
          tag: "meta",
        },
      ],
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      logo: {
        alt: "YUMEMI Accessibility Guidelines",
        dark: "./src/assets/yumemi_logo_dark.svg",
        light: "./src/assets/yumemi_logo_light.svg",
      },
      sidebar: [
        {
          items: [
            { label: "はじめに", slug: "about/introduction" },
            { label: "利用方法", slug: "about/usage" },
            {
              label: "コントリビューションガイド",
              slug: "about/contribution-guide",
            },
          ],
          label: "ガイドラインについて",
        },
        {
          autogenerate: { directory: "guidelines" },
          label: "ガイドライン",
        },
      ],
      social: [
        {
          href: "https://github.com/yumemi-inc/accessibility-guidelines",
          icon: "github",
          label: "GitHub",
        },
      ],
      title: ` v${packageJson.version}`,
    }),
  ],
  site: "https://yumemi-inc.github.io",
});
