import React from "react";

import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "styles/global";
import theme from "styles/themes";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <meta name="theme-color" content="#238FAA" />
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
    </Head>

    <NextSeo
      title="Guilherme Moraes"
      description="Guilherme Front-end engineer"
      canonical="https://www.guimoraes.dev/"
      openGraph={{
        url: "https://www.guimoraes.dev/",
        title: "Guilherme Moraes",
        description: "Guilherme Front-end engineer",
        images: [{ url: "https://www.guimoraes.dev/img/cover.png" }],
        site_name: "Guilherme Moraes",
        locale: "en",
      }}
      twitter={{
        handle: "@GuiMoraesDev",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />

    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
