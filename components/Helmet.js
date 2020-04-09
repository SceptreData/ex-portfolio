import Head from 'next/head'

export const Helmet = () => (
  <Head>
    <meta charSet='utf-8' key='charset' />
    <meta
      name='viewport'
      content='initial-scale=1.0, width=device-width'
      key='viewport'
    />
    <link rel='icon' href='/favicon.ico' key='favicon' />
    <link
      href='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap'
      rel='stylesheet'
    />
  </Head>
)
