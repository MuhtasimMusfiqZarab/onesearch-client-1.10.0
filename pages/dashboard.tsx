import Head from "next/head";
import BaseLayout from "components/layouts/BaseLayout";
import YoutubeTable from "components/pages/dashboard/search/youtube";
import { ChannelsProvider } from "components/_context/youtube/channels";
import { CountriesProvider } from "components/_context/youtube/countries";
import { CategoriesProvider } from "components/_context/youtube/categories";

export default function Index() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <BaseLayout>
        <ChannelsProvider>
          <CountriesProvider>
            <CategoriesProvider>
              <YoutubeTable />
            </CategoriesProvider>
          </CountriesProvider>
        </ChannelsProvider>
      </BaseLayout>
    </>
  );
}
