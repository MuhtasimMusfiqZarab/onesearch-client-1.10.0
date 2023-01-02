import Head from 'next/head';
import Login from 'components/uicontainers/login';

import { CurrentUserProvider } from 'components/_context/user/current-user';

export default function Index() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <CurrentUserProvider>
        <Login />
      </CurrentUserProvider>
    </>
  );
}
