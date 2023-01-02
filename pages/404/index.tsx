import Head from 'next/head';
import NotFoundPage from 'components/uicontainers/404';

export default function Index() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <NotFoundPage />
    </>
  );
}
