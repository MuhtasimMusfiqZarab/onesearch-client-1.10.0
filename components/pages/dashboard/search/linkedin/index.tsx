import React, { useState } from 'react';
import Modal from 'components/general/modal';
import { Filter, CloseLite, Reset } from 'components/_icons';
import { IYoutubeChannel } from 'components/utils/interfaces';
import { Pagination, Table, Dropdown, Tab, SearchBox, Loader, Slider } from 'components/general';
import { LinkedinTableEnum } from 'components/utils/enum';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';
import { useLinkedinProfiles } from 'components/_context/linkedin';

import { searchNavElements } from 'components/utils/resolver/navigation/tab';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();
  const {
    profiles,
    setOffset,
    offset,
    refetch,
    setTitle,
    setLocation,
    setCompany,
    loading,
    total,
    searchText,
    setSearchText
  } = useLinkedinProfiles();
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
                  title="Title"
                  setItem={setTitle}
                  setOffset={setOffset}
                  items={[]}
                  isSearch={true}
                />

                <Dropdown
                  title="Location"
                  setItem={setLocation}
                  setOffset={setOffset}
                  items={[]}
                  isSearch={true}
                />
                <Dropdown
                  title="Company"
                  setItem={setCompany}
                  setOffset={setOffset}
                  items={[]}
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
                    headersEnums={LinkedinTableEnum}
                    parentRoute="/dashboard/search/linkedin"
                  />
                )}
                {loading && <Table items={profiles} headersEnums={LinkedinTableEnum} loading />}
                {profiles?.length === 0 && <div>No Data Found</div>}
              </div>

              <div className={styles.container__pagination}>
                <Pagination total={total} setOffset={setOffset} offset={offset} />
              </div>
            </div>
          </div>
        ) : (
          <div>Please Login to get access</div>
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
              title="Title"
              setItem={setTitle}
              setOffset={setOffset}
              items={[]}
              isSearch={true}
            />

            <Dropdown
              title="Location"
              setItem={setLocation}
              setOffset={setOffset}
              items={[]}
              isSearch={true}
            />
            <Dropdown
              title="Company"
              setItem={setCompany}
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
