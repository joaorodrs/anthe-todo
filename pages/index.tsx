import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.logoTitleBackground}>anthe.</h1>

      <main className={styles.main}>
        <nav className={styles.navigationBar}>
          <h1>a</h1>
          <div>
            <button>Início</button>
            <button>Entrar</button>
            <button className={styles.registerButton}>Cadastre-se</button>
          </div>
        </nav>
      </main>
    </div>
  )
}

export default Home