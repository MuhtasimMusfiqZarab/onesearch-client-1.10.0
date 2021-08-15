import Head from "next/head";
import LandingPage from "components/pages/home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <LandingPage />
    </>
  );
}
