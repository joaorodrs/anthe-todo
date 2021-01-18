import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.navigationBar}>
          <h1>a</h1>
          <div>
            <button>Início</button>
            <button>Entrar</button>
            <button className={styles.registerButton}>Cadastre-se</button>
          </div>
        </nav>

        <h1 className={styles.logoTitleBackground}>an<b>th</b>e<b>.</b></h1>

        <section className={styles.sloganAndStartNowSection}>
          <h3>Leve sua produtividade para outro nível.</h3>

          <button>Começar agora</button>
        </section>
      </main>
    </div>
  )
}

export default Home