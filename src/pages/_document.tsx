import React from 'react'

import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.svg" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />

          {/* <meta name="title" content="MovePay | O banco do imigrante" />
          <meta
            name="description"
            content="Abra uma conta em um banco internacional antes mesmo de sair do seu país. "
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://movepay.eu/" />
          <meta property="og:title" content="MovePay | O banco do imigrante" />
          <meta
            property="og:description"
            content="Abra uma conta em um banco internacional antes mesmo de sair do seu país. "
          />
          <meta property="og:image" content="/ogimage.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://movepay.eu/" />
          <meta
            property="twitter:title"
            content="MovePay | O banco do imigrante"
          />
          <meta
            property="twitter:description"
            content="Abra uma conta em um banco internacional antes mesmo de sair do seu país. "
          />
          <meta property="twitter:image" content="/ogimage.png" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
