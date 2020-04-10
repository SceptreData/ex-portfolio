// import App from 'next/app'
import { ThemeContextProvider } from '../components/ThemeContext'
import { Helmet } from '../components/Helmet'
import { globalStyles } from '../styles/globalStyles'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Helmet />
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
    </ThemeContextProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App
