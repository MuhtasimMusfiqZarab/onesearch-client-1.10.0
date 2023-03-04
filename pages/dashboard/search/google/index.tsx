import Head from 'next/head';
import BaseLayout from 'components/layouts/dashboard';
import GoogleTable from 'components/uicontainers/dashboard/search/google';
import { GoogleProfilesProvider } from 'components/_context/google/profiles';

import { GoogleCategoriesProvider } from 'components/_context/google/categories';
import { GoogleCountriesProvider } from 'components/_context/google/countries';

export default function Index() {
  return (
    <>
      <Head>
        <title>Google</title>
        <meta property="og:google" content="Google" key="google" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <BaseLayout>
        <GoogleProfilesProvider>
          <GoogleCategoriesProvider>
            <GoogleCountriesProvider>
              <GoogleTable />
            </GoogleCountriesProvider>
          </GoogleCategoriesProvider>
        </GoogleProfilesProvider>
      </BaseLayout>
    </>
  );
}
