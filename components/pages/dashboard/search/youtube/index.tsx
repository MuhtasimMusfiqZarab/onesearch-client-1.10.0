import React, { useState } from 'react';
import Modal from 'components/general/modal';
import { Filter, CloseLite, Reset } from 'components/_icons';
import { Pagination, Table, Dropdown, Tab, SearchBox, Loader, Slider } from 'components/general';
import { YoutubeTableEnum } from 'components/utils/enum';
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
      <div className={styles.container__element_inner}>
        <Tab />
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
                  title="Category"
                  setItem={setCategory}
                  setOffset={setOffset}
                  items={categories}
                  isSearch={true}
                />

                <Dropdown
                  title="Countries"
                  setItem={setLocation}
                  setOffset={setOffset}
                  items={countries}
                  isSearch={true}
                />
              </div>
              {/* <div className={styles.filterItems}>
              <Slider />
            </div> */}
            </div>

            <div className={styles.container}>
              <div className={styles.container__table}>
                {channels?.length > 0 && <Table items={channels} headersEnums={YoutubeTableEnum} />}
                {loading && <Table items={channels} headersEnums={YoutubeTableEnum} loading />}
                {channels?.length === 0 && <div>No Data Found</div>}
              </div>

              <div className={styles.container__pagination}>
                <Pagination total={total} setOffset={setOffset} offset={offset} />
              </div>
            </div>
          </div>
        ):
        <div>
          Please Login to get access
        </div>
        }
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
              title="Category"
              setItem={setCategory}
              setOffset={setOffset}
              items={categories}
              isSearch={true}
              isInline={true}
            />

            <Dropdown
              title="Countries"
              setItem={setLocation}
              setOffset={setOffset}
              items={countries}
              isSearch={true}
              isInline={true}
            />

            <Dropdown
              title="Year"
              setItem={setLocation}
              setOffset={setOffset}
              items={countries}
              isSearch={true}
              isInline={true}
            />

            <Dropdown
              title="Subscriber"
              setItem={setLocation}
              setOffset={setOffset}
              items={countries}
              isSearch={true}
              isInline={true}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn_fill_secondary">
              Apply Filter
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
