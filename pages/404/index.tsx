import Head from 'next/head';
import { NotFound } from 'components/general';

export default function Index() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <NotFound />
    </>
  );
}
