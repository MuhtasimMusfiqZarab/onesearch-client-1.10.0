import Head from "next/head";
import BaseLayout from "components/layouts/dashboard";
import UnderConstruction from "components/pages/under-construction";

export default function Index() {
  return (
    <>
      <Head>
        <title>Credit</title>
        <meta property="og:credit" content="Credit" key="credit" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <UnderConstruction />
      </BaseLayout>
    </>
  );
}
