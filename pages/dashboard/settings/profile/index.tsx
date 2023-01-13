import Head from 'next/head';
import BaseLayout from 'components/layouts/dashboard';
import Settings from 'components/uicontainers/dashboard/settings';

export default function Index() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <meta property="og:settings" content="Settings" key="settings" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <Settings />
      </BaseLayout>
    </>
  );
}
