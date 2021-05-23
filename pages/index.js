import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Header from '../components/Header.js';
import Shelf from '../components/Shelf.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Booklog</title>
        <meta name="description" content="log to track your reading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main className='mt-10'>
        <Shelf />
      </main>

      <footer>
      </footer>
    </div>
  )
}
