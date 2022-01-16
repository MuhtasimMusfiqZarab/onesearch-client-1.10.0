import Head from 'next/head';
import Home from 'components/pages/home';
import { FacebookProvider, CustomChat } from 'react-facebook';

import { CurrentUserProvider } from 'components/_context/user/current-user';

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:home" content="Home" key="home" />
        <link rel="shortcut icon" href="/search.svg" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        />
      </Head>
      <CurrentUserProvider>
        <Home />
      </CurrentUserProvider>
    </>
  );
}
