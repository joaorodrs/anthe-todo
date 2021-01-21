import Head from 'next/head'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/pages/register.module.css'

import firebase from '../config/firebase-config'

import { IoLogoGoogle, IoLogoFacebook, IoEye, IoEyeOff } from 'react-icons/io5'

const Register: React.FC = () => {
  const router = useRouter()

  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()

  const [passwordIsHidden, setPasswordIsHidden] = useState(true)
  const [confirmPasswordIsHidden, setConfirmPasswordIsHidden] = useState(true)

  const passwordInputRef = useRef(null)
  const confirmPasswordInputRef = useRef(null)

  async function registerNewUser(userName: string, userEmail: string, userPassword: string) {
    await firebase.firestore()
      .collection('users')
      .add({
        userName,
        userEmail,
        userPassword
      })

    localStorage.setItem('userName', userName)
    localStorage.setItem('userEmail', userEmail)
    
    router.push('app')
  }

  async function logInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    try {
      await firebase.auth().signInWithPopup(provider)

      localStorage.setItem('userName', firebase.auth().currentUser.displayName)
      localStorage.setItem('userEmail', firebase.auth().currentUser.email)

      router.push('app')
    } catch(error) {
      console.error(error)
    }
  }

  async function logInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()

    try {
      await firebase.auth().signInWithPopup(provider)

      console.log(firebase.auth().currentUser)

      localStorage.setItem('userName', firebase.auth().currentUser.displayName)
      localStorage.setItem('userEmail', firebase.auth().currentUser.email)

      router.push('app')
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Anthe Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.logoTitle}>anthe.</h1>
        <form
          className={styles.cardForm}
          onSubmit={() => registerNewUser(name, email, password)}
        >
          <div className={styles.signInButtons}>
            <a onClick={logInWithGoogle}><IoLogoGoogle size={30} color="#DB4437" /></a>
            <a onClick={logInWithFacebook}><IoLogoFacebook size={30} color="#1778F2" /></a>
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