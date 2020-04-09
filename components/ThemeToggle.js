import { useThemeContext } from './ThemeContext'
import { ToggleIcon } from './Icons'

const ThemeToggle = () => {
  const [theme, toggle] = useThemeContext()
  return (
    <button title='Toggle Colour Theme' onClick={toggle}>
      <ToggleIcon theme={theme} />
      <style jsx>
        {`
          button {
            width: 2rem;
            height: 2rem;
            border: 1px solid white;
            border-radius: 3px;
          }
        `}
      </style>
    </button>
  )
}

export { ThemeToggle }
