import css from 'styled-jsx/css'

export const globalStyles = css.global`
  html {
    box-sizing: border-box;
    font-family: 'Rubik';
    font-size: 112.5%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  ol,
  ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  main {
    padding: 0.75rem 1rem;
    margin: 0 auto;
    min-height: 70vh;
    width: 80%;
    max-width: 640px;
    line-height: 1.4;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    line-height: 1;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.15rem;
  }

  a,
  a:visited {
    text-decoration: none;
    transition: 0.17s ease-in-out;
  }

  a:hover {
    transition: color ease 0.15s;
  }

  #__next {
    box-sizing: content-box;
  }

  .app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  .fit-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }

  .flex-around {
    display: flex;
    justify-content: space-around;
  }

  .flex-apart {
    display: flex;
    justify-content: space-between;
  }
`
