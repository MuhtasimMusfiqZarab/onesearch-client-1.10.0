import Head from "next/head";
import BaseLayout from "components/layouts/dashboard";
import RequestPage from 'components/pages/dashboard/request-page'

export default function Index() {
  return (
    <>
      <Head>
        <title>Request</title>
        <meta property="og:request" content="Request" key="request" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <RequestPage />
      </BaseLayout>
    </>
  );
}
