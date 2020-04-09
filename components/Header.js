import Head from 'next/head'
import { ThemeToggle } from './ThemeToggle'
import { useThemeContext } from './ThemeContext'

const Header = ({ title }) => {
  const [theme] = useThemeContext()

  return (
    <header>
      <div className='fit-content'>
        <h3>David Bergeron</h3>
        <nav>
          <a href='#'>work</a>
          <a href='#'>projects</a>
          <a href='#'>blog</a>
          <a href='#'>contact</a>
        </nav>
        <ThemeToggle theme={theme} />
      </div>
      <style jsx>
        {`
          header {
            backgroundcolor: white;
            padding: 1.25rem 1rem;
            border-bottom: 1px solid #ff862c;
            margin-bottom: 1.25rem;
          }
          div {
            display: flex;
            justify-content: space-between;
          }

          a {
            margin-right: 1rem;
          }
        `}
      </style>
    </header>
  )
}

const styles = {
  light: {
    backgroundColor: 'rgb(75, 66, 60)',
  },
  dark: {
    backgroundColor: 'lightbrown',
  },
}

export { Header }
