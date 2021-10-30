import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Login from 'components/pages/login';
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
      <Login />
    </>
  );
}
