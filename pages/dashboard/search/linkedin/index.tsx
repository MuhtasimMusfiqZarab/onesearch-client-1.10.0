import Head from 'next/head';
import BaseLayout from 'components/layouts/dashboard';
import DashboardLayout from 'components/layouts/dashboard';
import LinkedinTab from 'components/uicontainers/dashboard/search/linkedin';

import { LinkedinProfilesProvider } from 'components/_context/linkedin/index';

import { LinkedinCompaniesProvider } from 'components/_context/linkedin/companies';
import { LinkedinLocationsProvider } from 'components/_context/linkedin/locations';
import { LinkedinTitlesProvider } from 'components/_context/linkedin/titles';

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
          <LinkedinCompaniesProvider>
            <LinkedinLocationsProvider>
              <LinkedinTitlesProvider>
                <LinkedinTab />
              </LinkedinTitlesProvider>
            </LinkedinLocationsProvider>
          </LinkedinCompaniesProvider>
        </LinkedinProfilesProvider>
      </DashboardLayout>
    </>
  );
}
