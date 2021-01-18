import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/pages/login.module.css'

import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io5'

const Home: React.FC = () => {
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  return (
    <div className={styles.container}>
      <Head>
        <title>Anthe Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.logoTitle}>anthe.</h1>
        <form className={styles.cardForm}>
          <div className={styles.signInButtons}>
            <button>Continuar com <IoLogoGoogle size={30} color="#DB4437" /></button>
            <button>Continuar com <IoLogoFacebook size={30} color="#1778F2" /></button>
          </div>
          <p>ou</p>
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
      </main>
    </div>
  )
}

export default Home