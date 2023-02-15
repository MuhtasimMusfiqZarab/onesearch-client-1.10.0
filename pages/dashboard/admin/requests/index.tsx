import Head from 'next/head';
import DashboardLayout from 'components/layouts/dashboard';
import Requests from 'components/uicontainers/dashboard/admin/requests';
import { GetAllUsersProvider } from 'components/_context/user/all-users';

export default function Index() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta property="og:requests" content="Requests" key="requests" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <DashboardLayout>
        <GetAllUsersProvider>
          <Requests />
        </GetAllUsersProvider>
      </DashboardLayout>
    </>
  );
}
