import Head from 'next/head'
import { useRef, useState } from 'react'
import styles from '../styles/pages/register.module.css'

import { IoLogoGoogle, IoLogoFacebook, IoEye, IoEyeOff } from 'react-icons/io5'

const Register: React.FC = () => {
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()

  const [passwordIsHidden, setPasswordIsHidden] = useState(true)
  const [confirmPasswordIsHidden, setConfirmPasswordIsHidden] = useState(true)

  const passwordInputRef = useRef(null)
  const confirmPasswordInputRef = useRef(null)

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
            <button><IoLogoGoogle size={30} color="#DB4437" /></button>
            <button><IoLogoFacebook size={30} color="#1778F2" /></button>
          </div>
          <p>Já tem conta? <a href="login" className={styles.toLoginLink}>Entrar</a></p>
          <input
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className={styles.passwordContainer}>
            <input
              placeholder="Senha"
              type={passwordIsHidden ? "password" : "text"}
              ref={passwordInputRef}
              value={password}
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
          <div className={styles.passwordContainer}>
            <input
              placeholder="Confirme sua senha"
              type={confirmPasswordIsHidden ? "password" : "text"}
              ref={confirmPasswordInputRef}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <button onClick={event => {
              event.preventDefault()
              confirmPasswordInputRef.current.focus()
              setConfirmPasswordIsHidden(oldValue => !oldValue)
            }}>
              {confirmPasswordIsHidden ? <IoEyeOff size={25} color="#471B75" /> : <IoEye size={25} color="#471B75" />}
            </button>
          </div>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
      </main>
    </div>
  )
}

export default Register