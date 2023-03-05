import Head from 'next/head';
import DashboardLayout from 'components/layouts/dashboard';
import Requests from 'components/uicontainers/dashboard/admin/requests';

import { GetAllRequestsProvider } from 'components/_context/request/get-requests';
import { RequestCategoriesProvider } from 'components/_context/request/get-categories';
import { RequestCountriesProvider } from 'components/_context/request/get-countries';
import { RequestPlatformsProvider } from 'components/_context/request/get-platforms';
import { RequestStatusesProvider } from 'components/_context/request/get-statuses';

export default function Index() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta property="og:requests" content="Requests" key="requests" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <DashboardLayout>
        <GetAllRequestsProvider>
          <RequestCategoriesProvider>
            <RequestCountriesProvider>
              <RequestPlatformsProvider>
                <RequestStatusesProvider>
                  <Requests />
                </RequestStatusesProvider>
              </RequestPlatformsProvider>
            </RequestCountriesProvider>
          </RequestCategoriesProvider>
        </GetAllRequestsProvider>
      </DashboardLayout>
    </>
  );
}
