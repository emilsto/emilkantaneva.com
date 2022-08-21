import Head from "next/head";
import AboutMe from "../../components/AboutMe/AboutMe";

const Main = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Emil Kantaneva</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <AboutMe />
    </div>
  );
};

export default Main;
