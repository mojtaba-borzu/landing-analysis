import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import store from '../app/store'
import React from 'react'
import DesktopLayout from '../layout/DesktopLayout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <ThemeProvider attribute="class"> */}
      <BaseWrapper>
        <Component {...pageProps} />
      </BaseWrapper>
      {/* </ThemeProvider> */}
    </Provider>
  )
}

const BaseWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="font-sans ">{children}</div>
)
