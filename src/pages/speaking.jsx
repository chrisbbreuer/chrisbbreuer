import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Chris Breuer</title>
        <meta
          name="description"
          content="Maybe this year? Stay tuned."
        />
      </Head>
      <SimpleLayout
        title="Maybe this year?"
        intro="Stay tuned to find out."
      />
    </>
  )
}
