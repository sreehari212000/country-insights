import '@/styles/globals.css'
import Layout from '@/components/Layout'
import ThemeProvider from '@/context/ThemeContext'
import nProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  nProgress.configure({showSpinner: false})
  Router.events.on('routeChangeStart', ()=>{
    nProgress.start()
  })
  Router.events.on('routeChangeComplete', ()=>{
    nProgress.done()
  })
  return (<>
    <Head>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    </Head>
    <ThemeProvider>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </>
  )
}
