import Head from 'next/head';
import BaseLayout from 'components/layouts/BaseLayout';
import YoutubeTable from 'components/youtube-table';
import { ChannelsProvider } from 'components/_context/channels';
import { CountriesProvider } from 'components/_context/countries';

export default function Index() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <BaseLayout>
        <ChannelsProvider>
          <CountriesProvider>
            <YoutubeTable />
          </CountriesProvider>
        </ChannelsProvider>
      </BaseLayout>
    </>
  );
}
