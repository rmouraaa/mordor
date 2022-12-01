import React from 'react'

import Head from 'next/head'
import { Header } from '../components/Header'
import { Introduction } from '../components/page/Introduction'
import { Branding } from '../components/page/Branding'
import { BestWork } from '../components/page/BestWork'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mordor | Branding and brand experience studio</title>
      </Head>

      <Header />

      <main>
        <Introduction />

        <Branding />

        <BestWork />
      </main>
    </>
  )
}
