import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { Header } from '@/components'
import { store } from '@/redux/store'
import '@/assets/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}
