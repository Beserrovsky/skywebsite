import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/layout/mainLayout'
import { MyThemeContextProvider } from '@/store/myThemeContext'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyThemeContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MyThemeContextProvider>
  )
}
