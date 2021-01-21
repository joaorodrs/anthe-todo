import { AppProps } from 'next/app'

import '../styles/globals.css'
import 'firebase/firestore'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
