import { AppProps } from 'next/app'

import '../styles/globals.css'
import 'firebase/firestore'
import 'firebase/auth'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
