import Head from 'next/head';
import ServerErrorPage from 'components/uicontainers/500';

export default function Index() {
  return (
    <>
      <Head>
        <title>500</title>
      </Head>
      <ServerErrorPage />
    </>
  );
}
