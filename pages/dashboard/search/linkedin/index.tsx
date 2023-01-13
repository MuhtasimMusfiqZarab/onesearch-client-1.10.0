import Head from 'next/head';
import BaseLayout from 'components/layouts/dashboard';
import DashboardLayout from 'components/layouts/dashboard';
import LinkedinTab from 'components/uicontainers/dashboard/search/linkedin';

import { LinkedinProfilesProvider } from 'components/_context/linkedin/index';

export default function Index() {
  return (
    <>
      <Head>
        <title>Linkedin</title>
        <meta property="og:linkedin" content="Linkedin" key="linkedin" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <DashboardLayout>
        <LinkedinProfilesProvider>
          <LinkedinTab />
        </LinkedinProfilesProvider>
      </DashboardLayout>
    </>
  );
}
