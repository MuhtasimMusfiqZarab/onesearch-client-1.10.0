import React, { useState } from 'react';
import { Reset } from 'components/_icons';
import { Tab, CsvDrop, NotFound, Dropdown } from 'components/general';
import { requestNavElements } from 'components/utils/resolver/navigation/tab';
import AutofillInput from 'components/general/autofill-input';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';
import { useChannels, useCountries, useCategories } from 'components/_context/youtube';

import { countryList } from 'components/utils/resolver/all-countries';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();
  const { countries } = useCountries();
  const { categories } = useCategories();
  let [modalIsOpen, setIsOpen] = useState(false);

  const [title, setCountry] = useState<string>(null);
  const [offset, setOffset] = useState<number>(0);

  return (
    <>
      <div className={styles.request_container}>
        <Tab items={requestNavElements} />
        {currentUser ? (
          <>
            <div className={styles.request_container__inner}>
              <div className={styles.filterItems}>
                <AutofillInput
                  label="Platform"
                  items={['Google', 'Linkedin', 'Facebook', 'Youtube']}
                />
                <Dropdown
                  title="Country"
                  setItem={setCountry}
                  setOffset={setOffset}
                  items={countryList}
                  isSearch={true}
                />
              </div>
              <div className={styles.filterItems}>
                <AutofillInput label="Data Size" items={[]} />
                <Dropdown
                  title="Category"
                  setItem={setCountry}
                  setOffset={setOffset}
                  items={['Company', 'Individual']}
                  isSearch={false}
                />
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
