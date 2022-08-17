import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CookieContextProvider } from '../contexts/CookieContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookieContextProvider>
      <Component {...pageProps} />
    </CookieContextProvider>
  )
}

export default MyApp
