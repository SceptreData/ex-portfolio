import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { Header } from './Header'
import { DarkMode, LightMode } from '../styles/themes'

import { useThemeContext } from './ThemeContext'
import { Footer } from './Footer'

const Layout = ({ children, title = 'David Bergeron - Web Developer' }) => {
  const [theme] = useThemeContext()
  const activeTheme = styles[theme]

  return (
    <div className='app'>
      <Head>
        <title>{title}</title>
      </Head>

      <Header title={title} />

      <main>{children}</main>
      <Footer />

      <style jsx global>
        {activeTheme}
      </style>
    </div>
  )
}

const styles = {
  dark: DarkMode,
  light: LightMode,
}
export { Layout }
