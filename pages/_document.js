import Document, { Html, Head, Main, NextScript } from 'next/document'
import styles from '../styles/Home.module.css'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico" /> 
        <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <div className={styles.navbar}>
            <div className={styles.navbar_main}>
              <img className={styles.logo} src="/logo.png"/>
              <span className={styles.header_font}>RYAN   BRIAN   JONES</span>
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument