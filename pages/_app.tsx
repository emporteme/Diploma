import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
