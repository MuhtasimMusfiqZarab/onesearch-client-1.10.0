import Head from 'next/head';
import DashboardLayout from 'components/layouts/dashboard';
import Upload from 'components/pages/dashboard/admin/upload';

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
