import { Layout } from "../components/Layout";
import { useThemeContext } from "../components/ThemeContext";

const Home = () => {
  const [theme] = useThemeContext();
  return (
    <Layout>
      <div>
        <h1>I'm David.</h1>
        <p>Welcome.</p>
      </div>

      <h2>
        I'm a developer, <span className="accent">designer</span>, and creation
        enthusiast.
      </h2>

      <p>
        I make websites and apps using modern tools like
        <a href="https://nextjs.org/"> Next.JS</a>,
        <a href="https://gatsbyjs.org">Gatsby</a> and
        <a href="https://reactnative.dev"> React Native</a>.
      </p>

      <p>Currently living in the beautiful city of Edmonton, Alberta.</p>

      <p>
        <a id="mail-me" href="mailto: david.f.bergeron@gmail.com">
          Let's chat.
        </a>
      </p>
      <style jsx>{`
        h1 {
          padding-top: 20vh;
          display: flex;
          align-items: baseline;
        }
        span {
          font-weight: 500;
          font-size: 1.2rem;
        }

        a {
          font-weight: 500;
          color: gray;
        }

        #mail-me,
        #mail-me:visited {
          color: rgb(255, 134, 44);
          padding: 1rem 1rem;
          font-weight: 500;
          transition: all 0.2s ease-in-out;
        }

        #mail-me:hover {
          color: #fff;
          background: rgb(255, 134, 44);
        }
      `}</style>
    </Layout>
  );
};

export default Home;
