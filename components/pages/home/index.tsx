import React, { useEffect, useRef, useState } from 'react';
import TopNav from '../../shared/topnav/version2';
import Header from 'components/shared/header';
import Intro from './intro';
import Services from './services';
import Pricing from './pricing';
import Reviews from './reviews';
import Footer from 'components/shared/footer';
import BackToTop from 'components/general/back-to-top';

import { useRouter } from 'next/router';

import { CurrentUserProvider } from 'components/_context/user/current-user';

import styles from './styles.module.scss';

export default function Home() {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<string>(router.pathname);

  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <CurrentUserProvider>
        <Reviews />
      </CurrentUserProvider>
      <Pricing />
      <Footer />
      {currentRoute === '/' && <BackToTop />}
    </div>
  );
}
