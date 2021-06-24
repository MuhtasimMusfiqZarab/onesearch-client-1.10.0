import Head from 'next/head';
import Login from '../components/login-page';

export default function Index() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </>
  );
}
