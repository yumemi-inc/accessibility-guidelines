import type { SandpackProps } from "@codesandbox/sandpack-react";

import { Sandpack } from "@codesandbox/sandpack-react";
import dedent from "dedent";
import React from "react";

import styles from "./LiveCodeExample.module.css";

type Props = SandpackProps & {
  css: string;
  html: string;
  title?: string;
};

const LiveCodeExample: React.FC<Props> = ({
  css,
  html,
  title = "デモ",
  ...sandpackProps
}) => {
  return (
    <div className={styles.container}>
      <Sandpack
        template="static"
        theme="light"
        {...sandpackProps}
        files={{
          "/demo.css": css,
          "/demo.html": html,
          "/index.html": dedent`
            <!DOCTYPE html>
            <html lang="ja">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <link rel="stylesheet" href="/styles.css" />
                <link rel="stylesheet" href="demo.css">
            </head>
            <body>
                <div class="container" id="demo-container"></div>
                <script type="module">
                    const html = await fetch('demo.html').then(response => response.text());
                    document.getElementById('demo-container').innerHTML = html;
                </script>
            </body>
            </html>
          `,
          ...sandpackProps.files,
        }}
        options={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- なんかエラー出る
          activeFile: "/demo.html" as any,
          editorHeight: 300,
          showLineNumbers: true,
          showTabs: true,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- なんかエラー出る
          visibleFiles: ["/demo.html", "/demo.css"] as any,
          wrapContent: true,
          ...sandpackProps.options,
        }}
      />
    </div>
  );
};

export default LiveCodeExample;
