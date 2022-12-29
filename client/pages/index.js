import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World</title>
        
      </Head>
      <main >
        <h1 className='text-3xl font-bold underline'>Hello World</h1>
      </main>
    </>
  )
}
