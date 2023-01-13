import React from 'react';
import { Tab, CsvDrop } from 'components/general';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';

import { adminNavElements } from 'components/utils/resolver/navigation/tab';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();

  return (
    <>
      <div className={styles.container__element_inner}>
        {currentUser?.accessRole === 'Admin' ? (
          <>
            <Tab items={adminNavElements} />
            <div className={styles.filterContainer}>
              <div className={styles.container}>
                <CsvDrop />
              </div>
            </div>
          </>
        ) : (
          <div>Please contact to get admin access!</div>
        )}
      </div>
    </>
  );
}
