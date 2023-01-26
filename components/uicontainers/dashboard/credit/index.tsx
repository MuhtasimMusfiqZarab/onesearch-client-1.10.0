import React, { useState } from 'react';
import { Reset } from 'components/_icons';
import { Tab, CsvDrop, NotFound } from 'components/general';
import { creditNavElements } from 'components/utils/resolver/navigation/tab';
import AutofillInput from 'components/general/autofill-input';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';
import { useChannels, useCountries, useCategories } from 'components/_context/youtube';

import Pricing from 'components/uicontainers/home/pricing';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();
  const { countries } = useCountries();
  const { categories } = useCategories();
  let [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.request_container}>
        <Tab items={creditNavElements} />
        {currentUser ? <Pricing hasHeading={false} /> : <NotFound />}
      </div>
    </>
  );
}
