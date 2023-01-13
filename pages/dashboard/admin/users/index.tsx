import Head from 'next/head';
import DashboardLayout from 'components/layouts/dashboard';
import Users from 'components/uicontainers/dashboard/admin/users';
import { GetAllUsersProvider } from 'components/_context/user/all-users';

export default function Index() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta property="og:users" content="Users" key="users" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <DashboardLayout>
        <GetAllUsersProvider>
          <Users />
        </GetAllUsersProvider>
      </DashboardLayout>
    </>
  );
}
