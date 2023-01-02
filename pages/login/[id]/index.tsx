import React, { useState, useEffect, useRef } from 'components/uicontainers/404';
import Head from 'next/head';
import Login from 'components/uicontainers/login';
import LoadingPage from 'components/uicontainers/loading-page';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  let jwt: string = router.query['id'] as string;

  useEffect(() => {
    if (jwt) {
      localStorage.setItem('jwtToken', jwt);
      window.location.href = '/';
    }
  }, [jwt]);

  return (
    <>
      <Head>
        <title>Authenticating</title>
      </Head>
      <LoadingPage />
    </>
  );
}
