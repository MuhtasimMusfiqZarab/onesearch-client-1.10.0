import Head from "next/head";
import BaseLayout from "components/layouts/dashboard";
import UnderConstruction from "components/pages/under-construction";

export default function Index() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <meta property="og:settings" content="Settings" key="settings" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <UnderConstruction />
      </BaseLayout>
    </>
  );
}
