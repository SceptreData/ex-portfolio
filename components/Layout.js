import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { Header } from './Header'
import { DarkMode, LightMode } from '../styles/themes'
import { globalStyles } from '../styles/globalStyles'

import { useThemeContext } from './ThemeContext'

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
      <footer className='fit-content'>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <a href='#'>home</a>
          <a href='#'>home</a>
          <a href='#'>home</a>
        </nav>
      </footer>

      <style jsx global>
        {activeTheme}
      </style>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}

const styles = {
  dark: DarkMode,
  light: LightMode,
}
export default Layout
