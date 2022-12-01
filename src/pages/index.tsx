import React from 'react'

import Head from 'next/head'
import { Header } from '../components/Header'
import { Introduction } from '../components/page/Introduction'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mordor | Branding and brand experience studio</title>
      </Head>

      <Header />

      <main>
        <Introduction />
      </main>
    </>
  )
}
