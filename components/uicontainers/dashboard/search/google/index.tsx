import React, { useState } from 'react';
import Modal from 'components/general/modal';
import { Filter, CloseLite, Reset } from 'components/_icons';
import { Pagination, Table, Dropdown, Tab, SearchBox, NotFound } from 'components/general';
import { GoogleTableEnum } from 'components/utils/enum';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';
import { useGoogleProfiles } from 'components/_context/google/profiles';

import { searchNavElements } from 'components/utils/resolver/navigation/tab';

import { useLinkedinCompanies } from 'components/_context/linkedin/companies';
import { useLinkedinLocations } from 'components/_context/linkedin/locations';
import { useLinkedinTitles } from 'components/_context/linkedin/titles';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();
  const {
    profiles,
    setOffset,
    offset,
    refetch,
    setCountry,
    setCategory,
    loading,
    total,
    searchText,
    setSearchText
  } = useGoogleProfiles();
  const { companies } = useLinkedinCompanies();
  const { locations } = useLinkedinLocations();
  let [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container__element_inner}>
        <Tab items={searchNavElements} />
        {currentUser ? (
          <div className={styles.filterContainer}>
            <div className={styles.filterContainer_inner}>
              <div className={styles.search_wrap}>
                <SearchBox searchText={searchText} setSearchText={setSearchText} />

                <button className={styles.reset_form}>
                  <Reset />
                  Reset
                </button>

                <button onClick={() => setIsOpen(true)} className={styles.filtersToggle}>
                  <Filter />
                </button>
              </div>

              <div className={styles.filterItems}>
                <Dropdown
                  title="Country"
                  setItem={setCountry}
                  setOffset={setOffset}
                  items={locations}
                  isSearch={true}
                />
                <Dropdown
                  title="Category"
                  setItem={setCategory}
                  setOffset={setOffset}
                  items={companies}
                  isSearch={true}
                />
              </div>
              <div className={styles.filterItems}>{/* <Slider /> */}</div>
            </div>

            <div className={styles.container}>
              <div className={styles.container__table}>
                {profiles?.length > 0 && (
                  <Table
                    items={profiles}
                    headersEnums={GoogleTableEnum}
                    parentRoute="/dashboard/search/linkedin"
                  />
                )}
                {loading && <Table items={profiles} headersEnums={GoogleTableEnum} loading />}
                {profiles?.length === 0 && <div>No Data Found</div>}
              </div>

              <div className={styles.container__pagination}>
                <Pagination total={total} setOffset={setOffset} offset={offset} />
              </div>
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </div>

      {/* filter modal */}
      <Modal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <div className={styles.edit_filters}>
          <div className={styles.search_wrap}>
            <SearchBox searchText={searchText} setSearchText={setSearchText} />
            <button className={`${styles.reset_form} ${styles.reset_form_modal}`}>
              <Reset />
            </button>
          </div>
          <h3>Edit Filters</h3>
          <div className={styles.filterItems}>
            <Dropdown
              title="Country"
              setItem={setCountry}
              setOffset={setOffset}
              items={[]}
              isSearch={true}
            />
            <Dropdown
              title="Category"
              setItem={setCategory}
              setOffset={setOffset}
              items={[]}
              isSearch={true}
            />
          </div>
          {/* <div className="text-center">
            <button type="submit" className="btn_fill_secondary">
              Apply Filter
            </button>
          </div> */}
        </div>
      </Modal>
    </>
  );
}
