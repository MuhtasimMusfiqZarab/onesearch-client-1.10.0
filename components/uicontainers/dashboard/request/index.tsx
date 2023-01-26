import React, { useState } from 'react';
import { Reset } from 'components/_icons';
import { Tab, CsvDrop, NotFound } from 'components/general';
import { requestNavElements } from 'components/utils/resolver/navigation/tab';
import AutofillInput from 'components/general/autofill-input';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';
import { useChannels, useCountries, useCategories } from 'components/_context/youtube';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();
  const { countries } = useCountries();
  const { categories } = useCategories();
  let [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.request_container}>
        <Tab items={requestNavElements} />
        {currentUser ? (
          <>
            <div className={styles.request_container__inner}>
              <div className={styles.request_container_channel}>
                <AutofillInput label="Channel Name" items={[]} />

                <button className={styles.reset_form}>
                  <Reset />
                  Reset
                </button>
              </div>

              <div className={styles.filterItems}>
                <AutofillInput label="Category" items={categories} />

                <AutofillInput label="Country" items={countries} />
              </div>

              <div className={styles.notes}>
                <label htmlFor="notes">Additional Notes</label>
                <textarea
                  placeholder="Additional Notes"
                  className={styles.notes__textarea}></textarea>
              </div>
            </div>
            <div className="text-right">
              <button className="btn btn_fill_primary">Submit</button>
            </div>
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}
