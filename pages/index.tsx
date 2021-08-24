import Head from "next/head";
import Home from "components/pages/home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:home" content="Home" key="home" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <Home />
    </>
  );
}
