import React, { useState } from 'react';
import { ForbiddenAccess } from 'components/general';
import { Reset } from 'components/_icons';
import { Tab, SearchBox, CsvDrop } from 'components/general';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';

import { adminNavElements } from 'components/utils/resolver/navigation/tab';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();
  const [searchText, setSearchText] = useState<string>(null);

  return (
    <>
      <div className={styles.container__element_inner}>
        {currentUser?.accessRole === 'Admin' ? (
          <>
            <Tab items={adminNavElements} />
            <div className={styles.filterContainer}>
              <div className={styles.filterContainer_inner}>
                <div className={styles.search_wrap}>
                  <SearchBox searchText={searchText} setSearchText={setSearchText} />

                  <button className={styles.reset_form}>
                    <Reset />
                    Reset
                  </button>
                </div>
              </div>

              <div className={styles.container}>
                <CsvDrop />
              </div>
            </div>
          </>
        ) : (
          <ForbiddenAccess />
        )}
      </div>
    </>
  );
}
