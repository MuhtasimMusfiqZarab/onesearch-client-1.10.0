import Head from 'next/head';
import LandingPage from 'components/landing-page/version1';

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
