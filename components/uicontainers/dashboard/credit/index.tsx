import React, { useState } from 'react';
import { Tab, CsvDrop, NotFound } from 'components/general';
import { creditNavElements } from 'components/utils/resolver/navigation/tab';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';

import Pricing from 'components/uicontainers/home/pricing';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();

  return (
    <>
      <div className={styles.request_container}>
        <Tab items={creditNavElements} />
        {currentUser ? <Pricing hasHeading={false} /> : <NotFound />}
      </div>
    </>
  );
}
