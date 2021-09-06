import Head from "next/head";
import BaseLayout from "components/layouts/dashboard";
import LinkedinTable from "components/pages/dashboard/search/linkedin";

export default function Index() {
  return (
    <>
      <Head>
        <title>Linkedin</title>
        <meta property="og:linkedin" content="Linkedin" key="linkedin" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <LinkedinTable />
      </BaseLayout>
    </>
  );
}
