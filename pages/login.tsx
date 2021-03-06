import Head from 'next/head'
import { useState, useRef } from 'react'
import styles from '../styles/pages/login.module.css'

import { IoLogoGoogle, IoLogoFacebook, IoEye, IoEyeOff } from 'react-icons/io5'

const Login: React.FC = () => {
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const [passwordIsHidden, setPasswordIsHidden] = useState(true)

  const passwordInputRef = useRef(null)

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
          <p>Não tem conta? <a href="register" className={styles.toRegisterLink}>Cadastre-se</a></p>
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className={styles.passwordContainer}>
            <input
              placeholder="Senha"
              type={passwordIsHidden ? "password" : "text"}
              value={password}
              ref={passwordInputRef}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={event => {
              event.preventDefault()
              passwordInputRef.current.focus()
              setPasswordIsHidden(oldValue => !oldValue)
            }}>
              {passwordIsHidden ? <IoEyeOff size={25} color="#471B75" /> : <IoEye size={25} color="#471B75" />}
            </button>
          </div>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
      </main>
    </div>
  )
}

export default Login