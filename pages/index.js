import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <ul>
         <li><a href="/api/auth/login">Login</a></li>
         <li><a href="/api/auth/logout">Logout</a></li>
         </ul>
        </div>
      </main>
    </div>
  )
}
