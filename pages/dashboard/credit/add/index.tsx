import Head from 'next/head';
import BaseLayout from 'components/layouts/dashboard';
import CreditPage from 'components/pages/dashboard/credit';

export default function Index() {
  return (
    <>
      <Head>
        <title>Credit</title>
        <meta property="og:credit" content="Credit" key="credit" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <CreditPage />
      </BaseLayout>
    </>
  );
}
