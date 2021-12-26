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
      </Head>
      <FacebookProvider appId="2967314900245282" chatSupport>
        <CurrentUserProvider>
          <Home />
        </CurrentUserProvider>
      </FacebookProvider>
    </>
  );
}
