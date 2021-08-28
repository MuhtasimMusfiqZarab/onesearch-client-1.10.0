import Head from "next/head";
import BaseLayout from "components/layouts/dashboard";
import UnderConstruction from "components/pages/under-construction";

export default function Index() {
  return (
    <>
      <Head>
        <title>Download</title>
        <meta property="og:download" content="Download" key="download" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <UnderConstruction />
      </BaseLayout>
    </>
  );
}
