import css from 'styled-jsx/css'

export const DarkMode = css.global`
  body {
    background: rgb(52, 52, 52);
    color: #fff;
  }

  .accent {
    color: rgb(255, 134, 44);
  }
  main {
    box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.1),
      0 4px 6px -2px rgba(255, 255, 255, 0.05);
    border: 3px solid rgba(255, 255, 255, 0.05);
  }
  a,
  a:visited {
    color: white;
  }

  a:hover {
    color: rgb(255, 134, 44);
  }
`

export const LightMode = css.global`
  body {
    background: #e9f0ee;
    color: rgb(75, 66, 60);
  }

  .accent {
    color: rgb(255, 134, 44);
  }

  a,
  a:visited {
    color: black;
  }
  a:hover {
    color: rgb(255, 134, 44);
  }

  header {
    background: #fff;
    border-bottom: 1px solid rgb(255, 134, 44);
  }

  main {
    color: #333;
    background: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.15);
  }

  footer {
    background: #4b423c;
    color: white;
  }

  footer a,
  footer a:visited {
    color: white;
  }

  footer a:hover {
    color: rgb(255, 134, 44);
  }
`
