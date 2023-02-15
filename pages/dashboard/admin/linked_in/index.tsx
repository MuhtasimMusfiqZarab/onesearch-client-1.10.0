import Head from 'next/head';
import DashboardLayout from 'components/layouts/dashboard';
import Upload from 'components/uicontainers/dashboard/admin/requests';

export default function Index() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta property="og:users" content="Users" key="users" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <DashboardLayout>
        <Upload />
      </DashboardLayout>
    </>
  );
}
