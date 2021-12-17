import React, { useEffect, useRef, useState } from 'react';
import TopNav from '../../shared/topnav/version2';
import Header from 'components/shared/header';
import Intro from './intro';
import Services from './services';
import Pricing from './pricing';
import Reviews from './reviews';
import Footer from 'components/shared/footer';
import BackToTop from 'components/general/back-to-top';

import { CurrentUserProvider } from 'components/_context/user/current-user';

export default function Home() {
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
      <BackToTop support={true} />
    </div>
  );
}
