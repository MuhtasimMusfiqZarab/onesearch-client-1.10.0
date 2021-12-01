import React, { useState } from 'react';
import Modal from 'components/general/modal';
import { Filter, Reset } from 'components/_icons';
import { Dropdown, Tab, SearchBox } from 'components/general';
import { requestNavElements } from 'components/utils/resolver/navigation/tab';
import AutofillInput from 'components/general/autofill-input';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';
import { useChannels, useCountries, useCategories } from 'components/_context/youtube';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();
  const {
    channels,
    setOffset,
    setCategory,
    offset,
    setLocation,
    loading,
    total,
    searchText,
    setSearchText
  } = useChannels();
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
                <AutofillInput label="Channel Name" />

                <button className={styles.reset_form}>
                  <Reset />
                  Reset
                </button>
              </div>

              <div className={styles.filterItems}>
                <AutofillInput label="Category" />

                <AutofillInput label="Country" />

                <AutofillInput label="Year" />
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
          <div>Please Login to get access</div>
        )}
      </div>
    </>
  );
}
