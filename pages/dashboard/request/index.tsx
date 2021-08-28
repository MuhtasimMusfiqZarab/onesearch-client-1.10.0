import Head from "next/head";
import BaseLayout from "components/layouts/dashboard";
import UnderConstruction from "components/pages/under-construction";

export default function Index() {
  return (
    <>
      <Head>
        <title>Request</title>
        <meta property="og:request" content="Request" key="request" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <UnderConstruction />
      </BaseLayout>
    </>
  );
}
