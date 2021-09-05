import Head from "next/head";
import BaseLayout from "components/layouts/dashboard";
import YoutubeTable from "components/pages/dashboard/search/facebook";

export default function Index() {
  return (
    <>
      <Head>
        <title>Facebook</title>
        <meta property="og:facebook" content="Facebook" key="facebook" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <YoutubeTable />
      </BaseLayout>
    </>
  );
}
