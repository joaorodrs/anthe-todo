import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import styles from '../styles/pages/index.module.css'

const Home: React.FC = () => {
  const router = useRouter()

  function navigateToLoginPage(event: FormEvent) {
    event.preventDefault()

    router.push('/login')
  }

  function navigateToRegisterPage(event: FormEvent) {
    event.preventDefault()

    router.push('/register')
  }

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
            <button onClick={navigateToLoginPage}>Entrar</button>
            <button onClick={navigateToRegisterPage} className={styles.registerButton}>Cadastre-se</button>
          </div>
        </nav>

        <h1 className={styles.logoTitleBackground}>an<b>th</b>e<b>.</b></h1>

        <section className={styles.sloganAndStartNowSection}>
          <h3>Leve sua produtividade para outro nível.</h3>

          <button onClick={navigateToRegisterPage}>Começar agora</button>
        </section>
      </main>
    </div>
  )
}

export default Home