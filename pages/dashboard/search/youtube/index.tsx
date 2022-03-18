import Head from 'next/head';
import DashboardLayout from 'components/layouts/dashboard';
import YoutubeTab from 'components/pages/dashboard/search/youtube';
import { ChannelsProvider } from 'components/_context/youtube/channels';
import { CountriesProvider } from 'components/_context/youtube/countries';
import { CategoriesProvider } from 'components/_context/youtube/categories';

export default function Index() {
  return (
    <>
      <Head>
        <title>Search</title>
        <meta property="og:search" content="Search" key="search" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <DashboardLayout>
        <ChannelsProvider>
          <CountriesProvider>
            <CategoriesProvider>
              <YoutubeTab />
            </CategoriesProvider>
          </CountriesProvider>
        </ChannelsProvider>
      </DashboardLayout>
    </>
  );
}
