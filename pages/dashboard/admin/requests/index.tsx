import Head from 'next/head';
import DashboardLayout from 'components/layouts/dashboard';
import Requests from 'components/uicontainers/dashboard/admin/requests';
import { GetAllRequestsProvider } from 'components/_context/request/get-requests';

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
          <Requests />
        </GetAllRequestsProvider>
      </DashboardLayout>
    </>
  );
}
