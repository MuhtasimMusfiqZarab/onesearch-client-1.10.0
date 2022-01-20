import React, { useEffect } from 'react';
import { Tab, Loader } from 'components/general';
import AutofillInput from 'components/general/autofill-input';
import { Locator, Warning } from 'components/_icons';
import styles from './styles.module.scss';

import { settingsNavElements } from 'components/utils/resolver/navigation/tab';

import { useCurrentUser } from 'components/_context/user/current-user';

export default function Settings() {
  const { currentUser, loading } = useCurrentUser();

  return (
    <div className={styles.container}>
      <Tab items={settingsNavElements} />
      {currentUser ? (
        <div className={styles.profile}>
          <h4>Basic Information</h4>
          <div className={styles.profile__details}>
            <div>
              <span>First Name</span>
              <span>{currentUser ? currentUser.firstName : <Loader isTextBox />}</span>
            </div>

            <div>
              <span>Email: </span>
              <span>{currentUser ? currentUser.email : <Loader isTextBox />}</span>
            </div>

            <div>
              <span>Last Name</span>
              <span>{currentUser ? currentUser.lastName : <Loader isTextBox />}</span>
            </div>
          </div>

          <div className={styles.profile__additional}>
            <h4>Additional Information</h4>
            <div className={styles.profile__locators}>
              <AutofillInput label="Country" items={[]} />
              <div>
                <Locator />
              </div>
            </div>

            <span className={styles.profile__warning}>
              <Warning />
              &nbsp; *You can set your country just once.
            </span>

            <div className={styles.profile__locators}>
              <AutofillInput label="Phone Number" items={[]} />
            </div>

            <span className={styles.profile__warning}>
              <Warning />
              &nbsp; *You can set your contact number just once.
            </span>
          </div>
        </div>
      ) : (
        <div>Please login to get access</div>
      )}
    </div>
  );
}
