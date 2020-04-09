import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const toggle = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const store = [theme, toggle]

  return <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
}

const useThemeContext = () => {
  const [theme, toggle] = useContext(ThemeContext)
  if (!theme) {
    throw new Error(`useThemeContext must be used within its provider`)
  }
  return [theme, toggle]
}

export { ThemeContext, ThemeContextProvider, useThemeContext }
