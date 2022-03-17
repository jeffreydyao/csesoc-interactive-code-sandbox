import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
type Props = {};

class Document extends NextDocument<Props> {
  // TODO: Why doesn't pyodide work when loaded via next/script?
  // Returns 'loadPyodide isn't a function'
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="https://rsms.me/inter/inter.css"
            as="font"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
            rel="stylesheet"
          />
          <script src="https://cdn.jsdelivr.net/pyodide/v0.19.1/full/pyodide.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
