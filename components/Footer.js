import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer>
      <div className='container fit-content'>
        <div className='social-links'>
          <a href='https://github.com/SceptreData'>
            <GithubOutlined style={iconStyle} />
          </a>

          <a href='https://github.com/SceptreData'>
            <LinkedinOutlined style={iconStyle} />
          </a>
        </div>
        <div>
          <h3>
            <a href='/'>David Bergeron</a>
          </h3>
          <nav>
            <a href='#'>WORK</a>
            <a href='#'>ABOUT</a>
            <a href='#'>SAY HI</a>
          </nav>
        </div>
      </div>
      <style jsx>
        {`
          footer {
            min-height: 15vh;
            padding-top: 2rem;
          }

          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 640px;
          }

          h3 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
          }

          nav {
            text-align: right;
            display: flex;
            flex-direction: column;
            margin-left: 0.5rem;
          }

          .social-links > a {
            margin-right: 1.15rem;
          }
        `}
      </style>
    </footer>
  )
}

const iconStyle = { fontSize: 28 }

export { Footer }
