import Head from 'next/head';
import DashboardLayout from 'components/layouts/dashboard';
import Users from 'components/pages/dashboard/admin/users';

export default function Index() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta property="og:users" content="Users" key="users" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <DashboardLayout>
        <Users />
      </DashboardLayout>
    </>
  );
}
