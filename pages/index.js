import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RyanBrianJones | Freelance Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navbar}>
        <div className={styles.navbar_main}>
          <img src="/logo.png" width="75" height="63"/>
          Ryan Brian Jones

        </div>
      </div>
      <main className={styles.main}>
        yeet

      </main>
    </div>
  )
}
