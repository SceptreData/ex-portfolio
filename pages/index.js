import Head from 'next/head'

import Layout from '../components/Layout'
import GlitchCanvas from '../components/GlitchCanvas'
import { useThemeContext } from '../components/ThemeContext'

const Home = (props) => {
  const [theme] = useThemeContext()
  return (
    <Layout>
      {/* <GlitchCanvas /> */}

      <h1>I'm David.</h1>
      <h2>
        Developer, <span className='accent'>designer</span>, and creation
        enthusiast.
      </h2>
      <p>I like making clean, friendly interfaces.</p>
      <p>I'm currently living in the beautiful city of Edmonton, Alberta.</p>

      <p>
        Get in touch with me on
        <a href='https://twitter.com/DavidFBergeron'> Twitter</a> or hit me up
        by <a href='mailto: david.f.bergeron@gmail.com'>e-mail.</a>
      </p>
      {/* <GlitchCanvas /> */}
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Layout>
  )
}

export default Home
