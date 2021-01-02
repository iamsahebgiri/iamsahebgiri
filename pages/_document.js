import Document, { Html, Head, Main, NextScript } from "next/document";

import { themeStorageKey } from "./../lib/useTheme";

const bgVariableName = "--bg";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function() {
                try {
                  var outdatedValue = localStorage.getItem('light-mode')
                  if (outdatedValue) {
                    localStorage.setItem('${themeStorageKey}', 'light')
                    localStorage.removeItem('light-mode')
                  }
                  var mode = localStorage.getItem('${themeStorageKey}')
                  if (!mode) return
                  document.documentElement.classList.add(mode)
                  var bgValue = getComputedStyle(document.documentElement)
                    .getPropertyValue('${bgVariableName}')
                  document.documentElement.style.background = bgValue
                } catch (e) {}
              })()`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
