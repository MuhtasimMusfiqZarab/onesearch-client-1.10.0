import Head from 'next/head';
import DashboardLayout from 'components/layouts/dashboard';
import Requests from 'components/uicontainers/dashboard/request/all';

import { GetUserRequestsProvider } from 'components/_context/request/get-user-requests';
import { RequestCategoriesProvider } from 'components/_context/request/get-categories';
import { RequestCountriesProvider } from 'components/_context/request/get-countries';
import { RequestPlatformsProvider } from 'components/_context/request/get-platforms';
import { RequestStatusesProvider } from 'components/_context/request/get-statuses';

export default function Index() {
  return (
    <>
      <Head>
        <title>requests</title>
        <meta property="og:requests" content="Requests" key="requests" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <DashboardLayout>
        <GetUserRequestsProvider>
          <RequestCategoriesProvider>
            <RequestCountriesProvider>
              <RequestPlatformsProvider>
                <RequestStatusesProvider>
                  <Requests />
                </RequestStatusesProvider>
              </RequestPlatformsProvider>
            </RequestCountriesProvider>
          </RequestCategoriesProvider>
        </GetUserRequestsProvider>
      </DashboardLayout>
    </>
  );
}
