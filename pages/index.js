import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from "../components/Header"
import Waves from "../components/Waves.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RyanBrianJones | Freelance Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}> 
        <img src="/logo.png" className={styles.hero_ryan} />   
        <h1 className={styles.title}>FREELANCE WEB<br/>DEVELOPER</h1>
        <div className={styles.navigation_buttons}>
          <button>ABOUT</button>
          <span> | </span>
          <button>PORTFOLIO</button>
          <span> | </span>
          <button>CONTACT</button>
        </div>
      </main>
      <Waves/>
    </div>
  )
}
