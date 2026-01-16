import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="title" content="Drawie – Online Drawing App" />
        <meta
          name="description"
          content="Drawie is a fast, minimal online drawing app to sketch, draw, and create freely on any device."
        />
        <meta
          name="keywords"
          content="Drawie, drawing app, online drawing, sketch app, digital drawing, paint online"
        />
        <meta name="author" content="Drawie" />
        <meta name="generator" content="Next.js" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://drawie.js.org" />

        <link rel="manifest" href="/manifest.json" />

        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Drawie – Online Drawing App" />
        <meta
          property="og:description"
          content="A simple and powerful online drawing app to sketch ideas instantly."
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content="https://drawie.js.org" />
        <meta property="og:site_name" content="Drawie" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Drawie – Online Drawing App" />
        <meta
          name="twitter:description"
          content="Sketch, draw, and create online with Drawie."
        />
        <meta name="twitter:image" content="/logo.jpg" />

        <meta name="google-site-verification" content="XTKY2UFQ8wn2h1YKtiXIHLfKfK0SbwDLIUIlbnFvLow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}