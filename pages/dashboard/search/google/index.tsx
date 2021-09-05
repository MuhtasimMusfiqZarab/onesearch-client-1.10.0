import Head from "next/head";
import BaseLayout from "components/layouts/dashboard";
import GoogleTable from "components/pages/dashboard/search/google";

export default function Index() {
  return (
    <>
      <Head>
        <title>Google</title>
        <meta property="og:google" content="Google" key="google" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <GoogleTable />
      </BaseLayout>
    </>
  );
}
