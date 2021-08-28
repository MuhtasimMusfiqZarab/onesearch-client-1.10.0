import Head from "next/head";
import BaseLayout from "components/layouts/dashboard";
import UnderConstruction from "components/pages/under-construction";

export default function Index() {
  return (
    <>
      <Head>
        <title>Subscribe</title>
        <meta property="og:subscribe" content="Subscribe" key="subscribe" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <UnderConstruction />
      </BaseLayout>
    </>
  );
}
